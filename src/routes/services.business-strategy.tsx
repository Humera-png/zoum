import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Target, BarChart3, Workflow, Rocket } from "lucide-react";

import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { CoursesSection } from "@/components/CoursesSection";
import { courses } from "@/data/courses";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";

const bpoCourses = courses.filter((c) => c.page === "bpo");

export const Route = createFileRoute("/services/business-strategy")({
  head: () => ({
    meta: [
      {
        title: "Business Process Outsourcing | ZOUM",
      },

      {
        name: "description",
        content:
          "ZOUM provides business process outsourcing, operations support, growth strategy, and process improvement to help companies scale efficiently.",
      },

      {
        property: "og:title",
        content: "Business Process Outsourcing | ZOUM",
      },

      { rel: "canonical", href: "https://zoumconsultancy.com/services/bpo-operations" },

      {
        name: "keywords",
        content: "business process outsourcing India, BPO services Jaipur, operations consulting, process improvement",
      },

      {
        property: "og:description",
        content:
          "Strategic consulting and operational excellence solutions designed for ambitious businesses.",
      },
    ],
  }),

  component: BusinessStrategyPage,
});

const frameworks = [
  {
    icon: Target,

    name: "Business Growth Strategy",

    desc: "We help companies identify growth opportunities, improve decision making, and create clear strategies that align teams with measurable business goals.",
  },

  {
    icon: Workflow,

    name: "Operational Excellence",

    desc: "Improve internal systems, workflows, and execution processes to reduce inefficiencies and create scalable operations.",
  },

  {
    icon: BarChart3,

    name: "Performance & Analytics",

    desc: "Build data-driven organizations using dashboards, KPIs, reporting systems, and performance frameworks.",
  },

  {
    icon: Rocket,

    name: "Scaling & Transformation",

    desc: "Support businesses through expansion, digital transformation, restructuring, and long-term operational growth.",
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
      <PageBackdrop />
      <ServiceSchema
        name="Business Process Outsourcing"
        description="Operations support, growth strategy, and process improvement to help companies scale efficiently."
        url="https://zoumconsultancy.com/services/bpo-operations"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Business Process Outsourcing"
          title="Scale"
          italic="Smarter."
          sub="
Strategic consulting for businesses looking to improve operations, accelerate growth, optimize execution, and build scalable systems for long-term success.
"
        />

        <div className="mt-10 relative aspect-[21/9] rounded-3xl overflow-hidden glass-strong">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
            alt="A BPO team at work"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
        </div>

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />

          <div className="space-y-32">
            <Section id="overview" title="Strategic Growth Engine" kicker="/ consulting">
              <div className="glass-strong rounded-3xl p-10">
                <p className="font-serif italic text-3xl">
                  "Successful companies are not built only through ideas. They are built through
                  strategy, systems, execution, and the ability to adapt."
                </p>

                <p className="mt-6 text-muted-foreground">
                  ZOUM partners with organizations to solve complex business challenges through
                  strategic planning, operational improvement, technology enablement, and
                  growth-focused execution frameworks.
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

            {bpoCourses.length > 0 && (
              <Section id="courses" title="BPO Career Course" kicker="/ enroll">
                <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                  Want a career in BPO instead of outsourcing your operations to one? This is where
                  that starts.
                </p>
                <CoursesSection page="bpo" />
              </Section>
            )}

            <Section id="pricing" title="Engagement Models" kicker="/ solutions">
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    tier: "Strategy Consulting",

                    price: "Discovery",

                    time: "Initial Assessment",

                    feats: ["Business analysis", "Growth roadmap", "Strategic recommendations"],
                  },

                  {
                    tier: "Operations Transformation",

                    price: "Growth",

                    time: "Ongoing Partnership",

                    highlight: true,

                    feats: [
                      "Process optimization",

                      "Operational systems",

                      "Performance improvement",
                    ],
                  },

                  {
                    tier: "Enterprise Advisory",

                    price: "Custom",

                    time: "Long-Term",

                    feats: ["Ongoing consulting", "Change planning", "Growth strategy"],
                  },
                ].map((t, i) => (
                  <div
                    key={i}
                    className={`glass-strong rounded-3xl p-8 transition ${
                      t.highlight
                        ? "ring-2 ring-[var(--brand-deep)] shadow-[0_24px_60px_-24px_var(--brand-glow)]"
                        : ""
                    }`}
                  >
                    {t.highlight && (
                      <div className="text-[10px] inline-block bg-lime text-white px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}

                    <div className="font-display text-2xl">{t.tier}</div>

                    <div className="font-display text-4xl mt-2">{t.price}</div>

                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                      {t.time}
                    </div>

                    <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                      {t.feats.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-lime" />

                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="mt-6 block text-center glass rounded-full py-3 text-sm hover:bg-white transition"
                    >
                      Discuss Strategy
                    </Link>
                  </div>
                ))}
              </div>
            </Section>

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
