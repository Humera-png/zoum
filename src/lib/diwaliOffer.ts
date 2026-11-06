// Diwali offer: discounted course prices plus the festive decorations.
// Everything switches off on its own after OFFER_ENDS, no code change needed.
//
// IMPORTANT: worker/src/courses.ts has the same prices and end date. That's
// the price actually charged at checkout, so change both together.

export const OFFER_ENDS = new Date("2026-11-12T23:59:59+05:30");
export const OFFER_ENDS_LABEL = "12 November";

// course id -> Diwali price in whole rupees
export const DIWALI_PRICES: Record<string, number> = {
  "bpo-career-masterclass": 599,
  "it-career-masterclass": 599,
  "business-consultancy-masterclass": 599,
  "ai-ml-foundations": 599,
  "automation-ai-ml-practicum": 599,
  "ai-automation-n8n-masterclass": 999,
  "interview-mastery": 1999,
};

export function isDiwaliActive(now = new Date()) {
  return now < OFFER_ENDS;
}

/** The Diwali price for a course, or undefined if it isn't on offer (or the offer has ended). */
export function diwaliPrice(courseId: string): number | undefined {
  return isDiwaliActive() ? DIWALI_PRICES[courseId] : undefined;
}

export function inr(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}
