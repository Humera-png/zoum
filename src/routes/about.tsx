import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Counter } from "@/components/Counter";
import { PageBackdrop } from "@/components/PageBackdrop";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ZOUM Consultancy | Recruitment & IT Services Company, Jaipur" },
      {
        name: "description",
        content:
          "ZOUM Consultancy is a Jaipur recruitment and IT services company. Meet the team behind our job placement, AI automation, and software development work.",
      },
      { property: "og:title", content: "About ZOUM Consultancy" },
      {
        property: "og:description",
        content: "A team that's actually done the work, not just consultants. Meet the ZOUM advisory board.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/about" },
    ],
  }),
  component: AboutPage,
});

function initialsOf(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const board = [
  {
    name: "Abdur Rehman",
    role: "Founder",
    bio: "Human Resources Specialist & Business Consultant. 5+ years of operational excellence in strategic talent sourcing and business planning.",
    linkedin: "https://www.linkedin.com/in/abdur-rehman-534483221/",
  },
   {
    name: "Parv Jain",
    role: "Founder",
    bio: "Human Resources Specialist & Business Consultant. 5+ years of operational excellence in strategic talent sourcing and business planning.",
    linkedin: "https://www.linkedin.com/in/abdur-rehman-534483221/",
  },
  {
    name: "Humera Shaikh",
    role: " Co - Founder and CTO",
    bio: "Directs full-scale software engineering, AI architecture implementations, cloud infrastructure, and global technology systems integration.",
    linkedin: "https://www.linkedin.com/in/humerashaikhofficial/",
  },
];

function AboutPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="pt-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] text-lime"
          >
            / about
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-4 font-display text-5xl md:text-7xl tracking-tight leading-[0.95]"
          >
            A team that's <span className="italic font-serif text-lime">done the work</span>, not
            just consultants.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl"
          >
            Founded in 2020, ZOUM Consultancy works with businesses and people who want real
            results, not average ones.
          </motion.p>
        </header>

        <section className="mt-20 max-w-3xl">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            ZOUM Consultancy is a Jaipur-based recruitment and IT services company working with
            businesses and job seekers across India. On the recruitment side, we help candidates get
            noticed for roles they're already qualified for and negotiate better pay once they get
            there, we've placed 700+ people in the past year alone. On the IT side, we build AI
            automation and AI agents that take over repetitive work, along with websites and custom
            software that businesses actually own and can grow with, not something they'll need to
            redo in a year. Alongside that, we run talent and skills training, social media
            marketing, business consultancy, and business process outsourcing for companies that want
            one team instead of five different vendors. Every person on our team has actually done
            the work we advise on, not just talked about it.
          </p>
        </section>

        <section className="mt-24">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-lime mb-3">
                / advisory board
              </div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                The people behind the work.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {board.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group glass rounded-3xl overflow-hidden hover-glow-lime transition flex flex-col justify-between h-full"
              >
                <div>
                  <div className="aspect-[4/5] overflow-hidden bg-zinc-900/30 relative flex items-center justify-center border-b border-zinc-800/40">
                    <div className="font-display text-5xl font-bold tracking-tighter text-zinc-700 select-none group-hover:text-lime transition duration-500">
                      {initialsOf(m.name)}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] uppercase tracking-wider text-lime font-medium">
                      {m.role}
                    </div>
                    <div className="font-display text-xl font-bold mt-1 flex items-center justify-between tracking-tight">
                      {m.name}
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank" rel="noreferrer">
                          <Linkedin className="h-4 w-4 text-muted-foreground hover:text-lime transition" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-normal">
                      {m.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-32">
          <div className="glass-strong rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 relative overflow-hidden">
            <div
              className="ambient-orb h-72 w-72 -top-20 left-1/2 -translate-x-1/2"
              style={{ background: "rgba(31,203,107,0.35)" }}
            />
            {[
              { v: 150, suffix: "+", label: "Companies Scaled" },
              { v: 700, suffix: "+", label: "Careers Placed" },
            ].map((s, i) => (
              <div key={i} className="relative text-center md:text-left">
                <div className="font-display text-5xl md:text-6xl tracking-tight">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
