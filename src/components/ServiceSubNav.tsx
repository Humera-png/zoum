import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Process" },
  { id: "pricing", label: "Pricing" },
];

export function ServiceSubNav() {
  const [active, setActive] = useState("overview");
  useEffect(() => {
    const onScroll = () => {
      let cur = "overview";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 200) cur = s.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="hidden lg:block sticky top-28 h-fit">
      <div className="glass rounded-2xl p-3 w-48">
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground px-3 pt-2 pb-3">
          On this page
        </div>
        <nav className="flex flex-col">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-2 rounded-lg text-sm transition relative ${active === s.id ? "text-foreground bg-black/5 font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              {active === s.id && (
                <span className="absolute left-0 top-2 bottom-2 w-0.5 bg-lime rounded-full" />
              )}
              <span className="ml-2">{s.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
