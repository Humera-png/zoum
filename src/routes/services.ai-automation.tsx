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
} from "lucide-react";

import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";

export const Route = createFileRoute("/services/ai-automation")({
  head: () => ({
    meta: [
      {
        title: "AI Automation & AI Agents Company | ZOUM Consultancy Jaipur",
      },
      {
        name: "description",
        content:
          "ZOUM Consultancy is an AI automation and IT services company in Jaipur. We build AI agents, chatbots, workflow automation, custom software, and mobile apps for businesses across India.",
      },
      {
        name: "keywords",
        content:
          "AI automation agency India, AI agents development, AI chatbot development, custom software development Jaipur, IT services company India",
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
  },

  {
    icon: Sparkles,

    name: "AI Voice Assistants",

    desc: "Create personalized AI voice assistants for customer support, scheduling, sales, internal operations, and smarter communication.",
  },

  {
    icon: Database,

    name: "AI Chatbots & AI Agents",

    desc: "Deploy smart conversational AI trained on your business data to answer questions, support customers, and assist teams.",
  },

  {
    icon: Code2,

    name: "Custom Software Development",

    desc: "Build scalable software platforms, internal tools, SaaS products, and enterprise solutions designed around your business goals.",
  },

  {
    icon: Smartphone,

    name: "Android & iOS App Development",

    desc: "Design and develop modern mobile applications with smooth experiences, strong performance, and scalable technology.",
  },

  {
    icon: Cpu,

    name: "Web Application Development",

    desc: "High-performance websites and web applications built with modern frameworks, secure architecture, and growth-focused design.",
  },

  {
    icon: Cloud,

    name: "Cloud Solutions & Infrastructure",

    desc: "Reliable cloud systems, deployment pipelines, migrations, hosting, and infrastructure designed for business growth.",
  },

  {
    icon: Workflow,

    name: "AI Integrations & APIs",

    desc: "Connect your existing platforms with AI, automation tools, APIs, and intelligent systems that improve operations.",
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
              <div className="grid md:grid-cols-2 gap-5">
                {services.map((s, i) => (
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
                    transition={{
                      delay: i * 0.05,
                    }}
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

            <Section id="pricing" title="Technology Partnerships" kicker="/ engagement">
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    tier: "AI Starter",
                    price: "Discovery",
                    desc: "Identify automation opportunities, software requirements, and create a clear technology roadmap.",
                  },

                  {
                    tier: "Custom Build",
                    price: "Development",
                    highlight: true,
                    desc: "Complete AI systems, mobile applications, software platforms, cloud solutions, and automation implementation.",
                  },

                  {
                    tier: "Long Term Partner",
                    price: "Scale",
                    desc: "Continuous technology support, optimization, improvements, and future product expansion.",
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    className={`glass-strong rounded-3xl p-8 ${
                      p.highlight ? "ring-2 ring-[var(--brand-deep)]" : ""
                    }`}
                  >
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
