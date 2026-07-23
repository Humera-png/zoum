import { chromium } from "playwright";
import { preview } from "vite";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve(import.meta.dirname, "..", "..", "shots");
await mkdir(OUT_DIR, { recursive: true });

const server = await preview({ preview: { port: 0, strictPort: false }, logLevel: "silent" });
const address = server.resolvedUrls.local[0];
const browser = await chromium.launch();

const targets = [
  { route: "/services/it-software", name: "it-software" },
  { route: "/services/career", name: "career" },
  { route: "/services/socialmedia", name: "socialmedia" },
  { route: "/services/business-strategy", name: "business-strategy" },
];

for (const t of targets) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  try {
    await page.goto(new URL(t.route, address).toString(), { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForSelector("main", { timeout: 10000 });
    await page.waitForTimeout(400);
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < pageHeight; y += 250) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(110);
    }
    await page.waitForTimeout(400);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(OUT_DIR, `${t.name}.png`), fullPage: true });
    console.log("saved:", t.name);
  } catch (err) {
    console.error(`FAILED ${t.name}:`, err.message);
  } finally {
    await context.close();
  }
}

await browser.close();
await server.close();
