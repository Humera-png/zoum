// Authoritative (server-side) course catalog. Must stay in sync with
// src/data/courses.ts on the frontend — the frontend shows this data, but
// the Worker never trusts a price sent from the browser when creating a
// Razorpay order, it always looks the price up from here by course id.
export interface CourseRecord {
  id: string;
  title: string;
  priceInr: number; // whole rupees
}

// Must stay in sync with src/data/courses.ts — this is the price that's
// actually charged, regardless of what a client sends.
export const COURSES: CourseRecord[] = [
  { id: "bpo-career-masterclass", title: "BPO Career & Interview Readiness Masterclass", priceInr: 999 },
  { id: "it-career-masterclass", title: "IT Career & Interview Readiness Masterclass", priceInr: 999 },
  {
    id: "business-consultancy-masterclass",
    title: "Business Consultancy Career & Interview Readiness Masterclass",
    priceInr: 999,
  },
  { id: "ai-automation-n8n-masterclass", title: "AI Automation Masterclass — n8n", priceInr: 1499 },
  { id: "english-communication", title: "Speak With Confidence: English & Communication", priceInr: 4999 },
  { id: "personality-development", title: "Own The Room: Personality Development", priceInr: 5999 },
  { id: "workplace-soft-skills", title: "Workplace Ready: Soft Skills That Matter", priceInr: 3999 },
  { id: "leadership-readiness", title: "Lead From Day One: Leadership Readiness", priceInr: 8999 },
  { id: "interview-mastery", title: "Crack Any Interview: Interview Mastery", priceInr: 2999 },
  { id: "workplace-digital-skills", title: "Digital Skills for the Modern Workplace", priceInr: 3499 },
  { id: "ai-ml-foundations", title: "Break Into AI: Machine Learning Foundations", priceInr: 999 },
  { id: "python-programming", title: "Code Your Future: Python for Beginners", priceInr: 6999 },
  { id: "full-stack-web-development", title: "Build & Launch: Full-Stack Web Development", priceInr: 19999 },
  { id: "data-analytics", title: "Data Skills That Get You Hired", priceInr: 8999 },
  {
    id: "automation-ai-ml-practicum",
    title: "Automate Everything: Python, AI & Machine Learning in Practice",
    priceInr: 999,
  },
];

// Diwali offer. Same prices and end date as src/lib/diwaliOffer.ts on the
// frontend. While it runs, findCourse() returns the offer price, so every
// order, record, and email uses it. After OFFER_ENDS, normal prices return.
export const OFFER_ENDS = new Date("2026-11-15T23:59:59+05:30");
export const DIWALI_PRICES: Record<string, number> = {
  "bpo-career-masterclass": 599,
  "it-career-masterclass": 599,
  "business-consultancy-masterclass": 599,
  "ai-ml-foundations": 599,
  "automation-ai-ml-practicum": 599,
};

export function findCourse(id: string): CourseRecord | undefined {
  const course = COURSES.find((c) => c.id === id);
  if (!course) return undefined;
  const offer = Date.now() < OFFER_ENDS.getTime() ? DIWALI_PRICES[id] : undefined;
  return offer ? { ...course, priceInr: offer } : course;
}
