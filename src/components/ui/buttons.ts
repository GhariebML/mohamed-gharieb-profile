/** Shared button styles — keep CTAs visually consistent across sections. */
const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50 min-h-11";

export const btn = {
  primary: `${base} bg-electric text-white shadow-[0_8px_20px_-8px_rgb(8_120_232/0.7)] hover:bg-electric-600 hover:-translate-y-px`,
  light: `${base} bg-white text-navy-950 hover:bg-soft hover:-translate-y-px`,
  outlineDark: `${base} border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10`,
  outline: `${base} border border-line bg-white text-navy-950 hover:border-electric/40 hover:text-electric`,
  ghostDark: `${base} text-white/80 hover:text-white hover:bg-white/5`,
};
