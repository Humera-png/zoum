import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Cpu,
  Landmark,
  HeartPulse,
  Factory,
  ShoppingBag,
  ShoppingCart,
  Radio,
  Plane,
} from "lucide-react";

import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";
import { PageBackdrop } from "@/components/PageBackdrop";
import { JobSeekerForm } from "@/components/JobSeekerForm";
import { JobListings } from "@/components/JobListings";
import {
  AudienceSection,
  StepsSection,
  CitiesSection,
  FaqSection,
} from "@/components/ServiceGuide";

export const Route = createFileRoute("/services/career")({
  head: () => ({
    meta: [
      {
        title: "Recruitment Agency & Job Placement | ZOUM Jaipur & Ahmedabad",
      },
      {
        name: "description",
        content:
          "ZOUM Consultancy's recruitment service helps candidates get noticed for bigger roles and negotiate better pay. 5000+ job placements across India, 100+ companies served.",
      },
      {
        name: "keywords",
        content:
          "recruitment agency Jaipur, recruitment agency Ahmedabad, job placement Ahmedabad, job placement India, job consultancy, career advisory, hiring agency India",
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
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com/services/career" }],
  }),

  component: CareerPage,
});

const audiences = [
  {
    name: "Freshers",
    desc: "Graduates and 12th-pass candidates looking for a first job in BPO, customer support, sales, IT, or operations. We help you present your profile properly and prepare for interviews.",
  },
  {
    name: "Experienced Professionals",
    desc: "People who are already qualified for a bigger role but aren't getting noticed. We put you in front of the right employers and help you negotiate better pay.",
  },
  {
    name: "Companies Hiring",
    desc: "Businesses that need screened, interview-ready candidates without spending weeks sorting resumes. Tell us the role and we'll shortlist people who fit.",
  },
];

const steps = [
  {
    name: "Share your profile",
    desc: "Apply for an open role below, or submit your details through the form so our team knows what you're looking for.",
  },
  {
    name: "Profile review",
    desc: "We look at your experience, skills, and goals, and tell you honestly which roles you're a strong fit for.",
  },
  {
    name: "Matching",
    desc: "We match you with openings from employers we work with across industries, in Jaipur, Ahmedabad, and other cities.",
  },
  {
    name: "Interview preparation",
    desc: "We help you get ready for the interview, from how to talk about your experience to the questions employers usually ask.",
  },
  {
    name: "Offer and joining",
    desc: "We stay involved through the offer, help you understand it, and support you until you join.",
  },
];

const pageFaqs = [
  {
    q: "Do you place candidates in Ahmedabad as well as Jaipur?",
    a: "Yes. We're headquartered in Jaipur and also work with candidates and employers in Ahmedabad. We place people in other cities across India too.",
  },
  {
    q: "I'm a fresher with no experience. Can you help me get a job?",
    a: "Yes. Many of the people we work with are freshers. We help you find entry-level roles, such as BPO and customer support jobs, and prepare you for interviews. Our courses can also help you build job-ready skills.",
  },
  {
    q: "Which industries do you hire for?",
    a: "IT and technology, banking and finance, healthcare, manufacturing, consumer and retail, e-commerce, telecom, and aviation.",
  },
  {
    q: "How do I apply for a job through ZOUM?",
    a: "Apply for any open role listed on this page, or fill in the job seeker form with your details. Our team reviews every application and contacts you when there's a role that fits.",
  },
  {
    q: "How long does it take to get placed?",
    a: "It depends on the role, your experience, and how many openings match your profile at the time. We keep you updated and contact you as soon as a suitable role comes up.",
  },
  {
    q: "I'm an employer. How do I hire through ZOUM?",
    a: "Contact us with the role, location, and the kind of candidate you need. We'll shortlist screened candidates for you to interview.",
  },
];

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
          pill="Job Placement & Recruitment Agency in Jaipur & Ahmedabad"
          title="Get Noticed For"
          italic="Bigger Roles."
          sub="We help people get noticed for the roles they're already qualified for, and negotiate better pay once they get there."
        />

        <div className="mt-10 relative aspect-[3/1] max-h-64 rounded-3xl overflow-hidden glass-strong">
          <img
            src="/assets/interview-handshake.jpg"
            alt="A handshake after a successful job interview"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
        </div>

        <div className="mt-20 space-y-32">
          <Section id="expertise" title="Our Expertise" kicker="/ industries">
            <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
              We place across a wide range of industries, so we already understand the hiring needs
              specific to your field, not just generic recruiting.
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
              Looking for your next role, not looking to hire? Submit your details below and our
              team will match you with the right opportunity.
            </p>
            <JobSeekerForm />
          </Section>

          <AudienceSection audiences={audiences} />

          <StepsSection steps={steps} id="how-it-works" />
          <CitiesSection
            intro={
              "We're based in Jaipur and work with candidates and employers in Ahmedabad and across India."
            }
          />

          <FaqSection faqs={pageFaqs} />
          <CTA />
        </div>
      </div>
    </main>
  );
}
