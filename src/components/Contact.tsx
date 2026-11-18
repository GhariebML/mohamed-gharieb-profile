"use client";

import Link from "next/link";
import { ArrowUpRight, Globe, Mail, Phone, QrCode, UserPlus } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { ASSETS } from "@/lib/site";
import { displayUrl } from "@/lib/utils";

export function Contact() {
  const { t } = useLocale();

  const channels = [
    { label: ui.contact.whatsapp, value: profile.contact.phoneDisplay, href: profile.links.whatsapp, Icon: WhatsAppIcon, external: true },
    { label: ui.contact.linkedin, value: "in/ghariebml", href: profile.links.linkedin, Icon: LinkedInIcon, external: true },
    { label: ui.contact.github, value: "GhariebML", href: profile.links.github, Icon: GitHubIcon, external: true },
    { label: ui.contact.portfolio, value: displayUrl(profile.links.portfolio), href: profile.links.portfolio, Icon: Globe, external: true },
    { label: ui.contact.call, value: profile.contact.phoneDisplay, href: profile.links.phone, Icon: Phone, external: false },
    { label: ui.contact.saveContact, value: t(ui.contact.saveContactHint), href: ASSETS.vcard, Icon: UserPlus, external: false, download: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="hero-surface relative overflow-hidden py-20 text-white sm:py-24 lg:py-28">
      <div className="hero-grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <header className="max-w-2xl" data-reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            <span className="tabular-nums text-white/50">07</span>
            <span className="h-px w-8 bg-cyan/40" aria-hidden="true" />
            {t(ui.sections.contact.eyebrow)}
          </p>
          <h2 id="contact-title" className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t(ui.sections.contact.title)}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{t(ui.sections.contact.lead)}</p>
        </header>

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          {/* Primary: email */}
          <div className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-8" data-reveal>
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-electric text-white">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <p className="mt-6 text-sm text-white/60">{t(ui.contact.email)}</p>
            <p className="mt-1 break-all text-xl font-bold sm:text-2xl" dir="ltr">
              {profile.contact.email}
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a
                href={profile.links.email}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-navy-950 transition-colors hover:bg-soft"
              >
                <Mail className="size-4" aria-hidden="true" />
                {t(ui.contact.email)}
              </a>
              <CopyEmailButton email={profile.contact.email} className="min-h-11 rounded-xl px-4" />
            </div>
          </div>

          {/* Channels */}
          <ul className="grid gap-3 sm:grid-cols-2" data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
            {channels.map(({ label, value, href, Icon, external, download }) => (
              <li key={label.en}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(download ? { download: "Mohamed_Gharieb.vcf" } : {})}
                  className="group flex h-full min-h-[4.75rem] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-cyan/40 hover:bg-white/[0.08]"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-cyan group-hover:text-navy-950">
                    <Icon size={19} className="size-[19px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">{t(label)}</span>
                    <span className="block truncate text-xs text-white/55" dir={download ? undefined : "ltr"}>
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-white/40 transition-colors group-hover:text-cyan rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center"
          data-reveal
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex size-11 items-center justify-center rounded-xl border border-white/15 text-cyan">
              <QrCode className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold">{t(ui.contact.shareTitle)}</p>
              <p className="text-sm text-white/60">{t(ui.contact.shareText)}</p>
            </div>
          </div>
          <Link
            href="/qr"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-white/20 px-4 text-sm font-semibold transition-colors hover:border-white/40 hover:bg-white/5"
          >
            {t(ui.contact.shareCta)}
            <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
