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
  type ResendAttachment,
} from "./email";
import { isRateLimited } from "./ratelimit";

export interface Env {
  RESEND_API_KEY: string; // secret — set via `wrangler secret put RESEND_API_KEY`
  ALLOWED_ORIGINS: string; // comma-separated
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
  RATE_LIMIT_KV: KVNamespace;
}

function jsonResponse(body: unknown, status: number, headers: HeadersInit): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, "Content-Type": "application/json" },
  });
}

function corsHeaders(origin: string | null, allowedOrigins: string[]): HeadersInit {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
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

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405, cors);
    }

    const url = new URL(request.url);
    if (url.pathname !== "/" && url.pathname !== "/contact" && url.pathname !== "/apply") {
      return jsonResponse({ error: "Not found" }, 404, cors);
    }

    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
    if (await isRateLimited(env.RATE_LIMIT_KV, ip)) {
      return jsonResponse({ error: "Too many requests. Please try again in a minute." }, 429, cors);
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

      const result = await sendJobApplicationEmail({
        apiKey: env.RESEND_API_KEY,
        from: env.CONTACT_FROM_EMAIL,
        to: env.CONTACT_TO_EMAIL,
        data: parsed.data,
        attachment,
      });

      if (!result.ok) {
        console.error("Resend API error:", result.status, result.body);
        return jsonResponse({ error: "Failed to send. Please try again shortly." }, 502, cors);
      }
      return jsonResponse({ ok: true }, 200, cors);
    }

    const raw = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone") ?? "",
      company: form.get("company"),
      reason: form.get("reason"),
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

    const result = await sendInquiryEmail({
      apiKey: env.RESEND_API_KEY,
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      data: parsed.data,
      attachment,
    });

    if (!result.ok) {
      console.error("Resend API error:", result.status, result.body);
      return jsonResponse({ error: "Failed to send. Please try again shortly." }, 502, cors);
    }

    return jsonResponse({ ok: true }, 200, cors);
  },
} satisfies ExportedHandler<Env>;
