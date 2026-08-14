import { useMemo, useState } from "react";
import { jobs, isFresherRole } from "@/data/jobs";
import { JobCard } from "./JobCard";

// Shows an honest "no roles right now" message when there are no real listings
// yet, instead of hiding the whole section (which looked like a missing/broken
// feature rather than an empty one). The moment real jobs are added to
// src/data/jobs.ts, this section shows them with working category/city
// filters and Fresher/Recent grouping, no other changes needed.
export function JobListings() {
  const [category, setCategory] = useState("all");
  const [city, setCity] = useState("all");

  const categories = useMemo(() => Array.from(new Set(jobs.map((j) => j.category))), []);
  const cities = useMemo(() => Array.from(new Set(jobs.map((j) => j.location))), []);

  const filtered = jobs.filter(
    (j) => (category === "all" || j.category === category) && (city === "all" || j.location === city),
  );

  if (jobs.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">
        No open roles right now. Submit your details below and we'll reach out when something fits.
      </p>
    );
  }

  const fresherJobs = filtered.filter(isFresherRole);
  const recentJobs = [...filtered].sort(
    (a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime(),
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-8">
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
        <div className="space-y-14">
          {fresherJobs.length > 0 && (
            <div>
              <h3 className="font-display text-xl mb-5">Fresher Jobs</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {fresherJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="font-display text-xl mb-5">Recent Jobs</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
