"use client";

import { BrainCircuit, ChartColumnBig, Server, Sparkles } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Section } from "@/components/ui/Section";
import { skills } from "@/data/profile";
import { ui } from "@/data/ui";

const icons = { brain: BrainCircuit, chart: ChartColumnBig, sparkles: Sparkles, server: Server } as const;

export function Skills() {
  const { t } = useLocale();
  return (
    <Section
      id="expertise"
      index="02"
      eyebrow={ui.sections.expertise.eyebrow}
      title={ui.sections.expertise.title}
      lead={ui.sections.expertise.lead}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <article
              key={group.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 2) * 90}ms` }}
              className="group rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-7"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-navy-950 text-cyan transition-colors group-hover:bg-electric group-hover:text-white">
                  <Icon className="size-[22px]" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-navy-950">{t(group.title)}</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    dir="ltr"
                    className="rounded-lg border border-line bg-soft/70 px-3 py-1.5 text-sm font-medium text-navy-900"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
