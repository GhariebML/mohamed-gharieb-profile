export type Locale = "en" | "ar";

/** A piece of text available in both supported languages. */
export interface L {
  en: string;
  ar: string;
}

export interface ProjectSystem {
  name: string;
  summary: L;
  technologies: string[];
  github?: string;
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  /** Short category label, e.g. "SaaS Platform". */
  category: L;
  tagline?: L;
  summary: L;
  capabilities: L[];
  /** Leave empty when the stack has not been confirmed. */
  technologies: string[];
  github?: string;
  demo?: string;
  /** Shown when a repository exists but is private. */
  note?: L;
  /** Span the full grid width on desktop. */
  wide?: boolean;
  /** Sub-systems rendered inside the card (used for the ML systems card). */
  systems?: ProjectSystem[];
}

export interface ExperienceItem {
  id: string;
  /** Leave undefined if the title is not confirmed — the card adapts. */
  role?: L;
  organization: string;
  /** e.g. "Nonprofit", "Internship". */
  type: L;
  /** Only fill with confirmed dates. */
  period?: L;
  description?: L;
  highlights?: L[];
  link?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  /** Optional, e.g. "2025". Leave undefined if unknown. */
  issued?: string;
  /** Only real verification URLs. Never invent one. */
  verifyUrl?: string;
}
