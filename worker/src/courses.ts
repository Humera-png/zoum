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
  { id: "english-communication", title: "English & Communication", priceInr: 4999 },
  { id: "personality-development", title: "Personality Development", priceInr: 5999 },
  { id: "workplace-soft-skills", title: "Workplace & Soft Skills", priceInr: 3999 },
  { id: "leadership-readiness", title: "Leadership Readiness", priceInr: 8999 },
  { id: "interview-mastery", title: "Interview Mastery", priceInr: 2999 },
  { id: "workplace-digital-skills", title: "Workplace Digital Skills", priceInr: 3499 },
  { id: "ai-ml-foundations", title: "AI & Machine Learning Foundations", priceInr: 14999 },
  { id: "python-programming", title: "Python Programming for Beginners", priceInr: 6999 },
  { id: "full-stack-web-development", title: "Full-Stack Web Development", priceInr: 19999 },
  { id: "data-analytics", title: "Data Analytics with Excel & SQL", priceInr: 8999 },
];

export function findCourse(id: string): CourseRecord | undefined {
  return COURSES.find((c) => c.id === id);
}
