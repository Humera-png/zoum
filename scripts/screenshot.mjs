import { chromium } from "playwright";
import { preview } from "vite";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve(import.meta.dirname, "..", "..", "shots");
await mkdir(OUT_DIR, { recursive: true });

const server = await preview({ preview: { port: 0, strictPort: false }, logLevel: "silent" });
const address = server.resolvedUrls.local[0];
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await context.newPage();
await page.goto(new URL("/", address).toString(), { waitUntil: "networkidle" });
await page.waitForSelector("main", { timeout: 10000 });
await page.waitForTimeout(500);

// Hero viewport-only
await page.screenshot({ path: path.join(OUT_DIR, "mobile-hero.png") });

// Scroll to services, wait, shot
await page.getByText("Five problems.").scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(OUT_DIR, "mobile-services.png") });

// First service card closeup
const card = page.getByText("Stuck below your level?").locator("..").locator("..");
await card.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(OUT_DIR, "mobile-card-closeup.png") });

await context.close();

// Contact form mobile
const context2 = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page2 = await context2.newPage();
await page2.goto(new URL("/contact", address).toString(), { waitUntil: "networkidle" });
await page2.waitForSelector("main", { timeout: 10000 });
await page2.waitForTimeout(500);
await page2.screenshot({ path: path.join(OUT_DIR, "mobile-contact.png"), fullPage: true });
await context2.close();

await browser.close();
await server.close();
console.log("done");
