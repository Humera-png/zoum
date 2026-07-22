# ZOUM contact API — Cloudflare Worker

Standalone backend for the contact form. Deployed **independently** of the
main site (which stays a static `dist/` build on Hostinger) — this Worker
only exists to validate submissions and relay them to Resend. It has no
other responsibility.

```
Frontend (static, Hostinger) --fetch--> this Worker --> Resend API --> inbox
```

## One-time setup

```bash
cd worker
npm install

# 1. Create the KV namespace used for rate limiting
npx wrangler kv namespace create RATE_LIMIT_KV
npx wrangler kv namespace create RATE_LIMIT_KV --preview
# Paste the printed ids into wrangler.jsonc (id / preview_id)

# 2. Set the Resend API key as a secret — never put this in wrangler.jsonc or .env
npx wrangler secret put RESEND_API_KEY

# 3. Verify your sending domain in Resend and update CONTACT_FROM_EMAIL in
#    wrangler.jsonc if it differs from inquiries@zoumconsultancy.com
```

## Local development

```bash
cp .dev.vars.example .dev.vars   # fill in a real RESEND_API_KEY for local testing
npm run dev
```

## Deploy

```bash
npm run deploy
```

Wrangler prints the deployed Worker URL (e.g.
`https://zoum-contact-api.<your-subdomain>.workers.dev`). Put that URL in
the frontend's `.env` as `VITE_CONTACT_API_URL` and rebuild the site — no
other frontend changes are needed to point at a redeployed Worker.

## What it does

- Validates every field server-side (Zod), independent of the frontend's
  own validation.
- Server-side honeypot check (mirrors the frontend's hidden `website` field).
- Rate-limits by IP (5 requests/minute, KV-backed fixed window).
- Validates resume uploads by **both** extension and MIME type
  (`.pdf/.doc/.docx` only, 5MB max) — rejects anything else, including a
  renamed executable.
- Sends via the Resend REST API with `Reply-To` set to the visitor's email.
- CORS is locked to `ALLOWED_ORIGINS` in `wrangler.jsonc` — never `*`.
