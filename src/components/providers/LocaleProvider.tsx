"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import type { L, Locale } from "@/data/types";
import { tr } from "@/lib/utils";

interface LocaleContextValue {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (text: L) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "mg-locale";

/* A tiny external store: English on the server, the saved choice (or ?lang=) on the client. */
const listeners = new Set<() => void>();
let current: Locale | null = null;

function readInitialLocale(): Locale {
  const fromQuery = new URLSearchParams(window.location.search).get("lang");
  if (fromQuery === "ar" || fromQuery === "en") return fromQuery;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
  } catch {
    return "en"; // storage unavailable (private mode)
  }
}

const store = {
  subscribe(cb: () => void) {
    listeners.add(cb);
    return () => listeners.delete(cb);
  },
  getSnapshot(): Locale {
    if (current === null) current = readInitialLocale();
    return current;
  },
  getServerSnapshot(): Locale {
    return "en";
  },
  set(next: Locale) {
    current = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    listeners.forEach((l) => l());
  },
};

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => store.set(next), []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      setLocale,
      toggleLocale: () => setLocale(locale === "en" ? "ar" : "en"),
      t: (text: L) => tr(text, locale),
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
