import {
  contactSchema,
  jobApplicationSchema,
  ALLOWED_RESUME_EXT,
  ALLOWED_RESUME_MIME,
  MAX_RESUME_BYTES,
} from "./schema";
import {
  arrayBufferToBase64,
  sendInquiryEmail,
  sendJobApplicationEmail,
  sendEnrollmentEmail,
  type ResendAttachment,
} from "./email";
import { isRateLimited } from "./ratelimit";
import { findCourse } from "./courses";
import { getClerkUserId } from "./clerk";
import { createRazorpayOrder, verifyRazorpaySignature } from "./razorpay";

export interface Env {
  RESEND_API_KEY: string; // secret — set via `wrangler secret put RESEND_API_KEY`
  ALLOWED_ORIGINS: string; // comma-separated
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
  RATE_LIMIT_KV: KVNamespace;
  DB: D1Database;
  CLERK_SECRET_KEY: string; // secret
  RAZORPAY_KEY_ID: string; // secret (not sensitive, but kept alongside the actual secret)
  RAZORPAY_KEY_SECRET: string; // secret
  ADMIN_TOKEN: string; // secret — set via `wrangler secret put ADMIN_TOKEN`
}

function jsonResponse(body: unknown, status: number, headers: HeadersInit): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, "Content-Type": "application/json" },
  });
}

function corsHeaders(origin: string | null, allowedOrigins: string[]): HeadersInit {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    Vary: "Origin",
  };
  // Only ever echo back an origin that's actually on the allow-list — never "*".
  if (origin && allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

function fileExtension(filename: string): string {
  const dot = filename.lastIndexOf(".");
  return dot === -1 ? "" : filename.slice(dot).toLowerCase();
}

/** Validates + extracts the optional resume attachment from a submitted form. Returns
 * an error response (to short-circuit) or the attachment (possibly undefined). */
async function extractResume(
  form: FormData,
  cors: HeadersInit,
): Promise<{ error: Response } | { attachment: ResendAttachment | undefined }> {
  const resume = form.get("resume");
  if (!(resume instanceof File) || resume.size === 0) return { attachment: undefined };

  if (resume.size > MAX_RESUME_BYTES) {
    return { error: jsonResponse({ error: "Resume must be under 5MB" }, 400, cors) };
  }
  const ext = fileExtension(resume.name);
  if (!ALLOWED_RESUME_EXT.has(ext) || !ALLOWED_RESUME_MIME.has(resume.type)) {
    return { error: jsonResponse({ error: "Resume must be a PDF, DOC, or DOCX file" }, 400, cors) };
  }
  return {
    attachment: { filename: resume.name, content: arrayBufferToBase64(await resume.arrayBuffer()) },
  };
}

/** POST /courses/order — creates a Razorpay order for a course. Requires a
 * Clerk session token; the price is always looked up server-side by course
 * id, never trusted from the request body. */
async function handleCreateOrder(
  request: Request,
  env: Env,
  cors: HeadersInit,
): Promise<Response> {
  const userId = await getClerkUserId(request, env.CLERK_SECRET_KEY);
  if (!userId) return jsonResponse({ error: "Sign in required" }, 401, cors);

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const courseId = typeof body?.courseId === "string" ? body.courseId : null;
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
  const education = typeof body?.education === "string" ? body.education.trim() : "";
  const purpose = typeof body?.purpose === "string" ? body.purpose.trim() : "";
  if (!courseId || !name || !email || !phone || !education || !purpose) {
    return jsonResponse(
      { error: "Missing courseId, name, email, phone, education, or purpose" },
      400,
      cors,
    );
  }

  const course = findCourse(courseId);
  if (!course) return jsonResponse({ error: "Unknown course" }, 404, cors);

  const enrollmentId = crypto.randomUUID();
  const order = await createRazorpayOrder({
    keyId: env.RAZORPAY_KEY_ID,
    keySecret: env.RAZORPAY_KEY_SECRET,
    amountInr: course.priceInr,
    receipt: enrollmentId,
    notes: { courseId: course.id, clerkUserId: userId },
  });
  if (!order.ok) {
    console.error("Razorpay order error:", order.status, order.body);
    return jsonResponse({ error: "Failed to start checkout. Please try again shortly." }, 502, cors);
  }

  await env.DB.prepare(
    `INSERT INTO enrollments
      (id, course_id, course_title, amount_inr, clerk_user_id, name, email, phone, education, purpose, razorpay_order_id, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'created')`,
  )
    .bind(
      enrollmentId,
      course.id,
      course.title,
      course.priceInr,
      userId,
      name,
      email,
      phone,
      education,
      purpose,
      order.orderId,
    )
    .run();

  return jsonResponse(
    {
      orderId: order.orderId,
      amountInr: course.priceInr,
      keyId: env.RAZORPAY_KEY_ID,
      courseTitle: course.title,
    },
    200,
    cors,
  );
}

/** POST /courses/verify — verifies a completed Razorpay checkout and marks
 * the enrollment paid. This signature check is the only proof of payment;
 * nothing is ever marked paid without it passing. */
async function handleVerifyPayment(
  request: Request,
  env: Env,
  cors: HeadersInit,
): Promise<Response> {
  const userId = await getClerkUserId(request, env.CLERK_SECRET_KEY);
  if (!userId) return jsonResponse({ error: "Sign in required" }, 401, cors);

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const orderId = typeof body?.razorpay_order_id === "string" ? body.razorpay_order_id : null;
  const paymentId = typeof body?.razorpay_payment_id === "string" ? body.razorpay_payment_id : null;
  const signature = typeof body?.razorpay_signature === "string" ? body.razorpay_signature : null;
  if (!orderId || !paymentId || !signature) {
    return jsonResponse({ error: "Missing payment verification fields" }, 400, cors);
  }

  const valid = await verifyRazorpaySignature({
    keySecret: env.RAZORPAY_KEY_SECRET,
    orderId,
    paymentId,
    signature,
  });
  if (!valid) return jsonResponse({ error: "Payment verification failed" }, 400, cors);

  const enrollment = await env.DB.prepare(
    `SELECT * FROM enrollments WHERE razorpay_order_id = ? AND clerk_user_id = ?`,
  )
    .bind(orderId, userId)
    .first<{
      id: string;
      course_title: string;
      amount_inr: number;
      name: string;
      email: string;
      phone: string | null;
      education: string | null;
      purpose: string | null;
    }>();
  if (!enrollment) return jsonResponse({ error: "Enrollment not found" }, 404, cors);

  await env.DB.prepare(
    `UPDATE enrollments SET status = 'paid', razorpay_payment_id = ?, updated_at = datetime('now') WHERE id = ?`,
  )
    .bind(paymentId, enrollment.id)
    .run();

  const emailResult = await sendEnrollmentEmail({
    apiKey: env.RESEND_API_KEY,
    from: env.CONTACT_FROM_EMAIL,
    to: env.CONTACT_TO_EMAIL,
    data: {
      name: enrollment.name,
      email: enrollment.email,
      phone: enrollment.phone ?? "",
      education: enrollment.education ?? "",
      purpose: enrollment.purpose ?? "",
      courseTitle: enrollment.course_title,
      amountInr: enrollment.amount_inr,
      paymentId,
    },
  });
  if (!emailResult.ok) {
    // Payment already succeeded and is recorded — a failed notification email
    // shouldn't fail the response to the student.
    console.error("Enrollment email error:", emailResult.status, emailResult.body);
  }

  return jsonResponse({ ok: true }, 200, cors);
}

/** GET /admin/data — everything stored so far (enrollments, inquiries, job
 * applications), gated behind a single shared token rather than left open
 * like the old /leads-api this replaces. */
async function handleAdminData(request: Request, env: Env, cors: HeadersInit): Promise<Response> {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token || token !== env.ADMIN_TOKEN) {
    return jsonResponse({ error: "Unauthorized" }, 401, cors);
  }

  const [enrollments, inquiries, jobApplications] = await Promise.all([
    env.DB.prepare(`SELECT * FROM enrollments ORDER BY created_at DESC LIMIT 300`).all(),
    env.DB.prepare(`SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 300`).all(),
    env.DB.prepare(`SELECT * FROM job_applications ORDER BY created_at DESC LIMIT 300`).all(),
  ]);

  return jsonResponse(
    {
      enrollments: enrollments.results,
      inquiries: inquiries.results,
      jobApplications: jobApplications.results,
    },
    200,
    cors,
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const allowedOrigins = env.ALLOWED_ORIGINS.split(",").map((s) => s.trim());
    const origin = request.headers.get("Origin");
    const cors = corsHeaders(origin, allowedOrigins);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (!origin || !allowedOrigins.includes(origin)) {
      return jsonResponse({ error: "Forbidden origin" }, 403, cors);
    }

    const url = new URL(request.url);

    if (url.pathname === "/admin/data") {
      if (request.method !== "GET") return jsonResponse({ error: "Method not allowed" }, 405, cors);
      return handleAdminData(request, env, cors);
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405, cors);
    }

    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
    if (await isRateLimited(env.RATE_LIMIT_KV, ip)) {
      return jsonResponse({ error: "Too many requests. Please try again in a minute." }, 429, cors);
    }

    if (url.pathname === "/courses/order") return handleCreateOrder(request, env, cors);
    if (url.pathname === "/courses/verify") return handleVerifyPayment(request, env, cors);

    if (url.pathname !== "/" && url.pathname !== "/contact" && url.pathname !== "/apply") {
      return jsonResponse({ error: "Not found" }, 404, cors);
    }

    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return jsonResponse({ error: "Invalid form submission" }, 400, cors);
    }

    // Honeypot: bots fill every field including hidden ones. Real users never see this
    // field, so any non-empty value here means silently drop the submission.
    const honeypot = form.get("website");
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      return jsonResponse({ ok: true }, 200, cors);
    }

    const resumeResult = await extractResume(form, cors);
    if ("error" in resumeResult) return resumeResult.error;
    const attachment = resumeResult.attachment;

    if (url.pathname === "/apply") {
      const raw = {
        fullName: form.get("fullName"),
        gender: form.get("gender"),
        dob: form.get("dob"),
        email: form.get("email"),
        mobile: form.get("mobile"),
        city: form.get("city"),
        currentCtc: form.get("currentCtc") ?? "",
        expectedCtc: form.get("expectedCtc") ?? "",
        company: form.get("company") ?? "",
        experience: form.get("experience") ?? "",
        education: form.get("education"),
      };
      const parsed = jobApplicationSchema.safeParse(raw);
      if (!parsed.success) {
        return jsonResponse(
          { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
          400,
          cors,
        );
      }

      // Store first — this is the durable record. Email is a best-effort
      // notification on top of it, so a Resend outage never loses a
      // submission the way it silently did before this table existed.
      try {
        await env.DB.prepare(
          `INSERT INTO job_applications
            (id, full_name, gender, dob, email, mobile, city, current_ctc, expected_ctc, company, experience, education, resume_filename)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
          .bind(
            crypto.randomUUID(),
            parsed.data.fullName,
            parsed.data.gender,
            parsed.data.dob,
            parsed.data.email,
            parsed.data.mobile,
            parsed.data.city,
            parsed.data.currentCtc || null,
            parsed.data.expectedCtc || null,
            parsed.data.company || null,
            parsed.data.experience || null,
            parsed.data.education,
            attachment?.filename ?? null,
          )
          .run();
      } catch (err) {
        console.error("D1 insert error (job_applications):", err);
        return jsonResponse({ error: "Failed to save application. Please try again shortly." }, 500, cors);
      }

      const result = await sendJobApplicationEmail({
        apiKey: env.RESEND_API_KEY,
        from: env.CONTACT_FROM_EMAIL,
        to: env.CONTACT_TO_EMAIL,
        data: parsed.data,
        attachment,
      });
      if (!result.ok) {
        // Already saved above — a failed notification email shouldn't tell
        // the applicant their submission was lost.
        console.error("Resend API error:", result.status, result.body);
      }

      return jsonResponse({ ok: true }, 200, cors);
    }

    const raw = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone") ?? "",
      company: form.get("company"),
      reason: form.get("reason"),
      roleNeeded: form.get("roleNeeded") ?? undefined,
      headcount: form.get("headcount") ?? undefined,
      message: form.get("message"),
    };
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      return jsonResponse(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        400,
        cors,
      );
    }

    // Store first — durable record independent of email delivery.
    try {
      await env.DB.prepare(
        `INSERT INTO inquiries
          (id, name, email, phone, company, reason, role_needed, headcount, message)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
        .bind(
          crypto.randomUUID(),
          parsed.data.name,
          parsed.data.email,
          parsed.data.phone || null,
          parsed.data.company,
          parsed.data.reason,
          parsed.data.roleNeeded || null,
          parsed.data.headcount || null,
          parsed.data.message,
        )
        .run();
    } catch (err) {
      console.error("D1 insert error (inquiries):", err);
      return jsonResponse({ error: "Failed to save inquiry. Please try again shortly." }, 500, cors);
    }

    const result = await sendInquiryEmail({
      apiKey: env.RESEND_API_KEY,
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      data: parsed.data,
      attachment,
    });
    if (!result.ok) {
      console.error("Resend API error:", result.status, result.body);
    }

    return jsonResponse({ ok: true }, 200, cors);
  },
} satisfies ExportedHandler<Env>;
