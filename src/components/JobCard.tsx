import { Link } from "@tanstack/react-router";
import { Briefcase, MapPin } from "lucide-react";
import { initialsOf, type JobListing } from "@/data/jobs";

export function JobCard({ job }: { job: JobListing }) {
  return (
    <Link
      to="/jobs/$jobId"
      params={{ jobId: job.id }}
      className="glass rounded-2xl p-5 flex flex-col hover-glow-lime transition"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="font-display text-lg text-foreground truncate">{job.title}</div>
          <div className="text-sm text-muted-foreground mt-0.5 truncate">{job.company}</div>
        </div>
        <div
          className="h-10 w-10 shrink-0 rounded-full grid place-items-center text-white text-xs font-bold"
          style={{ background: "linear-gradient(135deg, var(--brand), var(--brand-deep))" }}
        >
          {initialsOf(job.company)}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Briefcase className="h-3.5 w-3.5" /> {job.experience}
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> {job.location}
        </span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{job.description}</p>
    </Link>
  );
}
