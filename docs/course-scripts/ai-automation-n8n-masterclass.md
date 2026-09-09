# AI Automation Masterclass — n8n
### Internal teaching script — live 3-hour session

This is the live-session run sheet: what to actually say and do, minute by
minute. It's paired with the public course listing on the site
(`src/data/courses.ts`, id `ai-automation-n8n-masterclass`) — that page sells
the course; this document is how you actually run it. Not for publishing.

**Format:** 3 hours, one sitting (with a short break). Live build, not slides.
**Audience:** People who can use a computer comfortably but may have never
written code or touched an automation tool. Assume zero n8n experience.
**Outcome by the end:** Every attendee has personally built and tested one
working AI-powered automation, and leaves with a 7-Day Automation Build Plan.

---

## 0:00–0:15 — Open

- Introduce yourself and why this matters: you didn't learn automation from a
  course, you built it to solve real problems (LeadFlowTool, order
  processing, lead gen, supply chain — all running in production, all built
  in n8n). This isn't theory.
- Ask the room: "Who here has a repetitive task at work they do the same way
  every single time?" Take 2–3 answers out loud. Write one on the board —
  you'll come back to it at the end as a "could this be automated?" check.
- Set the goal explicitly: "By the time we're done, you will have personally
  built one real automation. Not watched me build one — built one."

## 0:15–0:40 — What n8n actually is

- n8n = a visual workflow tool. You connect boxes ("nodes") instead of
  writing a program from scratch. Each node does one job: trigger something,
  fetch data, transform it, call an AI model, send an email.
- Draw the mental model on the board: **Trigger → Action → Action → Action**.
  A workflow is just that chain, and n8n runs it for you every time the
  trigger fires.
- Why n8n specifically (not Zapier/Make): self-hostable, no per-task pricing
  wall, and it has first-class nodes for calling AI models directly inside a
  workflow — which is the whole point of this class.
- Live demo (you drive, they watch): open n8n, show the canvas, add a
  Manual Trigger node, add a Set node, run it once. This is just to get them
  comfortable with the interface before anyone touches their own laptop.

## 0:40–1:10 — Core building blocks, hands-on

Everyone opens their own n8n account/instance now. Walk them through, live,
each person building alongside you one step at a time:

1. **Triggers** — Manual Trigger vs. Webhook Trigger vs. Schedule Trigger.
   Have them add a Webhook Trigger and hit "Listen for test event," then
   send a test request from their browser so they see data land in n8n.
2. **Nodes & data flow** — add an HTTP Request node after the trigger, show
   how output from one node becomes input to the next.
3. **Expressions** — show `{{ $json.fieldName }}` syntax to pull a value
   from the previous node into the next one. This is the one syntax concept
   in the whole class; drill it until it clicks.
4. **Credentials** — how n8n stores API keys/auth so you're not pasting
   secrets into every node.

Checkpoint: everyone should now have a workflow with a webhook trigger and at
least one node reading data from it. Don't move on until most hands are up.

**— 10 minute break —**

## 1:20–2:20 — The real build: an AI-powered lead follow-up automation

This is the centerpiece. Everyone builds this exact automation, live, from
an empty canvas:

1. **Trigger**: Webhook — simulates a new lead coming in from a form (name,
   email, message).
2. **AI node**: OpenAI/Claude node — feed it the lead's message with a
   prompt like "Write a warm, specific 3-sentence follow-up reply to this
   inquiry: {{ $json.message }}". Show them the prompt is doing real work,
   not just templating — the AI is reading and responding to what the
   person actually asked.
3. **Action**: Send the AI's reply — either to an email node (Gmail/SMTP) or
   to a Slack/Discord node acting as a stand-in for a real inbox, depending
   on what credentials the room has available.
4. **Test it live**: send 2–3 different fake leads with different messages
   through the webhook and show the AI drafting a genuinely different reply
   each time.
5. Name the pattern explicitly: "This is the same shape as LeadFlowTool —
   trigger, AI decision, action. Once you can build this, you can build
   order processing, lead gen, supply chain automation, all the same three
   pieces, different nodes."

Give people 15–20 minutes inside this block to build it themselves with you
circulating, not just watching you do it once.

## 2:20–2:45 — Where this goes from here

- Briefly show (don't build) one more advanced pattern: an HTTP Request node
  calling an API that doesn't have a native n8n node — this is the bridge to
  "you can automate literally anything with an API," which matters because
  it's the #1 question you'll get afterward.
- Talk through the 2-classes-a-week enhanced program content so it's not a
  cold pitch: order processing automation, lead generation automation,
  supply chain automation, error handling, scheduling, and each person
  shipping their own project idea.

## 2:45–3:00 — Close: the 7-Day Automation Build Plan

- Hand out (or screen-share) a simple 7-day plan template:
  - Day 1–2: Pick one repetitive task from your own work (refer back to the
    board from the opening).
  - Day 3–4: Map it as Trigger → Action → Action on paper before touching
    n8n.
  - Day 5–6: Build it in n8n using what we covered today.
  - Day 7: Test it with 3 real inputs, fix what breaks.
- Close with placement/enrollment framing per the site's standard terms: this
  is a one-time fee, no side payments to anyone, placement assistance and
  guidance if they put in the work, no guarantee.
- Q&A until time runs out.

---

## Notes for future runs

- Keep a running list here of questions that came up live but weren't
  covered, so the next iteration of this script gets tighter.
- If the room has very mixed skill levels, the biggest time sink is usually
  credential setup (API keys) — consider having a shared/sandbox OpenAI key
  ready to hand out so nobody stalls on that step during the masterclass
  itself.
