"use client";

import Image from "next/image";
import { Clock, GraduationCap, Target } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Section } from "@/components/ui/Section";
import { education } from "@/data/profile";
import { ui } from "@/data/ui";
import { ASSETS, HAS_DIGILIANS_LOGO, HAS_MCIT_LOGO } from "@/lib/site";

export function Education() {
  const { t } = useLocale();
  const logos = [
    HAS_DIGILIANS_LOGO && { src: ASSETS.digiliansLogo, alt: "DIGILIANS logo" },
    HAS_MCIT_LOGO && { src: ASSETS.mcitLogo, alt: "Ministry of Communications and Information Technology logo" },
  ].filter(Boolean) as { src: string; alt: string }[];

  return (
    <Section id="education" index="06" eyebrow={ui.sections.education.eyebrow} title={ui.sections.education.title}>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        {/* Academic */}
        <div data-reveal>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {t(ui.education.academic)}
          </h3>
          {education.academic.map((a) => (
            <article key={a.id} className="h-[calc(100%-2rem)] rounded-2xl border border-line bg-white p-7 shadow-card">
              <span className="inline-flex size-12 items-center justify-center rounded-xl border border-line bg-soft text-navy-950">
                <GraduationCap className="size-6" aria-hidden="true" />
              </span>
              <h4 className="mt-6 text-xl font-bold text-navy-950">{t(a.faculty)}</h4>
              <p className="mt-1 font-semibold text-electric" dir="ltr">
                {a.institution}
              </p>
            </article>
          ))}
        </div>

        {/* Professional programs */}
        <div data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {t(ui.education.programs)}
          </h3>
          {education.programs.map((p) => (
            <article
              key={p.id}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 p-7 text-white shadow-lift"
            >
              <div
                className="pointer-events-none absolute -bottom-20 -end-16 size-56 rounded-full bg-cyan/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">{t(p.credential)}</p>
                  <h4 className="mt-2 text-xl font-bold sm:text-2xl" dir="ltr">
                    {p.program}
                  </h4>
                </div>
                {logos.length > 0 && (
                  <div className="flex items-center gap-3 rounded-xl bg-white px-3 py-2">
                    {logos.map((l) => (
                      <Image key={l.src} src={l.src} alt={l.alt} width={96} height={40} className="h-9 w-auto object-contain" />
                    ))}
                  </div>
                )}
              </div>
              <dl className="relative mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <dt className="flex items-center gap-2 text-xs font-medium text-white/60">
                    <Target className="size-3.5" aria-hidden="true" />
                    {t(ui.education.specialization)}
                  </dt>
                  <dd className="mt-1.5 font-semibold">{t(p.specialization)}</dd>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <dt className="flex items-center gap-2 text-xs font-medium text-white/60">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {t(ui.education.duration)}
                  </dt>
                  <dd className="mt-1.5 font-semibold">{t(p.duration)}</dd>
                </div>
              </dl>
              <p className="relative mt-5 text-sm text-white/60">{t(p.context)}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
