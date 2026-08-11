import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Target, Layers, Rocket, BarChart3 } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { MagneticButton } from "@/components/MagneticButton";
import { PageBackdrop } from "@/components/PageBackdrop";

export const Route = createFileRoute("/services/business")({
  head: () => ({
    meta: [
      { title: "Business Process Outsourcing | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "Business process outsourcing in Jaipur. ZOUM helps companies scale without friction — process redesign, GTM acceleration, profit optimisation, and growth strategy across India.",
      },
      { property: "og:title", content: "Business Process Outsourcing | ZOUM Consultancy" },
      {
        property: "og:description",
        content:
          "Scale your business without friction. ZOUM's team delivers operating audits, GTM redesigns, and profit margin optimisation.",
      },
    ],
  }),
  component: BusinessPage,
});

const roadmap = [
  {
    phase: "01",
    title: "Diagnose",
    desc: "Operating audit across revenue, ops, and capital allocation.",
    weeks: "Wks 1-2",
  },
  {
    phase: "02",
    title: "Design",
    desc: "Re-architect the GTM, pricing surface, and execution cadence.",
    weeks: "Wks 3-6",
  },
  {
    phase: "03",
    title: "Deploy",
    desc: "Embedded operating partner runs the system in-quarter.",
    weeks: "Wks 7-14",
  },
  {
    phase: "04",
    title: "Compound",
    desc: "Quarterly review with thresholds, exits, and reinvestment plan.",
    weeks: "Ongoing",
  },
];

const frameworks = [
  {
    icon: Target,
    name: "North-Star Operating Model",
    desc: "A single throughput metric tied to every team's compensation.",
  },
  {
    icon: Layers,
    name: "Layered Pricing Architecture",
    desc: "Self-serve, mid-market, and strategic enterprise tiers in lockstep.",
  },
  {
    icon: Rocket,
    name: "60-Day Velocity Sprint",
    desc: "Compress decision latency by 70% across exec, product, and sales.",
  },
  {
    icon: BarChart3,
    name: "Capital Efficiency Loop",
    desc: "Burn-multiple discipline tied to net retention curves.",
  },
];

const cases = [
  {
    client: "Series B SaaS",
    result: "+312% ARR",
    duration: "11 months",
    note: "Re-architected GTM, retired 60% of low-margin SKUs.",
  },
  {
    client: "PE-backed Industrial",
    result: "$48M EBITDA",
    duration: "6 quarters",
    note: "Operating partner across two add-on integrations.",
  },
  {
    client: "Consumer Brand",
    result: "4.2× CAC payback",
    duration: "9 months",
    note: "Channel mix overhaul and category re-positioning.",
  },
];

function GrowthRoadmap() {
  return (
    <div className="relative pl-10 md:pl-14">
      {/* spine */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-4 md:left-6 top-0 w-px"
        style={{ background: "linear-gradient(to bottom, var(--brand), var(--brand-deep))" }}
      />
      <div className="space-y-8">
        {roadmap.map((r, i) => (
          <motion.div
            key={r.phase}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative glass node-bloom rounded-2xl p-6 md:p-7 ml-2"
          >
            <div className="absolute -left-[34px] md:-left-[42px] top-6 h-7 w-7 rounded-full glass-strong border border-brand-deep/40 grid place-items-center transition group-hover:bg-lime group-hover:text-white">
              <span className="font-display text-[10px] leading-none">{r.phase}</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-3">
              <div className="font-display text-2xl md:text-3xl">{r.title}</div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-lime border border-brand-deep/30 rounded-full px-2 py-0.5">
                {r.weeks}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-3 max-w-xl">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BusinessPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Business Process Outsourcing"
          title="Scale Without"
          italic="Friction."
          sub="Operations, ROI, market dominance — for operators who refuse the average curve."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="Overview" kicker="/ what we do">
              <div className="grid md:grid-cols-2 gap-5">
                {frameworks.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
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

            <Section id="process" title="Growth Roadmap" kicker="/ process">
              <GrowthRoadmap />

              <div className="mt-16">
                <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                  Case Studies
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {cases.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-strong rounded-2xl p-6 hover-glow-lime transition"
                    >
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        {c.client}
                      </div>
                      <div className="font-display text-3xl mt-2 text-foreground">{c.result}</div>
                      <div className="text-xs text-lime mt-1">{c.duration}</div>
                      <div className="text-sm text-muted-foreground mt-4">{c.note}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Section>

            <Section id="pricing" title="Engagement Tiers" kicker="/ pricing">
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    tier: "Diagnostic",
                    price: "$45K",
                    time: "30 days",
                    feats: ["Full operating audit", "Strategic memo", "Roadmap delivery"],
                  },
                  {
                    tier: "Operating Partner",
                    price: "$185K /qtr",
                    time: "Embedded",
                    feats: ["Weekly cadence", "Exec-level ownership", "Cross-functional"],
                    highlight: true,
                  },
                  {
                    tier: "Board Advisory",
                    price: "Custom",
                    time: "Annual",
                    feats: ["Quarterly board work", "Capital strategy", "Network access"],
                  },
                ].map((t, i) => (
                  <div
                    key={i}
                    className={`glass-strong rounded-3xl p-8 transition ${t.highlight ? "ring-2 ring-[var(--brand-deep)] shadow-[0_24px_60px_-24px_var(--brand-glow)]" : ""}`}
                  >
                    {t.highlight && (
                      <div className="text-[10px] inline-block bg-lime text-white px-2.5 py-1 rounded-full font-medium mb-3 tracking-wider uppercase">
                        Most engaged
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
                      className="mt-6 block text-center glass rounded-full py-3 text-sm font-semibold hover:bg-white transition"
                    >
                      Get started →
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

export function PageHeader({
  pill,
  title,
  italic,
  sub,
}: {
  pill: string;
  title: string;
  italic: string;
  sub: string;
}) {
  return (
    <header className="pt-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xs uppercase tracking-[0.3em] text-lime"
      >
        / {pill}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 font-display text-5xl md:text-7xl tracking-tight max-w-4xl leading-[0.95]"
      >
        {title} <span className="italic font-serif text-lime">{italic}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-lg text-muted-foreground max-w-2xl"
      >
        {sub}
      </motion.p>
    </header>
  );
}

export function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="text-xs uppercase tracking-[0.3em] text-lime mb-3">{kicker}</div>
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-10">{title}</h2>
      {children}
    </section>
  );
}

export function CTA() {
  return (
    <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
      <div
        className="ambient-orb h-72 w-72 -top-20 left-1/2 -translate-x-1/2"
        style={{ background: "rgba(31,203,107,0.45)" }}
      />
      <div className="relative">
        <h3 className="font-display text-3xl md:text-5xl tracking-tight">
          Ready to get started?
        </h3>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          Begin with a free 30-minute strategy call — no pitch deck, no prep required. Just a
          direct conversation about your goals.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            href="/contact"
            className="btn-lime font-semibold px-8 py-4 rounded-full inline-flex items-center"
          >
            Book a free strategy call <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground hover:text-foreground transition underline underline-offset-4"
          >
            Or send an inquiry →
          </Link>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          We respond within 24 hours · contact@zoumconsultancy.com
        </p>
      </div>
    </div>
  );
}
