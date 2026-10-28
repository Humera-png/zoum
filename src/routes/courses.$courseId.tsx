import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Clock, ArrowUpRight, Check, Award, ShieldCheck } from "lucide-react";
import { courses } from "@/data/courses";
import { CATEGORY_META } from "@/lib/courseCategory";
import { PageBackdrop } from "@/components/PageBackdrop";
import { CourseEnrollPanel } from "@/components/CourseEnrollPanel";

export const Route = createFileRoute("/courses/$courseId")({
  head: ({ params }) => {
    const course = courses.find((c) => c.id === params.courseId);
    return {
      meta: [
        {
          title: course
            ? `${course.title} | ZOUM Consultancy Courses`
            : "Course | ZOUM Consultancy",
        },
        course
          ? {
              name: "description",
              content: `${course.summary} ${course.duration}. Enroll online.`,
            }
          : { name: "robots", content: "noindex" },
      ],
      links: course
        ? [{ rel: "canonical", href: `https://zoumconsultancy.com/courses/${course.id}` }]
        : [],
    };
  },
  component: CourseDetailPage,
});

function CourseSchema({ course }: { course: (typeof courses)[number] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    url: `https://zoumconsultancy.com/courses/${course.id}`,
    provider: {
      "@type": "Organization",
      name: "ZOUM Consultancy",
      sameAs: "https://zoumconsultancy.com",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Blended",
      courseWorkload: course.duration,
      location: { "@type": "Place", name: "Jaipur, India / Online" },
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

function CourseDetailPage() {
  const { courseId } = Route.useParams();
  const course = courses.find((c) => c.id === courseId);
  const [openModule, setOpenModule] = useState(0);

  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-5xl mx-auto relative z-10">
        {!course ? (
          <div className="glass-strong rounded-3xl p-10 text-center">
            <h1 className="font-display text-3xl mb-3">This course isn't available anymore.</h1>
            <p className="text-muted-foreground">
              It may have been retired, or the link is out of date. Have a look at our current
              courses instead.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
            >
              Back to homepage <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ) : (
          <>
            <CourseSchema course={course} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-3xl overflow-hidden"
            >
              <div className="relative aspect-[21/9]">
                <img
                  src={course.image}
                  alt={course.title}
                  style={{ objectPosition: course.imagePosition || "center" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <div className="text-xs uppercase tracking-[0.3em] text-lime mb-3">
                  / {CATEGORY_META[course.category].label}
                </div>
                <h1 className="font-display text-xl md:text-2xl tracking-tight">{course.title}</h1>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-lime" /> {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    {course.modules.length} modules
                  </span>
                </div>

                <h2 className="font-display text-xl mt-8 mb-3">About this course</h2>
                <p className="text-muted-foreground leading-relaxed">{course.summary}</p>

                <div className="mt-8 glass rounded-2xl p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-lime/15 text-lime grid place-items-center shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-base">Taught by people who've done the work</div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      Our instructors are working professionals with real, hands-on industry
                      experience, not people who only teach about it. That's the same standard
                      ZOUM holds itself to across every service we run.
                    </p>
                  </div>
                </div>

                {course.modules.length > 0 && (
                  <>
                    <h2 className="font-display text-xl mt-8 mb-3" id="modules">
                      Course modules
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select a module to see what's covered and enroll.
                    </p>
                    <div
                      className={`grid grid-cols-1 gap-5 ${course.modules.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
                    >
                      {course.modules.map((m, i) => {
                        const isSelected = openModule === i;
                        return (
                          <button
                            key={m.title}
                            type="button"
                            onClick={() => setOpenModule(i)}
                            aria-pressed={isSelected}
                            className={`group relative glass rounded-2xl overflow-hidden text-left transition ${isSelected ? "ring-2 ring-lime" : "hover:-translate-y-0.5"}`}
                          >
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <img
                                src={course.image}
                                alt=""
                                loading="lazy"
                                style={{ objectPosition: course.imagePosition || "center" }}
                                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                              <div
                                className={`absolute top-3 left-3 h-9 w-9 rounded-full font-display text-sm grid place-items-center ${isSelected ? "bg-lime text-white" : "glass-strong text-foreground"}`}
                              >
                                {i + 1}
                              </div>
                            </div>
                            <div className="p-4">
                              <div className="text-base font-medium leading-snug">{m.title}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="glass-strong rounded-2xl p-6 md:p-7 mt-5">
                      <AnimatePresence mode="wait">
                        {course.modules[openModule] && (
                          <motion.div
                            key={openModule}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="text-xs uppercase tracking-wider text-lime mb-1.5">
                              Module {openModule + 1}
                            </div>
                            <div className="font-display text-lg mb-2">
                              {course.modules[openModule].title}
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {course.modules[openModule].description}
                            </p>

                            {course.pros && course.pros.length > 0 && (
                              <>
                                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-5 mb-2">
                                  Why this course
                                </div>
                                <ul className="space-y-2">
                                  {course.pros.map((p) => (
                                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <Check className="h-3.5 w-3.5 text-lime shrink-0 mt-0.5" />
                                      {p}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-6 pt-6 border-t border-border">
                        <h3 className="font-display text-lg mb-1">Enroll in this course</h3>
                        <p className="text-sm text-muted-foreground mb-5">
                          Sign in (or create an account) to enroll and pay securely.
                        </p>
                        <div className="max-w-md">
                          <CourseEnrollPanel course={course} />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {course.terms && course.terms.length > 0 && (
                  <>
                    <h2 className="font-display text-lg mt-8 mb-3 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-lime" /> Terms & Conditions
                    </h2>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {course.terms.map((t) => (
                        <li key={t} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-lime mt-2 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </main>
  );
}
