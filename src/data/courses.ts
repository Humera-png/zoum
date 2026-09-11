export type CourseCategory = "language" | "soft-skills" | "leadership" | "career" | "tech" | "data";

export type CoursePage = "bpo" | "ai-it" | "consultancy";

export interface CourseModule {
  title: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  page: CoursePage;
  priceInr: number; // whole rupees — charged at checkout, not displayed
  duration: string; // e.g. "6 weeks", "20 hours"
  summary: string;
  modules: CourseModule[];
  pros?: string[]; // shown as a bullet list on the course page, if present
  terms?: string[]; // Terms & Conditions bullets, shown on the course page, if present
  image: string;
}

const MASTERCLASS_TERMS = [
  "This is a one-time fee. Don't pay any additional money to anyone in connection with this course, including instructors, under any circumstances.",
  "We provide placement assistance and guidance if you put in the work — placement itself is not guaranteed.",
  "You may be asked to sign a non-disclosure agreement as part of the program.",
];
export const courses: Course[] = [
  {
    id: "bpo-career-masterclass",
    title: "BPO Career & Interview Masterclass",
    category: "career",
    page: "bpo",
    priceInr: 999,
    duration: "Live classes by Experts",
    summary:
      "Start with a live masterclass that takes you from confused fresher to interview-ready for a BPO career, then keep going with an enhanced program that runs twice a week and covers everything else.",
    modules: [
      {
        title: "BPO Masterclass - 3 hours live",
        description:
          "A live session covering what BPO actually is (Voice, Non-Voice, and Chat process types), the realistic career growth paths from associate to team lead, professional presence and communication, and live mock-interview practice with feedback. You leave with your own 7-Day BPO Career Launch Plan.",
      },
      {
        title: "Advanced Course with 2 Masterclasses",
        description:
          "After the masterclass, continue with an ongoing enhanced program, 2 classes a week, that goes deeper: real process training, extended mock interviews, and continued support until you're genuinely job-ready, not just introduced to the basics.",
      },
    ],
    pros: [
      "Live, interactive masterclass, not a recorded video course",
      "Real mock interviews with direct, honest feedback",
      "Ongoing 2-classes-a-week program after the masterclass, not a one-and-done session",
      "A personal 7-Day BPO Career Launch Plan you actually leave with",
      "Placement assistance and guidance from a team that's done this before",
    ],
    terms: MASTERCLASS_TERMS,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "it-career-masterclass",
    title: "IT Career & Interview Masterclass",
    category: "career",
    page: "ai-it",
    priceInr: 999,
    duration: "Live classes by Experts",
    summary:
      "Start with a live masterclass that helps freshers understand the IT industry and walk into their first interview with confidence, then keep going with an enhanced program that runs twice a week and covers everything else.",
    modules: [
      {
        title: "IT Masterclass",
        description:
          "A live session covering the IT industry landscape (development, cloud, data, cybersecurity, and AI), rebuilding your resume and LinkedIn so recruiters actually stop scrolling, and live mock-interview practice with feedback. You leave with your own 7-Day IT Career Launch Plan.",
      },
      {
        title: "Enhanced Program — 2 Classes a Week",
        description:
          "After the masterclass, continue with an ongoing enhanced program, 2 classes a week, that goes deeper: technical fundamentals, extended mock interviews, and continued support until you're genuinely job-ready, not just introduced to the basics.",
      },
    ],
    pros: [
      "Live, interactive masterclass, not a recorded video course",
      "Real mock interviews with direct, honest feedback",
      "Ongoing 2-classes-a-week program after the masterclass, not a one-and-done session",
      "A personal 7-Day IT Career Launch Plan you actually leave with",
      "Placement assistance and guidance from a team that's done this before",
    ],
    terms: MASTERCLASS_TERMS,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "business-consultancy-masterclass",
    title: "Business Consultancy Masterclass",
    category: "career",
    page: "consultancy",
    priceInr: 999,
    duration: "Live classes by Experts",
    summary:
      "Start with a live masterclass on breaking into business consulting, then keep going with an enhanced program that runs twice a week and covers everything else.",
    modules: [
      {
        title: "Business Consultancy Masterclass",
        description:
          "A live session covering what business consulting actually involves, the core frameworks consultants use to diagnose and solve business problems, how to present yourself and your thinking to a client or interviewer, and live mock-interview practice with feedback. You leave with your own 7-Day Consulting Career Launch Plan.",
      },
      {
        title: "Enhanced Program — 2 Classes a Week",
        description:
          "After the masterclass, continue with an ongoing enhanced program, 2 classes a week, that goes deeper: case-study practice, client communication, and continued support until you're genuinely ready for consulting roles, not just introduced to the basics.",
      },
    ],
    pros: [
      "Live, interactive masterclass, not a recorded video course",
      "Real mock interviews with direct, honest feedback",
      "Ongoing 2-classes-a-week program after the masterclass, not a one-and-done session",
      "A personal 7-Day Consulting Career Launch Plan you actually leave with",
      "Placement assistance and guidance from a team that's done this before",
    ],
    terms: MASTERCLASS_TERMS,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ai-automation-n8n-masterclass",
    title: "AI Automation Masterclass — n8n",
    category: "tech",
    page: "ai-it",
    priceInr: 1499,
    duration: "Live classes by Experts",
    summary:
      "Start with a live masterclass building real AI-powered automations in n8n, the workflow tool behind ZOUM's own automation systems, then keep going with an enhanced program that runs twice a week and covers everything else.",
    modules: [
      {
        title: "n8n Automation Masterclass",
        description:
          "A live session covering what n8n actually is and why teams are moving to it for AI-era automation, the core building blocks (triggers, nodes, credentials, expressions), and a live build from scratch: a real lead-follow-up automation that uses an AI node to draft and send a response on its own, the same pattern behind tools like LeadFlowTool. You leave with your own 7-Day Automation Build Plan.",
      },
      {
        title: "Enhanced Program — 2 Classes a Week",
        description:
          "After the masterclass, continue with an ongoing enhanced program, 2 classes a week, that goes deeper: order processing and lead generation automations, connecting APIs that don't have a native n8n node, error handling and scheduling, and building your own automation project from an idea you actually want to ship.",
      },
    ],
    pros: [
      "Live, interactive masterclass, not a recorded video course",
      "Taught using real automations already in production, not toy examples",
      "Real hands-on builds with direct, honest feedback",
      "Ongoing 2-classes-a-week program after the masterclass, not a one-and-done session",
      "A personal 7-Day Automation Build Plan you actually leave with",
    ],
    terms: MASTERCLASS_TERMS,
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "english-communication",
    title: "Speak With Confidence: English & Communication",
    category: "language",
    page: "consultancy",
    priceInr: 4999,
    duration: "Live classes by Experts",
    summary:
      "Spoken and written English training built for real workplace situations, not textbook drills.",
    modules: [
      {
        title: "Everyday Workplace Communication",
        description:
          "Practice the conversations you'll actually have at work, plus professional email and message writing that reads clearly the first time, no re-drafting.",
      },
      {
        title: "Pronunciation & Accent Neutralization",
        description:
          "Targeted pronunciation drills and accent neutralization work so you're understood clearly and consistently, in person and on calls.",
      },
      {
        title: "Mock Interviews in English",
        description:
          "Full mock interviews conducted entirely in English, with feedback on clarity, confidence, and pacing, not just grammar.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "personality-development",
    title: "Own The Room: Personality Development",
    category: "soft-skills",
    page: "consultancy",
    priceInr: 5999,
    duration: "Live classes by Experts",
    summary:
      "Confidence, presence, and interpersonal skills that come through in interviews and on the job.",
    modules: [
      {
        title: "First Impressions & Body Language",
        description:
          "How posture, eye contact, and body language shape the first impression you make, and small adjustments that change how confident you come across.",
      },
      {
        title: "Confident Public Speaking",
        description:
          "Practical public speaking practice, structuring what you say, controlling nerves, and holding a room's attention without sounding rehearsed.",
      },
      {
        title: "Difficult Conversations & Rapport",
        description:
          "Handling disagreement and difficult conversations without losing composure, and building genuine rapport that outlasts a single meeting.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "workplace-soft-skills",
    title: "Workplace Ready: Soft Skills That Matter",
    category: "soft-skills",
    page: "consultancy",
    priceInr: 3999,
    duration: "Live classes by Experts",
    summary: "Time management, teamwork, and professional etiquette for people early in their career.",
    modules: [
      {
        title: "Time & Task Management",
        description:
          "Practical systems for managing your time and priorities so deadlines stop feeling like surprises.",
      },
      {
        title: "Teamwork & Workplace Etiquette",
        description:
          "Working effectively inside a team, plus the unwritten etiquette rules that decide how new hires are perceived in their first few months.",
      },
      {
        title: "Giving & Receiving Feedback",
        description:
          "How to give feedback that actually lands, and how to receive it without getting defensive, a skill most people are never taught directly.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "leadership-readiness",
    title: "Lead From Day One: Leadership Readiness",
    category: "leadership",
    page: "consultancy",
    priceInr: 8999,
    duration: "Live classes by Experts",
    summary: "Preparing high performers to step into their first management role with real support.",
    modules: [
      {
        title: "Delegation & Setting Team Goals",
        description:
          "Delegating without micromanaging, and setting goals for a team that are specific enough to actually track.",
      },
      {
        title: "Running Effective 1:1s",
        description:
          "A repeatable structure for 1:1 meetings that surfaces real problems early, instead of status updates nobody needed.",
      },
      {
        title: "Difficult Performance Conversations",
        description:
          "How to prepare for and run a difficult performance conversation so it changes behavior instead of just being uncomfortable.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "interview-mastery",
    title: "Crack Any Interview: Interview Mastery",
    category: "career",
    page: "consultancy",
    priceInr: 2999,
    duration: "Live classes by Experts",
    summary:
      "A focused crash course to help you walk into interviews prepared and negotiate the offer you deserve.",
    modules: [
      {
        title: "Resume & LinkedIn Review",
        description:
          "A line-by-line review of your resume and LinkedIn so both actually represent what you're capable of, not just what you've done.",
      },
      {
        title: "Answering Tough Interview Questions",
        description:
          "Structured frameworks for the interview questions that trip most people up, from 'tell me about yourself' to handling gaps and weaknesses.",
      },
      {
        title: "Salary Negotiation & Evaluating Offers",
        description:
          "How to negotiate salary without sounding pushy, and how to actually compare two offers instead of just chasing the bigger number.",
      },
    ],
    image:
      "/assets/interview-handshake.jpg",
  },
  {
    id: "workplace-digital-skills",
    title: "Digital Skills for the Modern Workplace",
    category: "tech",
    page: "consultancy",
    priceInr: 3499,
    duration: "Live classes by Experts",
    summary: "Practical training on the everyday tools every office job expects you to already know.",
    modules: [
      {
        title: "Spreadsheets for Work",
        description:
          "Excel and Google Sheets skills built around real office tasks: tracking, reporting, and basic formulas, not spreadsheet trivia.",
      },
      {
        title: "Email, Calendar & Remote Work Etiquette",
        description:
          "Professional email and calendar habits, plus video call and remote work etiquette that makes you easy to work with across time zones.",
      },
      {
        title: "File & Data Organization",
        description:
          "Simple, consistent systems for organizing files and data so nothing gets lost when a project hands off between people.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ai-ml-foundations",
    title: "Break Into AI: Machine Learning Foundations",
    category: "tech",
    page: "ai-it",
    priceInr: 999,
    duration: "Live classes by Experts",
    summary:
      "A live, hands-on weekend masterclass into AI and machine learning: how models actually work, and how to build and evaluate one yourself, not just the theory.",
    modules: [
      {
        title: "Saturday — Python for Data & How Machine Learning Actually Works",
        description:
          "A live session covering the specific Python and Pandas skills AI work actually depends on, then what machine learning actually is: supervised vs. unsupervised learning, training vs. test data, and why a model that's memorized its training data isn't the same as one that's learned something useful. Ends with a live demo training a real model on a real dataset.",
      },
      {
        title: "Sunday — Build, Evaluate & Ship Your Own Model",
        description:
          "Hands-on: you train and evaluate your own model with scikit-learn, learn why accuracy alone can lie to you, and call an AI API from your own code, not just a chat window. You leave with a working mini project and a personal plan for what to learn next.",
      },
    ],
    pros: [
      "Live, interactive masterclass, not a recorded video course",
      "You train and evaluate a real model yourself, on real data, not a slide about one",
      "Taught by people who use AI/ML in production, not just in theory",
      "A personal plan for what to learn next, that you actually leave with",
      "Placement assistance and guidance from a team that's done this before",
    ],
    terms: MASTERCLASS_TERMS,
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "python-programming",
    title: "Code Your Future: Python for Beginners",
    category: "tech",
    page: "ai-it",
    priceInr: 6999,
    duration: "Live classes by Experts",
    summary: "Learn to code in Python from scratch, the language behind most AI, automation, and data work.",
    modules: [
      {
        title: "Python Fundamentals",
        description:
          "Python syntax and fundamentals from zero, paced for people who have genuinely never written code before.",
      },
      {
        title: "Data Structures & Automation Scripts",
        description:
          "Working with real data structures, then using them to write scripts that automate actual repetitive tasks.",
      },
      {
        title: "Your Final Project",
        description:
          "A final project you design and build yourself from start to finish, with guidance, so you leave with proof you can actually code.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "full-stack-web-development",
    title: "Build & Launch: Full-Stack Web Development",
    category: "tech",
    page: "ai-it",
    priceInr: 19999,
    duration: "Live classes by Experts",
    summary: "Go from zero to building and deploying a real web application, front end and back end.",
    modules: [
      {
        title: "Frontend Fundamentals",
        description:
          "HTML, CSS, and JavaScript fundamentals, building real pages from the start instead of isolated exercises.",
      },
      {
        title: "Modern Frontend Framework",
        description:
          "Building actual interfaces with a modern frontend framework, the same kind of tooling used in production teams.",
      },
      {
        title: "Backend, Databases & Deployment",
        description:
          "Backend APIs, databases, and deploying a live project so it's reachable on the internet, not just running on your laptop.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "data-analytics",
    title: "Data Skills That Get You Hired",
    category: "data",
    page: "ai-it",
    priceInr: 8999,
    duration: "Live classes by Experts",
    summary: "Turn raw spreadsheets and databases into answers, a practical analytics skillset for any role.",
    modules: [
      {
        title: "Advanced Excel & SQL Fundamentals",
        description:
          "Advanced Excel techniques for analysis, plus SQL fundamentals so you can pull your own answers straight from a database.",
      },
      {
        title: "Building Dashboards & Reports",
        description:
          "Turning raw numbers into dashboards and reports that a manager can actually act on at a glance.",
      },
      {
        title: "Presenting Data to Non-Technical People",
        description:
          "How to present data to non-technical stakeholders so the insight lands, without drowning them in numbers.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "automation-ai-ml-practicum",
    title: "Automate Everything: Python, AI & Machine Learning in Practice",
    category: "tech",
    page: "ai-it",
    priceInr: 999,
    duration: "Live classes by Experts",
    summary:
      "A live, practitioner-led 2-day masterclass in automation engineering: use Python and AI/ML together to build a system that actually runs your work for you, not just theory.",
    modules: [
      {
        title: "Saturday — Python Automation Pipelines",
        description:
          "A live session covering the automation mindset (what's actually worth automating), writing Python scripts for real repeatable workflows, and error handling and logging, so a script that runs unattended fails loudly instead of silently. Ends with a live demo automating a real report from scratch.",
      },
      {
        title: "Sunday — APIs, Scheduling & AI-Driven Automation",
        description:
          "Hands-on: connecting APIs, schedulers, and data sources into one working pipeline, then using an AI model to automate a decision, not just a prediction. You leave with one working automation you built yourself and a personal 7-Day Automation Build Plan.",
      },
    ],
    pros: [
      "Live, interactive masterclass, not a recorded video course",
      "You build and ship one real automation yourself, not a toy example",
      "Taught using automations already running in production",
      "A personal 7-Day Automation Build Plan you actually leave with",
      "Placement assistance and guidance from a team that's done this before",
    ],
    terms: MASTERCLASS_TERMS,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  },
];
