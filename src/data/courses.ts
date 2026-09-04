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
  image: string;
}

// Starting prices/durations — adjust these to match your actual rate card
// before real payments go live, I don't have your verified pricing.
export const courses: Course[] = [
  {
    id: "bpo-career-masterclass",
    title: "BPO Career & Interview Readiness Masterclass",
    category: "career",
    priceInr: 999,
    duration: "3 hours (live)",
    summary:
      "A 3-hour live masterclass that takes you from confused fresher to interview-ready for a BPO career: industry basics, professional presence, and real mock-interview practice.",
    syllabus: [
      "What BPO is: Voice, Non-Voice, Chat, and career growth paths",
      "Professional communication, body language & grooming",
      "Live mock interview practice with feedback",
      "Your personal 7-Day BPO Career Launch Plan",
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "it-career-masterclass",
    title: "IT Career & Interview Readiness Masterclass",
    category: "career",
    priceInr: 999,
    duration: "3 hours (live)",
    summary:
      "A 3-hour live masterclass that helps freshers understand the IT industry, build a professional profile, and walk into their first IT interview with confidence.",
    syllabus: [
      "IT industry overview: development, cloud, data, cybersecurity & AI",
      "Resume, LinkedIn & professional introduction",
      "Live mock interview practice with feedback",
      "Your personal 7-Day IT Career Launch Plan",
    ],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
  },
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
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];
