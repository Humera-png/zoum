import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section } from "@/routes/services.business";

export type Faq = { q: string; a: string };

/** FAQ list plus FAQPage structured data, so Google can show the answers in results. */
export function FaqSection({
  faqs,
  id = "faq",
  title = "Common Questions",
}: {
  faqs: Faq[];
  id?: string;
  title?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <Section id={id} title={title} kicker="/ faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <motion.div
            key={f.q}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-lg">{f.q}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function AudienceSection({
  audiences,
  title = "Who It's For",
}: {
  audiences: { name: string; desc: string }[];
  title?: string;
}) {
  return (
    <Section id="who-its-for" title={title} kicker="/ who we help">
      <div className="grid md:grid-cols-3 gap-5">
        {audiences.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-lg">{a.name}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function StepsSection({
  steps,
  id = "process",
  title = "How It Works",
}: {
  steps: { name: string; desc: string }[];
  id?: string;
  title?: string;
}) {
  return (
    <Section id={id} title={title} kicker="/ step by step">
      <ol className="space-y-4">
        {steps.map((s, i) => (
          <motion.li
            key={s.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-6 flex gap-5"
          >
            <span className="font-display text-3xl text-lime leading-none shrink-0 w-8">
              {i + 1}
            </span>
            <div>
              <h3 className="font-display text-lg">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

const places = [
  { name: "Jaipur", desc: "Our headquarters. Meet us in person." },
  { name: "Ahmedabad", desc: "Candidates, students, and businesses across Ahmedabad." },
  { name: "Across India", desc: "Remote and online for every other city." },
];

export function CitiesSection({ intro }: { intro: string }) {
  return (
    <Section id="where-we-work" title="Where We Work" kicker="/ cities">
      <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">{intro}</p>
      <div className="grid sm:grid-cols-3 gap-5">
        {places.map((p) => (
          <div key={p.name} className="glass rounded-2xl p-6">
            <MapPin className="h-5 w-5 text-lime" />
            <h3 className="font-display text-lg mt-3">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
