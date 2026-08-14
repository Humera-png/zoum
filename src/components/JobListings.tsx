import { useMemo, useState } from "react";
import { jobs } from "@/data/jobs";
import { JobCard } from "./JobCard";

// Renders nothing when there are no real listings yet - an empty grid with
// filters that filter nothing isn't useful, it's just clutter. The moment
// real jobs are added to src/data/jobs.ts, this section appears automatically
// with working category/city filters, no other changes needed.
export function JobListings() {
  const [category, setCategory] = useState("all");
  const [city, setCity] = useState("all");

  const categories = useMemo(() => Array.from(new Set(jobs.map((j) => j.category))), []);
  const cities = useMemo(() => Array.from(new Set(jobs.map((j) => j.location))), []);

  const filtered = jobs.filter(
    (j) => (category === "all" || j.category === category) && (city === "all" || j.location === city),
  );

  if (jobs.length === 0) return null;

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white/40 border border-border rounded-full px-4 py-2 text-sm input-glow"
        >
          <option value="all">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-white/40 border border-border rounded-full px-4 py-2 text-sm input-glow"
        >
          <option value="all">All locations</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-sm">No roles match those filters right now.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
