import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Briefcase,
  TrendingUp,
  Users,
  Cpu,
  Headphones,
  Quote,
  Star,
  Award,
  Zap,
  Layers,
  ShieldCheck,
  Handshake,
  GraduationCap,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { JobSeekerForm } from "@/components/JobSeekerForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZOUM Consultancy Jaipur | Recruitment Agency & IT Services Company" },
      {
        name: "description",
        content:
          "ZOUM Consultancy is a Jaipur recruitment agency and IT services company. 700+ job placements across India, plus AI automation, AI agents, website development, and custom software.",
      },
      {
        name: "keywords",
        content:
          "recruitment agency Jaipur, job placement India, IT services company Jaipur, AI automation agency, AI agents development, website development company India, software development company",
      },
      { property: "og:title", content: "ZOUM Consultancy | Recruitment Agency & IT Services Company" },
      {
        property: "og:description",
        content:
          "Jaipur's recruitment agency and IT services company: job placement across India, AI automation, AI agents, website & software development.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com" },
    ],
  }),
  component: Index,
});

const marqueeClients = [
  { name: "Teleperformance", src: "/assets/teleperformance.png" },
  { name: "Genpact", src: "/assets/genpact.png" },
  { name: "Accenture", src: "/assets/accenture.png" },
  { name: "Infosys", src: "/assets/infosys.png" },
  { name: "Knack Global", src: "/assets/knackglobal.jpg" },
  { name: "AGS Health", src: "/assets/agshealth.jpg" },
  { name: "Timoespro", src: "/assets/timespro.jpg" },
  { name: "KGK", src: "/assets/kgkrealestate.jpg" },
  { name: "Celebal Tech", src: "/assets/celebeltech.jpg" },
];

function GlassVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 80, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 80, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative aspect-square w-full max-w-[560px] mx-auto"
      style={{ perspective: 1200 }}
    >
      <div
        className="ambient-orb h-72 w-72 -top-10 -left-10"
        style={{ background: "rgba(31,203,107,0.45)" }}
      />
      <div
        className="ambient-orb h-80 w-80 bottom-0 right-0"
        style={{ background: "rgba(14,124,66,0.35)" }}
      />

      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-8 rounded-3xl glass-strong"
          style={{ transform: "translateZ(40px)" }}
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-20 right-0 h-48 w-48 rounded-3xl glass-strong overflow-hidden"
          style={{ transform: "translateZ(80px)" }}
        >
          <div className="p-5 text-xs text-muted-foreground">PLACEMENTS IN 1 YEAR</div>
          <div className="px-5 font-display text-4xl">
            <span className="text-foreground">700+</span>
          </div>
          <div
            className="mt-4 mx-5 h-16 rounded-md"
            style={{ background: "linear-gradient(to top, rgba(31,203,107,0.65), transparent)" }}
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-12 left-0 h-40 w-56 rounded-3xl glass-strong p-5"
          style={{ transform: "translateZ(120px)" }}
        >
          <div className="text-[11px] text-muted-foreground">CLIENTS PLACED · Q4</div>
          <div className="mt-1 font-display text-3xl text-foreground">42</div>
          <div className="mt-3 flex -space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-7 w-7 rounded-full border border-foreground/20"
                style={{ background: i === 3 ? "var(--brand)" : "rgba(255,255,255,0.85)" }}
              />
            ))}
          </div>
        </motion.div>
        <div className="absolute inset-0 rounded-full border border-foreground/10" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-12 rounded-full border border-dashed border-foreground/15"
        />
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative pt-16 md:pt-24 pb-12 md:pb-20 px-4 sm:px-6 mx-auto w-full max-w-full overflow-hidden block"
    >
      <div
        className="ambient-orb h-[500px] w-[500px] top-20 -left-40"
        style={{ background: "rgba(31,203,107,0.28)" }}
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 lg:gap-5 items-center relative z-10">
        <div className="min-w-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight whitespace-normal break-words"
          >
            Architecting <span className="italic font-serif text-lime">Alpha</span>:
            <br />
            Career &amp; Business <span className="text-gradient-charcoal">Mastery.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-5 md:mt-7 text-base md:text-lg text-muted-foreground max-w-xl"
          >
            ZOUM Consultancy scales companies and accelerates careers through data-driven
            strategy, clear execution, and no wasted time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-7 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <MagneticButton
              href="/contact"
              className="btn-lime w-full md:w-auto font-semibold px-7 py-4 rounded-full inline-flex items-center justify-center text-white"
            >
              Apply Here <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <Link
              to="/services/career"
              className="w-full md:w-auto glass px-7 py-4 rounded-full text-sm font-semibold text-foreground hover:bg-white transition inline-flex items-center justify-center"
            >
              Find a Job
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassVisual />
        </motion.div>
      </div>
    </section>
  );
}

function ClientMarquee() {
  const row = [...marqueeClients, ...marqueeClients];
  return (
    <section
      aria-label="Client roster"
      className="relative py-6 md:py-8 border-y border-border bg-white/40 backdrop-blur overflow-hidden"
    >
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-4 px-6">
        / Trusted by leading companies across India
      </div>
      <div className="relative w-full max-w-full overflow-hidden block">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {row.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="inline-flex items-center justify-center bg-white/70 border border-slate-200/50 px-5 py-3 mx-3 h-16 min-w-[130px] rounded-xl shadow-sm transition-all duration-500 cursor-pointer hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-0.5 active:border-emerald-500/40 active:shadow-[0_0_20px_rgba(16,185,129,0.15)] active:-translate-y-0.5"
            >
              <img
                src={c.src}
                alt={c.name}
                className="h-8 w-auto max-w-[110px] object-contain transition-all duration-500 filter grayscale-[30%] opacity-90 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Static portfolio metrics block */}
      <div className="max-w-5xl mx-auto mt-5 md:mt-7 px-4 sm:px-6">
        <div className="glass-strong rounded-2xl grid grid-cols-2 divide-x divide-border overflow-hidden">
          <div className="p-6 md:p-8 text-center">
            <div className="font-display text-4xl md:text-6xl tracking-tight text-foreground leading-none">
              700+
            </div>
            <div className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
              PLACEMENTS IN 1 YEAR
            </div>
          </div>
          <div className="p-6 md:p-8 text-center">
            <div className="font-display text-4xl md:text-6xl tracking-tight text-foreground leading-none">
              42
            </div>
            <div className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
              CLIENTS PLACED · Q4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Briefcase,
    title: "Career Mastery and Talent Acquisition",
    headline: "Get Noticed For Bigger Roles.",
    body: "We help you stand out for the roles you're already qualified for, and negotiate better pay once you get there. From your profile to interview prep, we help you move up faster.",
    points: ["Stand out to hiring teams", "Negotiate better pay", "Interview preparation"],
    to: "/services/career" as const,
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Cpu,
    title: "AI and IT Services",
    headline: "Let AI Handle the Busywork.",
    body: "We build simple AI tools and software that take over repetitive tasks like data entry, replying to customers, and reporting, so your team can spend time on work that actually grows the business.",
    points: ["Saves hours every week", "Fewer manual mistakes", "Easy for your team to use"],
    to: "/services/ai-automation" as const,
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    headline: "Turn Attention Into Customers.",
    body: "We build content and campaigns that get seen, and turn that attention into real leads for your business, not just likes.",
    points: ["Content that gets seen", "Real leads, not just likes", "One clear brand voice"],
    to: "/services/socialmedia" as const,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: TrendingUp,
    title: "Business Process Outsourcing",
    headline: "Scale Without Friction.",
    body: "We find where your business is losing time and money, then fix it. Simpler processes, better margins, and faster growth.",
    points: ["Fewer bottlenecks", "Better profit margins", "Faster growth"],
    to: "/services/bpo-operations" as const,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: GraduationCap,
    title: "Talent & Development",
    headline: "Skills That Get You Noticed.",
    body: "English, communication, and workplace skills training that helps people show up with more confidence and get hired faster.",
    points: ["English & communication", "Interview confidence", "Workplace skills"],
    to: "/services/talent-development" as const,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Globe,
    title: "Website Development",
    headline: "A Site That Actually Works.",
    body: "We build fast, modern websites and apps that are easy to manage and built to grow with your business, not something you'll need to redo in a year.",
    points: ["Fast, modern builds", "Easy to update", "Built to grow with you"],
    to: "/services/website-development" as const,
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Handshake,
    title: "Business Consultancy",
    headline: "One Team For Everything That Grows You.",
    body: "Strategy, marketing, and the website behind it, run by one team instead of three vendors who don't talk to each other.",
    points: ["One team, one plan", "Strategy plus execution", "No vendor juggling"],
    to: "/services/business-consultancy" as const,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    center: true,
  },
];

function ServiceCard({ s, i }: { s: (typeof services)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = s.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative glass rounded-3xl p-6 md:p-7 hover-glow-lime transition-all duration-500 overflow-hidden flex flex-col h-full ${"center" in s && s.center ? "lg:col-start-2" : ""}`}
    >
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-lime/0 group-hover:bg-lime/30 blur-3xl transition-all duration-700" />
      <Link to={s.to} className="relative z-10 flex flex-col h-full">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5 glass-strong">
          <img
            src={s.img}
            alt={s.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
        <div className="flex items-start justify-between">
          <div className="h-11 w-11 rounded-2xl glass-strong grid place-items-center group-hover:bg-lime group-hover:text-white transition">
            <Icon className="h-5 w-5" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-foreground/30 group-hover:text-foreground group-hover:rotate-45 transition" />
        </div>
        <div className="mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {s.title}
        </div>
        <h3 className="mt-2 font-display text-2xl md:text-3xl tracking-tight leading-tight">
          {s.headline}
        </h3>
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.body}</p>
        <div className="mt-4 flex flex-wrap gap-1.5 mt-auto pt-4">
          {s.points.map((p) => (
            <span key={p} className="text-[11px] glass rounded-full px-2.5 py-1">
              {p}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
          <span className="text-xs font-semibold text-lime group-hover:underline">
            Learn more
          </span>
          <ArrowUpRight className="h-4 w-4 text-lime" />
        </div>
      </Link>
    </motion.div>
  );
}

function Services() {
  return (
    <section id="services" className="relative px-4 sm:px-6 py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10 md:mb-12 flex-wrap gap-6"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-lime mb-3">/ services</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl leading-tight">
              Everything you need.{" "}
              <span className="italic font-serif text-muted-foreground">One team.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="text-muted-foreground max-w-sm text-sm">
              Strategy, talent, digital presence, and AI. Every layer of a modern, high-performance
              enterprise.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
            >
              Not sure which service fits? Talk to us <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const whatSetsUsApart = [
  {
    icon: Users,
    title: "Real Industry Experience",
    body: "Our team has actually worked in the roles and industries we advise on, not just studied them.",
  },
  {
    icon: Award,
    title: "700+ Placements, Proven Results",
    body: "A track record you can check, not a promise you have to take on faith.",
  },
  {
    icon: Zap,
    title: "Fast Response, No Delays",
    body: "We respond within 24 hours. No multi-week onboarding before real work starts.",
  },
];

const whyChooseUs = [
  {
    icon: Layers,
    title: "One Team, Every Discipline",
    body: "Strategy, talent, marketing, and tech under one roof, so nothing falls through the cracks.",
  },
  {
    icon: ShieldCheck,
    title: "Verified, Vetted Talent",
    body: "Every candidate we put forward is screened and assessed before you ever see a profile.",
  },
  {
    icon: Handshake,
    title: "Built for the Long Term",
    body: "We stay involved after the first project. Transparent communication, not a one-time transaction.",
  },
];

function CardGrid({
  items,
}: {
  items: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((w, i) => (
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
  );
}

function WhyChooseZoum() {
  return (
    <section className="relative px-4 sm:px-6 py-14 md:py-20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">/ why zoum</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">
              What sets us{" "}
              <span className="italic font-serif text-muted-foreground">apart.</span>
            </h2>
          </motion.div>
          <CardGrid items={whatSetsUsApart} />
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">/ the difference</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">
              Why{" "}
              <span className="italic font-serif text-muted-foreground">choose us.</span>
            </h2>
          </motion.div>
          <CardGrid items={whyChooseUs} />
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const words = "Precision over noise. Results over talk.".split(" ");
  return (
    <section id="about" ref={ref} className="relative px-4 sm:px-6 py-14 md:py-20">
      <div
        className="ambient-orb h-96 w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "rgba(31,203,107,0.18)" }}
      />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-lime mb-4"
        >
          / our philosophy
        </motion.div>
        <p className="font-serif italic text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            const opacity = useTransform(
              scrollYProgress,
              [start * 0.6 + 0.1, end * 0.6 + 0.1],
              [0.2, 1],
            );
            return (
              <motion.span key={i} style={{ opacity }} className="inline-block mr-3">
                {w}
              </motion.span>
            );
          })}
        </p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-7 text-muted-foreground max-w-xl mx-auto"
        >
          Founded in 2020, ZOUM Placement Services works with businesses and people who want
          real results, not average ones.
        </motion.p>

        {/* Compact 2-col metric matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto glass-strong rounded-2xl grid grid-cols-2 divide-x divide-border overflow-hidden"
        >
          <div className="px-6 py-7 md:py-8 text-center">
            <div className="font-display text-3xl md:text-5xl tracking-tight text-foreground leading-none">
              700+
            </div>
            <div className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Placements in a year
            </div>
          </div>
          <div className="px-6 py-7 md:py-8 text-center">
            <div className="font-display text-3xl md:text-5xl tracking-tight text-foreground leading-none">
              42
            </div>
            <div className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Clients placed
            </div>
          </div>
        </motion.div>

        <Link
          to="/about"
          className="mt-9 inline-flex items-center gap-2 text-sm text-foreground hover:text-lime transition"
        >
          Meet the advisory board <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Sarim J.",
    role: "CTO, Fintech Ops",
    service: "AI Automation and IT Services",
    quote:
      "ZOUM built an autonomous reconciliation agent that replaced three outsourced teams' worth of work. Easily our best investment this year.",
  },
  {
    name: "Priya Malhotra",
    role: "Founder, Series B SaaS",
    service: "Business Process Outsourcing",
    quote:
      "They rebuilt our go-to-market from scratch. Eleven months later our ARR had tripled. No slide decks, just what worked.",
  },
  {
    name: "Rajesh Kumar",
    role: "VP Engineering → CTO",
    service: "Career Mastery and Talent Acquisition",
    quote:
      "ZOUM fixed my positioning and prepped me for board-level interviews. I landed the CTO role with a 2.4x compensation jump.",
  },
  {
    name: "Anita R.",
    role: "COO, Industrial Group",
    service: "Career Mastery and Talent Acquisition",
    quote:
      "400 managers, one leadership program that actually stuck. Daily floor friction is gone and our team happiness score jumped 38 points.",
  },
  {
    name: "Vikram S.",
    role: "VP of Growth & Brand Strategy",
    service: "Social Media Marketing",
    quote:
      "We had content but no traction. In two months, ZOUM's system hit 5M+ organic impressions and turned it into 40 qualified leads.",
  },

  /* --- Newly Added Humanized Reviews --- */
  {
    name: "Devika Nair",
    role: "Head of Talent Acquisition",
    service: "Career Mastery and Talent Acquisition",
    quote:
      "ZOUM didn't dump resumes on us. They brought three vetted leaders who fit our culture from day one.",
  },
  {
    name: "Marcus Chen",
    role: "Co-Founder, E-Commerce Hub",
    service: "Social Media Marketing",
    quote:
      "ZOUM rebuilt our short-form video strategy. Now TikTok and LinkedIn drive daily sales without us spending a dime on ads.",
  },
  {
    name: "Rohan Deshmukh",
    role: "VP of Infrastructure",
    service: "AI Automation and IT Services",
    quote:
      "ZOUM plugged a smart data system into our workflow. Answers that took hours of digging now come back instantly.",
  },
  {
    name: "Sarah Jenkins",
    role: "Managing Director",
    service: "Business Process Outsourcing",
    quote:
      "ZOUM mapped our workflow and cut the redundant steps. First time in years we're expanding without constantly putting out fires.",
  },
];
function TestimonialSlide({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="glass-strong rounded-3xl p-7 md:p-10 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <Quote className="h-7 w-7 text-lime" />
        <div className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((s) => (
            <Star key={s} className="h-3.5 w-3.5 fill-[var(--brand)] text-[var(--brand)]" />
          ))}
        </div>
      </div>
      <blockquote className="mt-5 text-foreground text-lg md:text-xl leading-relaxed flex-1">
        "{t.quote}"
      </blockquote>
      <div className="mt-5 pt-4 border-t border-border">
        <div className="text-sm font-semibold text-foreground">{t.name}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
        <div className="mt-3 inline-block text-[10px] uppercase tracking-[0.2em] text-lime border border-brand-deep/30 rounded-full px-2 py-0.5">
          {t.service}
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 7000);
    return () => clearInterval(timer);
  }, [go]);

  return (
    <section className="relative px-4 sm:px-6 py-14 md:py-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">
            / real results
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">
            Clients. Founders.{" "}
            <span className="italic font-serif text-muted-foreground">On record.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <TestimonialSlide t={testimonials[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14 h-10 w-10 rounded-full glass-strong grid place-items-center hover:bg-lime hover:text-white transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14 h-10 w-10 rounded-full glass-strong grid place-items-center hover:bg-lime hover:text-white transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-lime" : "w-1.5 bg-foreground/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const applySteps = [
  {
    step: "1",
    title: "Search a job",
    desc: "Browse open roles that match your background.",
  },
  {
    step: "2",
    title: "Apply",
    desc: "Fill in your details below. Takes about two minutes.",
  },
  {
    step: "3",
    title: "Get a response",
    desc: "We respond within 24 hours with your next step.",
  },
];

function HowToApply() {
  return (
    <section className="relative px-4 sm:px-6 py-14 md:py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">/ how it works</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">
            Search. Apply.{" "}
            <span className="italic font-serif text-muted-foreground">Get a job.</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-5">
          {applySteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="h-10 w-10 rounded-full glass-strong grid place-items-center mx-auto mb-4 font-display text-lime">
                {s.step}
              </div>
              <div className="font-display text-lg">{s.title}</div>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-4 sm:px-6 py-14 md:py-20">
      <div
        className="ambient-orb h-[400px] w-[400px] top-0 right-0"
        style={{ background: "rgba(31,203,107,0.22)" }}
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">/ apply now</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1]">
            READY FOR YOUR <span className="italic font-serif text-lime">NEXT ROLE?</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Submit your details and we'll match you with the right opportunity. No lengthy
            process, no ghosting. Just a clear next step.
          </p>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              700+ placements across every level
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Pan-India coverage, Jaipur headquartered
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Responses within 24 hours, Mon–Fri
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Hiring instead?{" "}
            <Link to="/contact" className="text-lime font-semibold hover:underline">
              Talk to us about your business needs
            </Link>
            .
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <JobSeekerForm />
        </motion.div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What services does ZOUM Consultancy offer?",
    a: "ZOUM Consultancy offers two things: recruitment and job placement across India, and IT services including AI automation, AI agents, website development, and custom software development.",
  },
  {
    q: "Is ZOUM a recruitment agency or an IT company?",
    a: "Both. Recruitment and IT services are our two main lines of business, run by the same team. Businesses can hire us for staffing and for technical work like websites, software, or AI automation under one roof.",
  },
  {
    q: "What is AI automation and how does it help my business?",
    a: "AI automation means using AI tools and software to take over repetitive work, like data entry, replying to customers, or reporting, so your team spends time on work that actually grows the business instead of busywork.",
  },
  {
    q: "What are AI agents?",
    a: "AI agents are software programs that can carry out multi-step tasks on their own, such as answering customer questions, processing requests, or handling routine workflows, without a person doing each step manually.",
  },
  {
    q: "Does ZOUM help with job placement outside Jaipur?",
    a: "Yes. While ZOUM is based in Jaipur, we place candidates and work with businesses across India.",
  },
  {
    q: "How much does it cost to build a website or software with ZOUM?",
    a: "Cost depends on scope, a marketing website is a smaller project than a custom software platform. Share what you need through the contact form and we'll give you a clear quote.",
  },
];

function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="relative px-4 sm:px-6 py-14 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-lime mb-3 text-center">
          / faq
        </div>
        <h2 className="font-display text-4xl md:text-6xl tracking-tight text-center mb-12">
          Common questions.
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display text-lg">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <ClientMarquee />
      <Services />
      <WhyChooseZoum />
      <Philosophy />
      <Testimonials />
      <HowToApply />
      <FAQ />
      <Contact />
    </main>
  );
}
