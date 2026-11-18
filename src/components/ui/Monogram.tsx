import { MONOGRAM } from "@/lib/monogram";
import { cn } from "@/lib/utils";

/** Square "MG" brand tile used in the navbar, footer and QR page. */
export function Monogram({ className, size = 36 }: { className?: string; size?: number }) {
  const pad = 14;
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[28%] bg-gradient-to-br from-navy-900 to-navy-950 text-white ring-1 ring-white/10",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox={`${-pad} ${-pad - 12} ${MONOGRAM.width + pad * 2} ${MONOGRAM.height + pad * 2 + 24}`}
        width="100%"
        height="100%"
        fill="none"
        stroke="currentColor"
        strokeWidth={MONOGRAM.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {MONOGRAM.paths.map((d) => (
          <path key={d} d={d} />
        ))}
        <circle cx={62} cy={36} r={3.4} fill="#16C7F5" stroke="none" />
      </svg>
    </span>
  );
}
