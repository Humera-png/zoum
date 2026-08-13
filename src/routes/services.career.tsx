import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Quote,
  Compass,
  Target,
  Rocket,
  Trophy,
  Sparkles,
  Briefcase,
  ArrowUpRight,
  Cpu,
  Landmark,
  HeartPulse,
  Factory,
  ShoppingBag,
  ShoppingCart,
  Radio,
  Plane,
} from "lucide-react";

import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageHeader, Section, CTA } from "./services.business";
import { PageBackdrop } from "@/components/PageBackdrop";

export const Route = createFileRoute("/services/career")({
  head: () => ({
    meta: [
      {
        title: "Executive Career Advisory & Talent Placement | ZOUM Consultancy Jaipur",
      },
      {
        name: "description",
        content:
          "ZOUM Consultancy Jaipur: confidential executive career advisory, C-suite positioning, talent acquisition, and leadership transition services across India. 700+ placements in one year.",
      },
      {
        property: "og:title",
        content: "Executive Career Advisory & Talent Placement | ZOUM Consultancy",
      },
      {
        property: "og:description",
        content:
          "Fast-track your leadership career with ZOUM. Executive positioning, compensation negotiation, C-suite transitions, and talent placement across India.",
      },
    ],
  }),

  component: CareerPage,
});

type Milestone = {
  icon: React.ComponentType<{ size?: number }>;

  code: string;

  title: string;

  desc: string;

  metric?: string;

  span: string;
};

const milestones: Milestone[] = [
  {
    icon: Compass,
    code: "M1",
    title: "Career Assessment",
    desc: "An objective evaluation of your leadership impact, operational strengths, executive experience, and market value to create a clear career transition strategy.",
    metric: "Audit",
    span: "md:col-span-2",
  },

  {
    icon: Target,
    code: "M2",
    title: "Executive Positioning",
    desc: "We transform your experience into a leadership narrative that communicates your value to boards, founders, investors, and executive hiring teams.",
    span: "md:col-span-2",
  },

  {
    icon: Rocket,
    code: "M3",
    title: "Opportunity Strategy",
    desc: "A targeted approach to accessing senior leadership opportunities through market mapping, relationship strategy, and executive networking.",
    metric: "Access",
    span: "",
  },

  {
    icon: Briefcase,
    code: "M4",
    title: "Interview & Negotiation",
    desc: "Preparation for executive interviews, stakeholder conversations, compensation discussions, and final offer evaluation.",
    span: "",
  },

  {
    icon: Trophy,
    code: "M5",
    title: "Leadership Transition",
    desc: "A structured first 90-day roadmap designed to build credibility, align teams, and create momentum in your new leadership role.",
    metric: "90 Days",
    span: "md:col-span-2",
  },

  {
    icon: Sparkles,
    code: "M6",
    title: "Long-Term Strategy",
    desc: "Continuous career advisory focused on board readiness, leadership growth, and future executive opportunities.",
    span: "",
  },
];

function BentoMilestones() {
  return (
    <div className="career-bento">
      {milestones.map((m, i) => (
        <motion.div
          key={m.code}
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
          className={`career-card glass ${m.span}`}
        >
          <div className="career-top">
            <div className="career-icon">
              <m.icon size={18} />
            </div>

            <span>{m.code}</span>
          </div>

          <div>
            <h3>{m.title}</h3>

            <p>{m.desc}</p>

            {m.metric && <div className="career-pill">{m.metric}</div>}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const successes = [
  {
    name: "Technology Executive",
    before: "Engineering Manager",
    after: "Director of Engineering",
    lift: "Expanded Scope",
  },

  {
    name: "Operations Leader",
    before: "General Manager",
    after: "VP Operations",
    lift: "Leadership Growth",
  },

  {
    name: "Product Strategist",
    before: "Product Director",
    after: "Head of Product",
    lift: "Strategic Ownership",
  },

  {
    name: "Finance Leader",
    before: "Finance Director",
    after: "Chief Financial Officer",
    lift: "Executive Transition",
  },
];

const expertise = [
  { icon: Cpu, name: "IT & Technology", desc: "Engineering, product, and technical leadership roles." },
  { icon: Landmark, name: "Banking & Finance", desc: "Finance, operations, and leadership across financial services." },
  { icon: HeartPulse, name: "Healthcare", desc: "Administrative and operational leadership for healthcare providers." },
  { icon: Factory, name: "Manufacturing", desc: "Plant leadership, operations, and supply chain roles." },
  { icon: ShoppingBag, name: "Consumer & Retail", desc: "Brand, merchandising, and retail operations leadership." },
  { icon: ShoppingCart, name: "E-Commerce", desc: "Growth, operations, and category leadership for online businesses." },
  { icon: Radio, name: "Telecom", desc: "Technical and operational leadership across telecom." },
  { icon: Plane, name: "Aviation", desc: "Operations and management roles across aviation and logistics." },
];

function CareerPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />

      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Executive Career Advisory"
          title="The Executive"
          italic="Positioning."
          sub="A private practice helping accomplished operators move into C-suite, general management, and board-level opportunities."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />

          <div className="space-y-32">
            <Section id="overview" title="The Mechanism of Advancement" kicker="/ strategy">
              <div className="glass-strong rounded-3xl p-10">
                <Quote className="text-lime mb-5" />

                <p className="font-serif italic text-3xl">
                  "Senior opportunities are not won through applications. They are created through
                  positioning, relationships, and strategic visibility."
                </p>

                <p className="mt-6 text-muted-foreground">
                  ZOUM works with senior professionals to clarify their value, strengthen their
                  market presence, and access leadership opportunities that match their ambition.
                </p>
              </div>
            </Section>

            <Section id="process" title="Milestone Frameworks" kicker="/ methodology">
              <BentoMilestones />
            </Section>

            <section id="pricing">
              <h2 className="font-display text-5xl mb-10">Leadership Trajectory</h2>

              <div className="grid md:grid-cols-2 gap-5">
                {successes.map((s, i) => (
                  <div key={i} className="glass rounded-3xl p-6">
                    <div className="text-sm">{s.name}</div>

                    <div className="mt-5">
                      <span className="line-through text-muted-foreground">{s.before}</span>

                      <ArrowUpRight className="inline mx-2 text-lime" />

                      <strong>{s.after}</strong>
                    </div>

                    <div className="career-pill mt-4">{s.lift}</div>
                  </div>
                ))}
              </div>
            </section>

            <Section id="expertise" title="Our Expertise" kicker="/ industries">
              <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                We place across a wide range of industries, so we already understand the hiring
                challenges specific to your sector, not just generic recruiting.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {expertise.map((e, i) => (
                  <motion.div
                    key={e.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4">
                      <e.icon className="h-5 w-5 text-lime" />
                    </div>
                    <div className="font-display text-lg">{e.name}</div>
                    <div className="text-sm text-muted-foreground mt-2">{e.desc}</div>
                  </motion.div>
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
