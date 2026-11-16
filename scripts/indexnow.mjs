// Tell Bing (and other IndexNow search engines: Yandex, Seznam, Naver) that
// pages changed, so they crawl them now instead of waiting. ChatGPT search
// uses Bing's index. Run after a deploy is live:  node scripts/indexnow.mjs
// Submits every URL in public/sitemap.xml. The key file in public/ proves
// we own the site; it must stay published.
import { readFileSync, readdirSync } from "node:fs";

const key = readdirSync("public").find((f) => /^[0-9a-f]{32}\.txt$/.test(f)).slice(0, -4);
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "zoumconsultancy.com",
    key,
    keyLocation: `https://zoumconsultancy.com/${key}.txt`,
    urlList,
  }),
});
console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`, await res.text());
