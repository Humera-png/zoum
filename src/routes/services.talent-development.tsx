import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, Users, Brain, Presentation } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { CoursesSection } from "@/components/CoursesSection";
import { courses } from "@/data/courses";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";

export const Route = createFileRoute("/services/talent-development")({
  head: () => ({
    meta: [
      { title: "Learning and Development (L&D) Courses | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "Enroll in job-ready courses from ZOUM Consultancy, Jaipur: English & Communication, Interview Mastery, Leadership Readiness, and more. Clear pricing, sign in, enroll online.",
      },
      {
        name: "keywords",
        content:
          "skills training course Jaipur, English communication course, interview preparation course India, personality development course, leadership training course, workplace skills course online",
      },
      { property: "og:title", content: "Learning and Development (L&D) Courses | ZOUM Consultancy" },
      {
        property: "og:description",
        content: "Job-ready courses with clear pricing: English & Communication, Interview Mastery, Leadership Readiness, and more.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/services/talent-development" },
    ],
  }),
  component: TalentDevelopmentPage,
});

function CourseListSchema() {
  if (courses.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@graph": courses.map((c) => ({
      "@type": "Course",
      name: c.title,
      description: c.summary,
      url: `https://zoumconsultancy.com/services/talent-development#courses`,
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
      offers: {
        "@type": "Offer",
        price: c.priceInr,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

const courseFaqs = [
  {
    q: "Do I need to create an account to enroll in a course?",
    a: "Yes. You sign in or create a free account when you enroll, so you can keep track of the courses you've paid for.",
  },
  {
    q: "How do I pay for a course?",
    a: "Payment is handled through Razorpay and supports cards, UPI, and netbanking. You pay securely after signing in, directly from the course details screen.",
  },
  {
    q: "Are the courses online or in person?",
    a: "Both. Courses run individually or in small groups, in person in Jaipur or online, depending on what works for you.",
  },
  {
    q: "Can teams or companies book training for employees?",
    a: "Yes. For team or company bookings, contact us directly instead of enrolling as an individual, and we'll set up a plan for your group.",
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

const programs = [
  {
    icon: MessageCircle,
    name: "English & Communication",
    desc: "Spoken and written English training built for real workplace situations, not textbook drills.",
  },
  {
    icon: Users,
    name: "Personality Development",
    desc: "Confidence, presence, and interpersonal skills that come through in interviews and on the job.",
  },
  {
    icon: Presentation,
    name: "Workplace & Soft Skills",
    desc: "Time management, teamwork, and professional etiquette for people early in their career.",
  },
  {
    icon: Brain,
    name: "Leadership Readiness",
    desc: "Preparing high performers to step into their first management role with real support.",
  },
];

function TalentDevelopmentPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name="Learning and Development (L&D)"
        description="English communication, workplace skills, and leadership training for individuals and teams."
        url="https://zoumconsultancy.com/services/talent-development"
      />
      <CourseListSchema />
      <CourseFaqSchema />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Learning and Development (L&D)"
          title="Skills That"
          italic="Get You Noticed."
          sub="Training programs that help individuals build the communication, confidence, and workplace skills that turn a resume into an offer."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="What We Train" kicker="/ programs">
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
                    <div className="font-display text-xl">{p.name}</div>
                    <div className="text-sm text-muted-foreground mt-2">{p.desc}</div>
                  </motion.div>
                ))}
              </div>
            </Section>

            {courses.length > 0 && (
              <Section id="courses" title="Courses" kicker="/ enroll">
                <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                  {courses.length} courses, each with a clear syllabus, duration, and price. Pick
                  one, sign in, and enroll directly, no back-and-forth over email required.
                </p>
                <CoursesSection />
              </Section>
            )}

            <Section id="process" title="Who It's For" kicker="/ fit">
              <div className="glass-strong rounded-3xl p-10">
                <p className="text-muted-foreground">
                  Recent graduates preparing for interviews, working professionals who want to
                  communicate with more confidence, and teams that need a consistent baseline of
                  workplace skills. Programs run individually or in small groups, in person in
                  Jaipur or online.
                </p>
              </div>
            </Section>

            {courses.length > 0 && (
              <Section id="course-faq" title="Course Questions" kicker="/ faq">
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

            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
}
