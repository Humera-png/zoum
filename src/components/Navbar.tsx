import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { Logo } from "./Logo";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services/business" as const, hasMenu: true },
  { label: "Find Jobs", to: "/services/career" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const serviceItems = [
  {
    label: "Career Mastery and Talent Acquisition",
    to: "/services/career" as const,
    desc: "Get Noticed For Bigger Roles.",
  },
  {
    label: "Talent & Development",
    to: "/services/talent-development" as const,
    desc: "Skills That Get You Noticed.",
  },
  {
    label: "AI and IT Services",
    to: "/services/ai-automation" as const,
    desc: "Production AI Architectures.",
  },
  {
    label: "Website Development",
    to: "/services/website-development" as const,
    desc: "A Site That Actually Holds Up.",
  },
  {
    label: "Social Media Marketing",
    to: "/services/socialmedia" as const,
    desc: "Unified Excellence.",
  },
  {
    label: "Business Consultancy",
    to: "/services/business-consultancy" as const,
    desc: "One Team For Everything That Grows You.",
  },
  {
    label: "Business Process Outsourcing",
    to: "/services/bpo-operations" as const,
    desc: "Scale Without Friction.",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-2rem))] glass rounded-full px-3 py-2 flex items-center justify-between transition-all ${scrolled ? "shadow-[0_20px_60px_-30px_rgba(7,59,34,0.25)]" : ""}`}
      >
        <Link to="/" className="flex items-center gap-2.5 pl-2 min-w-0">
          <Logo size={32} />
          <span className="font-display text-lg tracking-tight leading-none flex flex-col min-w-0">
            <span className="text-foreground">ZOUM</span>
            <span className="text-[8px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5 truncate">
              Placement Services
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 text-sm relative">
          {links.map((l) => {
            const active =
              l.to === "/" ? path === "/" : path.startsWith(l.to.split("/").slice(0, 2).join("/"));
            if (l.hasMenu) {
              return (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => setMenuOpen(true)}
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <button
                    className={`px-4 py-2 rounded-full transition flex items-center gap-1 ${active ? "text-foreground" : "text-foreground/60"} hover:text-foreground hover:bg-black/5`}
                  >
                    {l.label} <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {menuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-80 glass-strong rounded-2xl p-2"
                      onMouseEnter={() => setMenuOpen(true)}
                    >
                      {serviceItems.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="block px-4 py-3 rounded-xl hover:bg-black/5 transition group"
                        >
                          <div className="text-sm font-medium flex items-center justify-between">
                            {s.label}
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition" />
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={l.label}
                to={l.to}
                className={`px-4 py-2 rounded-full transition ${active ? "text-foreground bg-black/5" : "text-foreground/60 hover:text-foreground hover:bg-black/5"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <MagneticButton
            href="/contact"
            className="btn-lime font-medium text-sm px-5 py-2.5 rounded-full"
          >
            Book Now <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden mr-1 p-2 rounded-full hover:bg-black/5 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile slide-out overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[88%] max-w-sm glass-strong md:hidden flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <Logo size={28} />
                  <span className="font-display text-base text-foreground">ZOUM</span>
                </div>
                <button
                  aria-label="Close menu"
                  className="p-2 rounded-full hover:bg-black/5"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col p-4 gap-1">
                <Link
                  to="/"
                  className="px-4 py-3 rounded-xl text-base text-foreground hover:bg-black/5 transition"
                >
                  Home
                </Link>

                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="px-4 py-3 rounded-xl text-base text-foreground hover:bg-black/5 transition flex items-center justify-between"
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <motion.span
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      key="m-services"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 280, damping: 32 }}
                      className="overflow-hidden ml-2 pl-3 border-l border-border"
                    >
                      <div className="py-1 flex flex-col">
                        {serviceItems.map((s) => (
                          <Link
                            key={s.to}
                            to={s.to}
                            className="px-3 py-2.5 rounded-lg hover:bg-black/5 transition"
                          >
                            <div className="text-sm font-medium text-foreground">{s.label}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  to="/services/career"
                  className="px-4 py-3 rounded-xl text-base text-foreground hover:bg-black/5 transition"
                >
                  Find Jobs
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-3 rounded-xl text-base text-foreground hover:bg-black/5 transition"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-3 rounded-xl text-base text-foreground hover:bg-black/5 transition"
                >
                  Contact
                </Link>
              </nav>

              <div className="mt-auto p-5 border-t border-border">
                <Link
                  to="/contact"
                  className="btn-lime w-full text-center text-sm font-semibold px-5 py-3.5 rounded-full inline-flex items-center justify-center gap-2"
                >
                  Book Now <ArrowUpRight className="h-4 w-4" />
                </Link>
                <div className="mt-4 text-xs text-muted-foreground text-center">+91 8360971791</div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
