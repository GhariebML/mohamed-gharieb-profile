"use client";

import { ArrowUpRight, CalendarDays } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Section } from "@/components/ui/Section";
import { experience } from "@/data/experience";
import { ui } from "@/data/ui";

export function Experience() {
  const { t } = useLocale();
  return (
    <Section id="experience" index="04" eyebrow={ui.sections.experience.eyebrow} title={ui.sections.experience.title}>
      <ol className="relative max-w-3xl">
        <span
          className="absolute start-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-electric via-line to-line sm:start-[9px]"
          aria-hidden="true"
        />
        {experience.map((item, i) => (
          <li
            key={item.id}
            className="relative ps-9 pb-6 last:pb-0 sm:ps-12"
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
          >
            <span
              className="absolute start-0 top-6 inline-flex size-[15px] items-center justify-center rounded-full border-2 border-electric bg-white sm:size-[19px]"
              aria-hidden="true"
            >
              <span className="size-1.5 rounded-full bg-electric sm:size-2" />
            </span>

            <article className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div className="min-w-0">
                  {item.role ? (
                    <>
                      <h3 className="text-lg font-bold text-navy-950">{t(item.role)}</h3>
                      <p className="mt-0.5 font-semibold text-electric" dir="ltr">
                        {item.organization}
                      </p>
                    </>
                  ) : (
                    <h3 className="text-lg font-bold text-navy-950" dir="ltr">
                      {item.organization}
                    </h3>
                  )}
                </div>
                {item.period && (
                  <p className="inline-flex items-center gap-1.5 rounded-full bg-soft px-3 py-1 text-xs font-semibold text-navy-900">
                    <CalendarDays className="size-3.5" aria-hidden="true" />
                    {t(item.period)}
                  </p>
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-muted">{t(item.type)}</p>
              {item.description && <p className="mt-3 text-sm leading-relaxed text-navy-900/80">{t(item.description)}</p>}
              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 ps-5 text-sm text-navy-900/80 marker:text-electric">
                  {item.highlights.map((h) => (
                    <li key={h.en}>{t(h)}</li>
                  ))}
                </ul>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-electric hover:underline"
                >
                  {item.link.replace(/^https?:\/\//, "")}
                  <ArrowUpRight className="size-3.5 rtl:-scale-x-100" aria-hidden="true" />
                </a>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
