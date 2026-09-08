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
  { id: "english-communication", title: "Speak With Confidence: English & Communication", priceInr: 4999 },
  { id: "personality-development", title: "Own The Room: Personality Development", priceInr: 5999 },
  { id: "workplace-soft-skills", title: "Workplace Ready: Soft Skills That Matter", priceInr: 3999 },
  { id: "leadership-readiness", title: "Lead From Day One: Leadership Readiness", priceInr: 8999 },
  { id: "interview-mastery", title: "Crack Any Interview: Interview Mastery", priceInr: 2999 },
  { id: "workplace-digital-skills", title: "Digital Skills for the Modern Workplace", priceInr: 3499 },
  { id: "ai-ml-foundations", title: "Break Into AI: Machine Learning Foundations", priceInr: 14999 },
  { id: "python-programming", title: "Code Your Future: Python for Beginners", priceInr: 6999 },
  { id: "full-stack-web-development", title: "Build & Launch: Full-Stack Web Development", priceInr: 19999 },
  { id: "data-analytics", title: "Data Skills That Get You Hired", priceInr: 8999 },
  {
    id: "automation-ai-ml-practicum",
    title: "Automate Everything: Python, AI & Machine Learning in Practice",
    priceInr: 12999,
  },
];

export function findCourse(id: string): CourseRecord | undefined {
  return COURSES.find((c) => c.id === id);
}
