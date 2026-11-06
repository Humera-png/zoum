import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { isDiwaliActive, OFFER_ENDS_LABEL } from "@/lib/diwaliOffer";

// Festive Diwali touches: a string of twinkling lights across the top of the
// page and a small dismissible offer card. Both disappear after the offer
// ends (see src/lib/diwaliOffer.ts) and respect reduced-motion settings.

const BULB_COLORS = ["#FFB300", "#FF7043", "#FFD54F", "#F06292", "#1FCB6B"];
const SWAGS = 4; // how many dips the light string makes across the page
const BULBS_PER_SWAG = 7;
const SAG = 26; // px the string dips in the middle of each swag

function bulbs() {
  const out: { left: number; top: number; color: string; delay: number }[] = [];
  const total = SWAGS * BULBS_PER_SWAG;
  for (let i = 0; i < total; i++) {
    const frac = (i + 0.5) / total; // 0..1 across the page
    const inSwag = (frac * SWAGS) % 1; // 0..1 within one dip
    out.push({
      left: frac * 100,
      top: 6 + SAG * Math.sin(Math.PI * inSwag),
      color: BULB_COLORS[i % BULB_COLORS.length],
      delay: (i * 0.37) % 2.4,
    });
  }
  return out;
}

const STRING_PATH = Array.from({ length: SWAGS }, (_, s) => {
  const x0 = (s / SWAGS) * 100;
  const x1 = ((s + 1) / SWAGS) * 100;
  const mid = (x0 + x1) / 2;
  // quadratic curve whose midpoint sits SAG px below the ends (control = 2x sag)
  return `${s === 0 ? `M ${x0} 6` : ""} Q ${mid} ${6 + SAG * 2} ${x1} 6`;
}).join(" ");

export function Diya({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="diya-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFE082" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFB300" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="diya-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FF6F00" />
          <stop offset="60%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#FFF59D" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="16" r="16" fill="url(#diya-glow)" className="diwali-glow" />
      <path
        d="M32 4 C 27 12, 27 18, 32 22 C 37 18, 37 12, 32 4 Z"
        fill="url(#diya-flame)"
        className="diwali-flame"
      />
      <path d="M6 26 Q 32 50 58 26 Q 46 30 32 30 Q 18 30 6 26 Z" fill="#C8572A" />
      <path d="M6 26 Q 32 34 58 26" stroke="#F4A261" strokeWidth="2" fill="none" />
      <circle cx="20" cy="33" r="1.6" fill="#FFD54F" />
      <circle cx="32" cy="36" r="1.6" fill="#FFD54F" />
      <circle cx="44" cy="33" r="1.6" fill="#FFD54F" />
    </svg>
  );
}

const DISMISS_KEY = "zoum-diwali-card-dismissed";

export function DiwaliDecor() {
  const [active] = useState(() => isDiwaliActive());
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (!active) return;
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      /* storage blocked: just show the card */
    }
    // wait for the intro screen before sliding the card in
    const t = setTimeout(() => setShowCard(!dismissed), 4000);
    return () => clearTimeout(t);
  }, [active]);

  if (!active) return null;

  const dismiss = () => {
    setShowCard(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <style>{`
        @keyframes diwali-twinkle { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .45; transform: scale(.85); } }
        @keyframes diwali-flicker { 0%,100% { transform: scaleY(1) skewX(0deg); } 30% { transform: scaleY(1.08) skewX(-3deg); } 60% { transform: scaleY(.94) skewX(3deg); } }
        @keyframes diwali-pulse { 0%,100% { opacity: .8; } 50% { opacity: 1; } }
        @keyframes diwali-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        .diwali-bulb { animation: diwali-twinkle 2.4s ease-in-out infinite; }
        .diwali-flame { transform-origin: 32px 22px; animation: diwali-flicker 1.2s ease-in-out infinite; }
        .diwali-glow { animation: diwali-pulse 1.8s ease-in-out infinite; }
        .diwali-card { animation: diwali-in .5s cubic-bezier(.16,1,.3,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .diwali-bulb, .diwali-flame, .diwali-glow, .diwali-card { animation: none; }
        }
      `}</style>

      {/* String of lights across the top of the page (scrolls away with it) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-40 h-16 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 64"
          preserveAspectRatio="none"
        >
          <path
            d={STRING_PATH}
            stroke="#5D4037"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {bulbs().map((b, i) => (
          <span
            key={i}
            className="diwali-bulb absolute h-2.5 w-2.5 -translate-x-1/2 rounded-full"
            style={{
              left: `${b.left}%`,
              top: b.top,
              background: b.color,
              boxShadow: `0 0 10px 3px ${b.color}99`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Offer card, bottom-left (the WhatsApp button sits bottom-right) */}
      {showCard && (
        <div
          role="complementary"
          aria-label="Diwali offer"
          className="diwali-card fixed bottom-5 left-4 z-40 w-[min(320px,calc(100%-6rem))] rounded-2xl p-4 shadow-[0_20px_60px_-20px_rgba(200,87,42,0.45)] border border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"
        >
          <button
            onClick={dismiss}
            className="absolute top-2 right-2 rounded-full p-1 text-amber-900/50 hover:text-amber-900 hover:bg-amber-100"
            aria-label="Close Diwali offer"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-start gap-3">
            <Diya className="h-11 w-14 shrink-0 -mt-1" />
            <div className="pr-4">
              <div className="font-display text-lg leading-tight text-amber-950">Happy Diwali!</div>
              <p className="mt-1 text-sm text-amber-900/80 leading-snug">
                Masterclasses at <span className="font-semibold text-amber-950">₹599</span>{" "}
                <span className="line-through">₹999</span>, till {OFFER_ENDS_LABEL}.
              </p>
              <Link
                to="/services/talent-development"
                onClick={dismiss}
                className="mt-2 inline-block text-sm font-semibold text-[#C8572A] hover:underline"
              >
                View courses →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
