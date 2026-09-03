import { useState } from "react";
import { courses } from "@/data/courses";
import { CourseCard } from "./CourseCard";
import { CourseDetailModal } from "./CourseDetailModal";

// Renders nothing until real, priced courses exist in src/data/courses.ts —
// same reasoning as the job board: we don't sell courses that don't exist
// yet with invented prices.
export function CoursesSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = courses.find((c) => c.id === selectedId) ?? null;

  if (courses.length === 0) return null;

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} onClick={() => setSelectedId(course.id)} />
        ))}
      </div>
      <CourseDetailModal course={selected} onClose={() => setSelectedId(null)} />
    </>
  );
}
