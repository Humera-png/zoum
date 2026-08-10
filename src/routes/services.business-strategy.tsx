import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, BarChart3, Workflow, Rocket, Headphones, FileStack, LifeBuoy, ClipboardList } from "lucide-react";

import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA } from "@/components/ServicePage";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd, buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/components/JsonLd";

const faqs = [
  {
    q: "How much does business strategy consulting cost?",
    a: "It depends on scope — a focused diagnostic is priced differently from an ongoing operating partnership. We'll give you a specific number after understanding what you actually need, not a generic package price.",
  },
  {
    q: "How long does an engagement take?",
    a: "A diagnostic and roadmap typically takes 30 days. Implementation timelines vary — some fixes land in weeks, larger operational redesigns run over one to two quarters.",
  },
  {
    q: "Do you replace our existing team or work with them?",
    a: "We work with your team. Our job is to find the bottleneck and build the fix alongside the people who'll own it after we're gone.",
  },
  {
    q: "What size businesses do you work with?",
    a: "Mostly growth-stage companies and established businesses hitting a specific operational wall — not pre-revenue startups, and not problems that just need more headcount.",
  },
  {
    q: "Do you just advise, or can you also run the process for us?",
    a: "Both. Some engagements end with a roadmap your team executes. Others hand off the actual process — a call centre line, back-office work, customer support — to a team we staff and manage, so it runs without adding headcount on your side.",
  },
];

export const Route = createFileRoute("/services/business-strategy")({
  head: () => ({
    meta: [
      {
        title: "Business Strategy & Process Outsourcing (BPO) | ZOUM Consultancy",
      },

      {
        name: "description",
        content:
          "ZOUM provides business strategy consulting and business process outsourcing — growth strategy, operational fixes, call centre operations, back-office and customer support — for companies across India.",
      },

      {
        property: "og:title",
        content: "Business Strategy & Process Outsourcing | ZOUM Consultancy",
      },

      {
        property: "og:description",
        content:
          "From strategy to execution: operational consulting plus outsourced call centre, back-office, and customer support services.",
      },
      { property: "og:url", content: "https://zoumconsultancy.com/services/business-strategy" },
    ],
    links: [
      { rel: "canonical", href: "https://zoumconsultancy.com/services/business-strategy" },
    ],
  }),

  component: BusinessStrategyPage,
});

const frameworks = [
  {
    icon: Target,

    name: "Growth Strategy",

    desc: "We find where growth is realistically available and build a plan the team can actually execute — not a 40-slide deck that sits in a drive.",
  },

  {
    icon: Workflow,

    name: "Operational Fixes",

    desc: "We find the specific workflows costing you time and margin, and redesign them — usually a handful of processes, not a full overhaul.",
  },

  {
    icon: BarChart3,

    name: "Reporting & Visibility",

    desc: "Dashboards and reporting that tell you what's actually happening, so decisions aren't made on gut feel three weeks too late.",
  },

  {
    icon: Rocket,

    name: "Scaling Support",

    desc: "Hands-on help through the specific stretch points that break most growing teams — new markets, new headcount, new complexity.",
  },
];

const outsourcing = [
  {
    icon: Headphones,
    name: "Call Centre Operations",
    desc: "Inbound support, outbound campaigns, and multilingual coverage — run by a trained team so yours doesn't have to staff for peak volume.",
  },
  {
    icon: FileStack,
    name: "Back-Office Support",
    desc: "Data entry, order processing, and the paperwork that piles up when your team is heads-down on the work only they can do.",
  },
  {
    icon: LifeBuoy,
    name: "Customer Support Services",
    desc: "Tickets, chats, and calls answered on your SLA — with the escalation path back to your team when it actually needs them.",
  },
  {
    icon: ClipboardList,
    name: "Administrative Outsourcing",
    desc: "Scheduling, documentation, and recurring admin work handed off to a team that runs it the same reliable way every time.",
  },
];

const cases = [
  {
    client: "Technology Company",

    result: "40% Faster Execution",

    duration: "6 Months",

    note: "Redesigned operational workflows and leadership processes to improve company-wide efficiency.",
  },

  {
    client: "Growing Enterprise",

    result: "3x Process Efficiency",

    duration: "1 Year",

    note: "Implemented scalable systems, reporting structures, and strategic operating models.",
  },

  {
    client: "Startup Expansion",

    result: "Market Expansion",

    duration: "Quarterly",

    note: "Built growth roadmap, operational structure, and execution strategy for scaling.",
  },
];

function BusinessStrategyPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <JsonLd
        data={buildServiceSchema({
          name: "Business Strategy & Process Outsourcing",
          description:
            "Operational diagnostics, process redesign, and growth strategy consulting, plus outsourced call centre, back-office, and customer support operations for growth-stage and established businesses.",
          url: "https://zoumconsultancy.com/services/business-strategy",
        })}
      />
      <JsonLd data={buildFAQSchema(faqs)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/business-strategy" },
          { name: "Business Strategy & Operations", path: "/services/business-strategy" },
        ])}
      />
      <PageBackdrop />

      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Business Strategy & Outsourcing"
          title="Busier, but"
          italic="not growing?"
          sub="A busier team isn't the same as a growing business. We find where your operations are actually leaking time and margin, then fix the process — not just the symptom."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />

          <div className="space-y-32">
            <Section id="overview" title="Where growth actually stalls" kicker="/ the problem">
              <div className="glass-strong rounded-3xl p-10">
                <p className="font-serif italic text-3xl">
                  "Most growth problems aren't a strategy problem. They're a 'nobody owns this'
                  problem."
                </p>

                <p className="mt-6 text-muted-foreground">
                  Revenue stalls, margins shrink, and decisions slow down — usually because
                  processes that worked at a smaller size never got redesigned for the size you are
                  now. We find the specific bottleneck and fix it, not the whole org chart.
                </p>
              </div>
            </Section>

            <Section id="process" title="Our Consulting Framework" kicker="/ methodology">
              <div className="grid md:grid-cols-2 gap-5">
                {frameworks.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: i * 0.05,
                    }}
                    className="group glass node-bloom rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <f.icon className="h-5 w-5" />
                    </div>

                    <div className="font-display text-xl">{f.name}</div>

                    <div className="text-sm text-muted-foreground mt-2">{f.desc}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section
              id="outsourcing"
              title="From strategy to who runs it"
              kicker="/ business process outsourcing"
            >
              <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                Some fixes don't need a new hire — they need a team that already knows how to run
                the process. Once we've mapped the bottleneck, we can also staff and run the fix
                itself, not just hand you a plan.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {outsourcing.map((o, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass node-bloom rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <o.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl">{o.name}</div>
                    <div className="text-sm text-muted-foreground mt-2">{o.desc}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="results" title="Business Impact" kicker="/ transformation">
              <div className="grid md:grid-cols-3 gap-4">
                {cases.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="glass-strong rounded-2xl p-6 hover-glow-lime transition"
                  >
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.client}
                    </div>

                    <div className="font-display text-3xl mt-2">{c.result}</div>

                    <div className="text-xs text-lime mt-1">{c.duration}</div>

                    <div className="text-sm text-muted-foreground mt-4">{c.note}</div>
                  </motion.div>
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
