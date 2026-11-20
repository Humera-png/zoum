// Prerender every public page to static HTML after `vite build`.
//
// Why: the site is a client-rendered SPA, so crawlers that don't run
// JavaScript (ChatGPT, Claude and Perplexity crawlers, social link previews,
// Bing's first pass) only saw an empty shell with the same title on every
// URL. This writes dist/<path>/index.html for each URL in the sitemap with
// that page's real title, description, canonical, headings, text and
// structured data. In the browser, main.tsx mounts the normal SPA over it.
//
// It also writes:
//   dist/app-shell.html  the plain SPA shell, used by vercel.json rewrites for
//                        dynamic URLs that aren't prerendered (job pages, admin)
//   dist/404.html        a real 404 page, so unknown URLs return HTTP 404
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = join(root, "dist");
const { render } = await import(pathToFileURL(join(root, "dist-ssr", "entry-prerender.js")).href);

const template = readFileSync(join(dist, "index.html"), "utf8");
copyFileSync(join(dist, "index.html"), join(dist, "app-shell.html"));

// index.html's generic fallback tags; each prerendered page brings its own.
const baseTemplate = template.replace(
  /\s*<(title|meta)[^>]*data-static-head[^>]*>(?:[^<]*<\/title>)?/g,
  "",
);

const sitemap = readFileSync(join(root, "public", "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>https:\/\/zoumconsultancy\.com([^<]*)<\/loc>/g)].map(
  (m) => m[1] || "/",
);

// Pull title/meta/canonical tags out of the rendered body and into <head>.
// They're tagged data-static-head so the SPA removes them on mount and its
// own head management takes over (no duplicates).
function splitHead(html) {
  const head = [];
  const seen = new Set();
  const body = html.replace(
    /<title>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>/g,
    (tag) => {
      const keep =
        tag.startsWith("<title") ||
        (tag.startsWith("<meta") && !/charSet|charset|name="viewport"/.test(tag)) ||
        /rel="canonical"/.test(tag);
      if (keep) {
        // last one wins for the same name/property (route tags come after root tags)
        const key = tag.startsWith("<title")
          ? "title"
          : (tag.match(/(?:name|property|rel)="([^"]+)"/) || [tag])[1];
        if (seen.has(key)) {
          const i = head.findIndex((h) => h.key === key);
          head.splice(i, 1);
        }
        seen.add(key);
        head.push({ key, tag: tag.replace(/^<(\w+)/, "<$1 data-static-head") });
      }
      return "";
    },
  );
  return { head: head.map((h) => h.tag).join("\n    "), body };
}

function page(rendered, extraHead = "") {
  let { head, body } = splitHead(rendered.html);
  // a page that adds its own robots tag (the 404) replaces the default one
  if (/name="robots"/.test(extraHead))
    head = head.replace(/\s*<meta data-static-head name="robots"[^>]*>/, "");
  return baseTemplate
    .replace("</head>", `    ${head}${extraHead}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

const decode = (t) =>
  t
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
const pages = [];
let count = 0;
for (const url of urls) {
  const r = await render(url);
  const { head } = splitHead(r.html);
  pages.push({
    url,
    title: decode((head.match(/<title[^>]*>([^<]*)/) || [])[1] || url),
    desc: decode((head.match(/name="description" content="([^"]*)/) || [])[1] || ""),
  });
  if (r.notFound) throw new Error(`Sitemap URL ${url} rendered as not found`);
  const file = url === "/" ? join(dist, "index.html") : join(dist, url, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(r));
  count++;
}

const nf = await render("/__not-found__");
writeFileSync(
  join(dist, "404.html"),
  page(nf, '\n    <meta data-static-head name="robots" content="noindex" />'),
);

// llms.txt: a plain-text map of the site for AI assistants (llmstxt.org),
// built from the same pages so it never goes out of date.
const groups = [
  ["Services", (u) => u.startsWith("/services/")],
  ["Courses", (u) => u.startsWith("/courses/")],
  ["Guides", (u) => u.startsWith("/blog")],
  ["Company", (u) => !/^\/(services|courses|blog)/.test(u) && u !== "/"],
];
const line = (p) =>
  `- [${p.title.replace(/ \| ZOUM.*$/, "")}](https://zoumconsultancy.com${p.url})${p.desc ? `: ${p.desc}` : ""}`;
const llms = [
  "# ZOUM Consultancy",
  "",
  '> ZOUM (pronounced "zoom") Consultancy is a consultancy with its head office in Jaipur (Rajasthan) and a branch office in Ahmedabad (Gujarat), India, serving clients across India. It offers job placement and recruitment, career courses (BPO, IT, business consultancy and AI), AI automation and AI agents, website development and social media, BPO services and business consultancy.',
  "",
  "Contact: contact@zoumconsultancy.com, +91 8360971791, +91 7665521538 (WhatsApp). Address: Plot No. 3, Tulsi Path, Madrampura, Civil Lines, Jaipur, Rajasthan 302006, India.",
  "",
  ...groups.flatMap(([name, test]) => {
    const list = pages.filter((p) => test(p.url));
    return list.length ? [`## ${name}`, "", ...list.map(line), ""] : [];
  }),
].join("\n");
writeFileSync(join(dist, "llms.txt"), llms);

console.log(`Prerendered ${count} pages + 404.html + llms.txt`);
process.exit(0);
