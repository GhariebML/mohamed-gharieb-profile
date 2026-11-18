"use client";

import { useMemo, useState } from "react";
import { Download, Printer } from "lucide-react";
import { MONOGRAM } from "@/lib/monogram";
import { buildQrSvg } from "@/lib/qr";
import { cn } from "@/lib/utils";

interface QRCodeProps {
  value: string;
  /** Rendered size in CSS pixels. */
  size?: number;
  withMark?: boolean;
  className?: string;
}

/** Real, scannable QR code (error correction H) rendered as inline SVG. */
export function QRCode({ value, size = 280, withMark = true, className }: QRCodeProps) {
  const { svg } = useMemo(() => buildQrSvg(value, { mark: withMark ? MONOGRAM : null }), [value, withMark]);
  return (
    <div
      className={cn("[&>svg]:block [&>svg]:h-full [&>svg]:w-full", className)}
      style={{ width: size, height: size, maxWidth: "100%", aspectRatio: "1 / 1" }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

function triggerDownload(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** Download (SVG / 2048px PNG) and print controls for the QR page. */
export function QRDownloads({ value }: { value: string }) {
  const [busy, setBusy] = useState(false);
  const { svg } = useMemo(() => buildQrSvg(value, { mark: MONOGRAM }), [value]);
  const base = "mohamed-gharieb-qr";

  function downloadSvg() {
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
    triggerDownload(url, `${base}.svg`);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function downloadPng() {
    setBusy(true);
    try {
      const px = 2048;
      const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
      const img = new Image();
      img.decoding = "async";
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = url;
      });
      const canvas = document.createElement("canvas");
      canvas.width = px;
      canvas.height = px;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas not supported");
      ctx.imageSmoothingEnabled = false;
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, px, px);
      ctx.drawImage(img, 0, 0, px, px);
      URL.revokeObjectURL(url);
      const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/png"));
      if (!blob) throw new Error("PNG export failed");
      const pngUrl = URL.createObjectURL(blob);
      triggerDownload(pngUrl, `${base}-2048.png`);
      setTimeout(() => URL.revokeObjectURL(pngUrl), 1000);
    } finally {
      setBusy(false);
    }
  }

  const btn =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition-colors disabled:opacity-60";

  return (
    <div className="no-print flex flex-wrap justify-center gap-2.5">
      <button type="button" onClick={downloadSvg} className={`${btn} bg-navy-950 text-white hover:bg-navy-900`}>
        <Download className="size-4" aria-hidden="true" /> SVG
      </button>
      <button
        type="button"
        onClick={downloadPng}
        disabled={busy}
        aria-busy={busy}
        className={`${btn} bg-electric text-white hover:bg-electric-600`}
      >
        <Download className="size-4" aria-hidden="true" /> {busy ? "Preparing…" : "PNG (2048 px)"}
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className={`${btn} border border-line bg-white text-navy-950 hover:border-navy-950/30`}
      >
        <Printer className="size-4" aria-hidden="true" /> Print
      </button>
    </div>
  );
}
