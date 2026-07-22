import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export function PageHeader({
  pill,
  title,
  italic,
  sub,
}: {
  pill: string;
  title: string;
  italic: string;
  sub: string;
}) {
  return (
    <header className="pt-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xs uppercase tracking-[0.3em] text-lime"
      >
        / {pill}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 font-display text-5xl md:text-7xl tracking-tight max-w-4xl leading-[0.95]"
      >
        {title} <span className="italic font-serif text-lime">{italic}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-lg text-muted-foreground max-w-2xl"
      >
        {sub}
      </motion.p>
    </header>
  );
}

export function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="text-xs uppercase tracking-[0.3em] text-lime mb-3">{kicker}</div>
      <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-10">{title}</h2>
      {children}
    </section>
  );
}

export function CTA() {
  return (
    <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
      <div
        className="ambient-orb h-72 w-72 -top-20 left-1/2 -translate-x-1/2"
        style={{ background: "rgba(31,203,107,0.45)" }}
      />
      <div className="relative">
        <h3 className="font-display text-3xl md:text-5xl tracking-tight">
          Ready to get started?
        </h3>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          Begin with a free 30-minute strategy call — no pitch deck, no prep required. Just a
          direct conversation about your goals.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            href="/contact"
            className="btn-lime font-semibold px-8 py-4 rounded-full inline-flex items-center"
          >
            Book a free strategy call <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground hover:text-foreground transition underline underline-offset-4"
          >
            Or send an inquiry →
          </Link>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          We respond within 24 hours · contact@zoumconsultancy.com
        </p>
      </div>
    </div>
  );
}
