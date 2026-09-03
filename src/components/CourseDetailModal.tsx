import { motion, AnimatePresence } from "framer-motion";
import { Clock, Check, X, Loader2, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import type { Course } from "@/data/courses";
import { CLERK_ENABLED } from "@/lib/clerk";
import { useEnrollment } from "@/hooks/useEnrollment";

// Only ever mounted when CLERK_ENABLED is true (see EnrollArea below) — safe
// to call Clerk hooks unconditionally here, since a ClerkProvider ancestor
// is guaranteed to exist in that case.
function EnrollControls({ course }: { course: Course }) {
  const { enroll, loading, status, message } = useEnrollment();

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm font-semibold text-lime">
        <Check className="h-4 w-4" /> {message}
      </div>
    );
  }

  return (
    <div>
      <SignedOutGate>
        <button
          onClick={() => enroll(course)}
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-[#10b981] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all active:scale-[0.98] disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing...
            </>
          ) : (
            <>
              Enroll &amp; pay ₹{course.priceInr.toLocaleString("en-IN")}{" "}
              <ArrowUpRight className="h-4 w-4 ml-2" />
            </>
          )}
        </button>
      </SignedOutGate>
      {status === "error" && <p className="mt-2 text-xs text-destructive">{message}</p>}
    </div>
  );
}

// The only gate that decides whether Clerk-dependent code ever mounts.
// CLERK_ENABLED is exactly when __root.tsx has wrapped the app in
// <ClerkProvider> — so EnrollControls (and anything using Clerk hooks or
// components) is only ever rendered when that provider actually exists.
function EnrollArea({ course }: { course: Course }) {
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

// SignedIn/SignedOut/SignInButton need a ClerkProvider ancestor to render.
function SignedOutGate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="w-full sm:w-auto inline-flex items-center justify-center bg-[#10b981] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all active:scale-[0.98]">
            Sign in to enroll <ArrowUpRight className="h-4 w-4 ml-2" />
          </button>
        </SignInButton>
        <p className="mt-2 text-xs text-muted-foreground">
          New here? You can create an account from the same screen.
        </p>
      </SignedOut>
    </>
  );
}

export function CourseDetailModal({
  course,
  onClose,
}: {
  course: Course | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {course && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[95] mx-auto max-w-xl max-h-[88vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label={course.title}
          >
            <div className="glass-strong rounded-3xl p-6 md:p-9 relative overflow-hidden">
              <button
                aria-label="Close"
                onClick={onClose}
                className="absolute top-5 right-5 h-9 w-9 rounded-full grid place-items-center hover:bg-black/5 transition"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="text-xs uppercase tracking-[0.3em] text-lime mb-2">/ course</div>
              <h3 className="font-display text-2xl md:text-3xl tracking-tight pr-8">
                {course.title}
              </h3>
              <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-lime" /> {course.duration}
                </span>
                <span className="font-display text-lg text-foreground">
                  ₹{course.priceInr.toLocaleString("en-IN")}
                </span>
              </div>

              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                {course.summary}
              </p>

              {course.syllabus.length > 0 && (
                <>
                  <h4 className="font-display text-lg mt-6 mb-3">What you'll learn</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {course.syllabus.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime mt-2 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-7 pt-6 border-t border-border">
                <EnrollArea course={course} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
