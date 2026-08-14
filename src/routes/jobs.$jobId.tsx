import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { jobs } from "@/data/jobs";
import { PageBackdrop } from "@/components/PageBackdrop";
import { MagneticButton } from "@/components/MagneticButton";

export const Route = createFileRoute("/jobs/$jobId")({
  head: () => ({
    meta: [{ title: "Job Details | ZOUM Consultancy Jaipur" }],
  }),
  component: JobDetailPage,
});

function JobDetailPage() {
  const { jobId } = Route.useParams();
  const job = jobs.find((j) => j.id === jobId);

  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <div className="max-w-3xl mx-auto relative z-10">
        {!job ? (
          <div className="glass-strong rounded-3xl p-10 text-center">
            <h1 className="font-display text-3xl mb-3">This role isn't open anymore.</h1>
            <p className="text-muted-foreground">
              It may have been filled, or the link is out of date. Have a look at our current
              openings, or submit your application and we'll reach out when something fits.
            </p>
            <Link
              to="/services/career"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
            >
              View open roles <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ) : (
          <div className="glass-strong rounded-3xl p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-lime mb-3">
              / {job.category}
            </div>
            <h1 className="font-display text-3xl md:text-5xl tracking-tight">{job.title}</h1>
            <div className="mt-2 text-muted-foreground">{job.company}</div>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-lime" /> {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-lime" /> {job.experience} · {job.type}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-lime" /> Posted{" "}
                {new Date(job.postedDate).toLocaleDateString()}
              </span>
            </div>

            <h2 className="font-display text-xl mt-8 mb-3">About the role</h2>
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>

            {job.requirements.length > 0 && (
              <>
                <h2 className="font-display text-xl mt-8 mb-3">What we're looking for</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {job.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime mt-2 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <MagneticButton
              href="/services/career#apply"
              className="btn-lime mt-8 font-semibold px-7 py-4 rounded-full inline-flex items-center justify-center text-white"
            >
              Apply for this role <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        )}
      </div>
    </main>
  );
}
