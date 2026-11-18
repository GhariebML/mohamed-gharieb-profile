"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { ui } from "@/data/ui";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={t(ui.footer.backToTop)}
      title={t(ui.footer.backToTop)}
      tabIndex={visible ? 0 : -1}
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
      className={cn(
        "fixed bottom-5 end-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-navy-950 text-white shadow-lift ring-1 ring-white/10 transition-all duration-300 hover:bg-electric",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
