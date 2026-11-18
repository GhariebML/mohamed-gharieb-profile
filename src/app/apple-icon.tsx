import { ImageResponse } from "next/og";
import { MONOGRAM } from "@/lib/monogram";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A2850, #071B35)",
        }}
      >
        <svg width="116" height="72" viewBox="-2 -2 68 44" fill="none" stroke="#FFFFFF" strokeWidth={MONOGRAM.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          {MONOGRAM.paths.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
      </div>
    ),
    size,
  );
}
