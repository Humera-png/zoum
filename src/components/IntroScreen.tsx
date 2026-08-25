import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 2200);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center cursor-pointer"
          onClick={() => setShow(false)}
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl sm:text-8xl md:text-[9rem] tracking-tight leading-none bg-clip-text text-transparent bg-cover bg-center px-4 text-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80)",
            }}
          >
            ZOUM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-4 text-sm uppercase tracking-[0.3em] text-muted-foreground"
          >
            Recruitment &amp; IT Services
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
