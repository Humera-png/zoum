import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, MapPin, Calendar, Users, Wallet, ArrowUpRight } from "lucide-react";
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
      <div className="max-w-5xl mx-auto relative z-10">
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
          <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
            <div className="glass-strong rounded-3xl p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.3em] text-lime mb-3">
                / {job.category}
              </div>
              <h1 className="font-display text-3xl md:text-5xl tracking-tight">{job.title}</h1>
              <div className="mt-2 text-muted-foreground">{job.company}</div>

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
            </div>

            <div className="glass-strong rounded-3xl p-6 md:p-7 lg:sticky lg:top-28">
              <h2 className="font-display text-lg mb-5">Job overview</h2>
              <dl className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Calendar className="h-4 w-4 text-lime mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Posted
                    </dt>
                    <dd className="mt-0.5">{new Date(job.postedDate).toLocaleDateString()}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-lime mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Location
                    </dt>
                    <dd className="mt-0.5">{job.location}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="h-4 w-4 text-lime mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Job type
                    </dt>
                    <dd className="mt-0.5">
                      {job.type} · {job.experience}
                    </dd>
                  </div>
                </div>
                {job.vacancy != null && (
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 text-lime mt-0.5 shrink-0" />
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        Vacancy
                      </dt>
                      <dd className="mt-0.5">{job.vacancy}</dd>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <Wallet className="h-4 w-4 text-lime mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Salary
                    </dt>
                    <dd className="mt-0.5">{job.salary || "Not disclosed"}</dd>
                  </div>
                </div>
              </dl>

              <MagneticButton
                href="/services/career#apply"
                className="btn-lime mt-6 font-semibold px-6 py-3.5 rounded-full inline-flex items-center justify-center text-white w-full"
              >
                Apply now <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
