import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 2.2,
  noGroup = false,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  // Skip thousands separators — for years and other numbers that should
  // never read as "2,020".
  noGroup?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => c.stop();
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {noGroup ? Math.round(val) : Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
}
