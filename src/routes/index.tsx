import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Briefcase,
  TrendingUp,
  Users,
  Cpu,
  Code2,
  Star,
} from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd, buildFAQSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZOUM Consultancy Jaipur | Business Strategy, Career Advisory & AI Services" },
      {
        name: "description",
        content:
          "ZOUM Consultancy — Jaipur's top business consultancy. 700+ placements, 42+ clients served. Expert business strategy, executive career advisory, social media marketing & AI automation across India.",
      },
      { property: "og:title", content: "ZOUM Consultancy — Scale Your Business & Career" },
      {
        property: "og:description",
        content:
          "Jaipur's leading consultancy for business strategy, talent placement, social media growth, and AI automation. Book a free strategy call today.",
      },
      { property: "og:url", content: "https://zoumconsultancy.com" },
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com" }],
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
            Grow your business.
            <br />
            Advance your <span className="italic font-serif text-lime">career.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-5 md:mt-7 text-base md:text-lg text-muted-foreground max-w-xl"
          >
            ZOUM is a Jaipur consultancy that helps companies scale and professionals move up —
            through strategy, marketing, AI automation, and software that actually works.
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
              Actively Hiring <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <Link
              to="/services/business-strategy"
              className="w-full md:w-auto glass px-7 py-4 rounded-full text-sm font-semibold text-foreground hover:bg-white transition inline-flex items-center justify-center"
            >
              View our services
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-3 text-xs text-muted-foreground"
          >
            Join our growing team — we're actively hiring across roles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 md:mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground/70"
          >
            <div>
              700+ <span className="text-foreground/70">placements in a year</span>
            </div>
            <div>
              42+ <span className="text-foreground/70">clients served</span>
            </div>
            <div className="hidden md:block">
              Jaipur, India <span className="text-foreground/70">— operating since 2014</span>
            </div>
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
        / Placed across India's most demanding operators
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
    title: "Career Mastery & Talent Acquisition",
    headline: "Stuck below your level?",
    body: "You're doing C-suite work without the C-suite title or pay. We position you for the roles you're already qualified for and negotiate the offer once you get there.",
    points: ["Executive positioning", "Compensation negotiation", "Board-level access"],
    to: "/services/career" as const,
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    headline: "Posting but not converting?",
    body: "Content without a strategy just fills a feed. We build a system — content, message, and channels working together — that turns attention into leads.",
    points: ["Content that converts", "Consistent brand voice", "Leads, not just likes"],
    to: "/services/socialmedia" as const,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Cpu,
    title: "AI Automation",
    headline: "Still doing it by hand?",
    body: "Repetitive tasks — data entry, follow-ups, reporting — eat hours every week. We build AI automations that take them over, so your team works on what actually moves the business.",
    points: ["Hours back every week", "Fewer manual errors", "Lower operating cost"],
    to: "/services/ai-automation" as const,
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Code2,
    title: "IT & Software Development",
    headline: "Is your site the bottleneck?",
    body: "A slow website or a tool held together with spreadsheets caps how fast you can grow. We build websites, apps, and systems that hold up as you scale.",
    points: ["Fast, modern builds", "Fewer bugs and outages", "Built to scale"],
    to: "/services/it-software" as const,
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: TrendingUp,
    title: "Business Strategy & Outsourcing",
    headline: "Busier, but not growing?",
    body: "A busier team isn't the same as a growing business. We find where your operations are leaking time and margin, then fix the process, not just the symptom.",
    points: ["Fewer bottlenecks", "Better margins", "Faster decisions"],
    to: "/services/business-strategy" as const,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
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
      className="group relative glass rounded-3xl p-6 md:p-7 hover-glow-lime transition-all duration-500 overflow-hidden flex flex-col h-full"
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
              Five problems.{" "}
              <span className="italic font-serif text-muted-foreground">One team.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="text-muted-foreground max-w-sm text-sm">
              Whatever's actually holding you back — strategy, talent, marketing, automation, or
              software — pick the one that matches.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
            >
              Not sure which service fits? Talk to us <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const words = "Precision over noise. Results over rhetoric.".split(" ");
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
          Founded in 2014, ZOUM works with business owners and professionals who want a clear
          answer, not a longer meeting.
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
    role: "CTO",
    company: "Fintech Ops",
    stat: "Replaced 3 outsourced teams",
    quote:
      "ZOUM built an automation that replaced three outsourced teams' worth of reconciliation work. It just runs — easily our best investment this year.",
    service: "AI Automation",
    to: "/services/ai-automation" as const,
  },
  {
    name: "Rohan Deshmukh",
    role: "VP of Infrastructure",
    company: "—",
    stat: "Hours saved daily",
    quote:
      "Our reps used to dig through messy data for every answer. ZOUM built a system that surfaces it instantly — saving hours every day.",
    service: "IT & Software Development",
    to: "/services/it-software" as const,
  },
  {
    name: "Priya Malhotra",
    role: "Founder",
    company: "Series B SaaS",
    stat: "3x ARR in 11 months",
    quote:
      "They rebuilt our go-to-market from scratch. Eleven months later, our ARR had tripled — no slide decks, just what worked.",
    service: "Business Strategy",
    to: "/services/business-strategy" as const,
  },
  {
    name: "Rajesh Kumar",
    role: "VP Engineering → CTO",
    company: "—",
    stat: "2.4x compensation jump",
    quote:
      "ZOUM fixed my positioning and prepped me for board-level interviews. I landed the CTO role with a 2.4x pay jump.",
    service: "Career Mastery",
    to: "/services/career" as const,
  },
  {
    name: "Vikram S.",
    role: "VP of Growth",
    company: "—",
    stat: "5M+ impressions, 40 leads",
    quote:
      "We had content but zero traction. In two months, ZOUM's system hit 5M+ organic impressions and turned that into 40 qualified leads.",
    service: "Social Media Marketing",
    to: "/services/socialmedia" as const,
  },
];

function Testimonials() {
  return (
    <section className="relative px-4 sm:px-6 py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">/ results</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">
            Real clients.{" "}
            <span className="italic font-serif text-muted-foreground">Real numbers.</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-3xl p-6 flex flex-col h-full hover-glow-lime transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-lime text-white grid place-items-center font-display text-sm">
                  {t.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-foreground truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {t.role}
                    {t.company !== "—" ? `, ${t.company}` : ""}
                  </div>
                </div>
                <div className="ml-auto flex gap-0.5 shrink-0">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-3 w-3 fill-[var(--brand)] text-[var(--brand)]" />
                  ))}
                </div>
              </div>

              <div className="mt-4 inline-flex items-center self-start rounded-full bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">
                {t.stat}
              </div>

              <blockquote className="mt-3 text-sm text-foreground leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              <Link
                to={t.to}
                className="mt-4 pt-4 border-t border-border inline-flex items-center gap-1.5 text-xs font-semibold text-lime hover:underline"
              >
                See our {t.service} approach <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const homeFaqs = [
  {
    q: "How much does executive career advisory cost?",
    a: "It depends on the level of role and scope of support. We'll give you a specific number after a short assessment call — no generic package pricing.",
  },
  {
    q: "How long does recruitment or a career move typically take?",
    a: "Most clients see a serious opportunity within 8–12 weeks. Full placement timelines vary with seniority and how targeted the search is.",
  },
  {
    q: "Can AI actually automate our repetitive work?",
    a: "Yes, for most rule-based, repeated tasks — data entry, follow-ups, reporting, first-line support. We map what your team does manually every week, then automate the highest-time-cost pieces first.",
  },
  {
    q: "What kind of businesses benefit most from AI automation?",
    a: "Any business with repeated manual work — customer support, sales follow-up, reporting, order or document processing. If your team does the same task the same way every week, it's usually automatable.",
  },
  {
    q: "How does social media marketing generate real leads?",
    a: "By pairing content that earns attention with a clear next step — a landing page, a DM flow, or a paid campaign — so people who engage have somewhere to go, not just something to scroll past.",
  },
];

function FAQ() {
  return (
    <section className="relative px-4 sm:px-6 py-14 md:py-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">/ faq</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">
            Questions people{" "}
            <span className="italic font-serif text-muted-foreground">actually ask.</span>
          </h2>
        </motion.div>
        <FAQSection items={homeFaqs} />
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
          <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">/ contact</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1]">
            READY TO GROW? <span className="italic font-serif text-lime">LET'S TALK.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Send us your inquiry and we'll respond within 24 hours with a clear plan of action —
            no pitch decks, no lengthy onboarding. Just results.
          </p>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Free 30-minute strategy call for new clients
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Pan-India coverage — Jaipur headquartered
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Responses within 24 hours, Mon–Fri
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <JsonLd data={buildFAQSchema(homeFaqs)} />
      <Hero />
      <ClientMarquee />
      <Services />
      <Philosophy />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
