import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, Users, Brain, Presentation } from "lucide-react";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { PageBackdrop } from "@/components/PageBackdrop";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { PageHeader, Section, CTA, ServiceSchema } from "./services.business";

export const Route = createFileRoute("/services/talent-development")({
  head: () => ({
    meta: [
      { title: "Courses: BPO, AI & IT, English, Python | ZOUM Consultancy Jaipur" },
      {
        name: "description",
        content:
          "Enroll in job-ready courses from ZOUM Consultancy, Jaipur: BPO Career Masterclass, AI & Machine Learning, Python, English & Communication, Interview Mastery, and more. Sign in, enroll online.",
      },
      {
        name: "keywords",
        content:
          "BPO training course India, AI and machine learning course India, Python programming course, English communication course, interview preparation course India, leadership training course, skills training course Jaipur",
      },
      { property: "og:title", content: "Courses: BPO, AI & IT, English, Python | ZOUM Consultancy" },
      {
        property: "og:description",
        content:
          "Job-ready courses with clear modules: BPO Career Masterclass, AI & Machine Learning, English & Communication, Python, and more.",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com/services/talent-development" },
    ],
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
    a: "Payment is handled through Razorpay and supports cards, UPI, and netbanking. You pay securely after signing in, directly from the course's page.",
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

// The 4 headline tracks, in this exact order — this is the order they
// should appear as cards on this page. Each links straight to its own
// course page (3 modules, sign-in, and payment) — this is also what any
// ad campaign should link to directly (e.g. the BPO card's course), not
// this page, so someone clicking an ad lands straight on that one course.
const flagshipIds = ["bpo-career-masterclass", "ai-ml-foundations", "english-communication", "python-programming"];
const flagshipCourses = flagshipIds
  .map((id) => courses.find((c) => c.id === id))
  .filter((c): c is (typeof courses)[number] => Boolean(c));

function TalentDevelopmentPage() {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <ServiceSchema
        name="Learning and Development (L&D)"
        description="BPO, AI & IT, English communication, and workplace skills training and courses for individuals and teams."
        url="https://zoumconsultancy.com/services/talent-development"
      />
      <CourseListSchema courses={flagshipCourses} />
      <CourseFaqSchema />
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          pill="Learning and Development (L&D)"
          title="Skills That"
          italic="Get You Noticed."
          sub="Training programs and courses that help individuals build the workplace, technical, and AI skills that turn a resume into an offer."
        />

        <div className="mt-20 grid lg:grid-cols-[200px_1fr] gap-12">
          <ServiceSubNav />
          <div className="space-y-32">
            {flagshipCourses.length > 0 && (
              <Section id="tracks" title="Pick Your Track" kicker="/ start here">
                <p className="text-muted-foreground max-w-2xl -mt-4 mb-8">
                  Four tracks, each its own course with 3 modules. Pick one, see what's inside, and
                  enroll directly from that page.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {flagshipCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </Section>
            )}

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
