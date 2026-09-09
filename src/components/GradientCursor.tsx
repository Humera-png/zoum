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
    <>
      {/* Soft glow trail, well behind the solid core */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed left-0 top-0 z-[997] h-16 w-16 rounded-full blur-xl"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, var(--brand) 0%, var(--brand-deep) 55%, transparent 75%)",
        }}
      />
      {/* Sharp gradient core */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[998] h-4 w-4 rounded-full"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          background: "linear-gradient(135deg, #baffd9 0%, var(--brand) 45%, var(--brand-deep) 100%)",
          boxShadow: "0 0 12px 2px rgba(31,203,107,0.6)",
        }}
      />
    </>
  );
}
