import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

// Clerk's isLoaded stays false forever if Clerk fails to reach its servers
// (e.g. production keys used from a domain that isn't the verified one) —
// <SignedIn>/<SignedOut> render nothing in that case, silently hiding the
// whole auth UI with no visible button and no explanation. This falls back
// to "assume signed out" after a short timeout so a Sign In button always
// appears, even when Clerk itself can't connect.
export function useAuthReady(timeoutMs = 4000) {
  const { isLoaded, isSignedIn } = useAuth();
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (isLoaded) return;
    const t = setTimeout(() => setTimedOut(true), timeoutMs);
    return () => clearTimeout(t);
  }, [isLoaded, timeoutMs]);

  return {
    ready: isLoaded || timedOut,
    isSignedIn: isLoaded ? !!isSignedIn : false,
    connected: isLoaded,
  };
}
