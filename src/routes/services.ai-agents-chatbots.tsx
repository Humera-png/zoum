import { createFileRoute } from "@tanstack/react-router";
import { Bot, MessageSquareText, Mic, Workflow, Plug, Database } from "lucide-react";
import { ItServicePage } from "@/components/ItServicePage";

const PATH = "/services/ai-agents-chatbots";

export const Route = createFileRoute("/services/ai-agents-chatbots")({
  head: () => ({
    meta: [
      { title: "AI Agent & Chatbot Development Company | ZOUM" },
      {
        name: "description",
        content:
          "AI agents, AI chatbots for websites and WhatsApp, and AI voice assistants trained on your business data. Built in India for clients worldwide.",
      },
      {
        name: "keywords",
        content:
          "AI agent development company, AI chatbot development company, custom AI chatbot, WhatsApp chatbot development, AI voice assistant development, AI agents for business, chatbot development India, AI development company India",
      },
      { property: "og:title", content: "AI Agents & Chatbots | ZOUM Consultancy" },
      {
        property: "og:description",
        content:
          "AI agents, chatbots and voice assistants that answer from your own business data, built for businesses in India and worldwide.",
      },
    ],
    links: [{ rel: "canonical", href: `https://zoumconsultancy.com${PATH}` }],
  }),
  component: () => (
    <ItServicePage
      path={PATH}
      schemaName="AI Agent & Chatbot Development"
      schemaDescription="AI agents, AI chatbots for websites and WhatsApp, and AI voice assistants trained on business data, for clients in India and worldwide."
      pill="AI Agent & Chatbot Development · India & Worldwide"
      title="AI That Works"
      italic="On Your Business Data."
      sub="AI agents, chatbots and voice assistants that answer from your own documents and systems, so customers and your team get correct answers instantly."
      servicesTitle="AI Agent & Chatbot Services"
      servicesIntro="Every assistant is built around your data and your rules, and tested on real questions before it goes live."
      services={[
        {
          icon: MessageSquareText,
          name: "AI Chatbots for Websites",
          desc: "A chatbot on your website that answers customer questions from your own content, captures leads and hands over to a person when needed.",
        },
        {
          icon: Bot,
          name: "WhatsApp Chatbots",
          desc: "Answer enquiries, share details and collect information on WhatsApp, where many of your customers already message you.",
        },
        {
          icon: Workflow,
          name: "AI Agents",
          desc: "Agents that carry out multi-step tasks, such as looking up records, preparing replies or updating systems, with approvals where you want them.",
        },
        {
          icon: Mic,
          name: "AI Voice Assistants",
          desc: "Voice assistants for scheduling, customer support and internal operations, handled by voice.",
        },
        {
          icon: Database,
          name: "Trained on Your Data",
          desc: "We connect the assistant to your documents, FAQs, product lists and databases, so it answers from your facts, not guesses.",
        },
        {
          icon: Plug,
          name: "Integrations",
          desc: "Connect the assistant to your CRM, helpdesk, Google Sheets, email or your own software.",
        },
      ]}
      proofTitle="What We've Built"
      proof={[
        {
          name: "Ask Navia (in NaviaLabs)",
          tag: "AI agent",
          desc: "The AI operations agent inside our own product, NaviaLabs. Business owners ask questions about stock, sales and suppliers in plain language, and it answers from their own data, showing where each figure comes from.",
          href: "https://navialabs.si",
        },
        {
          name: "Jarvis AI Voice Assistant",
          tag: "Voice assistant",
          desc: "A custom AI voice assistant built for real business use: scheduling, customer support and internal operations, handled by voice.",
        },
        {
          name: "AI Chatbot",
          tag: "Chatbot",
          desc: "A conversational AI chatbot trained on real business data, answering customer and team questions instantly instead of making them wait.",
        },
      ]}
      audiences={[
        {
          name: "Customer Support Teams",
          desc: "Teams answering the same questions every day who want instant, consistent answers and fewer tickets.",
        },
        {
          name: "Sales & Lead Generation",
          desc: "Businesses that lose leads outside working hours and want every enquiry answered and qualified at once.",
        },
        {
          name: "Operations Teams",
          desc: "Teams that want answers from their own data without building reports, and routine tasks handled by an agent.",
        },
      ]}
      steps={[
        {
          name: "Discovery call",
          desc: "We look at the questions or tasks you want handled, and where the answers live today.",
        },
        {
          name: "Scope and quote",
          desc: "A written plan: channels (website, WhatsApp, voice), data sources, integrations, timeline and price.",
        },
        {
          name: "Connect your data",
          desc: "We connect your documents and systems, and set the rules for what the assistant may and may not do.",
        },
        {
          name: "Test on real questions",
          desc: "We test with real customer and team questions and fix wrong or weak answers before launch.",
        },
        {
          name: "Launch and improve",
          desc: "We go live, review conversations, and keep improving the answers.",
        },
      ]}
      pricingText="AI agents and chatbots are quoted per project after a free call, based on the channels, the data sources and the integrations you need. Usage costs for AI models are explained separately and transparently. International clients are invoiced in US dollars or another agreed currency."
      faqs={[
        {
          q: "What is an AI agent?",
          a: "An AI agent is software that understands a request and carries out the steps to complete it, such as looking up information, preparing a reply or updating a system, instead of only answering a question.",
        },
        {
          q: "What is the difference between an AI chatbot and an AI agent?",
          a: "A chatbot answers questions in a conversation. An agent can also take actions in your systems. Many projects start with a chatbot and add agent actions later.",
        },
        {
          q: "Can the chatbot answer from our own documents and data?",
          a: "Yes. We connect it to your documents, FAQs, product lists or databases, so it answers from your information and can say when it doesn't know.",
        },
        {
          q: "Do you build WhatsApp chatbots?",
          a: "Yes. We build chatbots for WhatsApp as well as for websites, and connect them to your CRM or sheets so leads are not lost.",
        },
        {
          q: "Do you work with clients outside India?",
          a: "Yes. We work remotely with clients in the US, the UK, Europe, the Middle East and Australia, and invoice in US dollars or another agreed currency.",
        },
        {
          q: "How much does an AI chatbot cost?",
          a: "It depends on the channels, the data it must learn from and the systems it connects to. We quote after a free call, and explain the ongoing AI usage costs up front.",
        },
        {
          q: "Is our data kept private?",
          a: "We only connect the data the assistant needs, agree access and confidentiality in the contract, and sign an NDA on request.",
        },
      ]}
      related={[
        { label: "n8n automation", to: "/services/n8n-automation" },
        { label: "Custom software development", to: "/services/software-development" },
        { label: "AI and IT services", to: "/services/ai-automation" },
      ]}
    />
  ),
});
