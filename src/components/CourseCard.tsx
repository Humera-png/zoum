import { Link } from "@tanstack/react-router";
import { Clock, ArrowUpRight } from "lucide-react";
import type { Course } from "@/data/courses";
import { CATEGORY_META } from "@/lib/courseCategory";

export function CourseCard({ course }: { course: Course }) {
  const { label, icon: Icon } = CATEGORY_META[course.category];

  return (
    <Link
      id={course.id}
      to="/courses/$courseId"
      params={{ courseId: course.id }}
      className="group relative glass rounded-3xl p-6 flex flex-col hover-glow-lime transition-all duration-500 overflow-hidden h-full scroll-mt-32"
    >
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-lime/0 group-hover:bg-lime/25 blur-3xl transition-all duration-700" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <div className="h-11 w-11 rounded-2xl glass-strong grid place-items-center group-hover:bg-lime group-hover:text-white transition">
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </span>
        </div>

        <div className="mt-4 font-display text-xl leading-snug">{course.title}</div>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" /> {course.duration}
        </div>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{course.summary}</p>

        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between mt-auto">
          <span className="font-display text-2xl tracking-tight">
            ₹{course.priceInr.toLocaleString("en-IN")}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime bg-lime/10 rounded-full px-3 py-1.5 group-hover:bg-lime group-hover:text-white transition">
            Enroll <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
