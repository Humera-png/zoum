// Single source of truth for every crawlable route on the site.
// Used by the prerender script (scripts/prerender.mjs) and the sitemap generator.
// Keep this in sync with src/routeTree.gen.ts whenever a route is added, renamed, or removed.
export const ROUTES = [
  "/",
  "/about",
  "/contact",
  "/services/ai-automation",
  "/services/business-strategy",
  "/services/career",
  "/services/socialmedia",
];
