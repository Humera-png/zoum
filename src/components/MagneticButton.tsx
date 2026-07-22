import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent, ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  strength?: number;
  disabled?: boolean;
};

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  type = "button",
  strength = 25,
  disabled = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(((e.clientX - r.left) / r.width - 0.5) * strength * 2);
    y.set(((e.clientY - r.top) / r.height - 0.5) * strength * 2);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  // Internal routes (e.g. "/contact") go through TanStack Router's <Link> for client-side
  // navigation and prefetching; anything else (tel:, mailto:, external URLs) stays a plain <a>.
  const isInternal = href?.startsWith("/");

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
      {isInternal ? (
        <Link to={href} className={className}>
          {inner}
        </Link>
      ) : href ? (
        <a href={href} className={className}>
          {inner}
        </a>
      ) : (
        <button type={type} onClick={onClick} disabled={disabled} className={className}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
