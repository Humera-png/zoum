import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Clock, ArrowUpRight } from "lucide-react";
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
            <div className="grid lg:grid-cols-[1fr_360px] gap-6 items-start">
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

                  {course.modules.length > 0 && (
                    <>
                      <h2 className="font-display text-xl mt-8 mb-3" id="modules">
                        Course modules
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4">
                        Select a module to see what's covered.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {course.modules.map((m, i) => {
                          const isSelected = openModule === i;
                          return (
                            <button
                              key={m.title}
                              type="button"
                              onClick={() => setOpenModule(i)}
                              aria-pressed={isSelected}
                              className={`glass rounded-2xl p-4 text-left transition ${isSelected ? "ring-1 ring-lime/50 bg-lime/5" : "hover:bg-black/5"}`}
                            >
                              <span
                                className={`h-7 w-7 rounded-full font-display text-xs grid place-items-center mb-2 ${isSelected ? "bg-lime text-white" : "bg-lime/15 text-lime"}`}
                              >
                                {i + 1}
                              </span>
                              <div className="text-sm font-medium leading-snug">{m.title}</div>
                            </button>
                          );
                        })}
                      </div>
                      <AnimatePresence mode="wait">
                        {course.modules[openModule] && (
                          <motion.div
                            key={openModule}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="glass-strong rounded-2xl p-5 mt-4"
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
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-strong rounded-3xl p-6 md:p-7 lg:sticky lg:top-28"
              >
                <h2 className="font-display text-lg mb-1">Enroll in this course</h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Sign in (or create an account) to enroll and pay securely.
                </p>
                <CourseEnrollPanel course={course} />
              </motion.div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
