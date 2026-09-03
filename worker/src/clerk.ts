import { verifyToken } from "@clerk/backend";

/** Verifies the Clerk session token from an Authorization: Bearer header.
 * Returns the signed-in user's Clerk id, or null if missing/invalid. */
export async function getClerkUserId(
  request: Request,
  secretKey: string,
): Promise<string | null> {
  const header = request.headers.get("Authorization");
  if (!header?.startsWith("Bearer ")) return null;
  const token = header.slice("Bearer ".length);

  try {
    const payload = await verifyToken(token, { secretKey });
    return payload.sub;
  } catch {
    return null;
  }
}
