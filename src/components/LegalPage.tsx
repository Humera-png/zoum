import type { ReactNode } from "react";
import { PageBackdrop } from "@/components/PageBackdrop";

export const LEGAL_UPDATED = "15 November 2026";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="pt-32 px-6 pb-20 relative">
      <PageBackdrop />
      <article className="max-w-3xl mx-auto relative z-10">
        <div className="text-xs uppercase tracking-[0.2em] text-lime font-semibold">
          Last updated: {LEGAL_UPDATED}
        </div>
        <h1 className="font-display text-4xl md:text-5xl mt-4 leading-tight">{title}</h1>
        <p className="mt-5 text-muted-foreground leading-relaxed">{intro}</p>
        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-foreground/85 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground [&_h2]:mb-3 [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-lime [&_a]:underline">
          {children}
        </div>
      </article>
    </main>
  );
}

export function ContactBlock() {
  return (
    <p>
      ZOUM Consultancy, Plot No. 3, Tulsi Path, Madrampura, Civil Lines,
      Jaipur, Rajasthan 302006, India
      <br />
      Email: <a href="mailto:contact@zoumconsultancy.com">contact@zoumconsultancy.com</a>
      <br />
      Phone / WhatsApp: <a href="tel:+918360971791">+91 8360971791</a>,{" "}
      <a href="tel:+917665521538">+91 7665521538</a>
    </p>
  );
}
