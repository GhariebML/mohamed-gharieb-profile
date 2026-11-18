import type { NextConfig } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Optional assets are detected at build time so the UI can switch itself on
 * as soon as the real files are added to /public — no code changes needed.
 */
const publicFile = (path: string) => existsSync(join(process.cwd(), "public", path));

/**
 * Canonical site URL used for metadata, sitemap and the QR code.
 * Priority: NEXT_PUBLIC_SITE_URL → Vercel production domain → localhost.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const url = explicit || (vercel ? `https://${vercel}` : "http://localhost:3000");
  return url.replace(/\/+$/, "");
}

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_RESOLVED_SITE_URL: resolveSiteUrl(),
    NEXT_PUBLIC_HAS_CV: publicFile("files/Mohamed_Gharieb_CV.pdf") ? "1" : "0",
    NEXT_PUBLIC_HAS_DIGILIANS_LOGO: publicFile("images/digilians-logo.png") ? "1" : "0",
    NEXT_PUBLIC_HAS_MCIT_LOGO: publicFile("images/mcit-logo.png") ? "1" : "0",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
