"use client";

import { useEffect, useState } from "react";
import { Languages, Menu, X } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Monogram } from "@/components/ui/Monogram";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "about", label: ui.nav.about },
  { id: "expertise", label: ui.nav.expertise },
  { id: "projects", label: ui.nav.projects },
  { id: "experience", label: ui.nav.experience },
  { id: "certifications", label: ui.nav.certifications },
  { id: "education", label: ui.nav.education },
] as const;

export function Navbar() {
  const { t, toggleLocale, locale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = [...NAV.map((n) => n.id), "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "border-b border-line/80 bg-white/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-950"
      >
        {t(ui.nav.skip)}
      </a>
      <nav className="mx-auto flex h-(--header-h) max-w-6xl items-center justify-between gap-4 px-5 sm:px-8" aria-label="Primary">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Monogram size={36} />
          <span className="leading-tight">
            <span className={cn("block text-sm font-bold", solid ? "text-navy-950" : "text-white")}>{profile.name}</span>
            <span className={cn("hidden text-xs sm:block", solid ? "text-muted" : "text-white/60")}>
              {t(profile.title)}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  solid
                    ? active === item.id
                      ? "text-electric"
                      : "text-navy-950/70 hover:text-navy-950"
                    : active === item.id
                      ? "text-white"
                      : "text-white/70 hover:text-white",
                )}
              >
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={t(ui.nav.switchLangLabel)}
            lang={locale === "en" ? "ar" : "en"}
            className={cn(
              "inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold transition-colors",
              solid ? "text-navy-950 hover:bg-soft" : "text-white hover:bg-white/10",
            )}
          >
            <Languages className="size-4" aria-hidden="true" />
            {t(ui.nav.switchLang)}
          </button>
          <a
            href="#contact"
            className="hidden min-h-10 items-center rounded-lg bg-electric px-4 text-sm font-semibold text-white transition-colors hover:bg-electric-600 sm:inline-flex"
          >
            {t(ui.nav.contact)}
          </a>
          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-lg lg:hidden",
              solid ? "text-navy-950 hover:bg-soft" : "text-white hover:bg-white/10",
            )}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t(ui.nav.close) : t(ui.nav.menu)}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4 sm:px-8">
          {[...NAV, { id: "contact", label: ui.nav.contact }].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-navy-950 hover:bg-soft"
              >
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
