// Build-time prerendering entry (not shipped to the browser).
//
// The site is a client-rendered SPA, so crawlers that don't run JavaScript
// (ChatGPT/Claude/Perplexity crawlers, link previews, and Bing on its first
// pass) only ever saw an empty shell. scripts/prerender.mjs imports this
// file from an SSR build and renders every public URL to real HTML, with its
// own title, description, canonical, headings, text and structured data.
// In the browser, main.tsx still mounts the normal SPA over it.
import { renderToString } from "react-dom/server";
import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export async function render(url: string) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [url] }),
    context: { queryClient: new QueryClient() },
  });
  await router.load();
  const html = renderToString(<RouterProvider router={router} />);
  const notFound = router.state.matches.some((m) => m.globalNotFound || m.status === "notFound");
  return { html, notFound };
}
