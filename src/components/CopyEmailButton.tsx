"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { ui } from "@/data/ui";
import { cn } from "@/lib/utils";

export function CopyEmailButton({ email, className }: { email: string; className?: string }) {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback for older browsers / insecure contexts.
      const el = document.createElement("textarea");
      el.value = email;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(true);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-white/15 px-3 text-sm font-semibold text-white/85 transition-colors hover:border-white/35 hover:text-white",
        className,
      )}
      aria-live="polite"
    >
      {copied ? <Check className="size-4 text-cyan" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      {copied ? t(ui.contact.copied) : t(ui.contact.copy)}
    </button>
  );
}
