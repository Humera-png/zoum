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
  Headphones,
  Quote,
  Star,
} from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { ContactForm } from "@/components/ContactForm";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime pulse-lime" />
            Free strategy call available — limited spots
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight whitespace-normal break-words"
          >
            Architecting <span className="italic font-serif text-lime">Alpha</span>:
            <br />
            Business &amp; Career <span className="text-gradient-charcoal">Mastery.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-5 md:mt-7 text-base md:text-lg text-muted-foreground max-w-xl"
          >
            ZOUM Placement Services scales companies and accelerates careers through data-driven
            strategy, executive precision, and uncompromising execution.
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
              Book a Free Strategy Call <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <Link
              to="/services/business-strategy"
              className="w-full md:w-auto glass px-7 py-4 rounded-full text-sm font-semibold text-foreground hover:bg-white transition inline-flex items-center justify-center"
            >
              View our services
            </Link>
          </motion.div>
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
    title: "Career Mastery and Talent Acquisition",
    headline: "The Executive Leap.",
    body: "We position senior leaders for high-ticket roles and build elite executive teams. From personal branding to compensation negotiation, we fast-track your leadership authority.",
    points: [
      "Executive & C-Suite Positioning",
      "High-Level Compensation Strategy",
      "Boardroom Readiness & socialmedia",
    ],
    to: "/services/career" as const,
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    headline: "Unified Excellence.",
    body: "We build digital authority that converts attention into revenue. By aligning content, brand message, and multi-channel campaigns, your company dominates the industry conversation.",
    points: [
      "Brand Narrative & Voice",
      "Multi-Channel Social Strategy",
      "High-Converting Content Engines",
    ],
    to: "/services/socialmedia" as const,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Cpu,
    title: "AI and IT Services",
    headline: "Production AI Architectures.",
    body: "We integrate custom AI agents and smart automation workflows into your existing tech stack. Cut manual labor hours and upgrade your backend with production-ready AI models.",
    points: [
      "Autonomous Agent Workflows",
      "Custom OpenAI & GPT-4 Integrations",
      "Smart Data Systems (RAG Pipelines)",
    ],
    to: "/services/ai-automation" as const,
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: TrendingUp,
    title: "Business Strategy and Operations",
    headline: "Scale Without Friction.",
    body: "We fix operational bottlenecks and redesign your business model for compound growth. Streamline your processes, expand profit margins, and launch your offerings faster.",
    points: [
      "Process & Workflow Redesign",
      "Profit Margin Optimization",
      "Go-To-Market (GTM) Acceleration",
    ],
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
              Four pillars.{" "}
              <span className="italic font-serif text-muted-foreground">One outcome.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="text-muted-foreground max-w-sm text-sm">
              Strategy, talent, digital presence, and AI — every layer of a modern, high-performance
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
          Founded in 2014, ZOUM Placement Services is a private advisory firm partnering with
          operators who refuse the average curve.
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
      "Honestly, I was skeptical about the AI hype, but ZOUM actually delivered. They built an autonomous reconciliation agent that picked up the slack of three outsourced teams. It just runs flawlessly in the background and is easily the best investment we made this year.",
  },
  {
    name: "Priya Malhotra",
    role: "Founder, Series B SaaS",
    service: "Business Strategy and Operations",
    quote:
      "Most consultants just give you flashy slide decks, but these guys rolled up their sleeves. They completely overhauled our messy go-to-market strategy, and within 11 months, our ARR literally tripled. No corporate fluff - just strategies that actually bring in revenue.",
  },
  {
    name: "Rajesh Kumar",
    role: "VP Engineering → CTO",
    service: "Career Mastery and Talent Acquisition",
    quote:
      "I was stuck in upper management for years, circling the C-suite but never breaking through. ZOUM changed the game for me. They fixed my personal branding and prepped me for tough board interviews. I landed my dream CTO role with a 2.4x compensation jump.",
  },
  {
    name: "Anita R.",
    role: "COO, Industrial Group",
    service: "Career Mastery and Talent Acquisition",
    quote:
      "Getting 400 traditional managers to change how they run their teams seemed impossible. ZOUM’s leadership labs actually clicked with them. The daily friction on the floor is gone, and our internal quarterly team happiness scores jumped by 38 points.",
  },
  {
    name: "Vikram S.",
    role: "VP of Growth & Brand Strategy",
    service: "Social Media Marketing",
    quote:
      "We were putting out content but getting zero traction. ZOUM came in and built a real content engine for us. In just two months, we hit over 5 million organic impressions and turned that attention into 40 solid, high-value corporate leads. They really know how to capture an audience.",
  },

  /* --- Newly Added Humanized Reviews --- */
  {
    name: "Devika Nair",
    role: "Head of Talent Acquisition",
    service: "Career Mastery and Talent Acquisition",
    quote:
      "Finding elite executive talent used to take us months of endless interviewing. ZOUM didn't just dump resumes on us - they brought us three perfectly vetted leaders who fit our culture from day one. It saved us so much time and headache.",
  },
  {
    name: "Marcus Chen",
    role: "Co-Founder, E-Commerce Hub",
    service: "Social Media Marketing",
    quote:
      "Our ad costs were killing our margins, so we needed an organic social media presence fast. ZOUM stepped in and completely re-vamped our short-form video strategy. Now our TikTok and LinkedIn are driving actual daily sales without us spending a dime on ads.",
  },
  {
    name: "Rohan Deshmukh",
    role: "VP of Infrastructure",
    service: "AI Automation and IT Services",
    quote:
      "We had mountains of messy customer data that our support reps had to manually dig through. ZOUM plugged a custom smart data system right into our workflow. Now, answers are generated instantly, saving our reps hours of manual searching every single day.",
  },
  {
    name: "Sarah Jenkins",
    role: "Managing Director",
    service: "Business Strategy and Operations",
    quote:
      "Our operational bottlenecks were holding us back from scaling up. The team at ZOUM mapped out our entire workflow, cut out the redundant steps, and optimized our profit margins. For the first time in years, we are expanding without constantly putting out fires.",
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
          <div className="text-xs uppercase tracking-[0.3em] text-lime mb-4">
            / proof over rhetoric
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">
            Operators. Founders.{" "}
            <span className="italic font-serif text-muted-foreground">On record.</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-3xl p-6 md:p-7 flex flex-col h-full hover-glow-lime transition"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-lime" />
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-[var(--brand)] text-[var(--brand)]" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-5 text-foreground text-base leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                <div className="mt-3 inline-block text-[10px] uppercase tracking-[0.2em] text-lime border border-brand-deep/30 rounded-full px-2 py-0.5">
                  {t.service}
                </div>
              </figcaption>
            </motion.figure>
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
      <Hero />
      <ClientMarquee />
      <Services />
      <Philosophy />
      <Testimonials />
      <Contact />
    </main>
  );
}
