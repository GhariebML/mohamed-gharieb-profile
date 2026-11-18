"use client";

import { ChartLine, Rocket, Search, Server } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Section } from "@/components/ui/Section";
import { about } from "@/data/profile";
import { ui } from "@/data/ui";

const stepIcons = { eda: Search, modeling: ChartLine, deployment: Server, production: Rocket } as const;

export function About() {
  const { t } = useLocale();
  return (
    <Section id="about" index="01" eyebrow={ui.sections.about.eyebrow} title={ui.sections.about.title} tone="white">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
        <div className="space-y-5" data-reveal>
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={i === 0 ? "text-lg leading-relaxed text-navy-950 sm:text-xl" : "leading-relaxed text-muted"}
            >
              {t(p)}
            </p>
          ))}

          <div className="pt-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{t(ui.about.focus)}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.focus.map((f) => (
                <li
                  key={f.en}
                  className="rounded-full border border-line bg-soft px-3.5 py-1.5 text-sm font-medium text-navy-900"
                >
                  {t(f)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside
          className="relative self-start overflow-hidden rounded-3xl bg-navy-950 p-7 text-white shadow-lift sm:p-9"
          data-reveal
          style={{ ["--reveal-delay" as string]: "120ms" }}
        >
          <div
            className="pointer-events-none absolute -end-24 -top-24 size-64 rounded-full bg-electric/25 blur-3xl"
            aria-hidden="true"
          />
          <h3 className="relative text-xs font-semibold uppercase tracking-[0.16em] text-cyan">{t(ui.about.approach)}</h3>
          <p className="relative mt-3 text-xl font-bold tracking-tight" dir="ltr">
            EDA → Modeling → Deployment → Production
          </p>
          <ol className="relative mt-8 space-y-0">
            {about.approach.map((step, i) => {
              const Icon = stepIcons[step.key as keyof typeof stepIcons];
              const last = i === about.approach.length - 1;
              return (
                <li key={step.key} className="relative flex gap-4 pb-7 last:pb-0">
                  {!last && (
                    <span
                      className="absolute start-[19px] top-11 h-[calc(100%-2.75rem)] w-px bg-gradient-to-b from-cyan/60 to-white/10"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cyan">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <div className="pt-1">
                    <p className="flex items-baseline gap-2 font-semibold">
                      <span className="text-xs tabular-nums text-white/40">0{i + 1}</span>
                      {t(step.label)}
                    </p>
                    <p className="mt-1 text-sm text-white/65">{t(step.detail)}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </aside>
      </div>
    </Section>
  );
}
