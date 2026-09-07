import { useState, type FormEvent } from "react";
import { Check, Loader2, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SignInButton, useUser } from "@clerk/clerk-react";
import type { Course } from "@/data/courses";
import { CLERK_ENABLED } from "@/lib/clerk";
import { useEnrollment } from "@/hooks/useEnrollment";
import { useAuthReady } from "@/hooks/useAuthReady";

type EnrollFn = ReturnType<typeof useEnrollment>["enroll"];

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lime/50";

const PURPOSE_OPTIONS = [
  "Get my first job",
  "Switch careers",
  "Upskill for my current job",
  "Personal interest",
  "Other",
];

// Collected once, right before payment — name/phone/education/purpose, so
// there's real context on who enrolled and why, not just a name and email.
function IntakeForm({
  course,
  enroll,
  loading,
  status,
  message,
}: {
  course: Course;
  enroll: EnrollFn;
  loading: boolean;
  status: "idle" | "success" | "error";
  message: string;
}) {
  const { user } = useUser();
  const [name, setName] = useState(user?.fullName || user?.username || "");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [purpose, setPurpose] = useState("");
  const email = user?.primaryEmailAddress?.emailAddress || "";

  const canSubmit = name.trim() && phone.trim() && education.trim() && purpose.trim();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit || loading) return;
    await enroll(course, {
      name: name.trim(),
      phone: phone.trim(),
      education: education.trim(),
      purpose: purpose.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="text-xs text-muted-foreground mb-1 block">Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="text-xs text-muted-foreground mb-1 block">Email</label>
        <input value={email} readOnly disabled className={`${inputClass} opacity-60`} />
      </div>
      <div>
        <label className="text-xs text-muted-foreground mb-1 block">Phone number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className={inputClass}
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label className="text-xs text-muted-foreground mb-1 block">Highest education</label>
        <input
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          required
          className={inputClass}
          placeholder="e.g. B.Com, 12th pass, MBA"
        />
      </div>
      <div>
        <label className="text-xs text-muted-foreground mb-1 block">Why this course?</label>
        <select
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          required
          className={inputClass}
        >
          <option value="" disabled>
            Select one
          </option>
          {PURPOSE_OPTIONS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={!canSubmit || loading}
        className="w-full inline-flex items-center justify-center bg-[#10b981] text-white px-6 py-4 rounded-xl font-semibold shadow-md transition-all active:scale-[0.98] disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing...
          </>
        ) : (
          <>
            Next: Pay <ArrowUpRight className="h-4 w-4 ml-2" />
          </>
        )}
      </button>
      {status === "error" && <p className="text-xs text-destructive text-center">{message}</p>}
    </form>
  );
}

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
      <IntakeForm course={course} enroll={enroll} loading={loading} status={status} message={message} />
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
