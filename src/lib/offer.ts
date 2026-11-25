// Current sale (Black Friday). Course cards, course pages and the banner use
// this; everything switches off by itself after OFFER_ENDS.
//
// IMPORTANT: worker/src/courses.ts has the same prices and end date. That's
// the price actually charged at checkout, so change both together.

export const OFFER_NAME = "Black Friday";
export const OFFER_ENDS = new Date("2026-11-30T23:59:59+05:30");
export const OFFER_ENDS_LABEL = "30 November";

// course id -> offer price in whole rupees
export const OFFER_PRICES: Record<string, number> = {
  "bpo-career-masterclass": 599,
};

export function isOfferActive(now = new Date()) {
  return now < OFFER_ENDS;
}

/** The offer price for a course, or undefined if it isn't on offer (or the offer has ended). */
export function offerPrice(courseId: string): number | undefined {
  return isOfferActive() ? OFFER_PRICES[courseId] : undefined;
}

export function inr(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}
