import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, MessageCircle, Users, Brain, Presentation } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { CoursesSection } from "@/components/CoursesSection";
import { courses } from "@/data/courses";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";

const consultancyCourses = courses.filter((c) => c.page === "consultancy");

export const Route = createFileRoute("/services/business-consultancy")({
  head: () => ({
    meta: [
      { title: "Business Consultancy & Training | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "Business consultancy and workforce training under one team: growth strategy, leadership, English & communication, and job-ready courses. ZOUM Consultancy, Jaipur.",
      },
      {
        name: "keywords",
        content:
          "business consultancy Jaipur, growth strategy consulting India, workforce training courses, English communication course, leadership training course, interview preparation course India, skills training Jaipur",
      },
      { property: "og:title", content: "Business Consultancy & Training | ZOUM Consultancy" },
      {
        property: "og:description",
        content:
          "Strategy for the business, and training for the people who have to run it, coordinated by one team.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/services/business-consultancy" },
    ],
  }),
  component: BusinessConsultancyPage,
});

function CourseListSchema() {
  if (consultancyCourses.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@graph": consultancyCourses.map((c) => ({
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
        location: { "@type": "Place", name: "Jaipur, India / Online" },
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
  if (consultancyCourses.length === 0) return null;
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

const pillars = [
  {
    icon: TrendingUp,
    name: "Growth Strategy",
    desc: "Find where growth is realistically available and build a plan your team can execute.",
    to: "/services/business" as const,
  },
  {
    icon: Presentation,
    name: "Team & Career Training",
    desc: "Courses that build the workplace skills your strategy actually depends on, right below.",
    to: "#courses" as const,
  },
];

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

function BusinessConsultancyPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name="Business Consultancy & Training"
        description="Growth strategy consulting and workforce training, courses, and leadership development, run by one team."
        url="https://zoumconsultancy.com/services/business-consultancy"
      />
      <CourseListSchema />
      <CourseFaqSchema />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Business Consultancy & Training"
          title="Strategy For The Business,"
          italic="Skills For The People Running It."
          sub="Growth strategy and workforce training under one team: a plan for where the business is headed, and courses that get your people ready to execute it."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            <Section id="overview" title="What's Included" kicker="/ how it works">
              <div className="grid md:grid-cols-2 gap-5">
                {pillars.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group glass node-bloom rounded-2xl p-6 flex flex-col"
                  >
                    <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-4 group-hover:bg-lime group-hover:text-white transition">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl">{p.name}</div>
                    <div className="text-sm text-muted-foreground mt-2 flex-1">{p.desc}</div>
                    <a
                      href={p.to}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
                    >
                      Learn more
                    </a>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section id="programs" title="What We Train" kicker="/ programs">
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

            {consultancyCourses.length > 0 && (
              <Section id="courses" title="Courses" kicker="/ enroll">
                <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                  {consultancyCourses.length} courses, each with a clear syllabus and duration. Pick
                  one, sign in, and enroll directly, no back-and-forth over email required.
                </p>
                <CoursesSection page="consultancy" />
              </Section>
            )}

            <Section id="fit" title="Who It's For" kicker="/ fit">
              <div className="glass-strong rounded-3xl p-10">
                <p className="text-muted-foreground">
                  Founders who need a clear growth plan, recent graduates preparing for interviews,
                  working professionals who want to communicate with more confidence, and teams that
                  need a consistent baseline of workplace skills. We run strategy and training as one
                  engagement so what your team learns actually matches where the business is headed.
                </p>
              </div>
            </Section>

            {consultancyCourses.length > 0 && (
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
