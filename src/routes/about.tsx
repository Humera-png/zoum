import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Counter } from "@/components/Counter";
import { PageBackdrop } from "@/components/PageBackdrop";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ZOUM Consultancy | Jaipur Business Consultancy" },
      {
        name: "description",
        content:
          "ZOUM Consultancy is a Jaipur-based consultancy. Meet the team behind our recruitment, AI automation, and software development work.",
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
    image: "/assets/abdur-founder.jpg",
    bio: "Abdur built ZOUM's recruitment engine from the ground up: the sourcing process, client relationships, and vetting standards that stand behind every candidate we put forward. 5+ years in strategic talent sourcing and business planning is the foundation he brings to the consultancy side of ZOUM too, working directly with client companies to turn a hiring need or a growth problem into a plan that's actually realistic to execute.",
    linkedin: "https://www.linkedin.com/in/abdur-rehman-534483221/",
  },
  {
    name: "Parv Jain",
    role: "Founder",
    image: "/assets/parv-founder.jpg",
    bio: "Parv owns client operations and business development at ZOUM. His background is in HR leadership: talent acquisition, payroll & statutory compliance, employee relations, and performance management, built up managing hiring and HR operations for placement firms in Jaipur. That hands-on HR experience is why he stays closely involved in ZOUM's L&D courses and consultancy programs, making sure what gets taught or advised actually matches what employers are hiring for right now.",
    linkedin: "https://www.linkedin.com/in/parv-jain-50020232b/",
  },
  {
    name: "Humera Shaikh",
    role: "Co-Founder & CTO",
    image: "/assets/humera-shaikh.png",
    bio: "Humera is the reason ZOUM's technology actually works, not just exists on paper. She built this website herself, the AI automation and agent systems ZOUM ships for clients, and the course and payments platform students enroll through, then built the infrastructure to keep all of it running without her having to babysit it. Her background is in computer science with a deep focus on automation, Python, and AI/ML, the same expertise behind the AI & IT services and courses ZOUM offers today. As Co-Founder and CTO, her real job is making sure technology is never the reason ZOUM can't move fast.",
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
            ZOUM Consultancy is a Jaipur-based consultancy working with businesses and job seekers
            across India. On the recruitment side, we help candidates get noticed for roles they're
            already qualified for and negotiate better pay once they get there, we've placed 5000+
            people so far, across 100+ companies. On the IT side, we build AI automation and AI
            agents that take over repetitive work, along with websites and custom software that
            businesses actually own and can grow with, not something they'll need to redo in a
            year. Alongside that, we run talent and skills training, social media marketing,
            business consultancy, and business process outsourcing for companies that want one team
            instead of five different vendors. Every person on our team has actually done the work
            we advise on, not just talked about it.
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

          <div className="grid md:grid-cols-3 gap-5">
            {board.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group glass rounded-3xl overflow-hidden hover-glow-lime transition flex flex-col h-full"
              >
                <div className="aspect-[4/5] overflow-hidden bg-zinc-900/30 relative flex items-center justify-center border-b border-zinc-800/40">
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="font-display text-6xl font-bold tracking-tighter text-zinc-700 select-none group-hover:text-lime transition duration-500">
                      {initialsOf(m.name)}
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-[11px] uppercase tracking-wider text-lime font-medium">
                    {m.role}
                  </div>
                  <div className="font-display text-2xl font-bold mt-1 flex items-center justify-between tracking-tight">
                    {m.name}
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noreferrer">
                        <Linkedin className="h-4 w-4 text-muted-foreground hover:text-lime transition" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-normal">
                    {m.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-32">
          <div className="glass-strong rounded-3xl p-10 md:p-14 grid grid-cols-2 lg:grid-cols-4 gap-10 relative overflow-hidden">
            <div
              className="ambient-orb h-72 w-72 -top-20 left-1/2 -translate-x-1/2"
              style={{ background: "rgba(31,203,107,0.35)" }}
            />
            {[
              { v: 5000, suffix: "+", label: "Careers Placed" },
              { v: 100, suffix: "+", label: "Companies Served" },
              { v: 5, suffix: "", label: "Service Lines" },
              { v: 2020, suffix: "", label: "Founded" },
            ].map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="font-display text-4xl md:text-6xl tracking-tight">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
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
