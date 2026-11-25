import { createFileRoute } from "@tanstack/react-router";
import { Workflow, Users, ShoppingCart, FileBarChart, Bot, Server } from "lucide-react";
import { ItServicePage } from "@/components/ItServicePage";

const PATH = "/services/n8n-automation";

export const Route = createFileRoute("/services/n8n-automation")({
  head: () => ({
    meta: [
      { title: "n8n Automation Agency & Workflow Automation | ZOUM" },
      {
        name: "description",
        content:
          "n8n workflow automation for businesses worldwide: CRM and lead follow-up, order processing, reporting and AI steps inside your workflows. Built and maintained by us.",
      },
      {
        name: "keywords",
        content:
          "n8n automation agency, n8n developer, n8n expert, hire n8n developer, workflow automation agency, business process automation company, Zapier alternative, Make automation, CRM automation, AI workflow automation",
      },
      { property: "og:title", content: "n8n & Workflow Automation | ZOUM Consultancy" },
      {
        property: "og:description",
        content:
          "Workflows that move leads, orders and reports between your tools automatically, with AI where it helps. For businesses in India and worldwide.",
      },
    ],
    links: [{ rel: "canonical", href: `https://zoumconsultancy.com${PATH}` }],
  }),
  component: () => (
    <ItServicePage
      path={PATH}
      schemaName="n8n Workflow Automation"
      schemaDescription="n8n workflow automation for lead follow-up, order processing, reporting and AI steps, for businesses in India and worldwide."
      pill="n8n Automation Agency · India & Worldwide"
      title="Let Your Tools"
      italic="Do The Busywork."
      sub="n8n workflows that move leads, orders and reports between your apps automatically, with AI steps where they help, built, documented and maintained by our team."
      servicesTitle="Workflow Automation Services"
      servicesIntro="We automate the repetitive steps between your tools, so nothing waits for someone to copy, paste or remember."
      services={[
        {
          icon: Workflow,
          name: "n8n Workflow Development",
          desc: "Custom n8n workflows that connect your apps, transform data and run on a schedule or on events.",
        },
        {
          icon: Users,
          name: "CRM & Lead Follow-up",
          desc: "New leads captured, assigned and followed up automatically by email or WhatsApp, so none go cold.",
        },
        {
          icon: ShoppingCart,
          name: "Order Processing",
          desc: "Orders moved from placement to fulfilment without manual handling at each step.",
        },
        {
          icon: FileBarChart,
          name: "Reporting Automation",
          desc: "Daily and weekly reports built and sent automatically from your sheets, CRM and databases.",
        },
        {
          icon: Bot,
          name: "AI Inside Your Workflows",
          desc: "AI steps that read emails, sort enquiries, summarise documents or draft replies inside the workflow.",
        },
        {
          icon: Server,
          name: "Setup, Hosting & Maintenance",
          desc: "n8n set up on n8n cloud or your own server, with monitoring, fixes and changes as your processes evolve. We also work with Zapier and Make if you already use them.",
        },
      ]}
      proofTitle="Automations We've Built"
      proof={[
        {
          name: "LeadFlowTool",
          tag: "Lead follow-up",
          desc: "Manages every lead follow-up automatically, sending the right email at the right time so a lead never goes cold because someone forgot to reply.",
        },
        {
          name: "Order Processing Automation",
          tag: "Operations",
          desc: "Takes an order from placement to fulfilment without manual handling at each step, cutting the busywork out of order operations.",
        },
        {
          name: "Lead Generation Automation",
          tag: "Sales",
          desc: "Finds, qualifies and routes new leads automatically, so the sales team spends time talking to people, not hunting for them.",
        },
        {
          name: "Supply Chain Automation",
          tag: "Operations",
          desc: "Automates coordination between suppliers, inventory and orders, catching issues before they turn into delays.",
        },
      ]}
      audiences={[
        {
          name: "Small & Growing Businesses",
          desc: "Teams losing hours every week to copying data between sheets, email, CRM and WhatsApp.",
        },
        {
          name: "Agencies & Service Firms",
          desc: "Firms that want lead handling, onboarding and reporting to run the same way every time.",
        },
        {
          name: "Teams Using Zapier or Make",
          desc: "Teams whose automations have grown complex or costly and want more control with n8n.",
        },
      ]}
      steps={[
        {
          name: "Process review",
          desc: "On a free call we map the steps you repeat today and pick the automations that save the most time.",
        },
        {
          name: "Scope and quote",
          desc: "A written list of workflows, the tools they connect, timeline and price.",
        },
        {
          name: "Build and test",
          desc: "We build each workflow and test it on real data before switching it on.",
        },
        {
          name: "Handover",
          desc: "Documentation and a walkthrough, so your team knows what runs and when.",
        },
        {
          name: "Monitor and improve",
          desc: "We watch for errors and adjust the workflows as your processes change.",
        },
      ]}
      pricingText="Automation is quoted per project after a free process review, based on the number of workflows, the tools they connect and any AI steps. Hosting and maintenance can be added as a monthly plan. International clients are invoiced in US dollars or another agreed currency."
      faqs={[
        {
          q: "What is n8n?",
          a: "n8n is a workflow automation platform that connects your apps and moves data between them automatically. It can run on n8n's cloud or on your own server, and supports AI steps inside workflows.",
        },
        {
          q: "Why use n8n instead of Zapier or Make?",
          a: "n8n handles complex, multi-step workflows well and can be self-hosted, which gives you more control over data and cost. We also work with Zapier and Make when they fit better or you already use them.",
        },
        {
          q: "What can be automated?",
          a: "Lead capture and follow-up, order processing, data entry between tools, reports, notifications, and AI steps such as sorting enquiries or drafting replies.",
        },
        {
          q: "Do you host and maintain the workflows?",
          a: "Yes. We can set up n8n on n8n cloud or your own server, monitor the workflows and fix or change them when needed.",
        },
        {
          q: "Do you work with clients outside India?",
          a: "Yes. We work remotely with clients in the US, the UK, Europe, the Middle East and Australia, and invoice in US dollars or another agreed currency.",
        },
        {
          q: "Can you train our team on n8n?",
          a: "Yes. We run an AI Automation (n8n) masterclass and corporate training, so your team can manage and build workflows themselves.",
        },
      ]}
      related={[
        { label: "AI agents & chatbots", to: "/services/ai-agents-chatbots" },
        { label: "Custom software development", to: "/services/software-development" },
        { label: "AI Automation (n8n) course", to: "/courses/ai-automation-n8n-masterclass" },
      ]}
    />
  ),
});
