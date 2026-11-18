/**
 * Generates print-ready QR files (SVG + 2048px PNG) for the business card
 * and verifies that they decode back to the exact URL.
 *
 * Usage:
 *   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app npm run qr
 *   npm run qr -- https://your-domain.vercel.app
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import jsQR from "jsqr";
import { buildQrSvg } from "../src/lib/qr.ts";
import { MONOGRAM } from "../src/lib/monogram.ts";

const url = (process.argv[2] || process.env.NEXT_PUBLIC_SITE_URL || "").trim().replace(/\/+$/, "");
if (!/^https?:\/\//.test(url)) {
  console.error("Provide the production URL: npm run qr -- https://your-domain.vercel.app");
  process.exit(1);
}
if (!url.startsWith("https://") || /localhost|127\.0\.0\.1|YOUR-FINAL-DOMAIN/i.test(url)) {
  console.warn(`⚠ "${url}" is not a public HTTPS production URL. Do not print this QR code.`);
}

const outDir = join(process.cwd(), "deliverables", "qr");
mkdirSync(outDir, { recursive: true });

const variants = [
  { name: "mohamed-gharieb-qr", mark: MONOGRAM },
  { name: "mohamed-gharieb-qr-plain", mark: null },
] as const;

let failed = false;
for (const v of variants) {
  const { svg, version, modules, markDrawn } = buildQrSvg(url, { mark: v.mark });
  const svgPath = join(outDir, `${v.name}.svg`);
  const pngPath = join(outDir, `${v.name}.png`);
  writeFileSync(svgPath, svg, "utf8");
  await sharp(Buffer.from(svg), { density: 600 }).resize(2048, 2048, { kernel: "nearest" }).png().toFile(pngPath);

  // Verify: decode at print resolution and at a small phone-camera-like size.
  for (const size of [2048, 600, 240]) {
    const { data, info } = await sharp(pngPath)
      .resize(size, size)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const result = jsQR(new Uint8ClampedArray(data), info.width, info.height);
    const ok = result?.data === url;
    if (!ok) failed = true;
    console.log(`${ok ? "✓" : "✗"} ${v.name} @${size}px → ${result?.data ?? "no decode"}`);
  }
  console.log(`  version ${version}, ${modules}×${modules} modules, centre mark: ${markDrawn ? "yes" : "no"}`);
  console.log(`  wrote ${svgPath}\n  wrote ${pngPath}`);
}

if (failed) {
  console.error("QR verification failed.");
  process.exit(1);
}
console.log(`\nAll QR files decode to ${url}`);
