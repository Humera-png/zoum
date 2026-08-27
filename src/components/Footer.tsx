import { Link } from "@tanstack/react-router";
import { Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

const quickLinks = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const serviceLinks = [
  { label: "Career Mastery", to: "/services/career" as const },
  { label: "Talent and Hiring", to: "/services/talent-development" as const },
  { label: "AI and IT Services", to: "/services/ai-automation" as const },
  { label: "Website Development", to: "/services/website-development" as const },
  { label: "Social Media Marketing", to: "/services/socialmedia" as const },
  { label: "Business Consultancy", to: "/services/business-consultancy" as const },
  { label: "Business Process Outsourcing", to: "/services/bpo-operations" as const },
];

export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-16 border-t border-border mt-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo size={30} />
              <span className="font-display text-lg tracking-tight">
                ZOUM <span className="text-muted-foreground text-sm">Placement Services</span>
              </span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm max-w-sm leading-relaxed">
              ZOUM Placement Services connects businesses and professionals through strategy,
              talent, social media, and AI. Jaipur headquartered, pan-India reach.
            </p>
            <div className="flex items-center gap-2 mt-5">
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

          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-foreground/80 hover:text-lime transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {serviceLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-foreground/80 hover:text-lime transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Contact
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-lime mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80 leading-relaxed">
                  ZOUM Placement Services, Plot no 3, Madrampura, Civil Lines, Jaipur
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-lime shrink-0" />
                <a
                  href="tel:+918360971791"
                  className="text-sm text-foreground/80 hover:text-lime transition"
                >
                  +91 8360971791
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-lime shrink-0" />
                <a
                  href="mailto:contact@zoumconsultancy.com"
                  className="text-sm text-foreground/80 hover:text-lime transition"
                >
                  contact@zoumconsultancy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-border">
          <span className="text-muted-foreground text-xs">
            © 2025 ZOUM Placement Services. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
