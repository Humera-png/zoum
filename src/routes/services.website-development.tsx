import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Layers, ShoppingCart, Wrench, Check, X, Clock, Megaphone, PenTool, Users2 } from "lucide-react";
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
  },
  {
    icon: Users2,
    name: "Social Media Management",
    desc: "Consistent publishing, engagement, and reporting across Instagram, LinkedIn, and beyond.",
  },
  {
    icon: Megaphone,
    name: "Paid Social Campaigns",
    desc: "Performance-focused ads on Meta and LinkedIn, targeted and tested to generate real leads.",
  },
];

const plans = [
  {
    tier: "Starter Website",
    type: "Static Single Page",
    pages: "1 (scroll-based)",
    database: "No",
    price: "₹10,000 – ₹12,000",
    timeline: "12 weeks",
    hosting: "Not included — scoped based on your requirement",
    desc: "Best for new businesses, budget-conscious, that need an immediate online presence.",
    feats: [
      "Professional landing page design",
      "Home section with business info",
      "Services section (scroll-based)",
      "About/team section",
      "Contact form",
      "Mobile responsive",
      "SSL certificate (HTTPS)",
    ],
    notIncluded: ["Online booking", "Blog/gallery", "SEO", "Analytics", "Hosting"],
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tier: "Premium Website",
    type: "Dynamic Multi-Page",
    pages: "7+ real pages",
    database: "Yes",
    price: "₹18,000 – ₹22,000",
    timeline: "3-4 weeks",
    hosting: "Not included — scoped based on your requirement",
    desc: "Best for growing businesses that need essential features on a moderate budget.",
    feats: [
      "7+ actual separate pages",
      "Home, Services, About, Team pages",
      "Contact page with form",
      "Blog page (template)",
      "Photo gallery (basic)",
      "Basic appointment/booking form",
      "Mobile responsive",
      "SSL certificate",
    ],
    notIncluded: [
      "Online booking system",
      "Google My Business integration",
      "Blog content",
      "Advanced gallery",
      "SEO",
      "Analytics",
      "Hosting",
    ],
    highlight: true,
    image:
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tier: "Business Website",
    type: "Dynamic Professional",
    pages: "8+ pages",
    database: "Yes",
    price: "₹30,000 – ₹50,000",
    timeline: "4-5 weeks",
    hosting: "1 Year Free!",
    desc: "Best for established businesses that want maximum visibility with a full-service solution.",
    feats: [
      "8+ professional pages",
      "All Premium features",
      "Appointment/booking form",
      "Blog section (template)",
      "Before-after gallery",
      "Basic SEO setup",
      "Email configuration",
      "Basic analytics",
      "Lead capture forms",
      "Google My Business optimization",
      "1 year free hosting",
    ],
    notIncluded: ["Advanced SEO", "Blog content writing", "Client portal", "Online payments"],
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
              <div className="grid md:grid-cols-2 gap-5">
                {services.map((s, i) => (
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
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                      <div className="absolute top-3 left-3 h-10 w-10 rounded-xl glass-strong grid place-items-center group-hover:bg-lime group-hover:text-white transition">
                        <s.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="font-display text-xl">{s.name}</div>
                      <div className="text-sm text-muted-foreground mt-2">{s.desc}</div>
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
                    className="group glass node-bloom rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl">{m.name}</div>
                    <div className="text-sm text-muted-foreground mt-2">{m.desc}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="pricing" title="Plans" kicker="/ pricing">
              <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                One-time investment, adjusted to your project. Social media management is scoped
                separately once we know your goals. Anything marked "not included" below is still
                available afterward, as ongoing maintenance.
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
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
                        <Clock className="h-3.5 w-3.5 text-lime" /> {p.timeline}
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">{p.desc}</p>

                      <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] text-muted-foreground">
                        <span className="glass rounded-full px-2.5 py-1">{p.type}</span>
                        <span className="glass rounded-full px-2.5 py-1">{p.pages}</span>
                        <span className="glass rounded-full px-2.5 py-1">DB: {p.database}</span>
                      </div>

                      <div className="mt-4 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Hosting: </span>
                        {p.hosting}
                      </div>

                      <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        What you get
                      </div>
                      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                        {p.feats.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-lime shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      {p.notIncluded.length > 0 && (
                        <>
                          <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Not included (build via maintenance)
                          </div>
                          <ul className="mt-2 space-y-2 text-sm text-muted-foreground/70">
                            {p.notIncluded.map((f) => (
                              <li key={f} className="flex items-start gap-2">
                                <X className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0 mt-0.5" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

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
