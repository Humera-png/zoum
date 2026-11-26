import type { Post } from "./blog";

// Guides for the global IT and AI service pages (software, AI agents and
// chatbots, mobile apps, n8n automation). Each links to its service page, so
// it also appears in that page's "Guides" section.

const SOFTWARE = { label: "Custom software development", to: "/services/software-development" };
const AI_AGENTS = { label: "AI agents and chatbots", to: "/services/ai-agents-chatbots" };
const APPS = { label: "Mobile app development", to: "/services/mobile-app-development" };
const N8N = { label: "n8n workflow automation", to: "/services/n8n-automation" };
const CONTACT = { label: "Get a free project estimate", to: "/contact" };

export const itGuides: Post[] = [
  {
    slug: "navialabs-case-study",
    seoTitle: "NaviaLabs Case Study: Building a SaaS Platform",
    title: "Case Study: How We Built NaviaLabs, a Multi-Location Operations SaaS",
    description:
      "How the ZOUM team designed, built and launched NaviaLabs, a live SaaS platform for inventory, purchasing, forecasting and an AI operations agent.",
    date: "2026-11-26",
    category: "AI & Business",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "NaviaLabs (navialabs.si) is a live operations platform for businesses that hold stock in more than one place: stores, godowns and warehouses. It was designed, built and launched by the founders of ZOUM, and we run it ourselves. This case study explains the problem, what we built, and what it shows about how we build software for clients.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Businesses with several locations usually track stock in separate spreadsheets, registers and WhatsApp messages. The owner sees the full picture too late: one store runs out while another holds the same item unsold, purchase orders are written from memory, and slow-moving stock goes unnoticed until it becomes a loss.",
      },
      { type: "h2", text: "What we built" },
      {
        type: "ul",
        items: [
          "One live view of stock across every store and warehouse, with a status for every item: critical, low, healthy or overstocked.",
          "A daily Needs Attention list: what is out, at its minimum or about to run out, and which location can spare it.",
          "Purchasing from request to receipt: purchase requests, approvals, purchase orders, and receiving including part deliveries.",
          "A check on the purchase order form that warns when another location already holds the stock unsold.",
          "Demand and reorder forecasts calculated from the business's own sales history.",
          "Ask Navia, an AI operations agent that answers questions in plain language from the business's own data and shows where each figure comes from.",
          "Data import from Excel that checks every row before anything is saved, plus roles and permissions for the team.",
        ],
      },
      { type: "h2", text: "How we built it" },
      {
        type: "ul",
        items: [
          "A web application that works in any browser on desktop, tablet and phone, with nothing to install.",
          "Multi-tenant SaaS architecture: sign-in, organisations, roles, subscriptions and an internal admin panel.",
          "A managed cloud database and automatic deployments, so new features ship routinely.",
          "AI used where it helps (answering questions, reading supplier invoices) and exact calculations where they matter (stock, forecasts, reorder suggestions), so every number can be checked.",
          "Search-optimised marketing pages, a glossary and guides, so the product can be found on Google.",
        ],
      },
      { type: "h2", text: "What it shows about working with us" },
      {
        type: "p",
        text: "We build client products the way we built our own: a clear scope first, working software at every milestone, honest claims about what the software does, and support after launch. If you're planning a SaaS product, an internal tool or an AI agent, NaviaLabs is the clearest example of what we can deliver.",
      },
      {
        type: "links",
        title: "Related",
        links: [
          { label: "Visit NaviaLabs", to: "https://navialabs.si" },
          SOFTWARE,
          AI_AGENTS,
          CONTACT,
        ],
      },
    ],
    faqs: [
      {
        q: "Who built NaviaLabs?",
        a: "NaviaLabs was designed, built and launched by the founders of ZOUM Consultancy, who also run it.",
      },
      {
        q: "Can ZOUM build a SaaS product like NaviaLabs for my business?",
        a: "Yes. We build custom software, SaaS products and AI agents for clients in India and worldwide, starting with a free discovery call and a written scope.",
      },
    ],
  },
  {
    slug: "how-to-hire-an-n8n-developer",
    seoTitle: "How to Hire an n8n Developer (Checklist)",
    title: "How to Hire an n8n Developer: A Practical Checklist",
    description:
      "What an n8n developer does, the skills to check, questions to ask before you hire, and how to scope your first automation project so it succeeds.",
    date: "2026-11-25",
    category: "AI & Automation",
    readMinutes: 7,
    body: [
      {
        type: "p",
        text: "n8n is a workflow automation platform that connects your apps and moves data between them without anyone copying and pasting. Many businesses start with a few simple workflows themselves, then hire an n8n developer when the automations become business-critical. This guide explains what to look for, what to ask, and how to set up the first project so it pays off.",
      },
      { type: "h2", text: "What an n8n developer does" },
      {
        type: "ul",
        items: [
          "Maps your current process and finds the steps worth automating.",
          "Builds workflows that connect your tools: CRM, email, WhatsApp, Google Sheets, databases and APIs.",
          "Handles errors, retries and edge cases, so a workflow doesn't silently fail at 2 a.m.",
          "Adds AI steps where they help, such as sorting enquiries or drafting replies.",
          "Sets up hosting on n8n cloud or your own server, and documents what runs and when.",
        ],
      },
      { type: "h2", text: "Skills to check before you hire" },
      {
        type: "ul",
        items: [
          "Real n8n workflows they've built, ideally shown live, not only screenshots.",
          "Working knowledge of APIs, webhooks and JSON, because most real automations need them.",
          "Error handling: ask how they make sure you find out when a workflow fails.",
          "Security habits: how they store credentials and limit access to your data.",
          "Clear documentation, so your team isn't stuck if the developer is unavailable.",
        ],
      },
      { type: "h2", text: "Questions to ask in the first call" },
      {
        type: "ul",
        items: [
          "Which of our processes would you automate first, and why?",
          "Where will the workflows run: n8n cloud or our server? What does each cost us?",
          "How will we know if a workflow breaks?",
          "Who owns the workflows and credentials at the end of the project?",
          "What does support look like after launch?",
        ],
      },
      { type: "h2", text: "How to scope your first project" },
      {
        type: "p",
        text: "Start with one workflow that saves real time every week, such as lead follow-up or order processing, instead of automating everything at once. Write down the trigger, the steps, the tools involved and what 'done' looks like. A good developer will turn that into a written scope with a timeline and price before building.",
      },
      { type: "h2", text: "Freelancer, agency or in-house?" },
      {
        type: "p",
        text: "A freelancer can suit one small workflow. An agency suits several connected workflows, ongoing changes and support, because more than one person knows your setup. An in-house hire makes sense once automation is a large, permanent part of your operations. Many businesses start with an agency and train their own team later.",
      },
      {
        type: "links",
        title: "Related",
        links: [N8N, AI_AGENTS, { label: "AI Automation (n8n) course", to: "/courses/ai-automation-n8n-masterclass" }, CONTACT],
      },
    ],
    faqs: [
      {
        q: "What is an n8n developer?",
        a: "An n8n developer designs, builds and maintains automated workflows in n8n that connect a business's apps, handle errors, and often include AI steps.",
      },
      {
        q: "Can I hire an n8n developer from another country?",
        a: "Yes. n8n work is done remotely. Agree working hours for calls, written scope, ownership of workflows and credentials, and support terms in the contract.",
      },
      {
        q: "Is n8n better than Zapier?",
        a: "n8n suits complex, multi-step workflows and can be self-hosted, which gives more control over data and cost. Zapier is quick for simple automations. The right choice depends on your workflows.",
      },
    ],
  },
  {
    slug: "ai-chatbot-for-business",
    seoTitle: "AI Chatbot for Business: Uses, Costs, Setup",
    title: "AI Chatbot for Business: What It Can Do and How to Start",
    description:
      "What an AI chatbot can do for a business, where it works best, what affects the cost, and the steps to launch one that gives correct answers.",
    date: "2026-11-25",
    category: "AI & Automation",
    readMinutes: 7,
    body: [
      {
        type: "p",
        text: "An AI chatbot answers customer and team questions in plain language, any time of day. The difference between a useful chatbot and an embarrassing one is almost always the same thing: whether it answers from your own information, and whether it knows when to hand over to a person.",
      },
      { type: "h2", text: "What an AI chatbot can do" },
      {
        type: "ul",
        items: [
          "Answer common questions about your products, prices, policies and opening hours.",
          "Capture leads outside working hours and pass them to your team with the details.",
          "Help customers track orders or bookings by connecting to your systems.",
          "Answer staff questions from internal documents, such as policies and process guides.",
          "Hand the conversation to a person when the question is complex or sensitive.",
        ],
      },
      { type: "h2", text: "Where to put it: website or WhatsApp" },
      {
        type: "p",
        text: "A website chatbot catches visitors while they're reading about you. A WhatsApp chatbot meets customers in the app they already use every day, which matters in markets like India and the Middle East. Many businesses start with one channel and add the second once the answers are reliable.",
      },
      { type: "h2", text: "What makes a chatbot give correct answers" },
      {
        type: "ul",
        items: [
          "It is connected to your documents, FAQs and product data, not left to guess.",
          "It is told what it must not do, such as promise discounts or give legal advice.",
          "It is tested on real customer questions before launch.",
          "Someone reviews conversations after launch and fixes weak answers.",
        ],
      },
      { type: "h2", text: "What affects the cost" },
      {
        type: "ul",
        items: [
          "The number of channels: website, WhatsApp, or both.",
          "How much data it learns from, and how often that data changes.",
          "Integrations with your CRM, booking or order systems.",
          "Ongoing AI usage, which depends on how many conversations it handles.",
        ],
      },
      { type: "h2", text: "How to launch one in 5 steps" },
      {
        type: "ul",
        items: [
          "List the 20 questions customers ask most often, with the right answers.",
          "Choose the first channel and what should happen when the bot can't answer.",
          "Connect your data and set the rules.",
          "Test with real questions from your team, and fix every wrong answer.",
          "Launch, review conversations weekly, and expand once it's reliable.",
        ],
      },
      { type: "links", title: "Related", links: [AI_AGENTS, N8N, CONTACT] },
    ],
    faqs: [
      {
        q: "Can an AI chatbot answer from my own business information?",
        a: "Yes. It can be connected to your documents, FAQs and product data so it answers from your facts, and it can say when it doesn't know.",
      },
      {
        q: "Will an AI chatbot replace my support team?",
        a: "It usually takes over repetitive questions so your team can focus on complex cases. A good setup always lets customers reach a person.",
      },
      {
        q: "Can a chatbot work on WhatsApp?",
        a: "Yes. AI chatbots can run on WhatsApp as well as on your website, and can pass leads to your CRM or team.",
      },
    ],
  },
  {
    slug: "ai-agents-vs-chatbots",
    seoTitle: "AI Agents vs Chatbots: The Difference",
    title: "AI Agents vs Chatbots: What's the Difference for Your Business?",
    description:
      "A chatbot answers questions; an AI agent also takes actions. How they differ, examples of each, and how to decide which your business needs first.",
    date: "2026-11-25",
    category: "AI & Automation",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "Chatbot and AI agent are often used as if they mean the same thing. They don't. The difference decides what you can automate, how much it costs, and how much control you need to keep.",
      },
      { type: "h2", text: "A chatbot answers" },
      {
        type: "p",
        text: "A chatbot holds a conversation and answers questions. A good one answers from your own information: products, policies, prices, opening hours. It doesn't change anything in your systems; it informs.",
      },
      { type: "h2", text: "An AI agent acts" },
      {
        type: "p",
        text: "An AI agent understands a request and carries out the steps to complete it: looking up a record, preparing a reply, updating a CRM, creating a task or booking an appointment. Because it changes things, it needs clear rules and, for important actions, a person's approval.",
      },
      { type: "h2", text: "Examples" },
      {
        type: "ul",
        items: [
          "Chatbot: \"What are your delivery charges to Dubai?\" It answers from your policy.",
          "Agent: \"Reschedule my appointment to Friday.\" It checks the calendar, moves the booking and confirms.",
          "Chatbot: \"Do you build mobile apps?\" It explains and links to the right page.",
          "Agent: a new lead arrives, so it qualifies the lead, adds it to the CRM and drafts a follow-up for approval.",
        ],
      },
      { type: "h2", text: "Which should you start with?" },
      {
        type: "p",
        text: "Most businesses start with a chatbot, because it's lower risk and quickly shows which questions come up most. Once the answers are reliable, add agent actions one at a time, starting with tasks that are repetitive, low risk and easy to check.",
      },
      { type: "h2", text: "Keeping agents safe" },
      {
        type: "ul",
        items: [
          "Give the agent access only to the systems and data it needs.",
          "Require approval for actions that cost money or can't be undone.",
          "Log every action so you can see what it did and why.",
          "Start small, review results, then widen what it's allowed to do.",
        ],
      },
      { type: "links", title: "Related", links: [AI_AGENTS, N8N, SOFTWARE, CONTACT] },
    ],
    faqs: [
      {
        q: "What is the main difference between an AI agent and a chatbot?",
        a: "A chatbot answers questions in a conversation. An AI agent can also take actions in your systems, such as updating records or booking appointments.",
      },
      {
        q: "Are AI agents safe to use in a business?",
        a: "Yes, when they have limited access, need approval for important actions, and log everything they do.",
      },
    ],
  },
  {
    slug: "custom-software-vs-off-the-shelf",
    seoTitle: "Custom Software vs Off-the-Shelf: How to Choose",
    title: "Custom Software vs Off-the-Shelf Software: How to Choose",
    description:
      "When ready-made software is enough, when custom software pays off, and a simple checklist to decide which is right for your business.",
    date: "2026-11-25",
    category: "AI & Business",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "Every growing business eventually asks the same question: keep adapting to ready-made tools, or build software that fits how we work? Neither is always right. Here's how to decide.",
      },
      { type: "h2", text: "When off-the-shelf software is enough" },
      {
        type: "ul",
        items: [
          "Your process is standard, such as accounting, email or basic CRM.",
          "Many good tools exist and one covers most of what you need.",
          "You need it working this week, not in a few months.",
          "The monthly subscription costs less than the time you'd spend building.",
        ],
      },
      { type: "h2", text: "When custom software pays off" },
      {
        type: "ul",
        items: [
          "Your process is what makes you different, and tools force you to work around it.",
          "Your team copies data between several tools every day.",
          "You pay for many seats or add-ons and use a small part of them.",
          "You want to sell the software to others as a SaaS product.",
        ],
      },
      { type: "h2", text: "The middle path" },
      {
        type: "p",
        text: "You often don't have to choose. Keep standard tools for standard work, and connect them with automation or a small custom tool for the part that's unique to you. This is usually faster and cheaper than replacing everything.",
      },
      { type: "h2", text: "A 5-question checklist" },
      {
        type: "ul",
        items: [
          "Does an existing tool cover at least 80 percent of what we need?",
          "How many hours a week do we lose working around our current tools?",
          "Is this process a competitive advantage for us?",
          "Who will maintain custom software after launch?",
          "Could automation between existing tools solve it instead?",
        ],
      },
      { type: "h2", text: "What to expect from a custom build" },
      {
        type: "p",
        text: "A good development partner starts with discovery, writes a scope with milestones and a price, shows you designs before building, and delivers working software in stages. Our own product, NaviaLabs, started as custom software for a problem off-the-shelf tools didn't solve well.",
      },
      { type: "links", title: "Related", links: [SOFTWARE, N8N, APPS, CONTACT] },
    ],
    faqs: [
      {
        q: "Is custom software more expensive than off-the-shelf software?",
        a: "Upfront, usually yes. Over time it can cost less if it replaces several subscriptions and hours of manual work. Compare the total cost over two to three years.",
      },
      {
        q: "Can custom software work with tools we already use?",
        a: "Yes. Custom software can connect to existing tools through their APIs, so you keep what works and build only what's missing.",
      },
    ],
  },
  {
    slug: "outsourcing-software-development-to-india",
    seoTitle: "Outsourcing Software Development to India",
    title: "Outsourcing Software Development to India: A Buyer's Guide",
    description:
      "Why companies outsource software development to India, how to choose a partner, what to put in the contract, and how to make remote projects run smoothly.",
    date: "2026-11-25",
    category: "AI & Business",
    readMinutes: 8,
    body: [
      {
        type: "p",
        text: "Companies in the US, UK, Europe, the Middle East and Australia have outsourced software work to India for decades. Done well, it gives you an experienced team at a sensible cost. Done badly, it gives you missed deadlines and code nobody can maintain. The difference is in how you choose the partner and set up the project.",
      },
      { type: "h2", text: "Why companies outsource to India" },
      {
        type: "ul",
        items: [
          "A large pool of experienced developers across web, mobile, AI and automation.",
          "Lower cost than hiring locally in many markets, without lowering standards if you choose well.",
          "English is widely used in business and technical work.",
          "Time zone differences can mean work continues while your team sleeps.",
        ],
      },
      { type: "h2", text: "How to choose a partner" },
      {
        type: "ul",
        items: [
          "Look at real, live products they've built, not only screenshots.",
          "Talk to the people who will actually build your project.",
          "Check how they write scopes, estimate and report progress.",
          "Ask how they handle changes, bugs and support after launch.",
          "Read reviews from clients in your country if you can.",
        ],
      },
      { type: "h2", text: "What to put in the contract" },
      {
        type: "ul",
        items: [
          "Scope, milestones and what counts as 'done' for each.",
          "Price, payment schedule and currency.",
          "Ownership of code, designs and accounts, and handover at the end.",
          "Confidentiality, with an NDA if needed.",
          "Support and maintenance terms after launch.",
        ],
      },
      { type: "h2", text: "Making remote projects run smoothly" },
      {
        type: "ul",
        items: [
          "Agree a fixed overlap window for calls in both time zones.",
          "Get working software at every milestone, not only at the end.",
          "Use one shared place for tasks, decisions and files.",
          "Name one decision-maker on your side to avoid conflicting instructions.",
        ],
      },
      { type: "h2", text: "Red flags" },
      {
        type: "ul",
        items: [
          "A fixed price given before anyone asks about your requirements.",
          "No written scope, or a scope full of vague promises.",
          "You can't speak to the developers, only to sales.",
          "No answer to 'who owns the code?'",
        ],
      },
      { type: "links", title: "Related", links: [SOFTWARE, APPS, AI_AGENTS, CONTACT] },
    ],
    faqs: [
      {
        q: "Is it safe to outsource software development to India?",
        a: "Yes, when you choose a partner with real products and references, and the contract covers scope, code ownership, confidentiality and support.",
      },
      {
        q: "How do time zones work with an Indian development team?",
        a: "Most teams agree a daily or weekly overlap window for calls in your working hours, and share written progress updates in between.",
      },
      {
        q: "Can I pay an Indian development company in US dollars?",
        a: "Many Indian companies, including ZOUM, invoice international clients in US dollars or another agreed currency.",
      },
    ],
  },
  {
    slug: "mobile-app-development-process",
    seoTitle: "Mobile App Development Process: 7 Steps",
    title: "The Mobile App Development Process, Step by Step",
    description:
      "The 7 steps from app idea to App Store and Google Play: discovery, scope, design, build, testing, launch and support, and what to decide at each step.",
    date: "2026-11-25",
    category: "AI & Business",
    readMinutes: 7,
    body: [
      {
        type: "p",
        text: "Building an app is less about code than about decisions: who it's for, what it must do first, and what can wait. Here are the seven steps most successful apps go through, and what you decide at each one.",
      },
      { type: "h2", text: "1. Discovery" },
      {
        type: "p",
        text: "Define who the app is for, the one main problem it solves, and how you'll measure success. Decide which platform matters first: Android, iOS or both.",
      },
      { type: "h2", text: "2. Scope" },
      {
        type: "p",
        text: "List the features for the first version and the ones that can wait. A written scope with screens, features, milestones and price prevents most disagreements later.",
      },
      { type: "h2", text: "3. Design" },
      {
        type: "p",
        text: "Clickable designs let you try the app before it's built. Changing a design is quick; changing built code is slow and expensive.",
      },
      { type: "h2", text: "4. Build" },
      {
        type: "p",
        text: "The app, its backend (server and database) and an admin panel are built in milestones. You should get a test version on your phone at each milestone.",
      },
      { type: "h2", text: "5. Testing" },
      {
        type: "p",
        text: "Test on real devices, with real users if possible. Check slow networks, small screens and what happens when something goes wrong.",
      },
      { type: "h2", text: "6. Launch" },
      {
        type: "p",
        text: "Submit to the App Store and Google Play with screenshots, descriptions and privacy details. Apple's review is stricter, so follow its guidelines from the design stage.",
      },
      { type: "h2", text: "7. Support and growth" },
      {
        type: "p",
        text: "After launch, fix issues, update for new phone operating systems, and add features based on how people actually use the app.",
      },
      { type: "h2", text: "Native or cross-platform?" },
      {
        type: "p",
        text: "Native apps are built separately for Android and iOS. Cross-platform apps share one codebase for both. Cross-platform often saves time and cost; native can suit apps that rely heavily on device features. A good team recommends one after discovery, not before.",
      },
      { type: "links", title: "Related", links: [APPS, SOFTWARE, CONTACT] },
    ],
    faqs: [
      {
        q: "How long does it take to build a mobile app?",
        a: "It depends on the screens, features, backend and integrations. A written scope with milestones gives you a realistic timeline before work starts.",
      },
      {
        q: "Do I need a backend for my app?",
        a: "Most apps with user accounts, orders, bookings or content need a backend: a server, database and admin panel to manage them.",
      },
    ],
  },
];
