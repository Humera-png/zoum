import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageBackdrop } from "@/components/PageBackdrop";
import { CTA } from "./services.business";
import { formatDate } from "./blog.index";
import { posts, type Post } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) {
      return {
        meta: [
          { title: "Article not found | ZOUM Consultancy" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${post.title} | ZOUM Consultancy` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `https://zoumconsultancy.com/blog/${post.slug}` }],
    };
  },
  component: BlogPostPage,
});

function ArticleSchema({ post }: { post: Post }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `https://zoumconsultancy.com/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "ZOUM Consultancy",
      url: "https://zoumconsultancy.com",
    },
    publisher: {
      "@type": "Organization",
      name: "ZOUM Consultancy",
      logo: { "@type": "ImageObject", url: "https://zoumconsultancy.com/assets/zoum-logo.png" },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-32 px-6 pb-20 relative">
        <PageBackdrop />
        <div className="max-w-3xl mx-auto relative z-10 glass-strong rounded-3xl p-10 text-center">
          <h1 className="font-display text-3xl mb-3">This article doesn't exist.</h1>
          <Link to="/blog" className="text-sm font-semibold text-lime hover:underline">
            See all articles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ArticleSchema post={post} />
      <article className="max-w-3xl mx-auto relative z-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>
        <div className="mt-8 text-xs uppercase tracking-[0.3em] text-lime">/ {post.category}</div>
        <h1 className="mt-4 font-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
          {post.title}
        </h1>
        <div className="mt-5 text-sm text-muted-foreground">
          ZOUM Consultancy · {formatDate(post.date)} · {post.readMinutes} min read
        </div>

        <div className="mt-12 space-y-5 text-[17px] leading-relaxed text-foreground/85">
          {post.body.map((b, i) => {
            if (b.type === "h2")
              return (
                <h2 key={i} className="font-display text-2xl md:text-3xl text-foreground pt-6">
                  {b.text}
                </h2>
              );
            if (b.type === "h3")
              return (
                <h3 key={i} className="font-display text-xl text-foreground pt-2">
                  {b.text}
                </h3>
              );
            if (b.type === "ul")
              return (
                <ul key={i} className="list-disc pl-6 space-y-2">
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            if (b.type === "links")
              return (
                <aside key={i} className="glass-strong rounded-3xl p-7 !mt-12">
                  <div className="font-display text-xl text-foreground">{b.title}</div>
                  <ul className="mt-4 space-y-2">
                    {b.links.map((l) => (
                      <li key={l.to}>
                        <a
                          href={l.to}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
                        >
                          {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </div>

        <div className="mt-24">
          <CTA />
        </div>
      </article>
    </main>
  );
}
