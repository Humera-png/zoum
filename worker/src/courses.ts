// Authoritative (server-side) course catalog. Must stay in sync with
// src/data/courses.ts on the frontend — the frontend shows this data, but
// the Worker never trusts a price sent from the browser when creating a
// Razorpay order, it always looks the price up from here by course id.
export interface CourseRecord {
  id: string;
  title: string;
  priceInr: number; // whole rupees
}

export const COURSES: CourseRecord[] = [];

export function findCourse(id: string): CourseRecord | undefined {
  return COURSES.find((c) => c.id === id);
}
