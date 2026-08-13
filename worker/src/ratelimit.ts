// Simple fixed-window rate limiter backed by Workers KV. Not perfectly atomic
// across simultaneous requests at the edge, but that's fine here — this is a
// deterrent against basic abuse, not the primary defense (the honeypot field
// is). Good enough for a low-traffic contact form.
const WINDOW_SECONDS = 60;
const MAX_REQUESTS_PER_WINDOW = 5;

export async function isRateLimited(kv: KVNamespace, ip: string): Promise<boolean> {
  const window = Math.floor(Date.now() / 1000 / WINDOW_SECONDS);
  const key = `rl:${ip}:${window}`;

  const current = await kv.get(key);
  const count = current ? Number.parseInt(current, 10) : 0;

  if (count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  await kv.put(key, String(count + 1), { expirationTtl: WINDOW_SECONDS * 2 });
  return false;
}
