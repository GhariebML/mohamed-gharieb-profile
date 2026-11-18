/**
 * "MG" personal monogram, drawn as strokes in a 64×40 box.
 * Shared by the favicon, navbar logo, OG image and QR centre mark.
 * Kept dependency-free so Node scripts can import it directly.
 */
export const MONOGRAM = {
  width: 64,
  height: 40,
  strokeWidth: 5.5,
  paths: [
    // M
    "M6 32 V8 L18 22 L30 8 V32",
    // G
    "M57.19 12.29 A12 12 0 1 0 59.82 22.08 H49",
  ],
} as const;
