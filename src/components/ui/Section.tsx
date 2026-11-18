"use client";

import type { L } from "@/data/types";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  index: string;
  eyebrow: L;
  title: L;
  lead?: L;
  tone?: "white" | "soft";
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, index, eyebrow, title, lead, tone = "soft", className, children }: SectionProps) {
  const { t } = useLocale();
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("py-20 sm:py-24 lg:py-28", tone === "white" ? "bg-white" : "bg-soft", className)}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="mb-10 max-w-2xl sm:mb-14" data-reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-electric">
            <span className="tabular-nums text-muted">{index}</span>
            <span className="h-px w-8 bg-electric/40" aria-hidden="true" />
            {t(eyebrow)}
          </p>
          <h2 id={`${id}-title`} className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            {t(title)}
          </h2>
          {lead && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{t(lead)}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
