import { useEffect, useRef, useState } from "react";
import { Sparkles, X, Send } from "lucide-react";

// ZAI, the ZOUM AI assistant. Talks to the Worker's /chat endpoint, which
// holds the Groq key; nothing secret is in the browser.
const API_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined;

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi, I'm ZAI, ZOUM's AI assistant. Ask me about software, AI automation, apps, websites, BPO, hiring or our courses.",
};

const SUGGESTIONS = [
  "Can you build an AI chatbot for my business?",
  "Do you work with clients outside India?",
  "What can n8n automate for us?",
];

// Turn /paths and URLs in a reply into links.
function renderText(text: string) {
  const parts = text.split(/(https?:\/\/[^\s)]+|\/(?:services|courses|contact|blog)[^\s),.]*)/g);
  return parts.map((p, i) =>
    /^(https?:\/\/|\/(services|courses|contact|blog))/.test(p) ? (
      <a key={i} href={p} className="underline font-semibold" target={p.startsWith("http") ? "_blank" : undefined} rel="noopener">
        {p}
      </a>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export function ZaiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      if (!API_URL) throw new Error("no api");
      const res = await fetch(`${API_URL.replace(/\/$/, "")}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter((m) => m !== GREETING) }),
      });
      if (!res.ok && res.status !== 429) throw new Error("unavailable");
      const data = (await res.json()) as { reply?: string; error?: string };
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            data.reply ??
            data.error ??
            "Sorry, I couldn't answer that. Please message us on WhatsApp or use the contact page.",
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "I'm offline right now. Please message us on WhatsApp or use /contact.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Chat with ZAI, ZOUM's AI assistant"
          className="fixed bottom-24 right-6 z-50 h-14 pl-4 pr-5 rounded-full bg-foreground text-background inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
        >
          <Sparkles className="h-5 w-5" />
          <span className="font-semibold text-sm">Ask ZAI</span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="ZAI chat"
          className="fixed z-50 bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:w-[380px] h-[min(560px,70vh)] rounded-3xl bg-background border border-border shadow-2xl flex flex-col overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div>
              <div className="font-display text-lg flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-lime" /> ZAI
              </div>
              <div className="text-xs text-muted-foreground">ZOUM's AI assistant · may make mistakes</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="h-9 w-9 grid place-items-center rounded-full hover:bg-black/5"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex"}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed whitespace-pre-wrap ${
                    m.role === "user" ? "bg-lime text-white" : "bg-black/5"
                  }`}
                >
                  {m.role === "assistant" ? renderText(m.content) : m.content}
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-col gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="text-left text-xs rounded-xl border border-border px-3 py-2 hover:bg-black/5"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            {busy && <div className="text-xs text-muted-foreground">ZAI is typing…</div>}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-border flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={1000}
              placeholder="Ask about a project, service or course…"
              className="flex-1 rounded-full border border-border px-4 py-2.5 text-sm bg-transparent outline-none focus:border-lime"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="h-10 w-10 rounded-full bg-lime text-white grid place-items-center disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
