import { Clock, ArrowUpRight } from "lucide-react";
import type { Course } from "@/data/courses";

export function CourseCard({ course, onClick }: { course: Course; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left glass rounded-2xl p-6 flex flex-col hover-glow-lime transition h-full"
    >
      <div className="font-display text-xl text-foreground">{course.title}</div>
      <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="h-3.5 w-3.5" /> {course.duration}
      </div>
      <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{course.summary}</p>
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="font-display text-lg">₹{course.priceInr.toLocaleString("en-IN")}</span>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-lime">
          View details <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </button>
  );
}
