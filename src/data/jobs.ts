// Real, current openings go here. Empty by default on purpose — we don't invent
// fake job postings with fake companies/salaries just to fill the UI. Add real
// listings as ZOUM has them; the list/filter/detail pages already handle zero,
// one, or many entries correctly.
export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // e.g. "Full-time", "Fresher", "Contract"
  category: string; // e.g. "IT & Technology", "Banking & Finance"
  experience: string; // e.g. "Fresher", "2-4 years"
  description: string;
  requirements: string[];
  postedDate: string; // ISO date
}

export const jobs: JobListing[] = [];

export function initialsOf(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
