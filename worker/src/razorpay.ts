// Direct REST calls to Razorpay's API — no SDK, same pattern as email.ts's
// direct calls to Resend. Keeps the Worker's dependency footprint small.

export async function createRazorpayOrder(params: {
  keyId: string;
  keySecret: string;
  amountInr: number;
  receipt: string;
  notes?: Record<string, string>;
}): Promise<{ ok: true; orderId: string } | { ok: false; status: number; body: string }> {
  const auth = btoa(`${params.keyId}:${params.keySecret}`);

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: Math.round(params.amountInr * 100), // Razorpay expects paise
      currency: "INR",
      receipt: params.receipt,
      notes: params.notes ?? {},
    }),
  });

  if (!res.ok) {
    return { ok: false, status: res.status, body: await res.text() };
  }
  const data = (await res.json()) as { id: string };
  return { ok: true, orderId: data.id };
}

/** Verifies a Razorpay checkout success callback's signature — this is the
 * only proof that a payment actually completed; never mark an order paid
 * without this passing. */
export async function verifyRazorpaySignature(params: {
  keySecret: string;
  orderId: string;
  paymentId: string;
  signature: string;
}): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(params.keySecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const payload = `${params.orderId}|${params.paymentId}`;
  const sigBuffer = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const expected = Array.from(new Uint8Array(sigBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return expected === params.signature;
}
