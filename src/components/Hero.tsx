"use client";

import Image from "next/image";
import { ArrowRight, BrainCircuit, ChartColumnBig, Download, Layers, Mail, MapPin } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons/BrandIcons";
import { btn } from "@/components/ui/buttons";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { ASSETS, HAS_CV } from "@/lib/site";

const highlightIcons = [BrainCircuit, ChartColumnBig, Layers];

export function Hero() {
  const { t } = useLocale();

  const socials = [
    { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: profile.links.github, label: "GitHub", Icon: GitHubIcon },
    { href: profile.links.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
  ];

  return (
    <section id="top" className="hero-surface relative overflow-hidden text-white">
      <div className="hero-grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-[calc(var(--header-h)+2.25rem)] sm:px-8 sm:pb-20 lg:pb-24 lg:pt-[calc(var(--header-h)+4.5rem)]">
        <div className="hero-layout">
          {/* Portrait */}
          <div className="hero-photo">
            <div className="frame-corners relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)] ring-1 ring-white/20 lg:rounded-[1.75rem]">
                <Image
                  src={ASSETS.portrait}
                  alt={t(ui.hero.portraitAlt)}
                  fill
                  preload
                  quality={85}
                  sizes="(min-width: 1280px) 432px, (min-width: 1024px) 384px, (min-width: 640px) 144px, 104px"
                  className="object-cover object-[50%_18%]"
                />
              </div>
            </div>
          </div>

          {/* Name & title */}
          <div className="hero-name min-w-0">
            <p className="mb-4 hidden w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/85 sm:inline-flex">
              <span className="status-dot size-2 rounded-full bg-cyan" aria-hidden="true" />
              {t(profile.status)}
            </p>
            <h1 className="text-[1.75rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-sm font-semibold text-cyan sm:mt-3 sm:text-lg lg:text-xl">{t(profile.title)}</p>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-white/65 sm:text-sm">
              <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
              {t(profile.location)}
            </p>
          </div>

          {/* Intro */}
          <div className="hero-intro max-w-2xl">
            <p className="mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/85 sm:hidden">
              <span className="status-dot size-2 rounded-full bg-cyan" aria-hidden="true" />
              {t(profile.status)}
            </p>
            <p className="text-base font-medium text-white/90 sm:text-lg">{t(profile.headline)}</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70 sm:text-base">{t(profile.intro)}</p>
          </div>

          {/* CTAs */}
          <div className="hero-cta">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#projects" className={btn.primary}>
                {t(ui.hero.explore)}
                <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
              </a>
              {HAS_CV ? (
                <a href={ASSETS.cv} download className={btn.outlineDark}>
                  <Download className="size-4" aria-hidden="true" />
                  {t(ui.hero.downloadCv)}
                </a>
              ) : (
                <a href="#cv" className={btn.outlineDark}>
                  <Download className="size-4" aria-hidden="true" />
                  {t(ui.hero.requestCv)}
                </a>
              )}
              <a href="#contact" className={btn.ghostDark}>
                <Mail className="size-4" aria-hidden="true" />
                {t(ui.hero.contact)}
              </a>
            </div>

            <ul className="mt-6 flex items-center gap-2" aria-label="Social profiles">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-white/30 hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlights */}
        <ul className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm sm:grid-cols-3 lg:mt-16">
          {profile.highlights.map((h, i) => {
            const Icon = highlightIcons[i % highlightIcons.length];
            return (
              <li
                key={h.en}
                className="flex items-center gap-3.5 border-white/10 px-5 py-4 not-last:border-b sm:not-last:border-b-0 sm:not-last:border-e sm:py-5"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-electric/20 text-cyan">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-white/90">{t(h)}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
