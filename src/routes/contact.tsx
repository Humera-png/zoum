import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageBackdrop } from "@/components/PageBackdrop";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ZOUM Consultancy | Free Strategy Call | Jaipur, India" },
      {
        name: "description",
        content:
          "Contact ZOUM Consultancy in Jaipur for a free strategy call. We help businesses scale, professionals advance careers, and brands grow online. Response within 24 hours.",
      },
      { property: "og:title", content: "Contact ZOUM Consultancy | Book a Free Strategy Call" },
      {
        property: "og:description",
        content:
          "Reach out to ZOUM Consultancy in Jaipur. Business strategy, career advisory, social media, and AI services. We respond within 24 hours.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="pt-16 px-6 pb-16 md:pb-24 relative">
      <PageBackdrop />
      <div
        className="ambient-orb h-[500px] w-[500px] top-20 right-0"
        style={{ background: "rgba(31,203,107,0.22)" }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="pt-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] text-lime"
          >
            / contact
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-4 font-display text-5xl md:text-7xl tracking-tight leading-[0.95]"
          >
            Let's architect <span className="italic font-serif text-lime">your</span> alpha.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-muted-foreground max-w-xl"
          >
            Tell us about your engagement. ZOUM responds within 24 hours, Monday through Friday.
          </motion.p>
        </header>

        <div className="mt-10 md:mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-4">
              <div className="glass rounded-3xl overflow-hidden border border-emerald-500/10">
                <img
                  src="/assets/Jaipur-2.jpg"
                  alt="Jaipur city skyline"
                  className="h-52 md:h-60 w-full object-cover object-center"
                />
                <div className="p-5 bg-white text-slate-950">
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                    One Office, Full Focus
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-900">
                    ZOUM operates from a single Jaipur headquarters, combining strategy, socialmedia
                    and talent delivery under one roof. This focused base ensures faster decisions,
                    stronger local insight and a more personal client experience.
                  </p>
                </div>
              </div>

              {[
                { icon: MapPin, label: "Jaipur, India", sub: "Headquarters and operating office." },
                {
                  icon: Mail,
                  label: "contact@zoumconsultancy.com",
                  sub: "Inquiries answered within 24 hours.",
                },
                {
                  icon: Phone,
                  label: "+91 8360971791 · +91 7665521538",
                  sub: "Mon-Fri · 10am – 7pm IST.",
                },
              ].map((c, i) => (
                <div key={i} className="glass rounded-2xl p-4 flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-lime grid place-items-center shrink-0 text-white">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>                   
                    <div className="text-sm font-medium">{c.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
