import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PhoneOutgoing, MessagesSquare, FileSpreadsheet, UserCheck, Earth } from "lucide-react";

import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { ServiceGuides } from "@/components/ServiceGuides";
import { CoursesSection } from "@/components/CoursesSection";
import { courses } from "@/data/courses";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";
import {
  AudienceSection,
  StepsSection,
  CitiesSection,
  FaqSection,
} from "@/components/ServiceGuide";

const bpoCourses = courses.filter((c) => c.page === "bpo");

// Served at /services/bpo-operations (see routeTree.gen.ts); the file name is historical.
export const Route = createFileRoute("/services/business-strategy")({
  head: () => ({
    meta: [
      { title: "BPO Services & BPO Recruitment in Jaipur & Ahmedabad | ZOUM" },
      {
        name: "description",
        content:
          "BPO services for small businesses: outsource telecalling, chat and email support, and back-office work, or hire BPO team leaders. Jaipur, Ahmedabad, India.",
      },
      {
        property: "og:title",
        content: "BPO Services & BPO Recruitment | ZOUM Consultancy",
      },
      {
        name: "keywords",
        content:
          "BPO for small business, business process outsourcing for small business, BPO services Jaipur, BPO services Ahmedabad, BPO company Jaipur, business process outsourcing India, telecalling services Jaipur, outbound calling services India, chat support outsourcing, email support outsourcing, back office outsourcing Jaipur, data entry outsourcing India, BPO recruitment agency Jaipur, BPO hiring Ahmedabad, international BPO recruitment",
      },
      {
        property: "og:description",
        content:
          "Telecalling, chat and email support, and back-office work run by our team, plus recruitment of BPO team leaders and international process staff.",
      },
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com/services/bpo-operations" }],
  }),

  component: BpoPage,
});

const outsourcing = [
  {
    icon: PhoneOutgoing,
    name: "Outbound Calling & Telecalling",
    desc: "Lead calls, sales calls, follow-ups and appointment setting, made by our team using your script and reported back to you.",
  },
  {
    icon: MessagesSquare,
    name: "Chat & Email Support",
    desc: "Answering your customers' questions over chat, WhatsApp and email, so no message waits for hours for a reply.",
  },
  {
    icon: FileSpreadsheet,
    name: "Back Office & Data Work",
    desc: "Data entry, order processing, documentation and admin work, done accurately so your own team can focus on customers.",
  },
];

const hiring = [
  {
    icon: UserCheck,
    name: "Team Leaders, QAs & Trainers",
    desc: "Experienced team leaders, quality analysts and process trainers for BPO companies that need people who can run a floor from day one.",
  },
  {
    icon: Earth,
    name: "International Process Staff",
    desc: "Candidates with the English and communication skills for international voice processes serving the UK, US and other markets.",
  },
];

const steps = [
  {
    name: "Discovery call",
    desc: "We learn which work you want to hand over, how much of it there is, and how you measure it today.",
  },
  {
    name: "Process setup",
    desc: "We agree the scripts, tools, targets and daily or weekly reports before anything starts.",
  },
  {
    name: "Team and training",
    desc: "We assign the team and train them on your products, process and tone of voice.",
  },
  {
    name: "Go live",
    desc: "The team starts working on your process, with a ZOUM point of contact for you.",
  },
  {
    name: "Report and improve",
    desc: "You get regular reports on calls, replies or work completed, and we adjust the process as we learn.",
  },
];

const audiences = [
  {
    name: "Businesses That Want to Outsource",
    desc: "Companies spending too much time on calls, customer messages or data work, and small businesses that don't want to build an in-house team for it.",
  },
  {
    name: "BPO Companies That Are Hiring",
    desc: "BPOs and call centres that need team leaders, QAs, trainers or international process staff.",
  },
  {
    name: "BPO Job Seekers",
    desc: "Candidates who want to start or grow a BPO career. See our BPO Career course and job openings.",
  },
];

const pageFaqs = [
  {
    q: "What is BPO (business process outsourcing)?",
    a: "BPO means handing a business process, such as calling leads, answering customer messages or data entry, to an outside team that runs it for you, so your own staff can focus on growing the business.",
  },
  {
    q: "Which BPO services does ZOUM offer?",
    a: "Outbound calling and telecalling (lead calls, sales calls, follow-ups, appointment setting), chat and email support, and back-office and data work such as data entry, order processing and documentation.",
  },
  {
    q: "Can a small business outsource to ZOUM?",
    a: "Yes. Work like follow-up calls, email support or data entry suits small businesses well, because you get the work done without hiring and training a full in-house team.",
  },
  {
    q: "How much does BPO outsourcing cost?",
    a: "It depends on the type of work, the volume, the hours and the reporting you need. We quote after a free discovery call, once we understand your process.",
  },
  {
    q: "Do you recruit staff for BPO companies?",
    a: "Yes. We recruit team leaders, quality analysts and trainers, and staff for international voice processes. Tell us the roles and requirements, and we share suitable candidates.",
  },
  {
    q: "Do you offer BPO services in Ahmedabad?",
    a: "Yes. We work with businesses in Jaipur and Ahmedabad, and run outsourced work for clients across India.",
  },
  {
    q: "I want a BPO job. Can ZOUM help?",
    a: "Yes. Our BPO Career course prepares you for BPO and customer support roles, and our placement team helps candidates find openings. See our Find Jobs page for current roles.",
  },
];

function Cards({ items }: { items: typeof outsourcing }) {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((f, i) => (
        <motion.div
          key={f.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="group glass node-bloom rounded-2xl p-6"
        >
          <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
            <f.icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-xl">{f.name}</h3>
          <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

function BpoPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name="BPO Services & BPO Recruitment"
        description="Outbound calling and telecalling, chat and email support, and back-office work for businesses, plus recruitment of BPO team leaders, QAs, trainers and international process staff."
        url="https://zoumconsultancy.com/services/bpo-operations"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="BPO Services & BPO Recruitment in Jaipur & Ahmedabad"
          title="Scale"
          italic="Smarter."
          sub="We run outbound calling, chat and email support, and back-office work for businesses, and recruit team leaders and international process staff for BPO companies."
        />

        <div className="mt-10 relative aspect-[3/1] max-h-64 rounded-3xl overflow-hidden glass-strong">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
            alt="A BPO team at work"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
        </div>

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />

          <div className="space-y-32">
            <Section id="overview" title="BPO Services for Businesses" kicker="/ outsourcing">
              <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                Hand repetitive calling, customer messages and data work to our team.
                You keep control of the process and get regular reports; we handle the daily work.
              </p>
              <Cards items={outsourcing} />
            </Section>

            <StepsSection steps={steps} id="process" title="How Outsourcing Works" />

            <Section id="recruitment" title="BPO Recruitment" kicker="/ hiring for BPO companies">
              <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                For BPOs and call centres: we find and shortlist candidates for the roles that are
                hardest to fill.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {hiring.map((h) => (
                  <div key={h.name} className="group glass node-bloom rounded-2xl p-6">
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <h.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl">{h.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{h.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Looking for a BPO job instead?{" "}
                <Link to="/services/career" className="text-lime font-semibold hover:underline">
                  See current openings
                </Link>
                .
              </p>
            </Section>

            {bpoCourses.length > 0 && (
              <Section id="courses" title="BPO Career Course" kicker="/ enroll">
                <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                  Want to work in BPO yourself? This course prepares you for BPO and customer
                  support roles.
                </p>
                <CoursesSection page="bpo" />
              </Section>
            )}

            <AudienceSection audiences={audiences} />

            <Section id="pricing" title="Pricing" kicker="/ how we quote">
              <div className="glass-strong rounded-3xl p-8 md:p-10 max-w-3xl">
                <p className="text-muted-foreground leading-relaxed">
                  Outsourced work is quoted per process, based on the type of work, the volume, the
                  working hours and the reports you need. Recruitment terms are agreed for each
                  hiring requirement. Both start with a free call.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Need help with operations strategy rather than outsourcing?{" "}
                  <Link to="/services/business" className="text-lime font-semibold hover:underline">
                    See our business consultancy services
                  </Link>
                  .
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex btn-lime font-semibold px-6 py-3 rounded-full"
                >
                  Get a free quote
                </Link>
              </div>
            </Section>

            <CitiesSection
              intro={
                "We work with businesses in Jaipur and Ahmedabad, and run outsourced work and hiring for clients across India."
              }
            />

            <FaqSection faqs={pageFaqs} />

            <ServiceGuides servicePath="/services/bpo-operations" />
            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
