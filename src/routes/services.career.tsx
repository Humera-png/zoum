import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cpu, Landmark, HeartPulse, Factory, ShoppingBag, ShoppingCart, Radio, Plane } from "lucide-react";

import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";
import { PageBackdrop } from "@/components/PageBackdrop";
import { JobSeekerForm } from "@/components/JobSeekerForm";
import { JobListings } from "@/components/JobListings";

export const Route = createFileRoute("/services/career")({
  head: () => ({
    meta: [
      {
        title: "Recruitment Agency & Job Placement | ZOUM Consultancy Jaipur",
      },
      {
        name: "description",
        content:
          "ZOUM Consultancy's recruitment service helps candidates get noticed for bigger roles and negotiate better pay. 5000+ job placements across India, 100+ companies served.",
      },
      {
        name: "keywords",
        content: "recruitment agency Jaipur, job placement India, job consultancy, career advisory, hiring agency India",
      },
      {
        property: "og:title",
        content: "Recruitment Agency & Job Placement | ZOUM Consultancy",
      },
      {
        property: "og:description",
        content:
          "Get noticed for bigger roles and negotiate better pay. Recruitment and job placement across India.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/services/career" },
    ],
  }),

  component: CareerPage,
});

const expertise = [
  {
    icon: Cpu,
    name: "IT & Technology",
    desc: "We connect engineering, product, and technical people with teams building serious software.",
  },
  {
    icon: Landmark,
    name: "Banking & Finance",
    desc: "Finance and operations roles across banks, NBFCs, and fintechs.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    desc: "Administrative and operational roles for hospitals, clinics, and healthcare providers.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Plant, operations, and supply chain roles.",
  },
  {
    icon: ShoppingBag,
    name: "Consumer & Retail",
    desc: "Brand, merchandising, and retail operations roles.",
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    desc: "Growth, operations, and category roles for online businesses.",
  },
  {
    icon: Radio,
    name: "Telecom",
    desc: "Technical and operational roles across telecom.",
  },
  {
    icon: Plane,
    name: "Aviation",
    desc: "Operations and management roles across aviation and logistics.",
  },
];

function CareerPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name="Recruitment & Job Placement"
        description="Recruitment and job placement services connecting candidates with employers across India."
        url="https://zoumconsultancy.com/services/career"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <PageHeader
          pill="Career Advisory"
          title="Get Noticed For"
          italic="Bigger Roles."
          sub="We help people get noticed for the roles they're already qualified for, and negotiate better pay once they get there."
        />

        <div className="mt-10 relative aspect-[21/9] rounded-3xl overflow-hidden glass-strong">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
            alt="A handshake after a successful job interview"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
        </div>

        <div className="mt-20 space-y-32">
          <Section id="expertise" title="Our Expertise" kicker="/ industries">
            <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
              We place across a wide range of industries, so we already understand the hiring
              needs specific to your field, not just generic recruiting.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {expertise.map((e, i) => (
                <motion.div
                  key={e.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4">
                    <e.icon className="h-5 w-5 text-lime" />
                  </div>
                  <div className="font-display text-lg">{e.name}</div>
                  <div className="text-sm text-muted-foreground mt-2">{e.desc}</div>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section id="openings" title="Open Roles" kicker="/ current openings">
            <JobListings />
          </Section>

          <Section id="apply" title="Apply Now" kicker="/ job seekers">
            <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
              Looking for your next role, not looking to hire? Submit your details below and
              our team will match you with the right opportunity.
            </p>
            <JobSeekerForm />
          </Section>

          <CTA />
        </div>
      </div>
    </main>
  );
}
