import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Monogram } from "@/components/ui/Monogram";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main lang="en" dir="ltr" className="hero-surface relative font-sans flex min-h-dvh items-center justify-center overflow-hidden px-5 text-white">
      <div className="hero-grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-md text-center">
        <Monogram size={56} className="mx-auto" />
        <p className="mt-8 text-sm font-semibold tracking-[0.3em] text-cyan">ERROR 404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">This page doesn&apos;t exist</h1>
        <p className="mt-4 text-white/70">
          The link may be outdated or mistyped. You can head back to Mohamed Gharieb&apos;s profile.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-xl bg-electric px-5 text-sm font-semibold text-white transition-colors hover:bg-electric-600"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to profile
        </Link>
      </div>
    </main>
  );
}
