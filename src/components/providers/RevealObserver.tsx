"use client";

import { useEffect } from "react";

/**
 * Subtle fade-up for elements marked with `data-reveal`.
 * Content is fully visible without JavaScript; the hidden state is only
 * applied once this observer is running.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const vh = window.innerHeight;
    // Anything already on screen stays visible — no flash on load.
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) el.classList.add("is-visible");
    });
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    elements.forEach((el) => {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
