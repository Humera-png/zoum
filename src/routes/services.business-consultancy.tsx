import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, Users, Code2, ArrowUpRight } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA } from "./services.business";

export const Route = createFileRoute("/services/business-consultancy")({
  head: () => ({
    meta: [
      { title: "Business Consultancy | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "Business consultancy for growing companies: strategy, social media marketing, and website development under one team. ZOUM Consultancy, Jaipur.",
      },
      { property: "og:title", content: "Business Consultancy | ZOUM Consultancy" },
      {
        property: "og:description",
        content: "One consultancy for the pieces that actually move a business forward: strategy, online presence, and the tech behind it.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/services/business-consultancy" },
    ],
  }),
  component: BusinessConsultancyPage,
});

const pillars = [
  {
    icon: TrendingUp,
    name: "Growth Strategy",
    desc: "Find where growth is realistically available and build a plan your team can execute.",
    to: "/services/business" as const,
  },
  {
    icon: Users,
    name: "Social Media Marketing",
    desc: "Content, campaigns, and brand presence that turn attention into leads.",
    to: "/services/socialmedia" as const,
  },
  {
    icon: Code2,
    name: "Website Development",
    desc: "A fast, modern site that actually represents where your business is headed.",
    to: "/services/website-development" as const,
  },
];

function BusinessConsultancyPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Business Consultancy"
          title="One Team For"
          italic="Everything That Grows You."
          sub="Strategy, digital presence, and the website behind it, coordinated by one team instead of three separate vendors who don't talk to each other."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="What's Included" kicker="/ how it works">
              <div className="grid md:grid-cols-3 gap-5">
                {pillars.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass node-bloom rounded-2xl p-6 flex flex-col"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl">{p.name}</div>
                    <div className="text-sm text-muted-foreground mt-2 flex-1">{p.desc}</div>
                    <Link
                      to={p.to}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
                    >
                      Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="process" title="Why Bundle It" kicker="/ the case for one team">
              <div className="glass-strong rounded-3xl p-10">
                <p className="text-muted-foreground">
                  Strategy, marketing, and the website that has to reflect both, usually come from
                  three different vendors who never coordinate. We run them as one engagement, so
                  the plan, the message, and the site all say the same thing.
                </p>
              </div>
            </Section>

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
