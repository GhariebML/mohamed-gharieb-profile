"use client";

import { Globe, Mail } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons/BrandIcons";
import { Monogram } from "@/components/ui/Monogram";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";

export function Footer() {
  const { t } = useLocale();
  const links = [
    { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedInIcon, external: true },
    { label: "GitHub", href: profile.links.github, Icon: GitHubIcon, external: true },
    { label: "Portfolio", href: profile.links.portfolio, Icon: Globe, external: true },
    { label: "Email", href: profile.links.email, Icon: Mail, external: false },
    { label: "WhatsApp", href: profile.links.whatsapp, Icon: WhatsAppIcon, external: true },
  ];

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Monogram size={44} />
            <div>
              <p className="font-bold">{profile.name}</p>
              <p className="text-sm text-white/60">{t(profile.title)}</p>
              <p className="text-sm text-white/45">{t(profile.location)}</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Quick links">
            {links.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 text-white/70 transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  <Icon size={18} className="size-[18px]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>{t(ui.footer.rights)}</p>
          <p className="max-w-xl md:text-end">{t(ui.footer.disclaimer)}</p>
        </div>
      </div>
    </footer>
  );
}
