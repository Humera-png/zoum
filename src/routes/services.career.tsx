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
} from "lucide-react";

import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageHeader, Section, CTA } from "@/components/ServicePage";
import { PageBackdrop } from "@/components/PageBackdrop";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd, buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/components/JsonLd";

const faqs = [
  {
    q: "How long does executive career advisory take?",
    a: "Most clients see their first serious opportunity within 8–12 weeks of starting, though timelines vary with seniority and target role. We'll be specific after an initial assessment.",
  },
  {
    q: "Is this the same as a recruiter?",
    a: "No. Recruiters work for the hiring company. We work only for you — positioning, strategy, and negotiation are built around your goals, not a placement fee.",
  },
  {
    q: "What level of roles do you work with?",
    a: "Director through C-suite and board-level. If you're already operating at a senior level and want the title and comp to match, this is built for you.",
  },
  {
    q: "Is this confidential?",
    a: "Yes — engagements are private by default, which matters if you're advising while still employed.",
  },
];

export const Route = createFileRoute("/services/career")({
  head: () => ({
    meta: [
      {
        title: "Executive Career Advisory & Talent Placement | ZOUM Consultancy Jaipur",
      },
      {
        name: "description",
        content:
          "ZOUM Consultancy Jaipur — confidential executive career advisory, C-suite positioning, talent acquisition, and leadership transition services across India. 700+ placements in one year.",
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
      { property: "og:url", content: "https://zoumconsultancy.com/services/career" },
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com/services/career" }],
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
    desc: "An honest look at where you actually stand — your strengths, your market value, and what's realistically next.",
    metric: "Audit",
    span: "md:col-span-2",
  },

  {
    icon: Target,
    code: "M2",
    title: "Executive Positioning",
    desc: "We rewrite how you present your experience so boards and hiring teams see the leader you already are.",
    span: "md:col-span-2",
  },

  {
    icon: Rocket,
    code: "M3",
    title: "Opportunity Access",
    desc: "We put you in front of roles and decision-makers you can't reach through job boards alone.",
    metric: "Access",
    span: "",
  },

  {
    icon: Briefcase,
    code: "M4",
    title: "Interview & Negotiation",
    desc: "Real prep for the conversations that decide the offer — including the compensation talk.",
    span: "",
  },

  {
    icon: Trophy,
    code: "M5",
    title: "First 90 Days",
    desc: "A clear plan for building credibility and momentum in the new role, so you're not figuring it out alone.",
    metric: "90 Days",
    span: "md:col-span-2",
  },

  {
    icon: Sparkles,
    code: "M6",
    title: "What Comes Next",
    desc: "Ongoing advisory as you grow into the role and start eyeing the one after it.",
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

function CareerPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <JsonLd
        data={buildServiceSchema({
          name: "Career Mastery & Talent Acquisition",
          description:
            "Executive career advisory, positioning, and talent placement for senior professionals moving into C-suite and board-level roles.",
          url: "https://zoumconsultancy.com/services/career",
        })}
      />
      <JsonLd data={buildFAQSchema(faqs)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/career" },
          { name: "Career Mastery & Talent Acquisition", path: "/services/career" },
        ])}
      />
      <PageBackdrop />

      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Career Mastery & Talent Acquisition"
          title="Stuck below"
          italic="your level?"
          sub="You're already doing the work of the role above you — just without the title or the pay. We help you get both."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />

          <div className="space-y-32">
            <Section id="overview" title="Why applications alone don't work" kicker="/ the problem">
              <div className="glass-strong rounded-3xl p-10">
                <Quote className="text-lime mb-5" />

                <p className="font-serif italic text-3xl">
                  "Senior roles rarely go to the best applicant. They go to the person the room
                  already trusts."
                </p>

                <p className="mt-6 text-muted-foreground">
                  If you're applying and hearing nothing back, the problem usually isn't your
                  experience — it's that decision-makers don't know you exist yet. We fix your
                  positioning and put you in front of the people who are hiring.
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

            <Section id="faq" title="Frequently asked" kicker="/ faq">
              <FAQSection items={faqs} />
            </Section>

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
