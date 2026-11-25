import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { isOfferActive, OFFER_ENDS_LABEL, OFFER_NAME } from "@/lib/offer";

const KEY = "zoum-offer-dismissed-blackfriday-2026";

// Dismissible Black Friday card, bottom-left (ZAI and WhatsApp sit bottom-right).
// Shown only in the browser, so the prerendered HTML never goes stale.
export function OfferBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(KEY) === "1";
    } catch {
      /* storage blocked: show it */
    }
    if (isOfferActive() && !dismissed) {
      const t = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  if (!show) return null;

  const close = () => {
    setShow(false);
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      role="region"
      aria-label={`${OFFER_NAME} offer`}
      style={{ backgroundColor: "#0b0b0b", color: "#ffffff" }}
      className="fixed z-[55] bottom-6 left-4 right-24 sm:right-auto sm:left-6 sm:w-[340px] rounded-2xl p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close offer"
        className="absolute top-3 right-3 h-8 w-8 grid place-items-center rounded-full hover:bg-white/10"
      >
        <X className="h-4 w-4" />
      </button>
      <div
        className="text-[11px] uppercase tracking-[0.2em] font-bold"
        style={{ color: "#1fcb6b" }}
      >
        {OFFER_NAME} sale · till {OFFER_ENDS_LABEL}
      </div>
      <div className="mt-2 font-display text-xl leading-snug pr-6">
        BPO Career & Interview Masterclass
      </div>
      <div className="mt-1 text-sm">
        <span className="font-display text-2xl">₹599</span>{" "}
        <span className="line-through" style={{ color: "rgba(255,255,255,0.55)" }}>
          ₹999
        </span>
      </div>
      <a
        href="/courses/bpo-career-masterclass"
        onClick={close}
        style={{ backgroundColor: "#1fcb6b" }}
        className="mt-4 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white"
      >
        Book your seat
      </a>
    </div>
  );
}
