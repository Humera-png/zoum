import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bot, Workflow, Mail, FileText, Headphones, BarChart3, Boxes, Plug } from "lucide-react";

import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA } from "@/components/ServicePage";
import { FAQSection } from "@/components/FAQSection";

export const Route = createFileRoute("/services/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI Automation Services | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "ZOUM builds AI agents and automation systems that take over repetitive work — workflow, CRM, email, document, and customer support automation for businesses across India.",
      },
      {
        property: "og:title",
        content: "AI Automation Services | ZOUM Consultancy",
      },
      {
        property: "og:description",
        content:
          "Stop doing the same task twice. ZOUM builds AI automations that save time, cut manual errors, and free your team for higher-value work.",
      },
      { property: "og:url", content: "https://zoumconsultancy.com/services/ai-automation" },
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com/services/ai-automation" }],
  }),
  component: AIPage,
});

const services = [
  {
    icon: Workflow,
    name: "Workflow Automation",
    desc: "Data gets copied between tools by hand and someone always forgets a step. We connect your systems so information moves on its own.",
  },
  {
    icon: Bot,
    name: "CRM Automation",
    desc: "Leads sit in an inbox instead of your CRM. We wire up automatic capture, follow-ups, and reminders so nothing falls through.",
  },
  {
    icon: Headphones,
    name: "Customer Support AI",
    desc: "Customers wait hours for answers to questions you get every day. We build an AI assistant that answers instantly and hands off the rest to your team.",
  },
  {
    icon: Mail,
    name: "Email Automation",
    desc: "Drafting the same emails eats a whole afternoon a week. We automate the repetitive writing so your team only handles the exceptions.",
  },
  {
    icon: FileText,
    name: "Document Automation",
    desc: "Contracts, invoices, and reports get built the same way every time, by hand. We automate the drafting and formatting.",
  },
  {
    icon: BarChart3,
    name: "Reporting Automation",
    desc: "Someone spends a day every month pulling numbers into a spreadsheet. We automate the pull so reports are ready before anyone asks.",
  },
  {
    icon: Boxes,
    name: "Inventory Automation",
    desc: "Stock counts and orders drift out of sync across tools. We connect them so what you see is what's actually true.",
  },
  {
    icon: Plug,
    name: "AI Agent & API Integrations",
    desc: "Your tools don't talk to each other. We build the AI agents and integrations that connect them into one working system.",
  },
];

const outcomes = [
  { title: "Hours back every week", desc: "Repetitive tasks run in the background instead of on someone's desk." },
  { title: "Fewer manual mistakes", desc: "Automated handoffs remove the copy-paste errors that cost you time to fix." },
  { title: "Lower operating cost", desc: "Less manual labor per task means the same team handles more volume." },
];

const faqs = [
  {
    q: "Can AI actually automate our repetitive work?",
    a: "Yes, for most rule-based, repeated tasks — data entry, follow-ups, reporting, first-line support. We start by mapping what your team does manually every week, then automate the highest-time-cost pieces first.",
  },
  {
    q: "How long does it take to set up an automation?",
    a: "A single workflow automation typically takes 1–3 weeks from scope to live. Larger systems spanning multiple tools take longer — we'll give you a specific timeline after a short discovery call.",
  },
  {
    q: "What if our team isn't technical?",
    a: "That's normal. We handle the build and integration, then hand off a system your team can run without needing to code or maintain it themselves.",
  },
  {
    q: "Which businesses benefit most from AI automation?",
    a: "Any business with repeated manual work — customer support, sales follow-up, reporting, order or document processing. If your team does the same task the same way every week, it's usually automatable.",
  },
];

function AIPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />

      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="AI Automation"
          title="Stop doing"
          italic="the same task twice."
          sub="We build AI agents and automations that take over the repetitive work — so your team spends time growing the business instead of running it by hand."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />

          <div className="space-y-32">
            <Section id="overview" title="What we automate" kicker="/ capabilities">
              <div className="grid md:grid-cols-2 gap-5">
                {services.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass node-bloom rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl">{s.name}</div>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="process" title="What you get" kicker="/ outcomes">
              <div className="grid md:grid-cols-3 gap-5">
                {outcomes.map((r) => (
                  <div key={r.title} className="glass-strong rounded-3xl p-7 hover-glow-lime transition">
                    <div className="font-display text-2xl">{r.title}</div>
                    <p className="text-sm text-muted-foreground mt-3">{r.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="pricing" title="Frequently asked" kicker="/ faq">
              <FAQSection items={faqs} />
            </Section>

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
