import { useState } from "react";
import { Check, Loader2, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SignInButton } from "@clerk/clerk-react";
import type { Course } from "@/data/courses";
import { CLERK_ENABLED } from "@/lib/clerk";
import { useEnrollment } from "@/hooks/useEnrollment";
import { useAuthReady } from "@/hooks/useAuthReady";

// Only ever mounted when CLERK_ENABLED is true (see CourseEnrollPanel below)
// — safe to call Clerk hooks unconditionally here, since a ClerkProvider
// ancestor is guaranteed to exist in that case.
function EnrollControls({ course }: { course: Course }) {
  const { enroll, loading, status, message } = useEnrollment();
  const { ready, isSignedIn, connected } = useAuthReady();
  const [unavailableNotice, setUnavailableNotice] = useState(false);

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm font-semibold text-lime">
        <Check className="h-4 w-4" /> {message}
      </div>
    );
  }

  if (!ready) return null;

  // Clerk failed to connect (e.g. production keys used from a domain that
  // isn't the verified one) — still show a real button rather than nothing,
  // just explain it can't work from here right now.
  if (!connected) {
    return (
      <div>
        <button
          onClick={() => {
            setUnavailableNotice(true);
            setTimeout(() => setUnavailableNotice(false), 5000);
          }}
          className="w-full inline-flex items-center justify-center bg-[#10b981] text-white px-6 py-4 rounded-xl font-semibold shadow-md transition-all active:scale-[0.98]"
        >
          Sign in to enroll <ArrowUpRight className="h-4 w-4 ml-2" />
        </button>
        {unavailableNotice && (
          <p className="mt-2 text-xs text-destructive text-center">
            Sign-in isn't reachable from this preview link right now — try again on the live domain.
          </p>
        )}
      </div>
    );
  }

  if (isSignedIn) {
    return (
      <div>
        <button
          onClick={() => enroll(course)}
          disabled={loading}
          className="w-full inline-flex items-center justify-center bg-[#10b981] text-white px-6 py-4 rounded-xl font-semibold shadow-md transition-all active:scale-[0.98] disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing...
            </>
          ) : (
            <>
              Enroll &amp; pay <ArrowUpRight className="h-4 w-4 ml-2" />
            </>
          )}
        </button>
        {status === "error" && (
          <p className="mt-2 text-xs text-destructive text-center">{message}</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <SignInButton mode="modal">
        <button className="w-full inline-flex items-center justify-center bg-[#10b981] text-white px-6 py-4 rounded-xl font-semibold shadow-md transition-all active:scale-[0.98]">
          Sign in to enroll <ArrowUpRight className="h-4 w-4 ml-2" />
        </button>
      </SignInButton>
      <p className="mt-2 text-xs text-muted-foreground text-center">
        New here? You can create an account from the same screen.
      </p>
    </div>
  );
}

// The only gate that decides whether Clerk-dependent code ever mounts.
// CLERK_ENABLED is exactly when __root.tsx has wrapped the app in
// <ClerkProvider> — so EnrollControls (and anything using Clerk hooks or
// components) is only ever rendered when that provider actually exists.
export function CourseEnrollPanel({ course }: { course: Course }) {
  if (!CLERK_ENABLED) {
    return (
      <p className="text-sm text-muted-foreground">
        Enrollment isn't open yet.{" "}
        <Link to="/contact" className="text-lime font-semibold hover:underline">
          Contact us
        </Link>{" "}
        to reserve a seat.
      </p>
    );
  }
  return <EnrollControls course={course} />;
}
