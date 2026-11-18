import QRCode from "qrcode";

export interface QrMark {
  width: number;
  height: number;
  strokeWidth: number;
  paths: readonly string[];
}

export interface QrOptions {
  /** Module colour. Navy on white keeps contrast above 15:1. */
  dark?: string;
  light?: string;
  /** Quiet zone in modules (spec minimum is 4). */
  margin?: number;
  /** Optional centre mark; only drawn when it is safe for decoding. */
  mark?: QrMark | null;
  /** Mark background colour. */
  markColor?: string;
}

export interface QrResult {
  svg: string;
  version: number;
  modules: number;
  markDrawn: boolean;
}

/**
 * Builds a real, standards-compliant QR code as an SVG string.
 * Uses error-correction level H (≈30% recovery) so a small centre mark
 * (< 5% of the symbol area) never prevents scanning.
 * Pure + synchronous: works on the server, in the browser and in Node scripts.
 */
export function buildQrSvg(text: string, options: QrOptions = {}): QrResult {
  const { dark = "#071B35", light = "#FFFFFF", margin = 4, mark = null, markColor = dark } = options;

  const qr = QRCode.create(text, { errorCorrectionLevel: "H" });
  const n = qr.modules.size;
  const data = qr.modules.data;

  // Centre mark is skipped from version 7 upward, where an alignment
  // pattern sits in the middle of the symbol.
  const markDrawn = Boolean(mark) && qr.version < 7;
  let hole = 0;
  if (markDrawn) {
    hole = Math.round(n * 0.22);
    if ((n - hole) % 2 !== 0) hole += 1;
  }
  const holeStart = (n - hole) / 2;
  const inHole = (r: number, c: number) =>
    markDrawn && r >= holeStart && r < holeStart + hole && c >= holeStart && c < holeStart + hole;

  // Merge horizontal runs of dark modules into single path segments.
  let d = "";
  for (let r = 0; r < n; r++) {
    let c = 0;
    while (c < n) {
      if (data[r * n + c] && !inHole(r, c)) {
        const start = c;
        while (c < n && data[r * n + c] && !inHole(r, c)) c++;
        d += `M${start + margin} ${r + margin}h${c - start}v1h-${c - start}z`;
      } else {
        c++;
      }
    }
  }

  const size = n + margin * 2;
  let markSvg = "";
  if (markDrawn && mark) {
    const inset = 0.7;
    const x = holeStart + margin + inset;
    const s = hole - inset * 2;
    const scale = (s * 0.68) / mark.width;
    const mx = x + (s - mark.width * scale) / 2;
    const my = x + (s - mark.height * scale) / 2;
    markSvg =
      `<rect x="${x}" y="${x}" width="${s}" height="${s}" rx="${s * 0.22}" fill="${markColor}"/>` +
      `<g transform="translate(${mx} ${my}) scale(${scale})" fill="none" stroke="${light}" stroke-width="${mark.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">` +
      mark.paths.map((p) => `<path d="${p}"/>`).join("") +
      `</g>`;
  }

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges" role="img" aria-label="QR code linking to ${escapeXml(text)}">` +
    `<rect width="${size}" height="${size}" fill="${light}"/>` +
    `<path d="${d}" fill="${dark}"/>` +
    (markSvg ? `<g shape-rendering="geometricPrecision">${markSvg}</g>` : "") +
    `</svg>`;

  return { svg, version: qr.version, modules: n, markDrawn };
}

function escapeXml(s: string) {
  return s.replace(/[<>&"']/g, (ch) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[ch]!);
}
