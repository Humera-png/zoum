import { Link } from "@tanstack/react-router";
import { Twitter, Linkedin, Instagram, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="px-6 pb-10 pt-16 border-t border-border mt-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <div className="font-display text-3xl tracking-tight">
              Stay in the <span className="text-lime">signal.</span>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              Quarterly briefings on placement, leadership, and execution.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) {
                setDone(true);
                setEmail("");
                setTimeout(() => setDone(false), 3000);
              }
            }}
            className="glass rounded-full p-2 flex items-center gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="bg-transparent flex-1 min-w-0 px-4 py-2 text-sm placeholder:text-muted-foreground outline-none text-foreground"
            />
            <button className="btn-lime text-sm font-medium px-5 py-2.5 rounded-full pulse-lime whitespace-nowrap">
              {done ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="glass rounded-2xl p-5 flex items-start gap-3">
            <MapPin className="h-5 w-5 text-lime mt-0.5 shrink-0" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Headquarters
              </div>
              <div className="mt-1 text-sm text-foreground leading-relaxed">
                ZOUM Placement Services, Plot no 3, Madrampura, Civil Lines, Jaipur
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-5 flex items-start gap-3">
            <Phone className="h-5 w-5 text-lime mt-0.5 shrink-0" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Active Line
              </div>
              <a
                href="tel:+918306971791"
                className="mt-1 block text-sm text-foreground font-medium hover:text-lime transition"
              >
                +91 8306971791
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-border">
          <div className="flex items-center gap-2 flex-wrap">
            <Logo size={26} />
            <span className="font-display text-sm">
              ZOUM <span className="text-muted-foreground text-xs">Placement Services</span>
            </span>
            <span className="text-muted-foreground text-xs ml-3">
              © 2025 - All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <div className="flex items-center gap-2">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/zoumplacementservices?igsh=MWh3cnFrbXliMjlwdA==",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noreferrer" : undefined}
                  className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-lime hover:text-white hover:border-transparent transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
