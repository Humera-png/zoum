// Real, priced courses go here. Empty by default on purpose — we don't sell
// courses that don't exist yet with invented prices. The catalog, detail
// modal, sign-in, and checkout flow all handle zero or many entries
// correctly; add real courses (with real prices) to make them live.
//
// IMPORTANT: this file must stay in sync with worker/src/courses.ts, which
// holds the authoritative (server-side) price for each course id — the
// Worker never trusts a price sent from the browser.
export interface Course {
  id: string;
  title: string;
  priceInr: number; // whole rupees
  duration: string; // e.g. "6 weeks", "20 hours"
  summary: string;
  syllabus: string[];
}

export const courses: Course[] = [];
