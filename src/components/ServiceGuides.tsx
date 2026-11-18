import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/data/blog";
import { Section } from "@/routes/services.business";

/**
 * Blog articles that link to a service page, listed on that service page so
 * search engines see the service and its guides as one topic, and visitors
 * can read more before enquiring.
 */
export function ServiceGuides({ servicePath, title = "Guides" }: { servicePath: string; title?: string }) {
  const related = posts
    .filter((p) =>
      p.body.some((b) => b.type === "links" && b.links.some((l) => l.to === servicePath)),
    )
    .sort((a, b) => b.date.localeCompare(a.date));
  if (related.length === 0) return null;
  return (
    <Section id="guides" title={title} kicker="/ guides">
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
        {related.map((p) => (
          <li key={p.slug}>
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="inline-flex items-start gap-1.5 font-semibold text-lime hover:underline"
            >
              <span>{p.title}</span> <ArrowUpRight className="h-4 w-4 mt-1 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
