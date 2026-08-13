import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Layers, ShoppingCart, Wrench } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { PageHeader, Section, CTA } from "./services.business";

export const Route = createFileRoute("/services/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "Website and web app development for growing businesses: marketing sites, e-commerce, custom web apps, and ongoing maintenance. ZOUM Consultancy, Jaipur.",
      },
      { property: "og:title", content: "Website Development | ZOUM Consultancy" },
      {
        property: "og:description",
        content: "Fast, modern websites and web apps built to actually hold up as your business grows.",
      },
    ],
  }),
  component: WebsiteDevelopmentPage,
});

const services = [
  {
    icon: Globe,
    name: "Marketing & Business Websites",
    desc: "Fast, modern websites that load quickly, look right on every device, and are easy for your team to update.",
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    desc: "Online stores built to actually convert, with payments, inventory, and checkout that just work.",
  },
  {
    icon: Layers,
    name: "Custom Web Applications",
    desc: "Internal tools and customer-facing platforms built around how your business actually operates.",
  },
  {
    icon: Wrench,
    name: "Maintenance & Support",
    desc: "Ongoing updates, fixes, and hosting support so your site stays fast and secure after launch.",
  },
];

function WebsiteDevelopmentPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Website Development"
          title="A Site That"
          italic="Actually Holds Up."
          sub="We design and build websites and web applications that are fast, easy to manage, and built to grow with your business instead of needing a rebuild in a year."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="What We Build" kicker="/ capabilities">
              <div className="grid md:grid-cols-2 gap-5">
                {services.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass node-bloom rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl">{s.name}</div>
                    <div className="text-sm text-muted-foreground mt-2">{s.desc}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
