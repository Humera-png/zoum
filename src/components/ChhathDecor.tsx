import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Chhath Puja touches: a marigold garland (toran) across the top of the page
// and a small dismissible greeting card. Both switch off on their own after
// Usha Arghya (the last day), no code change needed. Respects reduced motion.

export const CHHATH_ENDS = new Date("2026-11-16T23:59:59+05:30");

export function isChhathActive(now = new Date()) {
  return now < CHHATH_ENDS;
}

const SWAGS = 5; // dips the garland makes across the page
const FLOWERS_PER_SWAG = 9;
const SAG = 22; // px the garland dips in the middle of each swag
const MARIGOLD = ["#FF8F00", "#FFB300", "#F57C00"];

function flowers() {
  const out: { left: number; top: number; color: string; leaf: boolean }[] = [];
  const total = SWAGS * FLOWERS_PER_SWAG;
  for (let i = 0; i < total; i++) {
    const frac = (i + 0.5) / total;
    const inSwag = (frac * SWAGS) % 1;
    out.push({
      left: frac * 100,
      top: 4 + SAG * Math.sin(Math.PI * inSwag),
      color: MARIGOLD[i % MARIGOLD.length],
      // a mango leaf hangs at the lowest point of every swag
      leaf: i % FLOWERS_PER_SWAG === Math.floor(FLOWERS_PER_SWAG / 2),
    });
  }
  return out;
}

/** Rising sun over the river, with a soop (bamboo basket) of offerings and a diya. */
function ChhathScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 72" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="chhath-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="70%" stopColor="#FF9800" />
          <stop offset="100%" stopColor="#F4511E" />
        </radialGradient>
        <linearGradient id="chhath-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFCC80" />
          <stop offset="100%" stopColor="#E65100" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      {/* sun rays + sun */}
      <g className="chhath-rays" style={{ transformOrigin: "48px 36px" }}>
        {Array.from({ length: 12 }, (_, i) => (
          <line
            key={i}
            x1="48"
            y1="14"
            x2="48"
            y2="8"
            stroke="#FFB300"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${i * 30} 48 36)`}
          />
        ))}
      </g>
      <circle cx="48" cy="36" r="17" fill="url(#chhath-sun)" />
      {/* river */}
      <rect x="0" y="40" width="96" height="32" fill="url(#chhath-water)" />
      <path d="M8 48 Q 16 46 24 48 T 40 48" stroke="#FFF3E0" strokeWidth="1.4" fill="none" />
      <path d="M56 54 Q 64 52 72 54 T 88 54" stroke="#FFF3E0" strokeWidth="1.4" fill="none" />
      {/* sugarcane */}
      <path d="M10 70 L 16 22" stroke="#558B2F" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M16 22 Q 8 18 4 24 M16 22 Q 24 16 28 20"
        stroke="#7CB342"
        strokeWidth="1.8"
        fill="none"
      />
      {/* soop with fruits */}
      <circle cx="40" cy="58" r="4" fill="#FDD835" />
      <circle cx="48" cy="56" r="4.5" fill="#E53935" />
      <circle cx="56" cy="58" r="4" fill="#7CB342" />
      <path
        d="M28 60 Q 48 74 68 60 L 66 58 Q 48 66 30 58 Z"
        fill="#C8A165"
        stroke="#8D6E63"
        strokeWidth="1"
      />
      {/* diya */}
      <path
        d="M80 52 C 77.5 56 77.5 59 80 61 C 82.5 59 82.5 56 80 52 Z"
        fill="#FFB300"
        className="chhath-flame"
      />
      <path d="M72 62 Q 80 70 88 62 Q 80 64 72 62 Z" fill="#C8572A" />
    </svg>
  );
}

const DISMISS_KEY = "zoum-chhath-card-dismissed";

export function ChhathDecor() {
  const [active] = useState(() => isChhathActive());
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
        @keyframes chhath-sway { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }
        @keyframes chhath-spin { to { transform: rotate(360deg); } }
        @keyframes chhath-flicker { 0%,100% { transform: scaleY(1); } 50% { transform: scaleY(1.12); } }
        @keyframes chhath-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        .chhath-leaf { transform-origin: top center; animation: chhath-sway 3s ease-in-out infinite; }
        .chhath-rays { animation: chhath-spin 24s linear infinite; }
        .chhath-flame { transform-origin: 80px 61px; animation: chhath-flicker 1.2s ease-in-out infinite; }
        .chhath-card { animation: chhath-in .5s cubic-bezier(.16,1,.3,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .chhath-leaf, .chhath-rays, .chhath-flame, .chhath-card { animation: none; }
        }
      `}</style>

      {/* Marigold garland across the top of the page (scrolls away with it) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-40 h-16 overflow-hidden"
        aria-hidden="true"
      >
        {flowers().map((f, i) => (
          <span
            key={i}
            className="absolute -translate-x-1/2"
            style={{ left: `${f.left}%`, top: f.top }}
          >
            <span
              className="block h-3 w-3 rounded-full"
              style={{
                background: `radial-gradient(circle at 40% 35%, #FFE082 0 20%, ${f.color} 45%)`,
                boxShadow: "0 1px 2px rgba(120,60,0,.35)",
              }}
            />
            {f.leaf && (
              <span
                className="chhath-leaf absolute left-1/2 top-2.5 -ml-1 block h-4 w-2 rounded-b-full bg-[#43A047]"
                style={{ animationDelay: `${(i % 5) * 0.4}s` }}
              />
            )}
          </span>
        ))}
      </div>

      {/* Greeting card, bottom-left (the WhatsApp button sits bottom-right) */}
      {showCard && (
        <div
          role="complementary"
          aria-label="Chhath Puja greetings"
          className="chhath-card fixed bottom-5 left-4 z-40 w-[min(330px,calc(100%-6rem))] rounded-2xl p-4 shadow-[0_20px_60px_-20px_rgba(230,81,0,0.45)] border border-orange-200 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
        >
          <button
            onClick={dismiss}
            className="absolute top-2 right-2 rounded-full p-1 text-orange-900/50 hover:text-orange-900 hover:bg-orange-100"
            aria-label="Close Chhath Puja greetings"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-start gap-3">
            <ChhathScene className="h-12 w-16 shrink-0 rounded-lg" />
            <div className="pr-4">
              <div className="font-display text-lg leading-tight text-orange-950">
                Happy Chhath Puja!
              </div>
              <p className="mt-0.5 text-sm font-medium text-orange-900/90" lang="hi">
                छठ पूजा की हार्दिक शुभकामनाएं
              </p>
              <p className="mt-1 text-sm text-orange-900/75 leading-snug">
                May Surya Dev and Chhathi Maiya bless you and your family with health and happiness.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
