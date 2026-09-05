import { courses, type CoursePage } from "@/data/courses";
import { CourseCard } from "./CourseCard";

// Renders nothing until real, priced courses exist in src/data/courses.ts —
// same reasoning as the job board: we don't sell courses that don't exist
// yet with invented prices. `page` filters to just the courses grouped
// under a given merged service page (bpo / ai-it / consultancy).
export function CoursesSection({ page }: { page?: CoursePage }) {
  const shown = page ? courses.filter((c) => c.page === page) : courses;
  if (shown.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {shown.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
