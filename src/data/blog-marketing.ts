// Website, SEO and social media marketing guides, aimed at business owners
// in Jaipur, Ahmedabad and across India. They lead to the website
// development & social media service (/services/website-development).
// Only describe services listed on that page: websites, online stores, web
// apps, maintenance, brand content, social media management, paid campaigns
// on Meta and LinkedIn, and SEO. No invented statistics.
// Merged into `posts` in blog.ts; each slug must also be in public/sitemap.xml.
import type { Post } from "./blog";

const D = "2026-11-18";

const WEB = { label: "Website development and SEO", to: "/services/website-development" };
const SOCIAL = { label: "Social media marketing services", to: "/services/social-media-marketing" };
const CONTACT = { label: "Get a free quote", to: "/contact" };

export const marketingGuides: Post[] = [
  {
    slug: "why-website-not-showing-on-google",
    seoTitle: "Why Your Website Isn't Showing on Google",
    title: "Why Your Website Isn't Showing on Google (and How to Fix It)",
    description:
      "The most common reasons a business website doesn't appear on Google, from indexing problems to missing page titles, and the step-by-step fixes for each.",
    date: D,
    category: "SEO",
    readMinutes: 7,
    body: [
      {
        type: "p",
        text: "You've paid for a website, but when you search for your business or your service, it's nowhere to be found. This is one of the most common problems business owners in Jaipur and Ahmedabad bring to us, and it almost always comes down to a handful of fixable causes. Here they are, in the order you should check them.",
      },
      { type: "h2", text: "1. Google hasn't indexed your site" },
      {
        type: "p",
        text: "Search Google for site:yourdomain.com. If nothing appears, Google hasn't added your pages to its index yet. Set up Google Search Console, verify your domain, submit your sitemap, and use URL Inspection to request indexing for your main pages.",
      },
      { type: "h2", text: "2. Google can't read your pages" },
      {
        type: "p",
        text: "Many modern websites load their content with JavaScript after the page opens. Visitors see everything, but search engines and AI tools may see an almost empty page. We found and fixed exactly this on our own website. The fix is to make sure every page sends its real text, title and headings in the HTML, for example through prerendering or server-side rendering.",
      },
      { type: "h2", text: "3. A setting is telling Google to ignore you" },
      {
        type: "ul",
        items: [
          "A noindex tag left on from when the site was being built.",
          "A robots.txt file blocking search engines.",
          "Canonical tags that point every page to the homepage, telling Google the other pages are copies.",
        ],
      },
      { type: "h2", text: "4. Your page titles don't match what people search" },
      {
        type: "p",
        text: "If your pages are titled \"Home\" or \"Services\", Google has nothing to match against searches like \"interior designer in Jaipur\". Each page needs a title that names the service and the city, and a short description that makes people want to click.",
      },
      { type: "h2", text: "5. There isn't enough content" },
      {
        type: "p",
        text: "A single page listing ten services can't rank for all ten. Give each important service its own page that explains what you do, who it's for, your process and common questions. Add articles answering the questions customers actually ask.",
      },
      { type: "h2", text: "6. Your business isn't trusted yet" },
      {
        type: "p",
        text: "Google looks for signs that a business is real: a complete Google Business Profile, the same name, address and phone number everywhere, reviews, and links from other websites such as directories and partners. New websites take time to build this trust.",
      },
      { type: "h2", text: "How long do fixes take to work?" },
      {
        type: "p",
        text: "After technical problems are fixed, Google usually needs a few weeks to re-crawl and re-rank the site. Searches for your business name tend to improve first, followed by searches for your services.",
      },
      {
        type: "links",
        title: "Get your website found",
        links: [WEB, { label: "SEO for small businesses: a beginner's guide", to: "/blog/seo-for-small-businesses" }, CONTACT],
      },
    ],
    faqs: [
      {
        q: "How do I check if Google has indexed my website?",
        a: "Search Google for site:yourdomain.com. For details on each page, use the Pages report and URL Inspection in Google Search Console.",
      },
      {
        q: "Why does my website show up for my name but not my services?",
        a: "Usually because each service doesn't have its own page with the service and city in the title and text, or because the site is new and hasn't built trust signals such as reviews and links yet.",
      },
      {
        q: "How long does it take for a new website to appear on Google?",
        a: "A new site can be indexed within days once a sitemap is submitted in Search Console, but ranking well for competitive searches usually takes weeks to months.",
      },
    ],
  },
  {
    slug: "seo-for-small-businesses",
    seoTitle: "SEO for Small Businesses: A Beginner's Guide",
    title: "SEO for Small Businesses in Jaipur and Ahmedabad: A Beginner's Guide",
    description:
      "What SEO is, how Google decides who ranks, and the practical steps a small business in Jaipur or Ahmedabad can take to get more customers from search.",
    date: D,
    category: "SEO",
    readMinutes: 7,
    body: [
      {
        type: "p",
        text: "SEO, or search engine optimisation, is the work of making your website show up when people search for what you offer. For a small business, it's one of the few marketing channels that keeps bringing in customers without paying for every click. Here's how it works and where to start.",
      },
      { type: "h2", text: "How Google decides who ranks" },
      {
        type: "ul",
        items: [
          "Relevance: does your page clearly answer what the person searched for?",
          "Quality: is the page helpful, detailed and trustworthy?",
          "Trust: do other websites, reviews and listings vouch for your business?",
          "Experience: does the page load fast and work well on a phone?",
          "Location: for local searches, is your business near the searcher or serving their city?",
        ],
      },
      { type: "h2", text: "Step 1: Get the technical basics right" },
      {
        type: "ul",
        items: [
          "Make sure Google can read every page (not just a blank JavaScript shell).",
          "Submit a sitemap in Google Search Console.",
          "Use HTTPS, and make sure the site works well on phones.",
          "Fix broken links and pages that return errors.",
        ],
      },
      { type: "h2", text: "Step 2: One page per service, per intent" },
      {
        type: "p",
        text: "List the searches your customers make, such as \"CA services in Ahmedabad\" or \"bridal makeup Jaipur\". Give each main service its own page with a clear title, a heading that matches the search, a real explanation of the service, prices or a price range if you can share them, and FAQs.",
      },
      { type: "h2", text: "Step 3: Local SEO" },
      {
        type: "p",
        text: "For businesses that serve a city, a complete Google Business Profile matters as much as the website. Keep your name, address and phone number identical everywhere, and ask happy customers for reviews.",
      },
      { type: "h2", text: "Step 4: Content that answers questions" },
      {
        type: "p",
        text: "Write articles answering what customers ask before they buy: costs, comparisons, how-to guides and common mistakes. These bring in people earlier in their search and are increasingly quoted in Google's AI answers.",
      },
      { type: "h2", text: "Step 5: Build trust and links" },
      {
        type: "p",
        text: "List your business in relevant directories, get featured by partners and local publications, and share useful content that others want to link to. Avoid paid link packages, which can get a site penalised.",
      },
      { type: "h2", text: "Step 6: Measure" },
      {
        type: "p",
        text: "Use Google Search Console to see which searches show your site, how often people click, and which pages need work. Check monthly; SEO is a steady process, not a one-time task.",
      },
      {
        type: "links",
        title: "Grow with ZOUM",
        links: [
          WEB,
          { label: "How to show up on Google Maps", to: "/blog/google-business-profile-guide" },
          { label: "Why your website isn't showing on Google", to: "/blog/why-website-not-showing-on-google" },
          CONTACT,
        ],
      },
    ],
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "Usually a few weeks for technical fixes to be picked up, and a few months for steady ranking improvements. Searches for your business name improve first, then service searches.",
      },
      {
        q: "Can I do SEO myself?",
        a: "Yes, the basics: Search Console, clear page titles, a page per service, a Google Business Profile and reviews. Technical issues and consistent content are where professional help saves time.",
      },
      {
        q: "Does ZOUM offer SEO for businesses in Jaipur and Ahmedabad?",
        a: "Yes. ZOUM's business websites include SEO setup, and we help businesses in Jaipur, Ahmedabad and across India with SEO for their existing websites. Contact us for a free review.",
      },
    ],
  },
  {
    slug: "google-business-profile-guide",
    seoTitle: "Google Business Profile: Rank on Google Maps",
    title: "Google Business Profile: How to Show Up on Google Maps in Jaipur and Ahmedabad",
    description:
      "How to set up and optimise a Google Business Profile so your business shows on Google Maps and local searches in Jaipur, Ahmedabad and other cities.",
    date: D,
    category: "SEO",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "When someone searches \"near me\" or for a service in their city, Google shows a map with a few businesses at the top. Those businesses get most of the calls. Getting into that list depends mostly on your Google Business Profile, which is free.",
      },
      { type: "h2", text: "Set it up correctly" },
      {
        type: "ul",
        items: [
          "Go to business.google.com and search for your business first. It may already exist and only need claiming.",
          "Use your real business name, without extra keywords added.",
          "Choose the most accurate primary category, then add secondary categories.",
          "Enter your address, or set service areas if you visit customers instead of them visiting you.",
          "Add your phone number, website and opening hours.",
          "Complete verification by video, phone or postcard, as Google offers.",
        ],
      },
      { type: "h2", text: "Optimise it" },
      {
        type: "ul",
        items: [
          "Write a clear description of what you do and the areas you serve.",
          "List each service with a short description.",
          "Upload real photos: your office or shop, team and work. Add new ones regularly.",
          "Post updates and offers from time to time.",
          "Answer questions people ask on your profile.",
        ],
      },
      { type: "h2", text: "Reviews matter most" },
      {
        type: "p",
        text: "Reviews are one of the strongest signals for local ranking and for whether people call you. Ask every happy customer, send them the direct review link, and reply to every review, positive or negative, politely and quickly. Never buy reviews.",
      },
      { type: "h2", text: "Keep your details consistent" },
      {
        type: "p",
        text: "Your business name, address and phone number should be identical on your website, Google profile, Justdial, social media and every other listing. Inconsistent details make Google less confident about your business.",
      },
      { type: "h2", text: "Serving more than one city" },
      {
        type: "p",
        text: "A profile needs a real address for each location. If you have an office in one city and serve another remotely, keep one profile at your real address, list the other city as a service area, and create a page on your website for each city you serve.",
      },
      {
        type: "links",
        title: "Get found locally",
        links: [WEB, { label: "SEO for small businesses", to: "/blog/seo-for-small-businesses" }, CONTACT],
      },
    ],
    faqs: [
      {
        q: "Is Google Business Profile free?",
        a: "Yes. Creating and managing a Google Business Profile is free.",
      },
      {
        q: "How do I get my business on Google Maps?",
        a: "Create or claim your Google Business Profile at business.google.com, add your address or service area, and complete verification. Once verified, your business can appear on Maps.",
      },
      {
        q: "Can I have a Google Business Profile in two cities?",
        a: "Only if you have a real address in each city. Otherwise, keep one profile at your actual address and add the other city as a service area.",
      },
    ],
  },
  {
    slug: "get-your-business-in-ai-answers",
    seoTitle: "How to Get Your Business in ChatGPT & AI Answers",
    title: "How to Get Your Business Mentioned in ChatGPT and Google AI Answers",
    description:
      "How AI assistants like ChatGPT, Perplexity and Google's AI answers choose which businesses to mention, and what you can do so your business is included.",
    date: D,
    category: "SEO",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "More people now ask ChatGPT, Perplexity or Google's AI answers things like \"best placement consultancy in Jaipur\" or \"who builds websites in Ahmedabad\". These tools answer with a few names. Being one of them is becoming as important as ranking on Google, and the work overlaps a lot.",
      },
      { type: "h2", text: "How AI tools find businesses" },
      {
        type: "p",
        text: "AI assistants that search the web read pages from search engines such as Google and Bing, then summarise what they find. They prefer pages that answer the question directly, come from sources that look trustworthy, and are easy to read without running complex code.",
      },
      { type: "h2", text: "1. Make sure AI crawlers can read your site" },
      {
        type: "p",
        text: "Many AI crawlers don't run JavaScript. If your website loads its content with JavaScript, they may see an empty page. Serve real HTML for every page, don't block AI crawlers in robots.txt unless you mean to, and consider an llms.txt file that summarises your business and pages.",
      },
      { type: "h2", text: "2. Answer questions directly" },
      {
        type: "p",
        text: "AI answers quote clear, self-contained statements. Start pages and sections with the direct answer, then the detail. Add FAQ sections with real questions customers ask, written in plain language.",
      },
      { type: "h2", text: "3. Be specific and factual" },
      {
        type: "p",
        text: "Name your services, cities, prices or price ranges, and real numbers you can stand behind. Vague marketing lines give an AI nothing to quote.",
      },
      { type: "h2", text: "4. Be present in Bing too" },
      {
        type: "p",
        text: "ChatGPT's search relies heavily on Bing. Add your site to Bing Webmaster Tools, submit your sitemap, and use IndexNow so new pages are found quickly.",
      },
      { type: "h2", text: "5. Get mentioned elsewhere" },
      {
        type: "p",
        text: "AI tools trust businesses that other sources mention: directories, reviews, news articles, partner websites and social profiles. Consistent details across all of them help the AI connect them to you.",
      },
      {
        type: "links",
        title: "Get found by people and AI",
        links: [WEB, { label: "Why your website isn't showing on Google", to: "/blog/why-website-not-showing-on-google" }, CONTACT],
      },
    ],
    faqs: [
      {
        q: "Can I pay to appear in ChatGPT answers?",
        a: "Not in regular answers. Appearing depends on whether your website and other sources online clearly and credibly describe your business.",
      },
      {
        q: "What is llms.txt?",
        a: "llms.txt is a plain-text file on your website that summarises your business and lists your important pages, so AI tools can understand your site quickly.",
      },
      {
        q: "Does SEO help with AI answers?",
        a: "Yes. Most of the same work helps both: readable pages, clear answers, specific facts, and a trustworthy presence across the web.",
      },
    ],
  },
  {
    slug: "instagram-marketing-for-local-businesses",
    seoTitle: "Instagram Marketing for Local Businesses",
    title: "Instagram Marketing for Local Businesses: Reels, Content and Enquiries",
    description:
      "How local businesses in Jaipur, Ahmedabad and across India can use Instagram to get enquiries: profile setup, reels, content ideas, DMs and what to track.",
    date: D,
    category: "Marketing",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "For local businesses, Instagram is often where customers check you out before they call. A clear profile and steady, useful content turn that curiosity into enquiries. Here's a practical approach that doesn't need a big team.",
      },
      { type: "h2", text: "Set up the profile to convert" },
      {
        type: "ul",
        items: [
          "Switch to a business or creator account to get insights and contact buttons.",
          "Use a clear profile photo, usually your logo.",
          "Write a bio that says what you do, where, and for whom.",
          "Add a link to your website or WhatsApp, plus call and email buttons.",
          "Pin three posts that explain your services, your results and how to book.",
        ],
      },
      { type: "h2", text: "Why reels matter" },
      {
        type: "p",
        text: "Short videos are the main way Instagram shows your content to people who don't follow you yet. Keep reels short, hook attention in the first second or two, and show something useful or interesting: a transformation, a quick tip, a behind-the-scenes moment.",
      },
      { type: "h2", text: "Content ideas that work for local businesses" },
      {
        type: "ul",
        items: [
          "Before-and-after results.",
          "Answers to questions customers ask you every week.",
          "Your process, step by step.",
          "Customer stories and reviews (with permission).",
          "Your team and workplace.",
          "Local tie-ins: festivals, events and places in your city.",
        ],
      },
      { type: "h2", text: "Turn DMs into customers" },
      {
        type: "p",
        text: "Reply to messages quickly, ideally within hours. Use saved replies for common questions, but personalise them. Move serious enquiries to a call or WhatsApp, and always follow up.",
      },
      { type: "h2", text: "What to track" },
      {
        type: "p",
        text: "Check monthly: profile visits, website and WhatsApp taps, DMs and enquiries. Notice which posts brought enquiries, not just likes, and make more of those.",
      },
      {
        type: "links",
        title: "Grow on social media with ZOUM",
        links: [
          SOCIAL,
          { label: "Social media marketing for small businesses", to: "/blog/social-media-marketing-for-small-business" },
          { label: "Facebook and Instagram ads for beginners", to: "/blog/facebook-instagram-ads-for-small-business" },
        ],
      },
    ],
    faqs: [
      {
        q: "How can a local business get customers from Instagram?",
        a: "Set up a clear business profile with contact buttons, post useful reels and posts regularly, reply quickly to DMs, and move serious enquiries to a call or WhatsApp.",
      },
      {
        q: "Are reels better than posts?",
        a: "Reels are better for reaching new people who don't follow you. Posts and carousels work well for explaining services to people already interested. Use both.",
      },
      {
        q: "Does ZOUM manage Instagram for businesses?",
        a: "Yes. ZOUM offers social media management, including content and publishing on Instagram and LinkedIn, and paid campaigns on Meta and LinkedIn, for businesses in Jaipur, Ahmedabad and across India.",
      },
    ],
  },
  {
    slug: "facebook-instagram-ads-for-small-business",
    seoTitle: "Facebook & Instagram Ads for Small Businesses",
    title: "Facebook and Instagram Ads for Small Businesses: A Beginner's Guide",
    description:
      "How small businesses can run Meta ads on Facebook and Instagram to get leads: choosing objectives, targeting, creatives, budgets, and avoiding common mistakes.",
    date: D,
    category: "Marketing",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "Organic social media builds trust slowly. Paid ads on Facebook and Instagram, run through Meta, put your offer in front of the right people right away. Run well, they can bring in steady leads; run carelessly, they burn money fast.",
      },
      { type: "h2", text: "Choose the right objective" },
      {
        type: "ul",
        items: [
          "Leads: people fill a form inside Facebook or Instagram. Good for services.",
          "Messages: people start a WhatsApp, Messenger or Instagram chat. Good for local businesses.",
          "Traffic or sales: people visit your website. Best when your site converts well.",
          "Awareness: more people see you, but this rarely brings direct enquiries.",
        ],
      },
      { type: "h2", text: "Target the right people" },
      {
        type: "p",
        text: "Start with location (your city or nearby areas), age range and broad interests related to your service. Narrow audiences aren't always better; Meta's system often finds buyers within a broader audience if your ad and offer are clear.",
      },
      { type: "h2", text: "Creatives that work" },
      {
        type: "ul",
        items: [
          "Show the result or the product clearly in the first second.",
          "One clear message and one clear action per ad.",
          "Real photos and videos usually beat generic stock images.",
          "Test two or three versions and keep what works.",
        ],
      },
      { type: "h2", text: "Budget and testing" },
      {
        type: "p",
        text: "Start with a modest daily budget, let the ads run for several days without constant changes, and judge them by cost per lead or enquiry, not by likes. Increase the budget gradually on ads that bring leads at a cost you can afford.",
      },
      { type: "h2", text: "Common mistakes" },
      {
        type: "ul",
        items: [
          "Boosting random posts instead of running proper campaigns.",
          "No fast follow-up on leads, so they go cold.",
          "Changing ads every day before they have time to learn.",
          "Sending traffic to a slow website that doesn't work on phones.",
        ],
      },
      {
        type: "links",
        title: "Run ads with ZOUM",
        links: [
          SOCIAL,
          { label: "Automate lead follow-up with AI", to: "/services/ai-automation" },
          { label: "SEO vs social media vs ads", to: "/blog/seo-vs-social-media-vs-ads" },
        ],
      },
    ],
    faqs: [
      {
        q: "Are Facebook and Instagram ads worth it for small businesses?",
        a: "They can be, when the offer is clear, the targeting is sensible, leads are followed up quickly, and results are judged by cost per enquiry rather than likes.",
      },
      {
        q: "What's the difference between boosting a post and running an ad campaign?",
        a: "Boosting gives a post more reach with limited options. A proper campaign in Ads Manager lets you choose the objective, such as leads or messages, and control targeting, creatives and testing.",
      },
      {
        q: "Does ZOUM run Meta ads for businesses?",
        a: "Yes. ZOUM runs paid campaigns on Meta (Facebook and Instagram) and LinkedIn as part of its social media services.",
      },
    ],
  },
  {
    slug: "linkedin-marketing-for-b2b-businesses",
    seoTitle: "LinkedIn Marketing for B2B Businesses",
    title: "LinkedIn Marketing for B2B Businesses and Professional Services",
    description:
      "How B2B companies, consultants and professional services can use LinkedIn to win clients: company pages, founder posts, content ideas and LinkedIn ads.",
    date: D,
    category: "Marketing",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "If your customers are other businesses, LinkedIn is usually the best social platform for you. It's where decision-makers, HR heads and founders spend professional time, and where your expertise can be seen before you ever pitch.",
      },
      { type: "h2", text: "Company page vs personal profiles" },
      {
        type: "p",
        text: "Your company page builds credibility: a clear description, services, logo and regular updates. But posts from founders and team members usually reach far more people than company page posts. The strongest approach uses both: the company page as the home base, and people sharing their experience.",
      },
      { type: "h2", text: "What to post" },
      {
        type: "ul",
        items: [
          "Lessons from real work, written in your own words.",
          "Client results and case studies (with permission).",
          "Clear opinions on problems your customers face.",
          "Behind the scenes: how you work, your team, milestones.",
          "Short, useful how-to posts and carousels.",
        ],
      },
      { type: "h2", text: "Turn attention into clients" },
      {
        type: "ul",
        items: [
          "Make your profile headline say who you help and how.",
          "Reply to every comment, and comment thoughtfully on others' posts.",
          "Connect with people in your target industries with a personal note.",
          "Mention a clear next step occasionally, such as a free call.",
        ],
      },
      { type: "h2", text: "LinkedIn ads" },
      {
        type: "p",
        text: "LinkedIn ads cost more per click than many platforms, but you can target by job title, company size and industry. They work best for higher-value services where one client is worth a lot, combined with a strong offer such as a free audit or consultation.",
      },
      {
        type: "links",
        title: "Grow on LinkedIn with ZOUM",
        links: [
          SOCIAL,
          { label: "Business consultancy services", to: "/services/business" },
          CONTACT,
        ],
      },
    ],
    faqs: [
      {
        q: "Is LinkedIn good for B2B marketing in India?",
        a: "Yes. LinkedIn is where many business decision-makers, HR leaders and founders are active, making it the strongest social platform for most B2B services.",
      },
      {
        q: "Should I post from my company page or personal profile?",
        a: "Both. The company page builds credibility, while personal posts from founders and team members usually reach more people.",
      },
      {
        q: "Does ZOUM manage LinkedIn for businesses?",
        a: "Yes. ZOUM offers LinkedIn content and management, and LinkedIn ad campaigns, for businesses in Jaipur, Ahmedabad and across India.",
      },
    ],
  },
  {
    slug: "seo-vs-social-media-vs-ads",
    seoTitle: "SEO vs Social Media vs Ads: Where to Start",
    title: "SEO vs Social Media vs Paid Ads: Where Should a Small Business Start?",
    description:
      "Comparing SEO, social media and paid ads for small businesses: how fast each works, what each costs in time and money, and how to combine them.",
    date: D,
    category: "Marketing",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "With a limited budget, most business owners ask the same question: should we spend on SEO, social media or ads? Each works differently, and the right mix depends on how fast you need results and how much time you can invest.",
      },
      { type: "h2", text: "SEO" },
      {
        type: "ul",
        items: [
          "Speed: slow to start, usually weeks to months.",
          "Cost: mostly time and expertise; no payment per click.",
          "Strength: brings people who are already searching for your service, and keeps working once you rank.",
          "Best for: services people search for, such as \"website developer in Ahmedabad\" or \"placement consultancy Jaipur\".",
        ],
      },
      { type: "h2", text: "Social media" },
      {
        type: "ul",
        items: [
          "Speed: medium; trust builds over months of consistent posting.",
          "Cost: mostly time for content creation.",
          "Strength: builds trust and keeps you in front of people who already know you.",
          "Best for: visual businesses, local brands and personal brands.",
        ],
      },
      { type: "h2", text: "Paid ads" },
      {
        type: "ul",
        items: [
          "Speed: fast, results can start within days.",
          "Cost: you pay for every click or impression, and results stop when spending stops.",
          "Strength: control over who sees your offer and when.",
          "Best for: launching, testing an offer, or filling demand quickly.",
        ],
      },
      { type: "h2", text: "A sensible order for most small businesses" },
      {
        type: "ul",
        items: [
          "First, a website that loads fast, works on phones and clearly explains your services.",
          "Then the SEO basics and a Google Business Profile, which keep paying off.",
          "Then consistent social media for trust.",
          "Then ads, once you know which offer converts, to grow faster.",
        ],
      },
      { type: "h2", text: "They work best together" },
      {
        type: "p",
        text: "Ads bring people who later search your name. Social media builds the trust that makes them click. SEO captures them when they're ready to buy. A good website ties it all together.",
      },
      {
        type: "links",
        title: "Plan your marketing with ZOUM",
        links: [
          WEB,
          { label: "SEO for small businesses", to: "/blog/seo-for-small-businesses" },
          SOCIAL,
        ],
      },
    ],
    faqs: [
      {
        q: "Which is better for a small business, SEO or ads?",
        a: "Ads work faster but stop when you stop paying. SEO is slower but keeps bringing visitors. Most businesses benefit from SEO basics first, then ads to grow faster.",
      },
      {
        q: "Can social media replace SEO?",
        a: "No. Social media reaches people who follow or discover you, while SEO reaches people actively searching for your service. They serve different moments.",
      },
      {
        q: "What should a new business invest in first?",
        a: "A fast, mobile-friendly website that clearly explains your services, then a Google Business Profile and the SEO basics.",
      },
    ],
  },
  {
    slug: "signs-your-website-needs-a-redesign",
    seoTitle: "7 Signs Your Business Website Needs a Redesign",
    title: "7 Signs Your Business Website Needs a Redesign",
    description:
      "How to tell when your business website is costing you customers: slow loading, poor mobile experience, no enquiries, outdated content, and other warning signs.",
    date: D,
    category: "Websites",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "A website can quietly cost you customers for years without anyone noticing. If yours shows several of these signs, it's likely time for a redesign, or at least a serious fix.",
      },
      { type: "h2", text: "1. It's slow, especially on phones" },
      {
        type: "p",
        text: "If your homepage takes more than a few seconds to show its main content on mobile data, many visitors leave before it loads.",
      },
      { type: "h2", text: "2. It doesn't work well on mobile" },
      {
        type: "p",
        text: "Tiny text, buttons that are hard to tap, and pages you have to zoom into all push mobile visitors away, and most of your visitors are probably on phones.",
      },
      { type: "h2", text: "3. It doesn't bring enquiries" },
      {
        type: "p",
        text: "If people visit but don't call, message or fill forms, the website isn't doing its job. Common causes are unclear services, no prices or price ranges, and contact options buried at the bottom.",
      },
      { type: "h2", text: "4. You can't be found on Google" },
      {
        type: "p",
        text: "No separate service pages, generic titles, or pages Google can't read keep a site invisible, no matter how good it looks.",
      },
      { type: "h2", text: "5. The content is outdated" },
      {
        type: "p",
        text: "Old prices, services you no longer offer, a team that has changed, or a blog with no posts in years all reduce trust.",
      },
      { type: "h2", text: "6. You can't update it yourself" },
      {
        type: "p",
        text: "If every small change means waiting for a developer, the site falls behind your business.",
      },
      { type: "h2", text: "7. It doesn't reflect your business today" },
      {
        type: "p",
        text: "If you'd hesitate to send a big client to your own website, it's holding you back.",
      },
      { type: "h2", text: "Redesign or fix?" },
      {
        type: "p",
        text: "Not every problem needs a full rebuild. Speed, page titles, contact buttons and content can often be fixed on the existing site. A redesign makes sense when the site is slow at its core, hard to update, or no longer matches what your business offers.",
      },
      {
        type: "links",
        title: "Upgrade your website with ZOUM",
        links: [WEB, { label: "Website development cost explained", to: "/blog/website-development-cost-in-jaipur" }, CONTACT],
      },
    ],
    faqs: [
      {
        q: "How often should a business website be redesigned?",
        a: "There's no fixed schedule. Redesign when the site is slow, hard to use on phones, hard to update, or no longer reflects your business, and keep content updated in between.",
      },
      {
        q: "Will a redesign hurt my Google rankings?",
        a: "It can if page addresses change without redirects or content is removed. A careful redesign keeps important pages, sets up redirects and usually improves rankings.",
      },
      {
        q: "Can ZOUM redesign an existing website?",
        a: "Yes. ZOUM redesigns and rebuilds websites for businesses in Jaipur, Ahmedabad and across India, and offers ongoing maintenance and support.",
      },
    ],
  },
  {
    slug: "ecommerce-website-for-small-business",
    seoTitle: "E-commerce Website Guide for Small Businesses",
    title: "How to Start Selling Online: An E-commerce Website Guide for Small Businesses",
    description:
      "What a small business needs to sell online: choosing between marketplaces and your own store, essential features, payments, shipping, and getting your first orders.",
    date: D,
    category: "Websites",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "Selling online lets a local business reach customers across India. Whether you sell textiles in Ahmedabad, handicrafts in Jaipur or anything else, the basics of a good online store are the same.",
      },
      { type: "h2", text: "Marketplace or your own store?" },
      {
        type: "ul",
        items: [
          "Marketplaces bring ready traffic, but charge commissions, control the customer relationship, and put you next to competitors.",
          "Your own store means you keep the customer, set your own rules and build your brand, but you bring the traffic yourself.",
          "Many businesses use both: marketplaces for reach, their own store for repeat customers and better margins.",
        ],
      },
      { type: "h2", text: "Features your store needs" },
      {
        type: "ul",
        items: [
          "Clear product photos, descriptions, sizes and prices.",
          "A simple cart and checkout that works smoothly on phones.",
          "Payments by UPI, cards and netbanking, plus cash on delivery if your customers expect it.",
          "Order confirmation messages and tracking updates.",
          "Inventory that updates automatically as orders come in.",
          "Clear shipping, return and refund policies.",
        ],
      },
      { type: "h2", text: "Shipping and operations" },
      {
        type: "p",
        text: "Decide where you'll ship, how long delivery takes, and who pays for shipping before you launch. Shipping partners and aggregators can handle pickup and delivery across India. Plan packaging and a returns process from day one.",
      },
      { type: "h2", text: "Getting your first orders" },
      {
        type: "ul",
        items: [
          "Tell existing customers on WhatsApp and Instagram.",
          "Run small, targeted ads for your best products.",
          "Give each product category its own page so it can rank on Google.",
          "Ask early buyers for reviews.",
        ],
      },
      {
        type: "links",
        title: "Build your online store with ZOUM",
        links: [
          WEB,
          { label: "Automate orders and inventory with AI", to: "/services/ai-automation" },
          CONTACT,
        ],
      },
    ],
    faqs: [
      {
        q: "Should I sell on Amazon or Flipkart or build my own website?",
        a: "Marketplaces give quick reach but take commissions and control the customer. Your own store builds your brand and repeat sales. Many businesses use both.",
      },
      {
        q: "What payment options should an online store in India offer?",
        a: "UPI, debit and credit cards and netbanking at minimum, and cash on delivery if your customers commonly expect it.",
      },
      {
        q: "Does ZOUM build e-commerce websites?",
        a: "Yes. ZOUM builds online stores with payments, inventory and checkout for businesses in Jaipur, Ahmedabad and across India.",
      },
    ],
  },
  {
    slug: "what-does-a-social-media-marketing-agency-do",
    seoTitle: "What Does a Social Media Marketing Agency Do?",
    title: "What Does a Social Media Marketing Agency Do, and Do You Need One?",
    description:
      "What a social media marketing agency handles, from strategy and content to ads and reporting, how to judge one, and when hiring an agency makes sense.",
    date: D,
    category: "Marketing",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Posting consistently, replying to messages, running ads and tracking results takes more time than most business owners have. A social media marketing agency takes that work over. Here's what a good one does, and how to tell whether you need one.",
      },
      { type: "h2", text: "What a social media agency handles" },
      {
        type: "ul",
        items: [
          "Strategy: which platforms, which audience, and what you want social media to achieve.",
          "Brand voice: a consistent look and tone across posts.",
          "Content: planning, designing, writing and editing posts, carousels and reels.",
          "Publishing: posting on a consistent schedule.",
          "Paid campaigns: running and optimising ads on platforms like Meta and LinkedIn.",
          "Reporting: regular reports on reach, engagement, enquiries and ad results.",
        ],
      },
      { type: "h2", text: "Signs you need an agency" },
      {
        type: "ul",
        items: [
          "Your pages go weeks without a post.",
          "You've tried ads but aren't sure whether they work.",
          "Nobody on your team has the time or skills for content.",
          "Competitors look more professional online than you do.",
        ],
      },
      { type: "h2", text: "How to judge an agency" },
      {
        type: "ul",
        items: [
          "Ask to see work for businesses like yours.",
          "Ask how they measure success: enquiries and sales, not just followers.",
          "Get a clear list of what's included each month.",
          "Make sure you own your accounts and ad account.",
        ],
      },
      { type: "h2", text: "Social media works better with a good website" },
      {
        type: "p",
        text: "Social media creates interest; your website and WhatsApp turn it into enquiries. An agency that handles both makes sure the visitors your posts and ads bring have somewhere clear to go.",
      },
      {
        type: "links",
        title: "Work with ZOUM",
        links: [
          SOCIAL,
          { label: "Instagram marketing for local businesses", to: "/blog/instagram-marketing-for-local-businesses" },
          { label: "LinkedIn marketing for B2B businesses", to: "/blog/linkedin-marketing-for-b2b-businesses" },
        ],
      },
    ],
    faqs: [
      {
        q: "What does a social media marketing agency do?",
        a: "It plans strategy, creates and publishes content, runs paid ads, manages your brand voice and reports on results across platforms such as Instagram, Facebook and LinkedIn.",
      },
      {
        q: "Should I own my social media accounts if I hire an agency?",
        a: "Yes. Your business should always own its social media accounts and ad account, with the agency given access.",
      },
      {
        q: "Does ZOUM offer social media management in Jaipur and Ahmedabad?",
        a: "Yes. ZOUM handles brand content, social media management and paid campaigns on Meta and LinkedIn for businesses in Jaipur, Ahmedabad and across India. Social media is scoped to your goals.",
      },
    ],
  },
];
