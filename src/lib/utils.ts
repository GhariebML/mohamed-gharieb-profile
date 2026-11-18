import type { L, Locale } from "@/data/types";

/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Picks the string for the active locale. */
export function tr(text: L, locale: Locale) {
  return text[locale] || text.en;
}

/** Strips protocol and trailing slash for display: https://a.com/ → a.com */
export function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/+$/, "");
}
