import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, Brain, Presentation, Cpu, Monitor } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";
import { AudienceSection, StepsSection, CitiesSection } from "@/components/ServiceGuide";
import { ServiceGuides } from "@/components/ServiceGuides";

export const Route = createFileRoute("/services/talent-development")({
  head: () => ({
    meta: [
      {
        title: "Corporate Training & Career Courses in Jaipur & Ahmedabad | ZOUM",
      },
      {
        name: "description",
        content:
          "Corporate training for teams and job-ready courses for individuals in Jaipur, Ahmedabad and online: communication, soft skills, digital, AI, IT and BPO.",
      },
      {
        name: "keywords",
        content:
          "corporate training company Jaipur, corporate training Ahmedabad, employee training Jaipur, soft skills training for employees, communication skills training for employees, AI training for employees, BPO course Jaipur, BPO course Ahmedabad, IT career course Jaipur, IT course Ahmedabad, business consultancy course India, AI automation course Jaipur, n8n course Ahmedabad, machine learning course India, spoken English course Jaipur, interview preparation course Ahmedabad, personality development course Jaipur",
      },
      {
        property: "og:title",
        content: "Corporate Training & Career Courses | ZOUM Consultancy",
      },
      {
        property: "og:description",
        content:
          "Training for teams and job-ready courses for individuals: communication, soft skills, digital and AI skills, and BPO, IT and consultancy careers.",
      },
    ],
    links: [{ rel: "canonical", href: "https://zoumconsultancy.com/services/talent-development" }],
  }),
  component: TalentDevelopmentPage,
});

function CourseListSchema({ courses: list }: { courses: typeof courses }) {
  if (list.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@graph": list.map((c) => ({
      "@type": "Course",
      name: c.title,
      description: c.summary,
      url: `https://zoumconsultancy.com/courses/${c.id}`,
      provider: {
        "@type": "Organization",
        name: "ZOUM Consultancy",
        sameAs: "https://zoumconsultancy.com",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Blended",
        courseWorkload: c.duration,
        location: {
          "@type": "Place",
          name: "Jaipur, India / Online",
        },
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const courseFaqs = [
  {
    q: "Do I need to create an account to enroll in a course?",
    a: "Yes. You sign in or create a free account when you enroll, so you can keep track of the courses you've paid for.",
  },
  {
    q: "How do I pay for a course?",
    a: "Payment is handled through Razorpay and supports cards, UPI, and netbanking. You pay securely after signing in, directly from the course's page.",
  },
  {
    q: "Are the courses online or in person?",
    a: "Both. Courses run individually or in small groups, in person in Jaipur or online, depending on what works for you.",
  },
  {
    q: "Do you offer corporate training for companies?",
    a: "Yes. We train employees in communication and spoken English, workplace and soft skills, leadership readiness for new managers, digital workplace skills, and AI and automation. Contact us and we'll plan a programme for your team.",
  },
  {
    q: "Can the training be customised for our team?",
    a: "Yes. We start with a call to understand your team's roles and gaps, then agree the topics, format and schedule. Training runs in person in Jaipur or online, so teams in Ahmedabad and other cities can join.",
  },
  {
    q: "Can I join from Ahmedabad or another city?",
    a: "Yes. Courses also run online, so you can join from Ahmedabad or anywhere in India.",
  },
  {
    q: "Which course should I choose?",
    a: "Pick the track that matches the job you want: the BPO Career Masterclass for BPO and customer support roles, the IT Career Masterclass for IT jobs, or the Business Consultancy and AI masterclasses for those fields. Not sure? Contact us and we'll help you choose.",
  },
];

function CourseFaqSchema() {
  if (courses.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: courseFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Corporate training topics for companies (the individual tracks are the course cards below).
const programs = [
  {
    icon: MessageCircle,
    name: "Communication & Spoken English",
    desc: "Spoken and written English for real workplace situations: calls, emails, meetings and customers, not textbook drills.",
  },
  {
    icon: Presentation,
    name: "Workplace & Soft Skills",
    desc: "Time management, teamwork, professional etiquette and confidence for new joiners and early-career employees.",
  },
  {
    icon: Brain,
    name: "Leadership Readiness",
    desc: "Preparing high performers to step into their first team lead or manager role.",
  },
  {
    icon: Monitor,
    name: "Digital Workplace Skills",
    desc: "Everyday digital tools, documents, spreadsheets and online collaboration, so teams work faster with fewer errors.",
  },
  {
    icon: Cpu,
    name: "AI & Automation for Teams",
    desc: "Practical use of AI tools and n8n automation, so teams hand repetitive work to software.",
  },
];

const companySteps = [
  { name: "Needs call", desc: "We learn about your team, their roles, and the skills you want to improve." },
  { name: "Training plan", desc: "We agree the topics, format, group size and schedule, and send you a quote." },
  {
    name: "Training sessions",
    desc: "Practical, interactive sessions in person in Jaipur or online, built around your team's real work.",
  },
  { name: "Review", desc: "We share what was covered and suggest next steps for the team." },
];

const audiences = [
  {
    name: "Companies & HR Teams",
    desc: "Businesses that want new joiners productive sooner and teams that communicate and work better.",
  },
  {
    name: "Freshers & Job Seekers",
    desc: "Graduates and students who want job-ready skills for BPO, IT, consultancy or AI roles.",
  },
  {
    name: "Working Professionals",
    desc: "People who want to communicate with more confidence, move into tech, or step up to a lead role.",
  },
];

// The headline tracks, in this exact order — this is the order they should
// appear as cards on this page. Each links straight to its own course page
// (its own modules, sign-in, and payment) — this is also what any ad
// campaign should link to directly (e.g. the BPO card's course), not this
// page, so someone clicking an ad lands straight on that one course.
const flagshipIds = [
  "bpo-career-masterclass",
  "it-career-masterclass",
  "business-consultancy-masterclass",
  "ai-automation-n8n-masterclass",
  "ai-ml-foundations",
  "automation-ai-ml-practicum",
];
const flagshipCourses = flagshipIds
  .map((id) => courses.find((c) => c.id === id))
  .filter((c): c is (typeof courses)[number] => Boolean(c));

function TalentDevelopmentPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name="Corporate Training & Career Courses (L&D)"
        description="Corporate training for teams and job-ready career courses for individuals in Jaipur, Ahmedabad and online: communication, soft skills, digital, AI, IT and BPO."
        url="https://zoumconsultancy.com/services/talent-development"
      />
      <CourseListSchema courses={flagshipCourses} />
      <CourseFaqSchema />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Corporate Training & Career Courses in Jaipur & Ahmedabad"
          title="Skills That"
          italic="Get You Noticed."
          sub="Training for companies that want stronger teams, and job-ready courses for individuals who want a better job: communication, soft skills, digital, AI, IT and BPO skills."
        />

        <div className="mt-10 relative aspect-[3/1] max-h-64 rounded-3xl overflow-hidden glass-strong">
          <img
            src="/assets/lnd-instructor.jpg"
            alt="An instructor presenting to a class"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
        </div>

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="Training for Companies" kicker="/ corporate training">
              <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                Employee training programmes for teams in Jaipur, Ahmedabad and across India,
                planned around your team's roles and delivered in person or online.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {programs.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass node-bloom rounded-2xl p-6"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Section>

            <StepsSection steps={companySteps} id="process" title="How Corporate Training Works" />

            {flagshipCourses.length > 0 && (
              <Section id="tracks" title="Career Courses for Individuals" kicker="/ start here">
                <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                  {flagshipCourses.length} job-ready tracks, each its own course. Pick one, see
                  what's inside, and enroll directly from that page.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {flagshipCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </Section>
            )}

            <AudienceSection audiences={audiences} />

            {courses.length > 0 && (
              <Section id="course-faq" title="Common Questions" kicker="/ faq">
                <div className="space-y-4">
                  {courseFaqs.map((f, i) => (
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
            )}

            <CitiesSection
              intro={
                "Training and courses run in person at our Jaipur centre and online, so teams and students in Ahmedabad and anywhere in India can join."
              }
            />
            <ServiceGuides servicePath="/services/talent-development" />
            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
