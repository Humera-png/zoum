import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Cpu,
  Globe,
  TrendingUp,
  ShieldCheck,
  Layers,
  Handshake,
} from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { PageBackdrop } from "@/components/PageBackdrop";
import { Counter } from "@/components/Counter";
import { CitiesSection, FaqSection } from "@/components/ServiceGuide";

export const Route = createFileRoute("/services/business")({
  head: () => ({
    meta: [
      { title: "Our Services | ZOUM Jaipur & Ahmedabad" },
      {
        name: "description",
        content:
          "ZOUM Consultancy's 5 service lines: Find Job, Learning & Development, AI & IT Services, Website Development & Social Media, and Business Process Outsourcing, run by one team in Jaipur.",
      },
      { property: "og:title", content: "Our Services | ZOUM Consultancy" },
      {
        property: "og:description",
        content:
          "One team, five service lines: recruitment, training, AI & IT, web & social, and BPO.",
      },
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com/services/business" }],
  }),
  component: BusinessPage,
});

const pageFaqs = [
  {
    q: "What services does ZOUM Consultancy offer?",
    a: "Five service lines: job placement and recruitment, Learning and Development courses, AI and IT services, website development and social media marketing, and business process outsourcing (BPO).",
  },
  {
    q: "Where is ZOUM Consultancy located?",
    a: "Our headquarters is in Jaipur, Rajasthan. We also serve Ahmedabad, and work with clients and candidates across India.",
  },
  {
    q: "Can one team handle more than one service for us?",
    a: "Yes. Every service line is run by the same team, so your website, marketing, automation, and hiring don't need separate vendors.",
  },
  {
    q: "How do I get started?",
    a: "Contact us through the contact page or WhatsApp with what you need, and we'll get back to you with next steps.",
  },
];

const services = [
  {
    icon: Briefcase,
    name: "Find Job",
    headline: "Get Noticed For Bigger Roles.",
    desc: "Stand out for roles you're already qualified for, and negotiate better pay once you get there.",
    to: "/services/career" as const,
  },
  {
    icon: GraduationCap,
    name: "Learning and Development (L&D)",
    headline: "Skills That Get You Noticed.",
    desc: "BPO, IT, business consultancy, and AI masterclasses, each with a clear path to enroll.",
    to: "/services/talent-development" as const,
  },
  {
    icon: Cpu,
    name: "AI and IT Services",
    headline: "Let AI Handle the Busywork.",
    desc: "AI agents, automation, and custom software that take repetitive work off your team's plate.",
    to: "/services/ai-automation" as const,
  },
  {
    icon: Globe,
    name: "Website Development & Social Media",
    headline: "A Digital Presence That Converts.",
    desc: "A fast, modern site and the social content and campaigns that bring it an audience.",
    to: "/services/website-development" as const,
  },
  {
    icon: TrendingUp,
    name: "Business Process Outsourcing",
    headline: "Scale Without Friction.",
    desc: "We find where your business is losing time and money, then fix it, with real BPO delivery.",
    to: "/services/bpo-operations" as const,
  },
];

const whyZoum = [
  {
    icon: Layers,
    title: "One Team, Every Discipline",
    body: "Recruitment, training, tech, and operations under one roof, so nothing falls through the cracks between vendors.",
  },
  {
    icon: ShieldCheck,
    title: "Real Industry Experience",
    body: "Our team has actually worked in the roles and industries we advise on, not just studied them.",
  },
  {
    icon: Handshake,
    title: "Built for the Long Term",
    body: "We stay involved after the first project. Transparent communication, not a one-time transaction.",
  },
];

function ServiceOverviewCard({ s, i }: { s: (typeof services)[number]; i: number }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link
        to={s.to}
        className="relative flex flex-col h-full glass rounded-3xl p-7 overflow-hidden hover-glow-lime hover:-translate-y-1.5 transition-all duration-500"
      >
        <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-lime/0 group-hover:bg-lime/25 blur-3xl transition-all duration-700" />
        <div className="flex items-center justify-between relative">
          <div className="h-11 w-11 rounded-2xl glass-strong grid place-items-center group-hover:bg-lime group-hover:text-white transition">
            <Icon className="h-5 w-5" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-foreground/30 group-hover:text-foreground group-hover:rotate-45 transition" />
        </div>
        <div className="mt-5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground relative">
          {s.name}
        </div>
        <h3 className="mt-2 font-display text-2xl tracking-tight leading-tight relative">
          {s.headline}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative flex-1">
          {s.desc}
        </p>
        <span className="mt-4 pt-3 border-t border-border text-xs font-semibold text-lime group-hover:underline relative">
          Explore →
        </span>
      </Link>
    </motion.div>
  );
}

function BusinessPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Business Consultancy Services in Jaipur & Ahmedabad"
          title="Everything You Need."
          italic="One Team."
          sub="Five service lines, one consultancy: recruitment, training, AI & IT, web & social, and business process outsourcing, coordinated instead of scattered across five vendors."
        />

        <div className="mt-20 space-y-32">
          <Section id="overview" title="Our Service Lines" kicker="/ what we do">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <ServiceOverviewCard key={s.name} s={s} i={i} />
              ))}
            </div>
          </Section>

          <Section id="track-record" title="A Track Record You Can Check" kicker="/ real numbers">
            <div className="glass-strong rounded-3xl p-10 md:p-14 grid sm:grid-cols-2 gap-10 relative overflow-hidden">
              <motion.div
                className="ambient-orb h-72 w-72 -top-20 left-1/2 -translate-x-1/2"
                style={{ background: "rgba(31,203,107,0.35)" }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              {[
                { v: 5000, suffix: "+", label: "Placements" },
                { v: 100, suffix: "+", label: "Companies Served" },
              ].map((s, i) => (
                <div key={i} className="relative text-center sm:text-left">
                  <div className="font-display text-5xl md:text-6xl tracking-tight">
                    <Counter to={s.v} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="why" title="Why Businesses Choose ZOUM" kicker="/ the difference">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyZoum.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-6 hover-glow-lime transition"
                >
                  <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4">
                    <w.icon className="h-5 w-5 text-lime" />
                  </div>
                  <div className="font-display text-lg">{w.title}</div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{w.body}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          <CitiesSection
            intro={
              "Our Jaipur headquarters serves businesses, candidates, and students in Jaipur and Ahmedabad, and we work with clients across India."
            }
          />

          <FaqSection faqs={pageFaqs} />
          <CTA />
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
      {/* The pill sits inside the H1 so the heading carries the search
          keywords ("... in Jaipur & Ahmedabad") while the big slogan stays the same. */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display tracking-tight max-w-4xl"
      >
        <span className="block font-sans text-xs uppercase tracking-[0.3em] text-lime leading-normal before:content-['/_']">
          {pill}
          <span className="sr-only">:</span>
        </span>
        <span className="mt-4 block text-5xl md:text-7xl leading-[0.95]">
          {title} <span className="italic font-serif text-lime">{italic}</span>
        </span>
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

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "ZOUM Consultancy",
      url: "https://zoumconsultancy.com",
    },
    areaServed: { "@type": "Country", name: "India" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
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
        <h3 className="font-display text-3xl md:text-5xl tracking-tight">Ready to get started?</h3>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          Begin with a free 30-minute strategy call. No pitch deck, no prep required. Just a direct
          conversation about your goals.
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
