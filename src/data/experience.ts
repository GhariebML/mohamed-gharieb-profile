import type { ExperienceItem } from "./types";

/**
 * Experience & leadership, most recent first.
 * Only confirmed facts: add dates, titles and highlights here once confirmed.
 */
export const experience: ExperienceItem[] = [
  {
    id: "auspify",
    role: { en: "Data Science Intern", ar: "متدرب علوم بيانات" },
    organization: "Auspify Technologies",
    type: { en: "Internship", ar: "تدريب" },
    period: { en: "October 2026", ar: "أكتوبر 2026" },
  },
  {
    id: "digilians",
    role: { en: "Applied AI & Data Analytics Trainee", ar: "متدرب في الذكاء الاصطناعي التطبيقي وتحليل البيانات" },
    organization: "DIGILIANS / MCIT Digital Pioneers Initiative",
    type: { en: "Specialized Diploma · 9 Months", ar: "دبلومة متخصصة · 9 أشهر" },
    description: {
      en: "Specialized training track in Artificial Intelligence and Data Analytics.",
      ar: "مسار تدريبي متخصص في الذكاء الاصطناعي وتحليل البيانات.",
    },
  },
  {
    id: "aurvix",
    // Role intentionally left unset until confirmed — e.g. { en: "Founder", ar: "مؤسس" }
    organization: "AURVIX",
    type: { en: "AI Products & Automation Venture", ar: "مشروع لمنتجات الذكاء الاصطناعي والأتمتة" },
  },
  {
    id: "leadup",
    role: { en: "Founder & CEO", ar: "المؤسس والرئيس التنفيذي" },
    organization: "LEADUP",
    type: { en: "Nonprofit", ar: "مؤسسة غير ربحية" },
  },
  {
    id: "damanhour-ta",
    role: { en: "Teaching Assistant", ar: "مساعد تدريس" },
    organization: "Damanhour University",
    type: { en: "Academic", ar: "أكاديمي" },
    period: { en: "September 2022 – June 2023", ar: "سبتمبر 2022 – يونيو 2023" },
  },
];
