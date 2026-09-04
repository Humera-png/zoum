import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Layers, ShoppingCart, Wrench, Check } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";

export const Route = createFileRoute("/services/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "Website and web app development for growing businesses: marketing sites, e-commerce, custom web apps, and ongoing maintenance. ZOUM Consultancy, Jaipur.",
      },
      {
        name: "keywords",
        content: "website development company India, web app development Jaipur, e-commerce development, custom software development, website development pricing, affordable website design India",
      },
      { property: "og:title", content: "Website Development | ZOUM Consultancy" },
      {
        property: "og:description",
        content: "Fast, modern websites and web apps built to actually hold up as your business grows.",
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
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    desc: "Online stores built to actually convert, with payments, inventory, and checkout that just work.",
  },
  {
    icon: Layers,
    name: "Custom Web Applications",
    desc: "Internal tools and customer-facing platforms built around how your business actually operates.",
  },
  {
    icon: Wrench,
    name: "Maintenance & Support",
    desc: "Ongoing updates, fixes, and hosting support so your site stays fast and secure after launch.",
  },
];

const plans = [
  {
    tier: "Starter",
    price: "₹10,000 – ₹12,000",
    desc: "A clean, professional website for a business or portfolio that needs to look right, load fast, and be easy to hand over.",
    feats: [
      "Up to 5 pages",
      "Mobile-friendly, fast-loading build",
      "Contact form & WhatsApp/click-to-call",
      "Basic on-page SEO setup",
    ],
  },
  {
    tier: "Premium",
    price: "₹15,000 – ₹20,000",
    desc: "For businesses that need more pages, content you can update yourself, and a site built to bring in leads.",
    feats: [
      "Up to 12 pages, blog/CMS included",
      "Everything in Starter",
      "Analytics & lead-capture setup",
      "Stronger on-page SEO structure",
    ],
    highlight: true,
  },
  {
    tier: "Business",
    price: "₹20,000 – ₹50,000",
    desc: "Custom web apps, e-commerce, or anything with real functionality behind it, priced to what you actually need.",
    feats: [
      "E-commerce, dashboards, or custom features",
      "Everything in Premium",
      "Priority build & support",
      "Scoped after a requirements call",
    ],
  },
];

function WebsiteDevelopmentPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name="Website Development"
        description="Website, web app, and e-commerce development for growing businesses across India."
        url="https://zoumconsultancy.com/services/website-development"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Website Development"
          title="A Site That"
          italic="Actually Holds Up."
          sub="We design and build websites and web applications that are fast, easy to manage, and built to grow with your business instead of needing a rebuild in a year."
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
                    className="group glass node-bloom rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl">{s.name}</div>
                    <div className="text-sm text-muted-foreground mt-2">{s.desc}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="pricing" title="Plans" kicker="/ pricing">
              <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                Starting prices, adjust to your project. Every plan includes ongoing maintenance and
                hosting support, billed separately once your site is live, so it keeps running without
                you having to think about it.
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                {plans.map((p) => (
                  <div
                    key={p.tier}
                    className={`glass-strong rounded-3xl p-8 transition ${p.highlight ? "ring-2 ring-[var(--brand-deep)] shadow-[0_24px_60px_-24px_var(--brand-glow)]" : ""}`}
                  >
                    {p.highlight && (
                      <div className="text-[10px] inline-block bg-lime text-white px-2.5 py-1 rounded-full font-medium mb-3 tracking-wider uppercase">
                        Most popular
                      </div>
                    )}
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
