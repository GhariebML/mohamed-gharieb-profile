"use client";

import { Download, FileText, Mail } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { btn } from "@/components/ui/buttons";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { ASSETS, HAS_CV } from "@/lib/site";

/**
 * Activates automatically when /public/files/Mohamed_Gharieb_CV.pdf exists at build time.
 * Until then it offers an honest "request by email" fallback.
 */
export function CvDownload() {
  const { t } = useLocale();
  const mailto = `${profile.links.email}?subject=${encodeURIComponent(t(ui.cv.requestSubject))}`;

  return (
    <section id="cv" aria-labelledby="cv-title" className="bg-soft pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          data-reveal
          className="relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-card sm:p-10 md:flex-row md:items-center md:justify-between"
        >
          <div
            className="pointer-events-none absolute inset-y-0 start-0 w-1.5 bg-gradient-to-b from-electric to-cyan"
            aria-hidden="true"
          />
          <div className="flex items-start gap-5">
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-cyan">
              <FileText className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">{t(ui.cv.eyebrow)}</p>
              <h2 id="cv-title" className="mt-1.5 text-2xl font-bold tracking-tight text-navy-950">
                {t(ui.cv.title)}
              </h2>
              <p className="mt-2 max-w-xl text-muted">{HAS_CV ? t(ui.cv.available) : t(ui.cv.unavailable)}</p>
            </div>
          </div>
          {HAS_CV ? (
            <a href={ASSETS.cv} download="Mohamed_Gharieb_CV.pdf" className={`${btn.primary} shrink-0`}>
              <Download className="size-4" aria-hidden="true" />
              {t(ui.cv.download)}
            </a>
          ) : (
            <a href={mailto} className={`${btn.primary} shrink-0`}>
              <Mail className="size-4" aria-hidden="true" />
              {t(ui.cv.request)}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
