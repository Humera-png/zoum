// Real, priced courses go here. Empty by default on purpose — we don't sell
// courses that don't exist yet with invented prices. The catalog, detail
// modal, sign-in, and checkout flow all handle zero or many entries
// correctly; add real courses (with real prices) to make them live.
//
// IMPORTANT: this file must stay in sync with worker/src/courses.ts, which
// holds the authoritative (server-side) price for each course id — the
// Worker never trusts a price sent from the browser.
export type CourseCategory = "language" | "soft-skills" | "leadership" | "career" | "tech" | "data";

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  priceInr: number; // whole rupees
  duration: string; // e.g. "6 weeks", "20 hours"
  summary: string;
  syllabus: string[];
}

// Starting prices/durations — adjust these to match your actual rate card
// before real payments go live, I don't have your verified pricing.
export const courses: Course[] = [
  {
    id: "english-communication",
    title: "English & Communication",
    category: "language",
    priceInr: 4999,
    duration: "4 weeks",
    summary:
      "Spoken and written English training built for real workplace situations, not textbook drills.",
    syllabus: [
      "Everyday workplace conversations",
      "Professional email & message writing",
      "Accent neutralization & pronunciation",
      "Mock interviews in English",
    ],
  },
  {
    id: "personality-development",
    title: "Personality Development",
    category: "soft-skills",
    priceInr: 5999,
    duration: "3 weeks",
    summary:
      "Confidence, presence, and interpersonal skills that come through in interviews and on the job.",
    syllabus: [
      "Body language & first impressions",
      "Confident public speaking",
      "Handling difficult conversations",
      "Building genuine rapport",
    ],
  },
  {
    id: "workplace-soft-skills",
    title: "Workplace & Soft Skills",
    category: "soft-skills",
    priceInr: 3999,
    duration: "2 weeks",
    summary: "Time management, teamwork, and professional etiquette for people early in their career.",
    syllabus: [
      "Time & task management",
      "Working effectively in teams",
      "Workplace etiquette",
      "Giving & receiving feedback",
    ],
  },
  {
    id: "leadership-readiness",
    title: "Leadership Readiness",
    category: "leadership",
    priceInr: 8999,
    duration: "6 weeks",
    summary: "Preparing high performers to step into their first management role with real support.",
    syllabus: [
      "Delegating without micromanaging",
      "Running effective 1:1s",
      "Setting goals for a team",
      "Difficult performance conversations",
    ],
  },
  {
    id: "interview-mastery",
    title: "Interview Mastery",
    category: "career",
    priceInr: 2999,
    duration: "1 week",
    summary:
      "A focused crash course to help you walk into interviews prepared and negotiate the offer you deserve.",
    syllabus: [
      "Resume & LinkedIn review",
      "Answering tough interview questions",
      "Salary negotiation",
      "Follow-up & evaluating offers",
    ],
  },
  {
    id: "workplace-digital-skills",
    title: "Workplace Digital Skills",
    category: "tech",
    priceInr: 3499,
    duration: "2 weeks",
    summary: "Practical training on the everyday tools every office job expects you to already know.",
    syllabus: [
      "Excel / Google Sheets for work",
      "Professional email & calendar habits",
      "Video call & remote work etiquette",
      "Basic file & data organization",
    ],
  },
  {
    id: "ai-ml-foundations",
    title: "AI & Machine Learning Foundations",
    category: "tech",
    priceInr: 14999,
    duration: "8 weeks",
    summary:
      "A hands-on introduction to AI and machine learning: how models actually work, and how to build and use them, not just the theory.",
    syllabus: [
      "Python for AI & data work",
      "Core machine learning concepts",
      "Working with real datasets",
      "Using AI models & APIs in a project",
    ],
  },
  {
    id: "python-programming",
    title: "Python Programming for Beginners",
    category: "tech",
    priceInr: 6999,
    duration: "6 weeks",
    summary: "Learn to code in Python from scratch, the language behind most AI, automation, and data work.",
    syllabus: [
      "Python syntax & fundamentals",
      "Working with data structures",
      "Writing scripts that automate real tasks",
      "A final project you build yourself",
    ],
  },
  {
    id: "full-stack-web-development",
    title: "Full-Stack Web Development",
    category: "tech",
    priceInr: 19999,
    duration: "12 weeks",
    summary: "Go from zero to building and deploying a real web application, front end and back end.",
    syllabus: [
      "HTML, CSS & JavaScript fundamentals",
      "Building with a modern frontend framework",
      "Backend APIs & databases",
      "Deploying a live project",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics with Excel & SQL",
    category: "data",
    priceInr: 8999,
    duration: "5 weeks",
    summary: "Turn raw spreadsheets and databases into answers, a practical analytics skillset for any role.",
    syllabus: [
      "Advanced Excel for analysis",
      "SQL fundamentals",
      "Building dashboards & reports",
      "Presenting data to non-technical people",
    ],
  },
];
