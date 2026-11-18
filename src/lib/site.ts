/** Canonical production URL (resolved at build time in next.config.ts). */
export const SITE_URL = (process.env.NEXT_PUBLIC_RESOLVED_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

/** True when the QR/canonical URL is a real public HTTPS domain. */
export const IS_PRODUCTION_URL =
  SITE_URL.startsWith("https://") && !/localhost|127\.0\.0\.1|YOUR-FINAL-DOMAIN/i.test(SITE_URL);

export const ASSETS = {
  portrait: "/images/mohamed-gharieb.jpg",
  cv: "/files/Mohamed_Gharieb_CV.pdf",
  digiliansLogo: "/images/digilians-logo.png",
  mcitLogo: "/images/mcit-logo.png",
  vcard: "/contact.vcf",
} as const;

export const HAS_CV = process.env.NEXT_PUBLIC_HAS_CV === "1";
export const HAS_DIGILIANS_LOGO = process.env.NEXT_PUBLIC_HAS_DIGILIANS_LOGO === "1";
export const HAS_MCIT_LOGO = process.env.NEXT_PUBLIC_HAS_MCIT_LOGO === "1";
