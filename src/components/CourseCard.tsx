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
      className="group relative glass rounded-3xl overflow-hidden flex flex-col hover-glow-lime transition-all duration-500 h-full scroll-mt-32"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 glass-strong rounded-full px-3 py-1.5">
          <Icon className="h-3.5 w-3.5 text-lime" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-foreground">{label}</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col flex-1 p-6">
        <div className="font-display text-xl leading-snug">{course.title}</div>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" /> {course.duration}
        </div>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{course.summary}</p>

        <div className="mt-4 pt-4 border-t border-border flex items-center justify-end mt-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime bg-lime/10 rounded-full px-3 py-1.5 group-hover:bg-lime group-hover:text-white transition">
            Enroll <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
