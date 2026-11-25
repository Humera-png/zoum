import { createFileRoute } from "@tanstack/react-router";
import { Code2, Layers, LayoutDashboard, Cloud, Plug, Wrench } from "lucide-react";
import { ItServicePage } from "@/components/ItServicePage";

const PATH = "/services/software-development";

export const Route = createFileRoute("/services/software-development")({
  head: () => ({
    meta: [
      { title: "Custom Software Development Company | ZOUM" },
      {
        name: "description",
        content:
          "Custom software, web applications and SaaS products built by an India-based team for clients worldwide. Free discovery call, written quote, NDA on request.",
      },
      {
        name: "keywords",
        content:
          "custom software development company, software development company India, SaaS development company, web application development company, offshore software development India, hire software developers India, software development company Jaipur, software development company Ahmedabad",
      },
      { property: "og:title", content: "Custom Software Development | ZOUM Consultancy" },
      {
        property: "og:description",
        content:
          "Web apps, SaaS products and internal tools, designed and built by the team behind NaviaLabs, for clients in India and worldwide.",
      },
    ],
    links: [{ rel: "canonical", href: `https://zoumconsultancy.com${PATH}` }],
  }),
  component: () => (
    <ItServicePage
      path={PATH}
      schemaName="Custom Software Development"
      schemaDescription="Custom software, web applications, SaaS products and internal tools for businesses in India and worldwide."
      pill="Custom Software Development Company · India & Worldwide"
      title="Software Built"
      italic="Around Your Business."
      sub="Web applications, SaaS products and internal tools, designed and built by the team that built NaviaLabs, for businesses in India and around the world."
      servicesTitle="Software Development Services"
      servicesIntro="From a first internal tool to a full SaaS product: we plan it with you, build it, launch it and keep it running."
      services={[
        {
          icon: Layers,
          name: "SaaS Product Development",
          desc: "Multi-user, subscription-ready products with sign-in, roles, billing and an admin panel, built to grow with your customers.",
        },
        {
          icon: Code2,
          name: "Web Application Development",
          desc: "Fast, secure web apps that work in any browser on desktop, tablet and phone, with nothing for your users to install.",
        },
        {
          icon: LayoutDashboard,
          name: "Internal Tools & Dashboards",
          desc: "Replace spreadsheets and manual reports with tools your team actually uses: approvals, tracking, reporting and dashboards.",
        },
        {
          icon: Plug,
          name: "Integrations & APIs",
          desc: "Connect your software to payment gateways, email, WhatsApp, Google Sheets, CRMs and the other tools you already run.",
        },
        {
          icon: Cloud,
          name: "Cloud Hosting & Deployment",
          desc: "Set up hosting, databases, backups and automatic deployments on modern cloud platforms, so releases are routine, not risky.",
        },
        {
          icon: Wrench,
          name: "Support & Maintenance",
          desc: "Bug fixes, updates and new features after launch, on a plan agreed up front.",
        },
      ]}
      proofTitle="What We've Built"
      proofIntro="Our clearest proof is our own product: we design, build and run it ourselves."
      proof={[
        {
          name: "NaviaLabs",
          tag: "SaaS product",
          desc: "A live operations platform for businesses with stock in several locations: inventory across stores and warehouses, purchase requests and orders, demand forecasting, billing, and an AI agent that answers questions from the business's own data.",
          href: "https://navialabs.si",
        },
        {
          name: "LeadFlowTool",
          tag: "Internal tool",
          desc: "Manages every lead follow-up automatically, sending the right email at the right time so a lead never goes cold because someone forgot to reply.",
        },
      ]}
      audiences={[
        {
          name: "Startups & Founders",
          desc: "Founders who need a product built and launched, and a team that can keep improving it after version one.",
        },
        {
          name: "Growing Businesses",
          desc: "Companies running on spreadsheets and WhatsApp that need one system built around how they actually work.",
        },
        {
          name: "Companies Abroad",
          desc: "Businesses in the US, UK, Europe, the Middle East and Australia looking for a reliable development partner in India.",
        },
      ]}
      steps={[
        {
          name: "Discovery call",
          desc: "We learn what you need, who will use it, and what success looks like. Free, with an NDA first if you want one.",
        },
        {
          name: "Scope and quote",
          desc: "A written scope with features, timeline, milestones and price, so you know exactly what you're paying for.",
        },
        {
          name: "Design",
          desc: "Screens and user flows you can click through and approve before development starts.",
        },
        {
          name: "Build in milestones",
          desc: "We build in short milestones and show you working software at each one, not just at the end.",
        },
        {
          name: "Launch and support",
          desc: "We deploy, train your team, and stay on for fixes and new features.",
        },
      ]}
      pricingText="Software is quoted per project after a free discovery call, because a dashboard and a SaaS platform are very different builds. You get a written scope with milestones and a fixed or milestone-based price before any work starts. International clients are invoiced in US dollars or another agreed currency."
      faqs={[
        {
          q: "What does a custom software development company do?",
          a: "It designs, builds, launches and maintains software made for your business, instead of you adapting to off-the-shelf tools. That can be a web app, a SaaS product, an internal tool or a dashboard.",
        },
        {
          q: "Do you work with clients outside India?",
          a: "Yes. We work fully remotely with clients in the US, the UK, Europe, the Middle East and Australia, schedule calls in your working hours, and invoice in US dollars or another agreed currency.",
        },
        {
          q: "How much does custom software cost?",
          a: "It depends on the features, the number of user types and the integrations. We quote after a free discovery call with a written scope and milestones, so the price is clear before work starts.",
        },
        {
          q: "Will you sign an NDA?",
          a: "Yes. We can sign an NDA before the discovery call, and confidentiality is part of our project contract.",
        },
        {
          q: "Can you build a SaaS product from scratch?",
          a: "Yes. We built and run our own SaaS product, NaviaLabs, with sign-in, roles, subscriptions, an admin panel and an AI agent. We can take your idea through the same steps.",
        },
        {
          q: "Who owns the code?",
          a: "Code ownership and handover are written into the contract before work starts, so there are no surprises at the end of the project.",
        },
        {
          q: "Do you provide support after launch?",
          a: "Yes. We offer ongoing support and maintenance for bug fixes, updates and new features, on terms agreed up front.",
        },
      ]}
      related={[
        { label: "AI agents & chatbots", to: "/services/ai-agents-chatbots" },
        { label: "Mobile app development", to: "/services/mobile-app-development" },
        { label: "n8n automation", to: "/services/n8n-automation" },
        { label: "Website development", to: "/services/website-development" },
      ]}
    />
  ),
});
