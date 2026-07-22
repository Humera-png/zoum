import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Code2, LayoutDashboard, Server, Cloud, Wrench, Smartphone, Database } from "lucide-react";

import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA } from "@/components/ServicePage";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd, buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/services/it-software")({
  head: () => ({
    meta: [
      { title: "IT & Software Development | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "ZOUM designs and builds websites, web applications, SaaS platforms, dashboards, backend systems, and cloud infrastructure for businesses across India. Based in Jaipur.",
      },
      {
        property: "og:title",
        content: "IT & Software Development | ZOUM Consultancy",
      },
      {
        property: "og:description",
        content:
          "Your website shouldn't be the bottleneck. ZOUM builds fast, secure software that holds up and grows with you.",
      },
      { property: "og:url", content: "https://zoumconsultancy.com/services/it-software" },
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com/services/it-software" }],
  }),
  component: ITPage,
});

const services = [
  {
    icon: Globe,
    name: "Website Development",
    desc: "Your site is slow, hard to update, or doesn't convert visitors. We build fast, modern websites your team can actually manage.",
  },
  {
    icon: Code2,
    name: "Custom Web Applications",
    desc: "Spreadsheets and generic tools can't keep up with how your business runs. We build software shaped around your process, not the other way around.",
  },
  {
    icon: LayoutDashboard,
    name: "SaaS & Dashboard Development",
    desc: "You need a real product, not another prototype. We build production-ready platforms and dashboards that scale with your users.",
  },
  {
    icon: Server,
    name: "Backend Systems & APIs",
    desc: "Your tools don't talk to each other. We build the backend systems and integrations that connect them.",
  },
  {
    icon: Cloud,
    name: "Cloud Infrastructure",
    desc: "Hosting breaks under load or costs more than it should. We set up cloud infrastructure that's reliable and sized to what you actually need.",
  },
  {
    icon: Smartphone,
    name: "Mobile App Development",
    desc: "Your customers expect a mobile experience you don't have yet. We design and build Android and iOS apps that feel native and load fast.",
  },
  {
    icon: Database,
    name: "Database & Data Systems",
    desc: "Your data lives in disconnected spreadsheets and tools. We design proper data systems that stay accurate as you scale.",
  },
  {
    icon: Wrench,
    name: "Maintenance & Support",
    desc: "Software that's never updated becomes a liability. We keep what we build — or what you already have — running, secure, and current.",
  },
];

const outcomes = [
  { title: "Fewer bugs, less downtime", desc: "Properly engineered systems break less often and recover faster when they do." },
  { title: "Faster to ship", desc: "Clean architecture means new features take days, not months." },
  { title: "Built to scale", desc: "Infrastructure sized for where you're headed, not just where you are today." },
];

const faqs = [
  {
    q: "How long does a website or web app take to build?",
    a: "A marketing website typically takes 2–4 weeks. Custom web applications and SaaS platforms range from 6–16 weeks depending on scope. We'll give you a firm timeline after a short discovery call.",
  },
  {
    q: "Do you work with our existing systems?",
    a: "Yes. Most projects involve integrating with tools you already use — CRMs, payment providers, internal databases — rather than replacing everything from scratch.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing maintenance and support so the software stays secure, updated, and working as your business changes. You're never left with something nobody can touch.",
  },
  {
    q: "Can you build both the design and the backend?",
    a: "Yes — our team covers full-stack development, from interface design through backend systems, APIs, and cloud infrastructure, so you deal with one team, not three vendors.",
  },
];

function ITPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <JsonLd
        data={buildServiceSchema({
          name: "IT & Software Development",
          description:
            "Websites, web applications, SaaS platforms, dashboards, backend systems, and cloud infrastructure.",
          url: "https://zoumconsultancy.com/services/it-software",
        })}
      />
      <JsonLd data={buildFAQSchema(faqs)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/it-software" },
          { name: "IT & Software Development", path: "/services/it-software" },
        ])}
      />
      <PageBackdrop />

      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="IT & Software Development"
          title="Your website shouldn't be"
          italic="the bottleneck."
          sub="We design and build websites, web applications, and internal tools that actually hold up — fast, secure, and built to grow with you."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />

          <div className="space-y-32">
            <Section id="overview" title="What we build" kicker="/ capabilities">
              <div className="grid md:grid-cols-2 gap-5">
                {services.map((s, i) => (
                  <motion.div
                    key={s.name}
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
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="process" title="What you get" kicker="/ outcomes">
              <div className="grid md:grid-cols-3 gap-5">
                {outcomes.map((r) => (
                  <div key={r.title} className="glass-strong rounded-3xl p-7 hover-glow-lime transition">
                    <div className="font-display text-2xl">{r.title}</div>
                    <p className="text-sm text-muted-foreground mt-3">{r.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="pricing" title="Frequently asked" kicker="/ faq">
              <FAQSection items={faqs} />
            </Section>

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
