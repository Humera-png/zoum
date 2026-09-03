import { courses } from "@/data/courses";
import { CourseCard } from "./CourseCard";

// Renders nothing until real, priced courses exist in src/data/courses.ts —
// same reasoning as the job board: we don't sell courses that don't exist
// yet with invented prices.
export function CoursesSection() {
  if (courses.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
