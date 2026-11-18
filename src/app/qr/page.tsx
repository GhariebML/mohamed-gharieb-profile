import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, TriangleAlert } from "lucide-react";
import { QRCode, QRDownloads } from "@/components/QRCode";
import { Monogram } from "@/components/ui/Monogram";
import { profile } from "@/data/profile";
import { IS_PRODUCTION_URL, SITE_URL } from "@/lib/site";
import { displayUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Scan to Connect",
  description: `Print-ready QR code for ${profile.name}'s digital profile.`,
  alternates: { canonical: "/qr" },
  robots: { index: false, follow: true },
};

/** Print-ready QR page. The QR always encodes the canonical landing page URL. */
export default function QrPage() {
  // Same string the print script encodes (no trailing slash) — keeps the code small.
  const target = SITE_URL;
  return (
    <main
      lang="en"
      dir="ltr"
      className="flex min-h-dvh flex-col items-center justify-center bg-soft px-5 py-10 font-sans print:bg-white print:py-0"
    >
      <div className="no-print mb-6 w-full max-w-md">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-electric">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to profile
        </Link>
      </div>

      {!IS_PRODUCTION_URL && (
        <div
          role="alert"
          className="no-print mb-6 flex w-full max-w-md items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900"
        >
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>
            This QR code points to <strong>{SITE_URL}</strong>, which is not a public production URL. Set{" "}
            <code className="font-mono">NEXT_PUBLIC_SITE_URL</code> to the final domain and rebuild before printing.
          </p>
        </div>
      )}

      <article className="w-full max-w-md overflow-hidden rounded-[2rem] border border-line bg-white shadow-lift print:max-w-none print:border-0 print:shadow-none">
        <div className="flex items-center gap-4 bg-navy-950 px-7 py-6 text-white print:bg-navy-950">
          <Monogram size={48} className="ring-white/20" />
          <div>
            <h1 className="text-xl font-bold">{profile.name}</h1>
            <p className="text-sm text-white/70">{profile.title.en}</p>
          </div>
        </div>
        <div className="flex flex-col items-center px-7 pb-8 pt-8">
          <QRCode value={target} size={300} className="rounded-xl" />
          <p className="mt-6 text-sm font-extrabold tracking-[0.32em] text-navy-950">SCAN TO CONNECT</p>
          <p className="mt-1.5 text-sm text-muted">{displayUrl(SITE_URL)}</p>
        </div>
        <div className="h-1.5 bg-gradient-to-r from-electric to-cyan" aria-hidden="true" />
      </article>

      <div className="mt-8">
        <QRDownloads value={target} />
      </div>
      <p className="no-print mt-4 max-w-md text-center text-xs text-muted">
        High-contrast navy on white, error-correction level H. For print, keep the code at least 2 cm wide with a white
        margin around it.
      </p>
    </main>
  );
}
