import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe,
  Layers,
  ShoppingCart,
  Wrench,
  Check,
  Megaphone,
  PenTool,
  Users2,
  Boxes,
  ArrowUpRight,
  Workflow,
  Share2,
  BookOpen,
  Coins,
  HeartPulse,
} from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";

export const Route = createFileRoute("/services/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development & Social Media Marketing | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "Digital presence for growing businesses: website & web app development plus social media marketing, content, and paid campaigns, run by one team. ZOUM Consultancy, Jaipur.",
      },
      {
        name: "keywords",
        content:
          "website development company India, web app development Jaipur, e-commerce development, social media marketing agency Jaipur, Instagram marketing India, LinkedIn management, digital marketing agency, digital presence company India",
      },
      { property: "og:title", content: "Website Development & Social Media Marketing | ZOUM Consultancy" },
      {
        property: "og:description",
        content:
          "A fast, modern site and the audience to actually visit it, built and grown by one digital team.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/services/website-development" },
    ],
  }),
  component: WebsiteDevelopmentPage,
});

const services = [
  {
    icon: Globe,
    name: "Marketing & Business Websites",
    desc: "Fast, modern websites that load quickly, look right on every device, and are easy for your team to update.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    desc: "Online stores built to actually convert, with payments, inventory, and checkout that just work.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Layers,
    name: "Custom Web Applications",
    desc: "Internal tools and customer-facing platforms built around how your business actually operates.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Wrench,
    name: "Maintenance & Support",
    desc: "Ongoing updates, fixes, and hosting support so your site stays fast and secure after launch.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
  },
];

const marketing = [
  {
    icon: PenTool,
    name: "Brand Strategy & Content",
    desc: "A clear brand voice and a content system that attracts attention and builds trust over time.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Users2,
    name: "Social Media Management",
    desc: "Consistent publishing, engagement, and reporting across Instagram, LinkedIn, and beyond.",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Megaphone,
    name: "Paid Social Campaigns",
    desc: "Performance-focused ads on Meta and LinkedIn, targeted and tested to generate real leads.",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
  },
];

const caseStudies = [
  {
    icon: Boxes,
    name: "NaviaLabs",
    tag: "Web app · Built by our team",
    desc: "An AI-powered inventory management and procurement platform for manufacturers, distributors, and wholesalers, preventing stockouts, automating reordering, and forecasting demand.",
    url: "https://navialabs.vercel.app",
  },
  {
    icon: Workflow,
    name: "NAMI",
    tag: "Web app · Built by our team",
    desc: "A marketing site and service platform for an automation consultancy, with an interactive audit tool and a clear delivery process baked into the site itself.",
    url: "https://namiautomationsystems.vercel.app/",
  },
  {
    icon: Share2,
    name: "FlowSync",
    tag: "Web app · Built by our team",
    desc: "A no-code, drag-and-drop workflow automation builder that connects everyday business tools together, no engineering required.",
    url: "https://flowsyncc.netlify.app",
  },
  {
    icon: BookOpen,
    name: "AI Knowledge-Base Assistant",
    tag: "Web app · Built by our team",
    desc: "A RAG-powered chat assistant that answers questions directly from a private knowledge base instead of generic web search.",
    url: "https://islamicadvisor-anaichatbot.netlify.app",
  },
  {
    icon: Coins,
    name: "HyperMoon",
    tag: "Web app · Built by our team",
    desc: "A Web3 rewards and governance hub with staking and voting built in.",
    url: "https://hypermoon.netlify.app",
  },
  {
    icon: HeartPulse,
    name: "Khidma",
    tag: "Web app · Built by our team",
    desc: "A mental-health counselling platform redesigned around privacy and accessibility for the people who actually use it.",
    url: "https://khidma.live",
  },
];

const plans = [
  {
    tier: "Starter Website",
    price: "₹10,000 – ₹12,000",
    desc: "A single-page, scroll-based site for a new business that needs an immediate online presence.",
    feats: [
      "1 scroll-based landing page",
      "Home, services & about sections",
      "Contact form, mobile responsive",
      "SSL certificate included",
    ],
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tier: "Premium Website",
    price: "₹18,000 – ₹22,000",
    desc: "A 7+ page dynamic site for a growing business that needs the essential features covered.",
    feats: [
      "7+ real, separate pages",
      "Blog page & photo gallery",
      "Appointment/booking form",
      "Mobile responsive, SSL certificate",
    ],
    highlight: true,
    image:
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tier: "Business Website",
    price: "₹30,000 – ₹50,000",
    desc: "An 8+ page full-service solution for an established business that wants maximum visibility.",
    feats: [
      "8+ pages, everything in Premium",
      "Booking form, blog & before-after gallery",
      "Basic SEO, analytics & lead capture",
      "1 year of hosting included free",
    ],
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80",
  },
];

function WebsiteDevelopmentPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name="Website Development & Social Media Marketing"
        description="Website, web app, and e-commerce development plus social media marketing and paid campaigns, for growing businesses across India."
        url="https://zoumconsultancy.com/services/website-development"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Website & Social Media"
          title="A Digital Presence"
          italic="That Actually Holds Up."
          sub="A fast, modern site and the audience to visit it: web development and social media marketing, run as one digital team instead of two vendors."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="What We Build" kicker="/ capabilities">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass rounded-2xl overflow-hidden hover-glow-lime transition"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                      <div className="absolute top-2.5 left-2.5 h-8 w-8 rounded-lg glass-strong grid place-items-center group-hover:bg-lime group-hover:text-white transition">
                        <s.icon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="font-display text-base">{s.name}</div>
                      <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="marketing" title="Then, Bring It An Audience" kicker="/ social & content">
              <div className="grid md:grid-cols-3 gap-5">
                {marketing.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass rounded-2xl overflow-hidden hover-glow-lime transition"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={m.image}
                        alt={m.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                      <div className="absolute top-3 left-3 h-10 w-10 rounded-xl glass-strong grid place-items-center group-hover:bg-lime group-hover:text-white transition">
                        <m.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="font-display text-xl">{m.name}</div>
                      <div className="text-sm text-muted-foreground mt-2">{m.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="case-studies" title="What We've Actually Built" kicker="/ case studies">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudies.map((c) => (
                  <motion.a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group glass rounded-2xl p-5 hover-glow-lime transition block"
                  >
                    <div className="flex items-start justify-between">
                      <div className="h-9 w-9 rounded-lg glass-strong grid place-items-center group-hover:bg-lime group-hover:text-white transition">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-lime border border-lime/30 rounded-full px-2 py-0.5">
                        {c.tag}
                      </span>
                    </div>
                    <div className="font-display text-base mt-3 flex items-center gap-1.5">
                      {c.name}
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-lime transition" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{c.desc}</p>
                  </motion.a>
                ))}
              </div>
            </Section>

            <Section id="pricing" title="Plans" kicker="/ pricing">
              <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                Starting prices, adjusted to your project. Social media management is scoped
                separately once we know your goals. Hosting is included free for a year on the
                Business plan; billed separately for Starter and Premium once your site is live.
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                {plans.map((p) => (
                  <div
                    key={p.tier}
                    className={`glass-strong rounded-3xl overflow-hidden transition ${p.highlight ? "ring-2 ring-[var(--brand-deep)] shadow-[0_24px_60px_-24px_var(--brand-glow)]" : ""}`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.tier}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                      {p.highlight && (
                        <div className="absolute top-3 left-3 text-[10px] inline-block bg-lime text-white px-2.5 py-1 rounded-full font-medium tracking-wider uppercase">
                          Most popular
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <div className="font-display text-2xl">{p.tier}</div>
                      <div className="font-display text-3xl mt-2">{p.price}</div>
                      <p className="text-sm text-muted-foreground mt-3">{p.desc}</p>
                      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                        {p.feats.map((f) => (
                          <li key={f} className="flex items-center gap-2">
                            <Check className="h-3.5 w-3.5 text-lime shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="mt-6 block text-center glass rounded-full py-3 text-sm font-semibold hover:bg-white transition"
                      >
                        Get a quote →
                      </Link>
                    </div>
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
