import { useState } from "react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { UserCircle2 } from "lucide-react";
import { useAuthReady } from "@/hooks/useAuthReady";

const userButtonAppearance = {
  elements: { footer: "hidden", userButtonPopoverFooter: "hidden" },
};

function UnavailableNotice({ small }: { small?: boolean }) {
  const [msg, setMsg] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => {
          setMsg(true);
          setTimeout(() => setMsg(false), 4000);
        }}
        className={
          small
            ? "px-4 py-3 rounded-xl text-base text-foreground hover:bg-black/5 transition flex items-center gap-2 text-left w-full"
            : "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-black/5 transition"
        }
      >
        <UserCircle2 className="h-4 w-4" /> Sign in
      </button>
      {msg && (
        <div className="absolute top-full mt-2 left-0 right-0 md:right-auto md:w-64 z-50 text-xs bg-slate-950 text-white rounded-xl px-3 py-2 shadow-lg">
          Sign-in isn't reachable from this preview link right now — try again on the live domain.
        </div>
      )}
    </div>
  );
}

// Only ever mounted when CLERK_ENABLED is true, so ClerkProvider always
// exists here — safe to call useAuth() unconditionally via useAuthReady.
export function DesktopAuthControl() {
  const { ready, isSignedIn, connected } = useAuthReady();
  if (!ready) return null;
  if (!connected) return <UnavailableNotice />;
  if (isSignedIn) return <UserButton appearance={userButtonAppearance} />;
  return (
    <SignInButton mode="modal">
      <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-black/5 transition">
        <UserCircle2 className="h-4 w-4" /> Sign in
      </button>
    </SignInButton>
  );
}

export function MobileAuthControl() {
  const { ready, isSignedIn, connected } = useAuthReady();
  if (!ready) return null;
  if (!connected) return <UnavailableNotice small />;
  if (isSignedIn) {
    return (
      <div className="flex items-center gap-3 mb-4">
        <UserButton appearance={userButtonAppearance} />
        <span className="text-sm text-muted-foreground">Your account</span>
      </div>
    );
  }
  return (
    <SignInButton mode="modal">
      <button className="px-4 py-3 rounded-xl text-base text-foreground hover:bg-black/5 transition flex items-center gap-2 text-left w-full">
        <UserCircle2 className="h-4 w-4" /> Sign in
      </button>
    </SignInButton>
  );
}
