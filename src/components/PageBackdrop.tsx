// Faint geometric grid + ambient orb backdrop used across sub-pages
// to eradicate empty white space while staying ultra-subtle (~3% opacity).
export function PageBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top, rgba(255,255,255,0.7), transparent 60%)",
        }}
      />
      <div
        className="ambient-orb h-[520px] w-[520px] -top-32 -right-32"
        style={{ background: "rgba(31,203,107,0.18)" }}
      />
      <div
        className="ambient-orb h-[420px] w-[420px] bottom-0 -left-32"
        style={{ background: "rgba(14,124,66,0.12)" }}
      />
      <svg
        className="absolute inset-x-0 top-1/3 w-full opacity-[0.05]"
        height="280"
        viewBox="0 0 1200 280"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0 140 C 300 40, 600 240, 1200 100" stroke="#073B22" strokeWidth="1" />
        <path d="M0 200 C 400 100, 800 260, 1200 160" stroke="#073B22" strokeWidth="1" />
        <path d="M0 80 C 350 180, 850 0, 1200 220" stroke="#073B22" strokeWidth="1" />
      </svg>
    </div>
  );
}
