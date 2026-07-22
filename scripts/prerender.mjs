// Build-time static prerendering for a plain client-rendered SPA (Hostinger static hosting —
// no Node/SSR server in production). Boots the production build locally, visits every route in
// routes.mjs with a real headless browser, and writes the fully-rendered HTML (title, meta tags,
// JSON-LD, and visible content) to dist/<route>/index.html so non-JS crawlers (link-unfurlers,
// most AI crawlers) see real content instead of an empty shell.
//
// Fails the build (non-zero exit) the moment any route doesn't render completely — no silent
// partial output ever gets shipped.
import { chromium } from "playwright";
import { preview } from "vite";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { ROUTES } from "./routes.mjs";

const DIST_DIR = path.resolve(import.meta.dirname, "..", "dist");
const MIN_MAIN_TEXT_LENGTH = 150;
const GENERIC_TITLES = new Set(["", "Vite + React", "ZOUM"]);

// On every route except "/" itself, the homepage's own title/description/og:title/canonical
// intermittently also get committed to <head> alongside the route's correct ones (reproducible
// even though the app's own render logic only ever computes one correct set — a framework/router
// head-matching quirk, invisible to real users since browsers just use the last <title>
// regardless). Crawlers reading raw HTML should only ever see the route's own values, so on
// every non-home route we drop any head tag whose content exactly matches these known homepage
// values. Keep this in sync with src/routes/index.tsx's head().
const HOMEPAGE_VALUES = {
  title: "ZOUM Consultancy Jaipur | Business Strategy, Career Advisory & AI Services",
  description:
    "ZOUM Consultancy — Jaipur's top business consultancy. 700+ placements, 42+ clients served. Expert business strategy, executive career advisory, social media marketing & AI automation across India.",
  ogTitle: "ZOUM Consultancy — Scale Your Business & Career",
  canonical: "https://zoumconsultancy.com",
};

function outputPathFor(route) {
  if (route === "/") return path.join(DIST_DIR, "index.html");
  return path.join(DIST_DIR, route.replace(/^\//, ""), "index.html");
}

async function renderRoute(page, baseUrl, route) {
  const url = new URL(route, baseUrl).toString();
  const response = await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });

  if (!response || !response.ok()) {
    throw new Error(`${route}: navigation failed (status ${response?.status() ?? "none"})`);
  }

  // Let route-level head()/motion-on-mount effects settle.
  await page.waitForSelector("main", { timeout: 10_000 }).catch(() => {
    throw new Error(`${route}: no <main> element found — route did not render`);
  });
  await page.waitForTimeout(300);

  // See HOMEPAGE_VALUES above for why this is necessary.
  await page.evaluate(
    ({ route, homepage }) => {
      const isHomepage = route === "/";

      // On non-home routes, drop any tag whose content is the homepage's own value.
      if (!isHomepage) {
        for (const el of document.querySelectorAll("title")) {
          if (el.textContent?.trim() === homepage.title) el.remove();
        }
        document
          .querySelector(`meta[name="description"][content="${CSS.escape(homepage.description)}"]`)
          ?.remove();
        document
          .querySelector(`meta[property="og:title"][content="${CSS.escape(homepage.ogTitle)}"]`)
          ?.remove();
        document
          .querySelector(`link[rel="canonical"][href="${CSS.escape(homepage.canonical)}"]`)
          ?.remove();
      }

      // Then collapse any remaining exact duplicates (same tag twice with identical content —
      // happens on "/" itself, and defensively everywhere else), keeping the last one.
      const dedupeByKey = (selector, keyFn) => {
        const seen = new Set();
        for (const el of Array.from(document.head.querySelectorAll(selector)).reverse()) {
          const key = keyFn(el);
          if (seen.has(key)) el.remove();
          else seen.add(key);
        }
      };
      dedupeByKey("title", () => "title");
      dedupeByKey("meta[name]", (el) => `name:${el.getAttribute("name")}`);
      dedupeByKey("meta[property]", (el) => `property:${el.getAttribute("property")}`);
      dedupeByKey("link[rel='canonical']", () => "canonical");
      dedupeByKey("link[rel='modulepreload']", (el) => el.getAttribute("href"));
      dedupeByKey("link[rel='preconnect']", (el) => el.getAttribute("href"));
      dedupeByKey("script[type='application/ld+json']", (el) => el.textContent);
    },
    { route, homepage: HOMEPAGE_VALUES },
  );

  const { titleCount, title, descriptionCount, description, canonicalCount, mainTextLength, hasJsonLd } =
    await page.evaluate(() => {
      const titles = document.querySelectorAll("title");
      const descriptions = document.querySelectorAll('meta[name="description"]');
      return {
        titleCount: titles.length,
        title: titles[0]?.textContent?.trim() ?? "",
        descriptionCount: descriptions.length,
        description: descriptions[0]?.getAttribute("content")?.trim() ?? "",
        canonicalCount: document.querySelectorAll('link[rel="canonical"]').length,
        mainTextLength: document.querySelector("main")?.textContent?.trim().length ?? 0,
        hasJsonLd: !!document.querySelector('script[type="application/ld+json"]'),
      };
    });

  if (GENERIC_TITLES.has(title)) {
    throw new Error(`${route}: <title> is missing or generic ("${title}")`);
  }
  if (titleCount !== 1) {
    throw new Error(`${route}: expected exactly 1 <title>, found ${titleCount} — route/root head() are stacking instead of overriding`);
  }
  if (!description) {
    throw new Error(`${route}: meta description is missing`);
  }
  if (descriptionCount !== 1) {
    throw new Error(`${route}: expected exactly 1 meta description, found ${descriptionCount} — route/root head() are stacking instead of overriding`);
  }
  if (canonicalCount !== 1) {
    throw new Error(`${route}: expected exactly 1 canonical <link>, found ${canonicalCount}`);
  }
  if (mainTextLength < MIN_MAIN_TEXT_LENGTH) {
    throw new Error(
      `${route}: rendered content too short (${mainTextLength} chars in <main>, expected >= ${MIN_MAIN_TEXT_LENGTH}) — route likely failed to render`,
    );
  }
  if (!hasJsonLd) {
    throw new Error(`${route}: no JSON-LD structured data found in <head>`);
  }

  const html = await page.content();
  return { html, title, mainTextLength };
}

const SITE_URL = "https://zoumconsultancy.com";

async function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map(
    (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  await writeFile(path.join(DIST_DIR, "sitemap.xml"), xml, "utf-8");
}

async function writeHtaccess() {
  const htaccess = `# Auto-generated by scripts/prerender.mjs — do not edit by hand.
# Serves the prerendered static HTML for known routes, falls back to the SPA
# shell (index.html) for anything else so client-side routing still works.
DirectoryIndex index.html
RewriteEngine On
RewriteBase /

# Real files/directories (including prerendered <route>/index.html) are served as-is.
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Everything else falls back to the SPA shell.
RewriteRule ^ index.html [L]
`;
  await writeFile(path.join(DIST_DIR, ".htaccess"), htaccess, "utf-8");
}

async function main() {
  await readFile(path.join(DIST_DIR, "index.html"), "utf-8").catch(() => {
    throw new Error(`${DIST_DIR} has no index.html — run "vite build" before prerendering.`);
  });

  const server = await preview({ preview: { port: 0, strictPort: false }, logLevel: "silent" });
  const address = server.resolvedUrls?.local?.[0];
  if (!address) throw new Error("Could not resolve the preview server URL.");

  const browser = await chromium.launch();

  const results = [];
  try {
    for (const route of ROUTES) {
      // Fresh context per route — no shared DOM/module state can leak between navigations.
      const context = await browser.newContext();
      const page = await context.newPage();
      try {
        const { html, title, mainTextLength } = await renderRoute(page, address, route);
        const outPath = outputPathFor(route);
        await mkdir(path.dirname(outPath), { recursive: true });
        await writeFile(outPath, html, "utf-8");
        results.push({ route, title, mainTextLength });
        console.log(`  ✓ ${route.padEnd(32)} "${title}" (${mainTextLength} chars)`);
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close();
    await server.close();
  }

  await writeHtaccess();
  await writeSitemap();
  console.log(
    `\nPrerendered ${results.length}/${ROUTES.length} routes + wrote dist/.htaccess + dist/sitemap.xml`,
  );
}

main().catch((err) => {
  console.error("\n✗ Prerender failed:", err.message);
  process.exit(1);
});
