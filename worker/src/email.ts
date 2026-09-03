import { REASONS, type ContactData, type JobApplicationData } from "./schema";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderInquiryEmailHtml(data: ContactData): string {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Company", data.company],
    ["Reason", REASONS[data.reason]],
  ];
  if (data.roleNeeded) rows.push(["Role(s) needed", data.roleNeeded]);
  if (data.headcount) rows.push(["Number of hires", data.headcount]);
  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#647067;font-size:13px;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:4px 0;font-size:14px;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="font-family:Arial,Helvetica,sans-serif;color:#14241b;">
    <h2 style="margin:0 0 16px;">New inquiry — ${escapeHtml(REASONS[data.reason])}</h2>
    <table cellpadding="0" cellspacing="0">${rowsHtml}</table>
    <p style="margin:16px 0 4px;color:#647067;font-size:13px;">Message</p>
    <p style="margin:0;white-space:pre-wrap;font-size:14px;">${escapeHtml(data.message)}</p>
  </body>
</html>`;
}

export function renderJobApplicationEmailHtml(data: JobApplicationData): string {
  const rows: [string, string][] = [
    ["Full name", data.fullName],
    ["Gender", data.gender],
    ["Date of birth", data.dob],
    ["Email", data.email],
    ["Mobile", data.mobile],
    ["City", data.city],
    ["Current CTC", data.currentCtc || "—"],
    ["Expected CTC", data.expectedCtc || "—"],
    ["Current/last company", data.company || "—"],
    ["Experience", data.experience || "—"],
    ["Education", data.education],
  ];
  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#647067;font-size:13px;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:4px 0;font-size:14px;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="font-family:Arial,Helvetica,sans-serif;color:#14241b;">
    <h2 style="margin:0 0 16px;">New job application — ${escapeHtml(data.fullName)}</h2>
    <table cellpadding="0" cellspacing="0">${rowsHtml}</table>
  </body>
</html>`;
}

export interface EnrollmentData {
  name: string;
  email: string;
  courseTitle: string;
  amountInr: number;
  paymentId: string;
}

export function renderEnrollmentEmailHtml(data: EnrollmentData): string {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Course", data.courseTitle],
    ["Amount paid", `₹${data.amountInr.toLocaleString("en-IN")}`],
    ["Razorpay payment ID", data.paymentId],
  ];
  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#647067;font-size:13px;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:4px 0;font-size:14px;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="font-family:Arial,Helvetica,sans-serif;color:#14241b;">
    <h2 style="margin:0 0 16px;">New paid course enrollment — ${escapeHtml(data.courseTitle)}</h2>
    <table cellpadding="0" cellspacing="0">${rowsHtml}</table>
  </body>
</html>`;
}

export async function sendEnrollmentEmail(params: {
  apiKey: string;
  from: string;
  to: string;
  data: EnrollmentData;
}): Promise<{ ok: true } | { ok: false; status: number; body: string }> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: params.from,
      to: [params.to],
      reply_to: params.data.email,
      subject: `New paid enrollment — ${params.data.courseTitle} — ${params.data.name}`,
      html: renderEnrollmentEmailHtml(params.data),
    }),
  });

  if (!res.ok) {
    return { ok: false, status: res.status, body: await res.text() };
  }
  return { ok: true };
}

export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

export interface ResendAttachment {
  filename: string;
  content: string; // base64
}

export async function sendInquiryEmail(params: {
  apiKey: string;
  from: string;
  to: string;
  data: ContactData;
  attachment?: ResendAttachment;
}): Promise<{ ok: true } | { ok: false; status: number; body: string }> {
  const payload: Record<string, unknown> = {
    from: params.from,
    to: [params.to],
    reply_to: params.data.email,
    subject: `New inquiry — ${REASONS[params.data.reason]} — ${params.data.name}`,
    html: renderInquiryEmailHtml(params.data),
  };
  if (params.attachment) {
    payload.attachments = [params.attachment];
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return { ok: false, status: res.status, body: await res.text() };
  }
  return { ok: true };
}

export async function sendJobApplicationEmail(params: {
  apiKey: string;
  from: string;
  to: string;
  data: JobApplicationData;
  attachment?: ResendAttachment;
}): Promise<{ ok: true } | { ok: false; status: number; body: string }> {
  const payload: Record<string, unknown> = {
    from: params.from,
    to: [params.to],
    reply_to: params.data.email,
    subject: `New job application — ${params.data.fullName}`,
    html: renderJobApplicationEmailHtml(params.data),
  };
  if (params.attachment) {
    payload.attachments = [params.attachment];
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return { ok: false, status: res.status, body: await res.text() };
  }
  return { ok: true };
}
