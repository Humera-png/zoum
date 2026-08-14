import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, Users, Brain, Presentation } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA } from "./services.business";

export const Route = createFileRoute("/services/talent-development")({
  head: () => ({
    meta: [
      { title: "Talent & Development | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "Upskilling programs for individuals and teams: English communication, personality development, workplace skills, and leadership training. ZOUM Consultancy, Jaipur.",
      },
      { property: "og:title", content: "Talent & Development | ZOUM Consultancy" },
      {
        property: "og:description",
        content: "We help individuals and teams build the skills that get them noticed and promoted.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/services/talent-development" },
    ],
  }),
  component: TalentDevelopmentPage,
});

const programs = [
  {
    icon: MessageCircle,
    name: "English & Communication",
    desc: "Spoken and written English training built for real workplace situations, not textbook drills.",
  },
  {
    icon: Users,
    name: "Personality Development",
    desc: "Confidence, presence, and interpersonal skills that come through in interviews and on the job.",
  },
  {
    icon: Presentation,
    name: "Workplace & Soft Skills",
    desc: "Time management, teamwork, and professional etiquette for people early in their career.",
  },
  {
    icon: Brain,
    name: "Leadership Readiness",
    desc: "Preparing high performers to step into their first management role with real support.",
  },
];

function TalentDevelopmentPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Talent & Development"
          title="Skills That"
          italic="Get You Noticed."
          sub="Training programs that help individuals build the communication, confidence, and workplace skills that turn a resume into an offer."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="What We Train" kicker="/ programs">
              <div className="grid md:grid-cols-2 gap-5">
                {programs.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass node-bloom rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl">{p.name}</div>
                    <div className="text-sm text-muted-foreground mt-2">{p.desc}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="process" title="Who It's For" kicker="/ fit">
              <div className="glass-strong rounded-3xl p-10">
                <p className="text-muted-foreground">
                  Recent graduates preparing for interviews, working professionals who want to
                  communicate with more confidence, and teams that need a consistent baseline of
                  workplace skills. Programs run individually or in small groups, in person in
                  Jaipur or online.
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
