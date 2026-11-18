"use client";

import { ArrowUpRight, Award } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Section } from "@/components/ui/Section";
import { certifications } from "@/data/certifications";
import { ui } from "@/data/ui";

export function Certifications() {
  const { t } = useLocale();
  return (
    <Section
      id="certifications"
      index="05"
      eyebrow={ui.sections.certifications.eyebrow}
      title={ui.sections.certifications.title}
      tone="white"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <li
            key={c.id}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
            className="group relative flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/30 hover:shadow-lift"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-cyan text-white shadow-[0_8px_18px_-8px_rgb(8_120_232/0.8)]">
                <Award className="size-5" aria-hidden="true" />
              </span>
              {c.issued && <span className="text-xs font-semibold text-muted">{c.issued}</span>}
            </div>
            <h3 className="mt-5 font-bold leading-snug text-navy-950" dir="ltr">
              {c.name}
            </h3>
            <p className="mt-auto pt-4 text-sm text-muted">
              {t(ui.certifications.issuedBy)}{" "}
              <span className="font-semibold text-navy-900" dir="ltr">
                {c.issuer}
              </span>
            </p>
            {c.verifyUrl && (
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-electric hover:underline"
              >
                {t(ui.certifications.verify)}
                <ArrowUpRight className="size-3.5 rtl:-scale-x-100" aria-hidden="true" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
