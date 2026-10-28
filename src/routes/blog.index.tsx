import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, CTA } from "./services.business";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Career & Business Guides | ZOUM Consultancy Blog" },
      {
        name: "description",
        content:
          "Guides on BPO jobs, interview preparation, IT courses, and AI automation for job seekers and businesses in Jaipur, Ahmedabad, and across India.",
      },
      { property: "og:title", content: "Career & Business Guides | ZOUM Consultancy Blog" },
      {
        property: "og:description",
        content:
          "Practical guides on jobs, interviews, courses, and AI automation from ZOUM Consultancy.",
      },
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com/blog" }],
  }),
  component: BlogIndexPage,
});

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-5xl mx-auto relative z-10">
        <PageHeader
          pill="Career & Business Guides"
          title="Learn What"
          italic="Gets Results."
          sub="Practical guides on getting hired, choosing the right course, and using AI in your business, from the ZOUM team in Jaipur and Ahmedabad."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {sorted.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group glass rounded-3xl p-7 h-full flex flex-col hover:bg-white transition"
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-lime">{p.category}</div>
                <h2 className="font-display text-2xl mt-3 leading-snug">{p.title}</h2>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {formatDate(p.date)} · {p.readMinutes} min read
                  </span>
                  <ArrowUpRight className="h-4 w-4 group-hover:text-lime transition" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <CTA />
        </div>
      </div>
    </main>
  );
}
