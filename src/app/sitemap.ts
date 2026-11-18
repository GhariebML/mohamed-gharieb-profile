import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Update when the content changes meaningfully. */
const LAST_UPDATED = "2026-11-18";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 1 }];
}
