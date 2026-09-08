import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Cpu,
  Workflow,
  Bot,
  Database,
  Sparkles,
  Cloud,
  Smartphone,
  Code2,
  Quote,
  ArrowUpRight,
  Package,
  Truck,
} from "lucide-react";

import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { CoursesSection } from "@/components/CoursesSection";
import { courses } from "@/data/courses";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";

const aiItCourses = courses.filter((c) => c.page === "ai-it");

export const Route = createFileRoute("/services/ai-automation")({
  head: () => ({
    meta: [
      {
        title: "AI Automation & AI Agents Company | ZOUM Consultancy Jaipur",
      },
      {
        name: "description",
        content:
          "ZOUM Consultancy is an AI automation and IT consultancy in Jaipur. We build AI agents, chatbots, workflow automation, custom software, and mobile apps for businesses across India.",
      },
      {
        name: "keywords",
        content:
          "AI automation agency India, AI agents development, AI chatbot development, custom software development Jaipur, IT consultancy India, business process automation, workflow automation company, AI integration services",
      },
      {
        property: "og:title",
        content: "AI Automation & AI Agents | ZOUM Consultancy",
      },
      {
        property: "og:description",
        content:
          "Build smarter with ZOUM: AI agents, workflow automation, chatbots, software platforms, and mobile apps for modern Indian businesses.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/services/ai-automation" },
    ],
  }),

  component: AIPage,
});

const services = [
  {
    icon: Bot,
    name: "AI Automation Systems",
    desc: "Automate repetitive business processes with intelligent workflows, AI agents, and custom automation systems that improve speed and efficiency.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Sparkles,
    name: "AI Voice Assistants",
    desc: "Create personalized AI voice assistants for customer support, scheduling, sales, internal operations, and smarter communication.",
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Database,
    name: "AI Chatbots & AI Agents",
    desc: "Deploy smart conversational AI trained on your business data to answer questions, support customers, and assist teams.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Code2,
    name: "Custom Software Development",
    desc: "Build scalable software platforms, internal tools, SaaS products, and enterprise solutions designed around your business goals.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Smartphone,
    name: "Android & iOS App Development",
    desc: "Design and develop modern mobile applications with smooth experiences, strong performance, and scalable technology.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Cpu,
    name: "Web Application Development",
    desc: "High-performance websites and web applications built with modern frameworks, secure architecture, and growth-focused design.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Cloud,
    name: "Cloud Solutions & Infrastructure",
    desc: "Reliable cloud systems, deployment pipelines, migrations, hosting, and infrastructure designed for business growth.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Workflow,
    name: "AI Integrations & APIs",
    desc: "Connect your existing platforms with AI, automation tools, APIs, and intelligent systems that improve operations.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
];

const partnerships = [
  {
    tier: "AI Starter",
    price: "Discovery",
    desc: "Identify automation opportunities, software requirements, and create a clear technology roadmap.",
    image:
      "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tier: "Custom Build",
    price: "Development",
    highlight: true,
    desc: "Complete AI systems, mobile applications, software platforms, cloud solutions, and automation implementation.",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tier: "Long Term Partner",
    price: "Scale",
    desc: "Continuous technology support, optimization, improvements, and future product expansion.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  },
];

const caseStudies = [
  {
    icon: Workflow,
    name: "LeadFlowTool",
    tag: "Built with n8n",
    desc: "Manages every lead follow-up automatically, sending the right email at the right time so a lead never goes cold because someone forgot to reply.",
  },
  {
    icon: Package,
    name: "Order Processing Automation",
    tag: "Built with n8n",
    desc: "Takes an order from placement to fulfillment without manual handling at each step, cutting the busywork out of order operations.",
  },
  {
    icon: Database,
    name: "Lead Generation Automation",
    tag: "Built with n8n",
    desc: "Finds, qualifies, and routes new leads automatically, so the sales team spends time talking to people, not hunting for them.",
  },
  {
    icon: Truck,
    name: "Supply Chain Automation",
    tag: "Built with n8n",
    desc: "Automates coordination between suppliers, inventory, and orders, catching issues before they turn into delays.",
  },
  {
    icon: Sparkles,
    name: "Jarvis AI Voice Assistant",
    tag: "AI voice",
    desc: "A custom AI voice assistant built for real business use: scheduling, customer support, and internal operations, handled by voice.",
  },
  {
    icon: Bot,
    name: "AI Chatbot",
    tag: "AI chatbot",
    desc: "A conversational AI chatbot trained on real business data, answering customer and team questions instantly instead of making them wait.",
  },
];

const results = [
  {
    title: "Business Automation",

    metric: "Less Manual Work",

    desc: "Replace repetitive tasks with intelligent systems that allow your team to focus on important business growth.",
  },

  {
    title: "AI Customer Experience",

    metric: "Faster Engagement",

    desc: "Create AI assistants and chatbots that provide instant responses and better customer interactions.",
  },

  {
    title: "Digital Product Growth",

    metric: "Scalable Technology",

    desc: "Launch software, apps, and platforms built to support long-term business expansion.",
  },
];

function AIPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name="AI Automation & AI Agents"
        description="AI automation, AI agents, chatbots, and custom software development for businesses across India."
        url="https://zoumconsultancy.com/services/ai-automation"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="AI & Software Development"
          title="Build"
          italic="Digital Intelligence."
          sub="ZOUM creates AI-powered software solutions, mobile applications, automation systems, and cloud technologies that help businesses operate smarter and scale faster."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />

          <div className="space-y-32">
            <Section id="overview" title="Technology Built For Growth" kicker="/ our approach">
              <div className="glass-strong rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 h-60 w-60 bg-lime/20 blur-3xl rounded-full" />

                <Sparkles className="text-lime mb-5 relative" />

                <p className="font-serif italic text-3xl relative">
                  "Great technology does more than run your business. It creates opportunities your
                  competitors cannot see."
                </p>

                <p className="mt-6 text-muted-foreground relative">
                  ZOUM combines artificial intelligence, software engineering, mobile development,
                  automation, and cloud technology to create digital solutions that solve real
                  business challenges.
                </p>
              </div>
            </Section>

            <Section id="services" title="What We Build" kicker="/ capabilities">
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
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="results" title="Business Outcomes" kicker="/ impact">
              <div className="grid md:grid-cols-3 gap-5">
                {results.map((r, i) => (
                  <motion.div
                    key={i}
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
                    className="glass-strong rounded-3xl p-7 hover-glow-lime transition"
                  >
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {r.title}
                    </div>

                    <div className="font-display text-3xl mt-3">{r.metric}</div>

                    <p className="text-sm text-muted-foreground mt-4">{r.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="case-studies" title="What We've Actually Built" kicker="/ case studies">
              <div className="glass-strong rounded-3xl p-10 relative overflow-hidden mb-8">
                <div className="absolute -left-20 -bottom-20 h-60 w-60 bg-lime/20 blur-3xl rounded-full" />
                <Quote className="text-lime mb-5 relative" />
                <p className="font-serif italic text-2xl md:text-3xl relative">
                  Never sell like you need their money. They have a problem, we have the solution.
                  Taking on a client should feel like we said yes to them.
                </p>
                <p className="mt-6 text-muted-foreground relative max-w-2xl">
                  That's why we don't take on every project. We take on the ones where we're
                  confident we can actually move the needle, then we prove it with real work, not a
                  pitch deck.
                </p>
              </div>
              <p className="text-muted-foreground max-w-2xl mb-6">
                Real systems built and run by our own team, not agency mockups.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudies.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass rounded-2xl p-5 hover-glow-lime transition"
                  >
                    <div className="flex items-start justify-between">
                      <div className="h-9 w-9 rounded-lg glass-strong grid place-items-center group-hover:bg-lime group-hover:text-white transition">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-lime border border-lime/30 rounded-full px-2 py-0.5">
                        {c.tag}
                      </span>
                    </div>
                    <div className="font-display text-base mt-3">{c.name}</div>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{c.desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
                >
                  Ask us for a walkthrough <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Section>

            {aiItCourses.length > 0 && (
              <Section id="courses" title="IT & AI Career Courses" kicker="/ enroll">
                <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                  Want to build a career in tech instead of just hiring for one? Learn the skills
                  our own client work runs on.
                </p>
                <CoursesSection page="ai-it" />
              </Section>
            )}

            <Section id="pricing" title="Technology Partnerships" kicker="/ engagement">
              <div className="grid md:grid-cols-3 gap-5">
                {partnerships.map((p, i) => (
                  <div
                    key={i}
                    className={`glass-strong rounded-3xl overflow-hidden transition ${
                      p.highlight ? "ring-2 ring-[var(--brand-deep)] shadow-[0_24px_60px_-24px_var(--brand-glow)]" : ""
                    }`}
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
                          Most engaged
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <div className="font-display text-2xl">{p.tier}</div>
                      <div className="font-display text-4xl mt-3">{p.price}</div>
                      <p className="text-sm text-muted-foreground mt-4">{p.desc}</p>
                      <Link
                        to="/contact"
                        className="mt-6 block text-center glass rounded-full py-3 text-sm hover:bg-white transition"
                      >
                        Start Project
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
