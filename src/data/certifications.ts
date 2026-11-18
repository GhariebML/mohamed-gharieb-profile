import type { Certification } from "./types";

/**
 * Add `issued` and `verifyUrl` only from the real certificate.
 * Never add placeholder or guessed verification links / IDs.
 */
export const certifications: Certification[] = [
  { id: "ibm-ds", name: "IBM Data Science Professional Certificate", issuer: "IBM" },
  { id: "google-da", name: "Google Data Analytics Professional Certificate", issuer: "Google" },
  { id: "google-ada", name: "Google Advanced Data Analytics Professional Certificate", issuer: "Google" },
  { id: "ms-pl300", name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft" },
  { id: "mckinsey-forward", name: "McKinsey Forward Program Graduate", issuer: "McKinsey & Company" },
];
