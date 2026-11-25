import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe2, Clock, FileSignature, Banknote, type LucideIcon } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { ServiceGuides } from "@/components/ServiceGuides";
import { PageHeader, Section, CTA, ServiceSchema } from "@/routes/services.business";
import { AudienceSection, StepsSection, FaqSection } from "@/components/ServiceGuide";

// Shared layout for the global IT and AI service pages (software, AI agents,
// mobile apps, n8n automation). Each route supplies its own copy.

export interface ItCard {
  icon: LucideIcon;
  name: string;
  desc: string;
}

export interface ItProof {
  name: string;
  tag: string;
  desc: string;
  href?: string;
}

export interface ItServicePageProps {
  path: string; // e.g. "/services/software-development"
  schemaName: string;
  schemaDescription: string;
  pill: string;
  title: string;
  italic: string;
  sub: string;
  servicesTitle: string;
  servicesIntro: string;
  services: ItCard[];
  proofTitle?: string;
  proofIntro?: string;
  proof?: ItProof[];
  audiences: { name: string; desc: string }[];
  steps: { name: string; desc: string }[];
  pricingText: string;
  faqs: { q: string; a: string }[];
  related: { label: string; to: string }[];
}

const global: ItCard[] = [
  {
    icon: Globe2,
    name: "Clients worldwide",
    desc: "We work with businesses in India, the US, the UK, Europe, the Middle East and Australia, fully remote.",
  },
  {
    icon: Clock,
    name: "Hours that overlap yours",
    desc: "Our team is in India (IST). We schedule calls in your working hours and agree how often you get updates.",
  },
  {
    icon: FileSignature,
    name: "Contracts and NDAs",
    desc: "Scope, timeline, payment terms and confidentiality are agreed in writing before work starts. We sign an NDA on request.",
  },
  {
    icon: Banknote,
    name: "Invoicing in your currency",
    desc: "We invoice international clients in US dollars or other major currencies, and Indian clients in rupees.",
  },
];

export function ItServicePage(p: ItServicePageProps) {
  const url = `https://zoumconsultancy.com${p.path}`;
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name={p.schemaName}
        description={p.schemaDescription}
        url={url}
        worldwide
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader pill={p.pill} title={p.title} italic={p.italic} sub={p.sub} />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title={p.servicesTitle} kicker="/ what we build">
              <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">{p.servicesIntro}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {p.services.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass node-bloom rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Section>

            {p.proof && p.proof.length > 0 && (
              <Section id="work" title={p.proofTitle ?? "What We've Built"} kicker="/ our work">
                {p.proofIntro && (
                  <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">{p.proofIntro}</p>
                )}
                <div className="grid md:grid-cols-2 gap-5">
                  {p.proof.map((w) => (
                    <div key={w.name} className="glass rounded-2xl p-6">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-lime font-semibold">
                        {w.tag}
                      </span>
                      <h3 className="font-display text-xl mt-2">{w.name}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{w.desc}</p>
                      {w.href && (
                        <a
                          href={w.href}
                          target="_blank"
                          rel="noopener"
                          className="mt-3 inline-block text-sm text-lime font-semibold hover:underline"
                        >
                          Visit {w.name} →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <AudienceSection audiences={p.audiences} />

            <StepsSection steps={p.steps} id="process" />

            <Section id="worldwide" title="Working With Clients Worldwide" kicker="/ global">
              <div className="grid sm:grid-cols-2 gap-5">
                {global.map((g) => (
                  <div key={g.name} className="glass rounded-2xl p-6">
                    <g.icon className="h-5 w-5 text-lime" />
                    <h3 className="font-display text-lg mt-3">{g.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Head office in Jaipur, branch in Ahmedabad, India. Local clients are welcome to meet
                us in person.
              </p>
            </Section>

            <Section id="pricing" title="Pricing" kicker="/ how we quote">
              <div className="glass-strong rounded-3xl p-8 md:p-10 max-w-3xl">
                <p className="text-muted-foreground leading-relaxed">{p.pricingText}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="btn-lime font-semibold px-6 py-3 rounded-full inline-flex items-center"
                  >
                    Get a free project estimate
                  </Link>
                </div>
                <div className="mt-6 text-sm text-muted-foreground">
                  Related services:{" "}
                  {p.related.map((r, i) => (
                    <span key={r.to}>
                      {i > 0 && " · "}
                      <a href={r.to} className="text-lime font-semibold hover:underline">
                        {r.label}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
            </Section>

            <FaqSection faqs={p.faqs} />

            <ServiceGuides servicePath={p.path} />
            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
