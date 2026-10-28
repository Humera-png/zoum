// Blog articles. To add a new one, append an object to `posts` and add its
// URL (https://zoumconsultancy.com/blog/<slug>) to public/sitemap.xml.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "links"; title: string; links: { label: string; to: string }[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: string;
  readMinutes: number;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "bpo-jobs-in-jaipur-for-freshers",
    title: "BPO Jobs in Jaipur and Ahmedabad for Freshers: A Complete Guide",
    description:
      "What BPO jobs are, which roles freshers can apply for in Jaipur and Ahmedabad, the skills employers look for, and how to get hired faster.",
    date: "2026-10-28",
    category: "Careers",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "BPO jobs are one of the most common ways for freshers in Jaipur and Ahmedabad to start their careers. Many roles are open to graduates and even 12th-pass candidates, the training happens on the job, and the skills you build carry into almost any later career. This guide explains what BPO work involves, which roles freshers can apply for, and how to stand out.",
      },
      { type: "h2", text: "What is a BPO job?" },
      {
        type: "p",
        text: "BPO stands for business process outsourcing. Companies hand parts of their work, such as customer support, sales calls, or back-office processing, to a specialised team. People working in these teams handle customer calls, chats, and emails, or process data and documents on the company's behalf.",
      },
      { type: "h2", text: "BPO roles freshers can apply for" },
      {
        type: "ul",
        items: [
          "Customer support executive (voice): answering customer calls and solving their problems.",
          "Chat and email support (non-voice): handling customers in writing instead of on the phone.",
          "Telesales executive: calling potential customers to explain and sell a product or service.",
          "Back-office executive: data entry, document checks, and processing work behind the scenes.",
          "Technical support: helping customers with internet, software, or device issues. Good for candidates with basic computer knowledge.",
        ],
      },
      { type: "h2", text: "Who can apply" },
      {
        type: "p",
        text: "Most entry-level BPO roles ask for a graduate or 12th-pass candidate who communicates clearly. Some companies hire for English processes, others for Hindi or regional language processes, so English fluency is helpful but not always required. Basic computer skills and willingness to work in shifts are expected for most roles.",
      },
      { type: "h2", text: "Skills BPO employers look for" },
      {
        type: "ul",
        items: [
          "Clear spoken communication, in English or the language of the process.",
          "Listening carefully and staying calm with upset customers.",
          "Basic typing and computer skills.",
          "A positive attitude and willingness to learn the company's process.",
          "Reliability: showing up on time for every shift.",
        ],
      },
      { type: "h2", text: "How the BPO hiring process works" },
      {
        type: "p",
        text: "A typical BPO interview has a few short rounds: an HR conversation, a communication or voice assessment, sometimes a typing or aptitude test, and a final round with the operations team. Many companies finish all rounds in a single day. Preparing for the communication round makes the biggest difference, because that is where most freshers are filtered out.",
      },
      { type: "h2", text: "How to get hired faster" },
      {
        type: "ul",
        items: [
          "Practise speaking out loud: introduce yourself, describe your last job or college, and explain why you want the role.",
          "Prepare a simple one-page resume with your contact details, education, and any skills like typing speed or languages.",
          "Be honest about shift timings you can work.",
          "Apply through a placement consultancy that already works with BPO employers, so your profile reaches the right recruiters.",
        ],
      },
      { type: "h2", text: "Is BPO a good career?" },
      {
        type: "p",
        text: "For many freshers, yes. A BPO job builds communication, problem-solving, and professional habits that employers in every industry value. People who perform well often move into team leader, quality, training, or operations roles, or use the experience to switch into sales, HR, or IT support.",
      },
      {
        type: "links",
        title: "Get started with ZOUM",
        links: [
          { label: "BPO Career Masterclass", to: "/courses/bpo-career-masterclass" },
          { label: "Job placement in Jaipur and Ahmedabad", to: "/services/career" },
          { label: "Interview Mastery course", to: "/courses/interview-mastery" },
        ],
      },
    ],
  },
  {
    slug: "how-to-clear-a-call-centre-interview",
    title: "How to Clear a Call Centre Interview: Questions, Answers and Tips",
    description:
      "The rounds in a call centre interview, the questions you'll be asked, how to answer them, and the mistakes that get freshers rejected.",
    date: "2026-10-28",
    category: "Interview Tips",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "Call centre interviews are short, but they move fast, and most candidates are filtered out in the communication round. Knowing what each round tests, and preparing your answers in advance, makes a big difference. Here is how to prepare.",
      },
      { type: "h2", text: "The rounds in a call centre interview" },
      {
        type: "ul",
        items: [
          "HR round: a short conversation about you, your background, and your availability.",
          "Communication or voice round: the interviewer checks how clearly you speak, your pronunciation, and how well you listen.",
          "Typing or aptitude test: some companies check typing speed or basic reasoning.",
          "Operations round: the team you'll work with checks whether you fit the process, sometimes with a mock customer call.",
        ],
      },
      { type: "h2", text: "Common questions and how to answer them" },
      { type: "h3", text: "Tell me about yourself." },
      {
        type: "p",
        text: "Keep it under a minute: your name, where you're from, your education, any work experience, and one line about why you want this job. Practise it out loud until it sounds natural, not memorised.",
      },
      { type: "h3", text: "Why do you want to work in a call centre?" },
      {
        type: "p",
        text: "Talk about what you'll gain: improving your communication, learning to solve problems for customers, and growing in a professional environment. Avoid saying it's just a stopgap.",
      },
      { type: "h3", text: "Are you comfortable with night shifts or rotational shifts?" },
      {
        type: "p",
        text: "Answer honestly. If you can work shifts, say so clearly. If you have limits, mention them politely, because a mismatch discovered later hurts both you and the employer.",
      },
      { type: "h3", text: "How would you handle an angry customer?" },
      {
        type: "p",
        text: "Show a simple method: listen without interrupting, apologise for the trouble, repeat the problem back to confirm you understood it, offer a solution or the next step, and thank the customer. Interviewers want to see that you stay calm.",
      },
      { type: "h3", text: "Sell me this pen." },
      {
        type: "p",
        text: "This tests confidence, not product knowledge. Ask a question first, such as what the person usually uses a pen for, then connect one or two features to that need, and close by asking if they'd like to buy it.",
      },
      { type: "h2", text: "Tips for the voice round" },
      {
        type: "ul",
        items: [
          "Speak slowly and clearly. Speed is not the same as fluency.",
          "Pause and listen fully before you answer.",
          "Smile while you speak: it changes your tone, even on the phone.",
          "If you don't understand a question, ask politely for it to be repeated.",
        ],
      },
      { type: "h2", text: "Mistakes that get candidates rejected" },
      {
        type: "ul",
        items: [
          "Memorised answers that sound robotic.",
          "Interrupting the interviewer.",
          "Being unsure about shift timings or joining dates.",
          "Arriving late or without a copy of your resume.",
        ],
      },
      { type: "h2", text: "Prepare with practice, not just reading" },
      {
        type: "p",
        text: "The fastest way to improve is mock interviews: answering real questions out loud and getting feedback on your communication. That is exactly what interview preparation training focuses on.",
      },
      {
        type: "links",
        title: "Prepare with ZOUM",
        links: [
          { label: "Interview Mastery course", to: "/courses/interview-mastery" },
          { label: "English Communication course", to: "/courses/english-communication" },
          { label: "BPO Career Masterclass", to: "/courses/bpo-career-masterclass" },
        ],
      },
    ],
  },
  {
    slug: "best-courses-after-12th-for-it-jobs",
    title: "Best Courses After 12th for IT Jobs",
    description:
      "Practical, job-focused courses after 12th for an IT career: programming, web development, data analytics, and AI, and how to choose the right one.",
    date: "2026-10-28",
    category: "Courses",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "You don't need to wait for a degree to start building IT skills. Many IT roles hire on what you can actually do, so a focused, practical course after 12th can put you on the path to a tech career much sooner. Here are the courses worth considering and how to choose between them.",
      },
      { type: "h2", text: "1. Python programming" },
      {
        type: "p",
        text: "Python is one of the most beginner-friendly programming languages and is used in web development, automation, data analysis, and AI. If you're unsure where to start in IT, Python is a strong first step because it opens several career paths at once.",
      },
      { type: "h2", text: "2. Full-stack web development" },
      {
        type: "p",
        text: "Web developers build websites and web applications, and businesses of every size need them. A full-stack course teaches both the parts users see and the systems behind them, and lets you build real projects you can show employers.",
      },
      { type: "h2", text: "3. Data analytics" },
      {
        type: "p",
        text: "Companies rely on data to make decisions, and analysts turn raw numbers into answers. Data analytics suits people who like working with numbers and patterns, and it is useful in IT, finance, marketing, and operations roles.",
      },
      { type: "h2", text: "4. AI and machine learning foundations" },
      {
        type: "p",
        text: "AI is changing how almost every industry works. A foundations course explains how AI and machine learning work and how they're applied, which is valuable whether you want to specialise in AI later or simply work alongside it.",
      },
      { type: "h2", text: "5. Workplace digital skills" },
      {
        type: "p",
        text: "Not every IT-related job is about coding. Strong digital skills, such as spreadsheets, documents, email, and online tools, are required in almost every office role and are a good base before moving into more technical training.",
      },
      { type: "h2", text: "How to choose the right course" },
      {
        type: "ul",
        items: [
          "Start from the job you want, then pick the course that leads to it.",
          "Choose courses where you build real projects, not just watch lessons.",
          "Check that the course is practical and taught by people with industry experience.",
          "Look for support beyond the course, such as interview preparation and help finding a job.",
        ],
      },
      { type: "h2", text: "Courses alone are not enough" },
      {
        type: "p",
        text: "Employers hire people who can show their skills and communicate them well. Pair your technical course with a portfolio of small projects and interview practice, and you'll stand out from candidates who only have a certificate.",
      },
      {
        type: "links",
        title: "IT courses at ZOUM",
        links: [
          { label: "IT Career Masterclass", to: "/courses/it-career-masterclass" },
          { label: "Python for Beginners", to: "/courses/python-programming" },
          { label: "Full-Stack Web Development", to: "/courses/full-stack-web-development" },
          { label: "Data Analytics", to: "/courses/data-analytics" },
          { label: "AI & ML Foundations", to: "/courses/ai-ml-foundations" },
        ],
      },
    ],
  },
  {
    slug: "ai-automation-for-small-businesses",
    title: "How Small Businesses Can Use AI Automation",
    description:
      "Practical ways small businesses in Jaipur, Ahmedabad and across India can use AI automation to save time on leads, customer questions, orders and reports.",
    date: "2026-10-28",
    category: "AI & Business",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "AI automation isn't only for large companies. Small businesses often benefit the most, because every hour a small team spends on repetitive work is an hour taken away from customers and growth. Here are practical ways to use it, and how to get started without wasting money.",
      },
      { type: "h2", text: "What AI automation means" },
      {
        type: "p",
        text: "AI automation means using software and AI tools to handle repetitive tasks that follow a pattern, such as replying to common questions, following up with leads, or moving data between systems, so your team doesn't have to do each step by hand.",
      },
      { type: "h2", text: "Five practical uses for a small business" },
      {
        type: "ul",
        items: [
          "Lead follow-up: automatically send the right message to every new enquiry, so no lead goes cold because someone forgot to reply.",
          "Customer questions: a chatbot trained on your business answers common questions instantly, any time of day.",
          "Appointments and scheduling: customers book slots themselves and get automatic reminders.",
          "Order processing: orders move from placement to fulfilment without manual handling at every step.",
          "Reports: sales, stock, and performance reports are prepared automatically instead of being compiled by hand every week.",
        ],
      },
      { type: "h2", text: "How to decide what to automate first" },
      {
        type: "p",
        text: "List the tasks your team repeats every day or week. The best first candidates are tasks that take a lot of time, follow the same steps each time, and cause problems when they're forgotten or delayed. Start with one, measure the time saved, then expand.",
      },
      { type: "h2", text: "Common mistakes to avoid" },
      {
        type: "ul",
        items: [
          "Buying tools before understanding the process you want to fix.",
          "Trying to automate everything at once.",
          "Not training the team, so the new system goes unused.",
          "Skipping testing with real customer data before going live.",
        ],
      },
      { type: "h2", text: "Do you need a technical team?" },
      {
        type: "p",
        text: "No. A good automation partner builds the system around how your business already works, connects it to the tools you use, and trains your team to run it without coding. You should get a clear plan and quote before any build starts.",
      },
      {
        type: "links",
        title: "Work with ZOUM",
        links: [
          { label: "AI automation and software development", to: "/services/ai-automation" },
          { label: "AI Automation Masterclass", to: "/courses/ai-automation-n8n-masterclass" },
          { label: "Contact us for a free strategy call", to: "/contact" },
        ],
      },
    ],
  },
];
