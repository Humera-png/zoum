import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Workflow, Rocket, ArrowUpRight } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";

export const Route = createFileRoute("/services/business-consultancy")({
  head: () => ({
    meta: [
      { title: "Business Consultancy | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "Business consultancy for growing companies: growth strategy, operational excellence, and performance systems. ZOUM Consultancy, Jaipur.",
      },
      {
        name: "keywords",
        content: "business consultancy Jaipur, growth strategy consulting India, business advisory services",
      },
      { property: "og:title", content: "Business Consultancy | ZOUM Consultancy" },
      {
        property: "og:description",
        content: "A clear growth plan your team can actually execute, backed by a team that's done the work.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/services/business-consultancy" },
    ],
  }),
  component: BusinessConsultancyPage,
});

const pillars = [
  {
    icon: TrendingUp,
    name: "Growth Strategy",
    desc: "Find where growth is realistically available and build a plan your team can execute.",
  },
  {
    icon: Workflow,
    name: "Operational Excellence",
    desc: "Improve internal systems and workflows to reduce inefficiencies and create scalable operations.",
  },
  {
    icon: BarChart3,
    name: "Performance & Analytics",
    desc: "Build data-driven decision making with dashboards, KPIs, and reporting systems.",
  },
  {
    icon: Rocket,
    name: "Scaling & Transformation",
    desc: "Support through expansion, restructuring, and long-term operational growth.",
  },
];

function BusinessConsultancyPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name="Business Consultancy"
        description="Growth strategy, operational excellence, and performance systems for growing companies."
        url="https://zoumconsultancy.com/services/business-consultancy"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Business Consultancy"
          title="A Growth Plan"
          italic="Your Team Can Actually Run."
          sub="Strategic consulting for businesses looking to improve operations, accelerate growth, and build scalable systems for long-term success."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="What's Included" kicker="/ how it works">
              <div className="grid md:grid-cols-2 gap-5">
                {pillars.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass node-bloom rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl">{p.name}</div>
                    <div className="text-sm text-muted-foreground mt-2">{p.desc}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="process" title="Need To Train Your Team Too?" kicker="/ pairs well with">
              <div className="glass-strong rounded-3xl p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <p className="text-muted-foreground max-w-xl">
                  A growth strategy is only as good as the people executing it. Our Learning &
                  Development courses cover English & communication, leadership readiness, and
                  interview mastery for teams that need to level up alongside the plan.
                </p>
                <Link
                  to="/services/talent-development"
                  className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
                >
                  See L&D courses <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Section>

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
