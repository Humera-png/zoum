import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A soft gradient blob that trails the pointer. Desktop/mouse only — hidden
// on touch devices, where there's no real cursor to enhance.
export function GradientCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[998] h-8 w-8 rounded-full mix-blend-multiply"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        background: "conic-gradient(from 180deg, var(--brand), var(--brand-deep), var(--brand))",
      }}
    />
  );
}
