// Extra depth for the strongest articles (20 Nov 2026). Each entry adds new
// sections, inserted before the article's closing "links" block, and extra
// FAQs. The original text is untouched. Merged in blog.ts.
//
// Same rules as every article: practical, honest, no invented salaries,
// placement rates, statistics or stories.
import type { Block } from "./blog";

export type Expansion = {
  updated: string; // YYYY-MM-DD, shown as dateModified
  blocks: Block[];
  faqs?: { q: string; a: string }[];
};

const U = "2026-11-20";

export const expansions: Record<string, Expansion> = {
  // ───────────── Careers ─────────────
  "bpo-jobs-in-jaipur-for-freshers": {
    updated: U,
    blocks: [
      { type: "h2", text: "Voice, non-voice and chat: which one suits you?" },
      {
        type: "p",
        text: "Most freshers apply to every BPO opening they see. You'll do better if you pick the process type that matches your strengths, because each one tests different things in the interview.",
      },
      {
        type: "ul",
        items: [
          "Voice process: you speak to customers on calls all day. It suits people who are comfortable talking, stay calm when someone is upset, and speak clearly. Interviews include a voice or spoken English test.",
          "Non-voice process: back-office work such as data entry, claims processing or document checks. It suits careful, patient people who type accurately. Interviews often include a typing or accuracy test.",
          "Chat and email support: you solve customer problems in writing. It suits people with good written English and fast typing, who can handle two or three chats at once.",
          "Domestic or international: domestic processes serve customers in India, often in Hindi or a regional language, mostly in day or rotational shifts. International processes serve customers abroad in English, often in night shifts that match the customer's time zone.",
        ],
      },
      { type: "h2", text: "A typical day in a BPO job" },
      {
        type: "p",
        text: "Your shift starts with a short team briefing: updates about the product, offers or common customer issues. Then you log in to the calling or ticketing system and start taking calls, chats or tasks. Between calls you add notes to the customer record, because the next person who speaks to that customer depends on them.",
      },
      {
        type: "p",
        text: "Your work is measured. Common measures are how many calls or tasks you complete, how long each one takes, whether you solved the problem the first time, and quality scores given by a team member who listens to a sample of your calls. New joiners usually get a few weeks of training and a period of close support on the floor before they're expected to meet full targets.",
      },
      { type: "h2", text: "Documents to keep ready" },
      {
        type: "ul",
        items: [
          "Several printed copies of your resume, plus a PDF on your phone.",
          "Your 10th, 12th and graduation mark sheets, or your latest result if you're still studying.",
          "ID and address proof, such as Aadhaar and PAN.",
          "Passport-size photographs.",
          "Relieving letter and salary slips if you have worked before, even part-time.",
          "Bank account details for salary, if you get selected.",
        ],
      },
      { type: "h2", text: "Questions to ask before you accept an offer" },
      {
        type: "p",
        text: "An offer is exciting, but a few questions now save problems later. Ask them politely; good employers expect them.",
      },
      {
        type: "ul",
        items: [
          "What are the shift timings, and how often do they rotate?",
          "Is transport provided for night shifts?",
          "What is the fixed salary, and what part depends on incentives or targets?",
          "How long is the training period, and is it paid?",
          "When does the first appraisal happen, and what is it based on?",
          "What are the weekly offs, and how are leaves approved?",
        ],
      },
      { type: "h2", text: "How to grow after your first BPO job" },
      {
        type: "p",
        text: "The usual path runs from associate to senior associate, then to roles such as quality analyst, trainer, subject matter expert or team leader. People who move up fastest share a few habits: they keep their quality scores steady, help new joiners, learn the product deeply and keep improving their communication. Many also use BPO experience to move into sales, customer success, operations or HR later, because the skills carry over well.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between voice and non-voice BPO jobs?",
        a: "In a voice process you speak to customers on calls. In a non-voice process you do back-office work such as data entry, claims or document checks, or support customers in writing through chat and email.",
      },
      {
        q: "Are night shifts compulsory in BPO jobs?",
        a: "Not always. International processes often run night shifts to match customers abroad, while many domestic processes run day or rotational shifts. Ask about shift timings and transport before accepting an offer.",
      },
    ],
  },

  "how-to-clear-a-call-centre-interview": {
    updated: U,
    blocks: [
      { type: "h2", text: "What happens in each round, in more detail" },
      {
        type: "ul",
        items: [
          "HR screening: a short conversation about your background, availability, shift preference and location. The interviewer is also listening to how clearly and confidently you speak.",
          "Voice or communication assessment: you may read a paragraph aloud, listen to a short audio clip and answer questions, or speak on a simple topic for a minute. Some companies use an automated test on a computer or phone.",
          "Typing or written test: common for chat, email and non-voice processes. You may be asked to type a passage or write a short reply to a customer.",
          "Operations round: a team leader or manager checks how you would handle real situations, often through a role-play call.",
          "Final HR round: salary, joining date, documents and shift details.",
        ],
      },
      { type: "h2", text: "How to handle the role-play call" },
      {
        type: "p",
        text: "The role-play is where many candidates are selected or rejected. The interviewer plays a customer, often an unhappy one, and watches how you respond. You aren't expected to know the product. You're expected to stay calm and follow a sensible structure.",
      },
      {
        type: "ul",
        items: [
          "Greet the customer and introduce yourself.",
          "Listen fully without interrupting, then repeat the problem back in your own words.",
          "Apologise for the trouble, even if it isn't your fault: \"I'm sorry you've had to deal with this.\"",
          "Ask one or two questions to understand the issue.",
          "Offer a clear next step, and say when the customer will hear back.",
          "Close politely and ask if there's anything else you can help with.",
        ],
      },
      {
        type: "p",
        text: "If the customer keeps shouting, lower your pace and volume rather than raising them. Interviewers are checking whether you can control the call without arguing.",
      },
      { type: "h2", text: "A simple practice plan for the week before" },
      {
        type: "ul",
        items: [
          "Day 1: write your one-minute introduction and practise it out loud until it sounds natural.",
          "Day 2: read an English news article aloud for 10 minutes and record yourself. Note words you rush or swallow.",
          "Day 3: practise the angry-customer role-play with a friend, swapping roles.",
          "Day 4: practise \"Sell me this pen\" and one product you know well, such as your phone.",
          "Day 5: prepare honest answers about shifts, location and joining date.",
          "Day 6: do a full mock interview with someone who will give you honest feedback.",
          "Day 7: rest, prepare your documents and plan your route to the interview.",
        ],
      },
      { type: "h2", text: "What to wear and what to carry" },
      {
        type: "p",
        text: "Formal or neat business-casual clothes are safe for almost every call centre interview: a clean shirt, trousers or a simple kurta, and closed shoes. Carry printed copies of your resume, your ID, mark sheets, photographs, a pen, water and a charged phone. Interview days at large centres can be long, with several rounds and waiting time in between, so arrive early and expect to stay a few hours.",
      },
      { type: "h2", text: "If you're rejected" },
      {
        type: "p",
        text: "Ask the recruiter which round you didn't clear and why. Most rejections come down to communication clarity, nervousness in the role-play, or unclear availability for shifts, and all three improve with practice. Many companies allow you to reapply after a gap, so use that time for focused practice rather than applying everywhere at once.",
      },
    ],
    faqs: [
      {
        q: "What is a role-play in a call centre interview?",
        a: "The interviewer acts as a customer, often an unhappy one, and you handle the call. They check whether you listen, stay calm, apologise, ask sensible questions and offer a clear next step.",
      },
      {
        q: "What should I wear to a call centre interview?",
        a: "Formal or neat business-casual clothes, such as a clean shirt with trousers or a simple kurta, and closed shoes. Carry your resume, ID, mark sheets and photographs.",
      },
    ],
  },

  "best-courses-after-12th-for-it-jobs": {
    updated: U,
    blocks: [
      { type: "h2", text: "Degree, diploma or short course?" },
      {
        type: "p",
        text: "After 12th, students usually choose between a degree (such as BCA, B.Sc. IT or B.Tech), a diploma, or a short skill course. These aren't competitors. A degree opens doors at companies that filter by qualification, while a skill course gives you the practical ability that interviews actually test. Many students do a short course alongside their degree, which is often the strongest combination.",
      },
      {
        type: "ul",
        items: [
          "Degree: takes three to four years, widely accepted by employers, but often light on hands-on projects.",
          "Diploma: shorter, more practical, accepted for many technical support and junior roles.",
          "Short skill course: weeks or months, focused on one skill such as Python, web development or data analytics, best when it includes real projects and interview preparation.",
        ],
      },
      { type: "h2", text: "Which course fits which kind of student?" },
      {
        type: "ul",
        items: [
          "You enjoy logic and puzzles: start with Python. It's beginner-friendly and leads to automation, data and AI work.",
          "You like building things people can see and use: web development, starting with HTML, CSS and JavaScript.",
          "You're good with numbers and enjoy finding patterns: data analytics, starting with Excel and SQL.",
          "You're curious about AI tools and want to build with them: an AI and machine learning foundations course, after basic Python.",
          "You want an office job quickly and are not sure about coding: workplace digital skills such as Excel, documents and online tools.",
        ],
      },
      { type: "h2", text: "Questions to ask before you pay for any course" },
      {
        type: "ul",
        items: [
          "Will I build real projects I can show in interviews, or only watch lessons?",
          "Who teaches it, and have they worked in the industry?",
          "Are classes live, and can I ask questions when I'm stuck?",
          "Does it include resume, LinkedIn and mock interview help?",
          "Is the fee one-time, with no extra charges later?",
          "What exactly does \"placement assistance\" mean here? Be careful of anyone who guarantees a job.",
        ],
      },
      { type: "h2", text: "A realistic first-year plan" },
      {
        type: "p",
        text: "In your first three months, learn one skill properly rather than five skills badly. In the next three months, build two or three small projects and put them on GitHub. By the end of the year, have a one-page resume, a complete LinkedIn profile, and practise for interviews. Students who follow a plan like this usually feel far more confident in their first interviews than those who only collect certificates.",
      },
    ],
    faqs: [
      {
        q: "Can I get an IT job without a degree?",
        a: "Some roles, especially in technical support, web development and testing, hire on skills and projects. A degree still helps at companies that filter by qualification, so many students do a skill course alongside their degree.",
      },
      {
        q: "Which IT course is easiest for a beginner after 12th?",
        a: "Python and basic web development (HTML, CSS, JavaScript) are the most beginner-friendly. Workplace digital skills are a good start if you're not sure about coding yet.",
      },
    ],
  },

  "it-jobs-for-freshers-in-jaipur-and-ahmedabad": {
    updated: U,
    blocks: [
      { type: "h2", text: "What each fresher IT role actually involves" },
      {
        type: "ul",
        items: [
          "Technical support: helping users fix software, network or device problems by phone, chat or in person. A common entry point that teaches you how systems work.",
          "Junior web developer: building and fixing parts of websites under a senior developer's guidance.",
          "Software tester (QA): checking that features work as expected, writing down bugs clearly, and later learning to automate tests.",
          "Data or MIS executive: preparing reports in Excel or simple tools, keeping data clean and answering questions with numbers.",
          "IT operations or desktop support: setting up computers, accounts and networks inside a company.",
        ],
      },
      { type: "h2", text: "Projects that impress interviewers" },
      {
        type: "p",
        text: "Without work experience, projects are your proof. Two or three finished, working projects beat ten half-done tutorials. Good fresher projects solve a small real problem and are simple to demonstrate.",
      },
      {
        type: "ul",
        items: [
          "A personal portfolio website with your projects and contact details.",
          "A small web app, such as an expense tracker or a booking form that saves data.",
          "A Python script that automates something boring, such as renaming files or cleaning a spreadsheet.",
          "A data project: take a public dataset, clean it, and show three clear findings in a chart or dashboard.",
        ],
      },
      {
        type: "p",
        text: "Put the code on GitHub with a short README explaining what the project does and how to run it. In interviews, be ready to explain one decision you made and one problem you solved while building it.",
      },
      { type: "h2", text: "Where to find openings" },
      {
        type: "ul",
        items: [
          "Job portals and LinkedIn, with alerts for fresher roles in your city.",
          "Company career pages of IT firms with offices in Jaipur and Ahmedabad.",
          "Campus drives and pool campus events.",
          "Recruitment consultancies that work directly with hiring companies.",
          "Referrals from seniors and friends already working in IT, which often get your resume read faster.",
        ],
      },
      { type: "h2", text: "Common mistakes freshers make" },
      {
        type: "ul",
        items: [
          "Listing every technology heard of instead of the few they can actually use.",
          "Copying projects from tutorials without understanding or changing them.",
          "Applying to hundreds of jobs with the same resume, instead of matching it to each role.",
          "Ignoring communication skills, which are tested in nearly every IT interview.",
        ],
      },
      { type: "h2", text: "A 90-day plan to get job-ready" },
      {
        type: "ul",
        items: [
          "Days 1 to 30: choose one role and learn its core skill properly, such as JavaScript for web, testing basics for QA, or Excel and SQL for data.",
          "Days 31 to 60: build two small projects and put them on GitHub with clear READMEs.",
          "Days 61 to 75: rewrite your resume around those projects and complete your LinkedIn profile.",
          "Days 76 to 90: apply to roles that match, practise mock interviews, and improve after every interview.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which IT jobs are easiest for freshers to get?",
        a: "Technical support, software testing, MIS or data executive roles and junior web development commonly hire freshers, especially candidates who can show working projects and communicate clearly.",
      },
      {
        q: "How many projects should a fresher have on their resume?",
        a: "Two or three finished, working projects are enough if you can explain them well. Quality and understanding matter more than the number.",
      },
    ],
  },

  "hr-interview-questions-for-freshers": {
    updated: U,
    blocks: [
      { type: "h2", text: "More questions freshers are often asked" },
      { type: "h3", text: "8. Tell me about a challenge you faced and how you handled it." },
      {
        type: "p",
        text: "Use a simple structure: the situation, what you had to do, what you actually did, and the result. A college project with a difficult deadline, a group where someone didn't contribute, or a part-time job with a hard customer all work. Focus on your actions, not on blaming others.",
      },
      { type: "h3", text: "9. Are you comfortable relocating or working in shifts?" },
      {
        type: "p",
        text: "Answer honestly. If you can't do night shifts or move cities, say so politely now. Saying yes and refusing later wastes everyone's time and can cost you the offer.",
      },
      { type: "h3", text: "10. Why is there a gap in your education?" },
      {
        type: "p",
        text: "Give a short, honest reason: preparing for an exam, family responsibilities, health or a course you took. Then move to what you learned or did in that time. Interviewers mainly want to know the gap is explained and behind you.",
      },
      { type: "h3", text: "11. Do you have any other offers?" },
      {
        type: "p",
        text: "Be truthful without bargaining aggressively. If you have one, say so and explain why this role still interests you. If you don't, simply say you're focused on finding the right first role.",
      },
      { type: "h3", text: "12. How do you handle pressure or deadlines?" },
      {
        type: "p",
        text: "Describe your method, then give a short example: breaking work into steps, starting early, asking for help when stuck. Avoid saying you never feel pressure, which no one believes.",
      },
      { type: "h2", text: "How to prepare in the 24 hours before" },
      {
        type: "ul",
        items: [
          "Read the company's website and recent news, and note one thing you genuinely find interesting.",
          "Re-read the job description and match two of your strengths to it.",
          "Say your answers out loud, not just in your head.",
          "Prepare two questions to ask the interviewer.",
          "Keep your documents, resume copies and clothes ready the night before.",
          "For online interviews: test your camera, microphone and internet, and sit facing a light.",
        ],
      },
      { type: "h2", text: "Body language in the HR round" },
      {
        type: "p",
        text: "Sit upright, keep your hands relaxed on the table or your lap, and make natural eye contact with whoever is speaking. Smile when you greet the interviewer and when you leave. On video calls, look at the camera when you speak, not at your own picture. Small things like these tell the interviewer you're calm and serious about the role.",
      },
      { type: "h2", text: "After the interview" },
      {
        type: "p",
        text: "If you have the interviewer's email or the recruiter's number, send a short thank-you message the same day. If you haven't heard back by the date they mentioned, follow up once, politely. Write down the questions you found difficult, so your next interview is easier.",
      },
    ],
    faqs: [
      {
        q: "How do I explain a gap in my education in an HR interview?",
        a: "Give a short, honest reason, such as exam preparation, family responsibilities or health, then explain what you learned or did during that time.",
      },
      {
        q: "Should I send a thank-you message after an HR interview?",
        a: "Yes. A short, polite thank-you message the same day leaves a good impression. If you don't hear back by the date given, follow up once.",
      },
    ],
  },

  "how-to-improve-spoken-english-for-jobs": {
    updated: U,
    blocks: [
      { type: "h2", text: "A 30-day practice plan" },
      {
        type: "ul",
        items: [
          "Week 1, speaking every day: 10 minutes of talking aloud about your day, plus recording and listening to one short clip.",
          "Week 2, useful phrases: learn five work phrases a day, such as \"Could you clarify what you mean?\" and \"I'll update you by this evening\", and use each one in a sentence aloud.",
          "Week 3, interview answers: practise your introduction and five common interview answers, recording each until they sound natural.",
          "Week 4, real conversations: hold three mock interviews or practice calls with someone who will correct you, and note the mistakes you repeat.",
        ],
      },
      { type: "h2", text: "Common mistakes and quick fixes" },
      {
        type: "ul",
        items: [
          "Translating from Hindi or Gujarati word by word: learn complete English phrases instead, so you don't build sentences in your head first.",
          "\"I am having two years experience\": say \"I have two years of experience.\"",
          "\"Myself Rahul\": say \"My name is Rahul\" or \"I'm Rahul.\"",
          "\"Please do the needful\": say exactly what you need, such as \"Could you please send the report by 5 pm?\"",
          "Speaking too fast when nervous: slow down deliberately. Clear and slow is better than fast and confusing.",
        ],
      },
      { type: "h2", text: "English on phone calls" },
      {
        type: "p",
        text: "Phone English is harder than face-to-face English because the other person can't see your expressions. Smile while you speak, since it changes your tone. Spell names and numbers clearly, digit by digit. Confirm details by repeating them back: \"So that's order number 4-5-2-1, delivered on Monday, correct?\" These habits matter in every customer-facing job.",
      },
      { type: "h2", text: "Free resources that help" },
      {
        type: "ul",
        items: [
          "English news channels and podcasts at normal speed, listened to daily for 15 minutes.",
          "Subtitled videos: watch once with subtitles, then again without them.",
          "Reading aloud from newspapers or books to train pronunciation and pace.",
          "Voice notes to a friend in English instead of text messages.",
        ],
      },
      { type: "h2", text: "How to measure your progress" },
      {
        type: "p",
        text: "Record a two-minute introduction on day one and keep it. Record the same introduction every two weeks and compare. Listen for fewer pauses, fewer filler words such as \"umm\", clearer word endings and more natural sentences. Progress in speaking is slow day to day but very clear over a month.",
      },
      { type: "h2", text: "Useful phrases for meetings and calls" },
      {
        type: "ul",
        items: [
          "\"Could I add something here?\" to join a discussion politely.",
          "\"Just to confirm, you need this by Friday?\" to check details.",
          "\"I'm not sure, but I'll find out and get back to you.\" when you don't know an answer.",
          "\"Sorry, the line is unclear. Could you repeat that?\" on a bad call.",
          "\"Thank you, that's helpful.\" to close a point warmly.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to improve spoken English for interviews?",
        a: "With daily speaking practice and feedback, most people notice clear improvement within a month. Fluency keeps growing with regular use.",
      },
      {
        q: "Should I learn grammar first or start speaking?",
        a: "Start speaking. Learn common phrases and correct your mistakes as you go. Grammar rules help, but fluency comes from regular speaking practice.",
      },
    ],
  },

  // ───────────── Tech skills ─────────────
  "learn-python-from-scratch": {
    updated: U,
    blocks: [
      { type: "h2", text: "Setting up Python on your computer" },
      {
        type: "ul",
        items: [
          "Download Python from python.org. On Windows, tick \"Add Python to PATH\" during installation.",
          "Install a code editor such as Visual Studio Code, and add its Python extension.",
          "Open a terminal and type python --version to check it works.",
          "Write your first file, hello.py, with print(\"Hello\"), and run it.",
        ],
      },
      {
        type: "p",
        text: "If installing feels difficult, you can start with a free online notebook such as Google Colab and set up your computer later. What matters most is writing code every day.",
      },
      { type: "h2", text: "A 12-week study plan" },
      {
        type: "ul",
        items: [
          "Weeks 1 to 2: variables, data types, input and output, if-else conditions and loops.",
          "Weeks 3 to 4: lists, dictionaries, tuples and sets. Practise small problems every day.",
          "Weeks 5 to 6: functions, modules, and handling errors with try and except.",
          "Weeks 7 to 8: reading and writing files, working with CSV and Excel, and simple automation scripts.",
          "Weeks 9 to 10: libraries for your direction, such as pandas for data or Flask for web.",
          "Weeks 11 to 12: one complete project, put on GitHub with a clear README.",
        ],
      },
      { type: "h2", text: "Beginner project ideas" },
      {
        type: "ul",
        items: [
          "A file organiser that sorts a messy downloads folder into folders by type.",
          "An expense tracker that saves entries to a CSV file and shows monthly totals.",
          "A quiz game with scores saved between runs.",
          "A script that reads an Excel sheet, cleans the data and creates a summary report.",
          "A simple website price or weather checker using a public API.",
        ],
      },
      { type: "h2", text: "Mistakes beginners make" },
      {
        type: "ul",
        items: [
          "Watching tutorials for weeks without writing code. Type every example yourself and change it.",
          "Jumping to machine learning before understanding loops and functions.",
          "Giving up at the first error. Reading error messages carefully is a core skill; most of them tell you exactly which line went wrong.",
          "Learning alone without feedback. Share your code with someone who can review it.",
        ],
      },
      { type: "h2", text: "How to show Python skills to employers" },
      {
        type: "p",
        text: "List Python under skills only with the specific things you can do: \"Python: automation scripts, pandas, file handling\". Link your GitHub on your resume and LinkedIn. In interviews, expect to write small programs, such as reversing a string, finding duplicates in a list or counting words in a sentence, and to explain your thinking as you go.",
      },
      { type: "h2", text: "Which direction to take after the basics" },
      {
        type: "ul",
        items: [
          "Automation: scripts that save time on repeated office work, using libraries for files, Excel and email.",
          "Data analysis: pandas, charts and reports, leading towards data analyst roles.",
          "Web development: Flask or Django for building websites and APIs.",
          "AI and machine learning: scikit-learn and later deep learning, once your Python and basic maths are solid.",
        ],
      },
      {
        type: "p",
        text: "Pick one direction for your first project. You can always learn another later, and the core Python you learn carries over to all of them.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to learn Python from scratch?",
        a: "With an hour or two of daily practice, most beginners can write useful scripts in about three months. Becoming job-ready takes longer and depends on projects and practice.",
      },
      {
        q: "Do I need a powerful computer to learn Python?",
        a: "No. Any ordinary laptop runs Python well for learning. You can even start in a free online notebook such as Google Colab.",
      },
    ],
  },

  "how-to-become-a-data-analyst": {
    updated: U,
    blocks: [
      { type: "h2", text: "A step-by-step learning path" },
      {
        type: "ul",
        items: [
          "Step 1, Excel: formulas, lookups (VLOOKUP or XLOOKUP), pivot tables, charts and cleaning messy data. Many analyst jobs use Excel every day.",
          "Step 2, SQL: selecting, filtering, sorting, grouping and joining tables. SQL is asked in most data analyst interviews.",
          "Step 3, a dashboard tool such as Power BI or Tableau: connecting data, building charts and creating a dashboard someone else can use.",
          "Step 4, basic statistics: averages, median, percentages, growth rates, and why correlation doesn't prove cause.",
          "Step 5, Python with pandas (optional at first): useful for larger data and automating repeated work.",
        ],
      },
      { type: "h2", text: "Build a portfolio of three projects" },
      {
        type: "p",
        text: "Employers want to see that you can take raw data and turn it into a clear answer. Three projects that each tell a story are enough to start.",
      },
      {
        type: "ul",
        items: [
          "A sales analysis: which products, months and regions drive revenue, shown in a dashboard.",
          "A customer project: who buys repeatedly, who stops, and what they have in common.",
          "A public-data project on a topic you care about, such as weather, cricket or city transport, with three clear findings.",
        ],
      },
      {
        type: "p",
        text: "For each project, write a short summary: the question, the data, what you found and what you would recommend. That summary is often what interviewers read first.",
      },
      { type: "h2", text: "Typical data analyst interview tasks" },
      {
        type: "ul",
        items: [
          "Writing SQL queries, such as total sales per month or the top five customers.",
          "An Excel test: cleaning a dataset and building a pivot table.",
          "A case question: \"Sales dropped last month. How would you find out why?\"",
          "Explaining a past project in simple language, as if to a manager who isn't technical.",
        ],
      },
      { type: "h2", text: "Job titles to search for" },
      {
        type: "p",
        text: "Entry-level analyst roles go by many names, so search widely: data analyst, junior data analyst, MIS executive, business analyst (entry level), reporting analyst, and operations analyst. MIS and reporting roles are often the easiest way in for freshers, and grow into analyst roles with experience.",
      },
      { type: "h2", text: "A day in the life of a junior data analyst" },
      {
        type: "p",
        text: "A typical day starts with checking that the daily reports ran correctly and the numbers look sensible. Then come requests from colleagues: a sales manager wants last quarter's figures by region, operations wants to know why returns went up, finance needs a monthly summary. Much of the work is cleaning data, because real data has duplicates, missing values and spelling differences. The rest is turning it into a short answer, a chart or a dashboard that someone can act on.",
      },
      { type: "h2", text: "Mistakes to avoid while learning" },
      {
        type: "ul",
        items: [
          "Collecting certificates without building projects.",
          "Learning many tools at once instead of getting good at Excel and SQL first.",
          "Making charts that look impressive but don't answer a clear question.",
          "Skipping communication practice. Explaining findings simply is half the job.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need coding to become a data analyst?",
        a: "SQL is expected in most roles. Python helps but many entry-level roles mainly use Excel, SQL and a dashboard tool such as Power BI.",
      },
      {
        q: "What is an MIS executive?",
        a: "An MIS executive prepares reports and keeps business data organised, usually in Excel. It's a common entry point that can grow into a data analyst role.",
      },
    ],
  },

  "how-to-become-a-full-stack-developer": {
    updated: U,
    blocks: [
      { type: "h2", text: "A month-by-month roadmap" },
      {
        type: "ul",
        items: [
          "Month 1: HTML and CSS. Build three static pages, including a responsive layout that works on phones.",
          "Month 2: JavaScript basics: variables, functions, arrays, objects, events and fetching data from an API.",
          "Month 3: a frontend framework such as React: components, state, forms and routing.",
          "Month 4: backend basics with Node.js and Express (or Python with Flask or Django): routes, APIs and handling requests.",
          "Month 5: databases: SQL basics with PostgreSQL or MySQL, or a document database such as MongoDB. Connect your backend to it.",
          "Month 6: authentication, deployment to a hosting service, and one complete full-stack project.",
        ],
      },
      { type: "h2", text: "Tools every developer should learn early" },
      {
        type: "ul",
        items: [
          "Git and GitHub: saving versions of your code and sharing it.",
          "Browser developer tools: finding layout problems and reading errors.",
          "A code editor such as Visual Studio Code, with formatting and linting set up.",
          "The command line: moving between folders, installing packages and running your app.",
        ],
      },
      { type: "h2", text: "Full-stack project ideas" },
      {
        type: "ul",
        items: [
          "A task manager with user login, where each user sees only their own tasks.",
          "A small booking system for a salon or clinic, with available time slots.",
          "A blog or notes app with create, edit and delete, saved to a database.",
          "A job board where companies post roles and candidates apply.",
        ],
      },
      {
        type: "p",
        text: "Deploy at least one project so interviewers can open it with a link. A working live project shows far more than a list of technologies on a resume.",
      },
      { type: "h2", text: "What full-stack interviews test" },
      {
        type: "ul",
        items: [
          "JavaScript fundamentals: scope, closures, promises and async/await.",
          "Building a small feature live, such as a form that saves data.",
          "Explaining how a request travels from the browser to the server and the database and back.",
          "Questions about your own projects: why you chose a tool, and what you would improve.",
        ],
      },
      { type: "h2", text: "Mistakes that slow learners down" },
      {
        type: "ul",
        items: [
          "Switching frameworks every few weeks instead of finishing one project.",
          "Copying tutorial projects without changing anything, so you can't explain them.",
          "Avoiding databases and deployment because they feel hard. They're what make you full-stack.",
          "Not using Git from day one.",
          "Learning alone for months without anyone reviewing your code.",
        ],
      },
      { type: "h2", text: "Frontend, backend or full-stack: which role to apply for?" },
      {
        type: "p",
        text: "Many freshers start in a frontend or backend role and grow into full-stack work. If your strongest projects are interfaces, apply for frontend roles; if you enjoy APIs and databases, apply for backend roles. Apply for full-stack roles when you can show at least one deployed project where you built both sides yourself.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to become a full-stack developer?",
        a: "With steady daily practice, many learners can build and deploy a complete full-stack project in about six months. Getting job-ready also depends on projects, interview practice and communication.",
      },
      {
        q: "Should I learn frontend or backend first?",
        a: "Most people start with frontend (HTML, CSS, JavaScript) because results are visible immediately, then add backend and databases.",
      },
    ],
  },

  // ───────────── Marketing ─────────────
  "seo-for-small-businesses": {
    updated: U,
    blocks: [
      { type: "h2", text: "How to choose the right keywords" },
      {
        type: "p",
        text: "Keywords are the words your customers type into Google. Start with what you sell and where, then think like a customer: \"AC repair in Jaipur\", \"best coaching for spoken English near me\", \"website designer for small business\". Phrases with a service and a city are often easier to rank for than broad words, and the people searching them are usually ready to buy.",
      },
      {
        type: "ul",
        items: [
          "Write down every service you offer and every area you serve.",
          "Type each one into Google and note the suggestions in the search box and the \"People also ask\" questions.",
          "Check what already ranks: if the top results are directories, a strong local page and a Google Business Profile may work better than a blog post.",
          "Give each important keyword one page, so your pages don't compete with each other.",
        ],
      },
      { type: "h2", text: "What a well-optimised service page includes" },
      {
        type: "ul",
        items: [
          "A title tag with the service and city, such as \"Wedding Photography in Ahmedabad | Your Brand\".",
          "One clear H1 heading that says what the page is about.",
          "An opening paragraph that explains who you help and how, in plain words.",
          "Details people need before calling: what's included, how it works, areas covered, and how to get a price.",
          "Real photos of your work, with descriptive alt text.",
          "Answers to common questions, and a clear call or WhatsApp button.",
        ],
      },
      { type: "h2", text: "Free tools to get started" },
      {
        type: "ul",
        items: [
          "Google Search Console: shows which searches bring you visitors and any indexing problems.",
          "Google Business Profile: your listing on Google Maps and local results.",
          "Google Analytics: shows what visitors do on your site.",
          "PageSpeed Insights: checks how fast your pages load on mobile.",
          "Bing Webmaster Tools: the same as Search Console, for Bing.",
        ],
      },
      { type: "h2", text: "Common SEO mistakes small businesses make" },
      {
        type: "ul",
        items: [
          "Putting every service on one page instead of giving each its own.",
          "Copying text from competitors or manufacturers, which gives Google no reason to rank you.",
          "Stuffing city names and keywords into every sentence.",
          "Ignoring mobile speed, even though most local searches happen on phones.",
          "Expecting results in a week, then giving up.",
        ],
      },
      { type: "h2", text: "A realistic timeline" },
      {
        type: "p",
        text: "Technical fixes are picked up within days to weeks once Google recrawls your site. New pages for less competitive local searches can start appearing within a few weeks to a few months. Competitive searches take longer and depend on content quality, reviews and links. The businesses that win at SEO are usually the ones that keep improving steadily for months, not the ones that do everything in one week.",
      },
    ],
    faqs: [
      {
        q: "How do I find keywords for my small business?",
        a: "List your services and areas, type them into Google, and note the search suggestions and 'People also ask' questions. Phrases with a service and a city are a good starting point.",
      },
      {
        q: "Can I do SEO for my business myself?",
        a: "Yes, the basics are manageable: a clear page per service, a complete Google Business Profile, reviews, and Search Console to track progress. Help is useful for technical issues and content at scale.",
      },
    ],
  },

  "google-business-profile-guide": {
    updated: U,
    blocks: [
      { type: "h2", text: "Choosing the right category" },
      {
        type: "p",
        text: "Your primary category is one of the strongest signals for which searches your profile appears in. Choose the most specific one that describes your main business, such as \"Employment agency\" rather than just \"Consultant\". Then add secondary categories for other services you genuinely offer. Look at the top-ranking competitors in your area to see which categories they use.",
      },
      { type: "h2", text: "Photos that help" },
      {
        type: "ul",
        items: [
          "The outside of your office or shop, so people recognise it when they arrive.",
          "The inside: reception, working area or shop floor.",
          "Your team at work.",
          "Examples of your work or products.",
          "A clear logo and a cover photo.",
        ],
      },
      {
        type: "p",
        text: "Use real photos taken on a phone in good light rather than stock images. Add a few new ones every month; an active profile looks more trustworthy to customers.",
      },
      { type: "h2", text: "How to ask for reviews without being pushy" },
      {
        type: "ul",
        items: [
          "Ask at the right moment: right after a job is finished or a customer thanks you.",
          "Make it easy: send the direct review link from your profile by WhatsApp or SMS.",
          "Keep the message short: \"Thank you for choosing us. If you were happy, a short Google review would really help us.\"",
          "Never offer discounts or gifts in exchange for reviews, and never write fake ones. Both break Google's rules and can get reviews removed or the profile suspended.",
        ],
      },
      { type: "h2", text: "How to reply to reviews" },
      {
        type: "p",
        text: "Thank people for positive reviews by name and mention what they used, briefly. For negative reviews, reply calmly within a day or two: apologise for the experience, avoid arguing in public, and offer to sort it out by phone or message. Future customers read your replies as carefully as the reviews themselves.",
      },
      { type: "h2", text: "Common problems and how to fix them" },
      {
        type: "ul",
        items: [
          "Verification failed: check the address matches exactly what you entered and try the method Google offers again, often a video of your premises.",
          "Profile suspended: usually caused by keywords in the business name, a virtual office address, or details that don't match the website. Fix the cause before requesting reinstatement.",
          "Someone else edited your details: Google accepts suggestions from the public. Check your profile regularly and correct wrong edits.",
          "Duplicate listings: request that Google merges or removes the duplicate, so reviews aren't split.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I get more Google reviews for my business?",
        a: "Ask happy customers right after the job, send them your direct review link by WhatsApp or SMS, and reply to every review. Never pay for or fake reviews.",
      },
      {
        q: "Why was my Google Business Profile suspended?",
        a: "Common causes are keywords added to the business name, using a virtual office address, or details that don't match your website. Fix the cause, then request reinstatement.",
      },
    ],
  },

  "why-website-not-showing-on-google": {
    updated: U,
    blocks: [
      { type: "h2", text: "A quick checklist you can run in 10 minutes" },
      {
        type: "ul",
        items: [
          "Search site:yourdomain.com on Google. If nothing appears, your site isn't indexed yet.",
          "Open yourdomain.com/robots.txt and make sure it doesn't say Disallow: / for all bots.",
          "View a page's source and search for \"noindex\". It should not be there on pages you want found.",
          "Check that www and non-www, and http and https, all lead to one version of your site.",
          "Open your site on a phone and on slow mobile data. If it takes many seconds to show content, speed is a problem.",
          "Search your exact business name. If you don't appear, Google may not have enough signals about your business yet.",
        ],
      },
      { type: "h2", text: "How to use Google Search Console to find the problem" },
      {
        type: "ul",
        items: [
          "Add and verify your site at search.google.com/search-console, using DNS verification if you can.",
          "Submit your sitemap (usually yourdomain.com/sitemap.xml) under Sitemaps.",
          "Open the Pages report to see which pages are indexed and why others aren't.",
          "Use URL Inspection on an important page to see exactly what Google sees, and click Request indexing.",
          "After a few weeks, use the Performance report to see which searches show your site and how often people click.",
        ],
      },
      { type: "h2", text: "What the common Search Console messages mean" },
      {
        type: "ul",
        items: [
          "Discovered, currently not indexed: Google knows the page exists but hasn't crawled it yet. Often a sign the site is new or the page has few internal links.",
          "Crawled, currently not indexed: Google read the page but decided not to include it, often because the content is thin or very similar to other pages.",
          "Duplicate without user-selected canonical: several URLs show the same content. Choose one version and point the others to it.",
          "Excluded by noindex tag: a setting on the page tells Google to leave it out. Remove it if the page should appear.",
          "Page with redirect: normal for old addresses that now redirect to new ones.",
        ],
      },
      { type: "h2", text: "When to get help" },
      {
        type: "p",
        text: "If your site is built with JavaScript frameworks and Google sees blank pages, if you've moved domains, or if pages stay \"crawled, not indexed\" for months after you improve them, a technical review is worth it. These problems are usually fixable, but they're hard to diagnose without looking at how the site is built and served.",
      },
    ],
    faqs: [
      {
        q: "What does 'Discovered, currently not indexed' mean?",
        a: "Google knows the page exists but hasn't crawled it yet. It's common on new sites. Linking to the page from other pages and submitting a sitemap helps.",
      },
      {
        q: "How do I check if Google has indexed my website?",
        a: "Search site:yourdomain.com on Google, or use the Pages report and URL Inspection tool in Google Search Console.",
      },
    ],
  },
};
