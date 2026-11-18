import type { L } from "./types";

/** Interface strings (labels, buttons, headings) in English and Arabic. */
export const ui = {
  nav: {
    about: { en: "About", ar: "نبذة" },
    expertise: { en: "Expertise", ar: "الخبرات" },
    projects: { en: "Projects", ar: "المشاريع" },
    experience: { en: "Experience", ar: "المسيرة" },
    certifications: { en: "Certifications", ar: "الشهادات" },
    education: { en: "Education", ar: "التعليم" },
    contact: { en: "Contact", ar: "تواصل" },
    menu: { en: "Open menu", ar: "فتح القائمة" },
    close: { en: "Close menu", ar: "إغلاق القائمة" },
    skip: { en: "Skip to content", ar: "انتقل إلى المحتوى" },
    switchLang: { en: "العربية", ar: "English" },
    switchLangLabel: { en: "Switch to Arabic", ar: "التبديل إلى الإنجليزية" },
  },
  hero: {
    explore: { en: "Explore My Projects", ar: "استكشف مشاريعي" },
    downloadCv: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
    requestCv: { en: "Request CV", ar: "اطلب السيرة الذاتية" },
    contact: { en: "Contact Me", ar: "تواصل معي" },
    portraitAlt: { en: "Portrait of Mohamed Gharieb", ar: "صورة محمد غريب" },
  },
  sections: {
    about: { eyebrow: { en: "Professional Overview", ar: "نظرة مهنية" }, title: { en: "About Me", ar: "نبذة عني" } },
    expertise: {
      eyebrow: { en: "Technical Expertise", ar: "الخبرة التقنية" },
      title: { en: "Core Expertise", ar: "مجالات الخبرة الأساسية" },
      lead: {
        en: "A practical toolkit across the full AI lifecycle — from data to deployed product.",
        ar: "مجموعة أدوات عملية تغطي دورة حياة الذكاء الاصطناعي كاملة — من البيانات إلى المنتج المنشور.",
      },
    },
    projects: {
      eyebrow: { en: "Featured Work", ar: "أعمال مختارة" },
      title: { en: "Selected Projects", ar: "مشاريع مختارة" },
      lead: {
        en: "Products and systems built around applied AI, automation and data.",
        ar: "منتجات وأنظمة مبنية على الذكاء الاصطناعي التطبيقي والأتمتة والبيانات.",
      },
    },
    experience: {
      eyebrow: { en: "Professional Journey", ar: "المسيرة المهنية" },
      title: { en: "Experience & Leadership", ar: "الخبرة والقيادة" },
    },
    certifications: {
      eyebrow: { en: "Professional Development", ar: "التطوير المهني" },
      title: { en: "Certifications & Achievements", ar: "الشهادات والإنجازات" },
    },
    education: {
      eyebrow: { en: "Learning", ar: "التعلّم" },
      title: { en: "Education & Programs", ar: "التعليم والبرامج" },
    },
    contact: {
      eyebrow: { en: "Contact & Networking", ar: "التواصل" },
      title: { en: "Let's Connect", ar: "لنتواصل" },
      lead: {
        en: "Whether you're hiring, building a product or exploring a collaboration, I'd be glad to hear from you.",
        ar: "سواء كنت توظّف أو تبني منتجًا أو تبحث عن تعاون، يسعدني أن أسمع منك.",
      },
    },
  },
  about: {
    approach: { en: "How I work", ar: "منهجية عملي" },
    focus: { en: "Focus areas", ar: "مجالات التركيز" },
  },
  projects: {
    capabilities: { en: "Key capabilities", ar: "أبرز القدرات" },
    focus: { en: "Focus", ar: "محاور التركيز" },
    stack: { en: "Technologies", ar: "التقنيات" },
    code: { en: "Source code", ar: "الكود المصدري" },
    demo: { en: "Live demo", ar: "عرض مباشر" },
    allRepos: { en: "More on GitHub", ar: "المزيد على GitHub" },
  },
  certifications: {
    issuedBy: { en: "Issued by", ar: "جهة الإصدار" },
    verify: { en: "Verify credential", ar: "التحقق من الشهادة" },
  },
  education: {
    academic: { en: "Academic Education", ar: "التعليم الأكاديمي" },
    programs: { en: "Professional Training Programs", ar: "برامج التدريب المهني" },
    specialization: { en: "Specialization", ar: "التخصص" },
    duration: { en: "Duration", ar: "المدة" },
  },
  cv: {
    eyebrow: { en: "Résumé", ar: "السيرة الذاتية" },
    title: { en: "Download My CV", ar: "حمّل سيرتي الذاتية" },
    available: {
      en: "A concise PDF overview of my experience, projects, skills and certifications.",
      ar: "ملف PDF موجز يلخّص خبراتي ومشاريعي ومهاراتي وشهاداتي.",
    },
    unavailable: {
      en: "The PDF version is being finalized. Request the latest copy by email and I'll send it directly.",
      ar: "يجري الآن إعداد النسخة النهائية بصيغة PDF. اطلب أحدث نسخة عبر البريد الإلكتروني وسأرسلها لك مباشرة.",
    },
    download: { en: "Download CV (PDF)", ar: "تحميل السيرة الذاتية (PDF)" },
    request: { en: "Request CV by Email", ar: "اطلب السيرة الذاتية بالبريد" },
    requestSubject: { en: "CV request — Mohamed Gharieb", ar: "طلب السيرة الذاتية — Mohamed Gharieb" },
  },
  contact: {
    email: { en: "Send an Email", ar: "أرسل بريدًا إلكترونيًا" },
    whatsapp: { en: "Chat on WhatsApp", ar: "تحدث عبر WhatsApp" },
    linkedin: { en: "Connect on LinkedIn", ar: "تواصل عبر LinkedIn" },
    github: { en: "Explore GitHub", ar: "استكشف GitHub" },
    portfolio: { en: "View Portfolio", ar: "شاهد معرض الأعمال" },
    call: { en: "Call", ar: "اتصال" },
    saveContact: { en: "Save Contact", ar: "حفظ جهة الاتصال" },
    saveContactHint: { en: "Add me to your phone contacts (vCard)", ar: "أضفني إلى جهات اتصال هاتفك (vCard)" },
    copy: { en: "Copy email", ar: "نسخ البريد" },
    copied: { en: "Copied", ar: "تم النسخ" },
    shareTitle: { en: "Share this profile", ar: "شارك هذا الملف" },
    shareText: { en: "Open the printable QR code for this page.", ar: "افتح رمز QR القابل للطباعة لهذه الصفحة." },
    shareCta: { en: "View QR code", ar: "عرض رمز QR" },
  },
  footer: {
    rights: { en: "© 2026 Mohamed Gharieb. All Rights Reserved.", ar: "© 2026 Mohamed Gharieb. جميع الحقوق محفوظة." },
    disclaimer: {
      en: "Program names and logos belong to their respective owners and indicate participation only, not endorsement of this website.",
      ar: "أسماء البرامج وشعاراتها مملوكة لأصحابها، وتشير إلى المشاركة فقط ولا تعني اعتماد هذا الموقع.",
    },
    backToTop: { en: "Back to top", ar: "العودة للأعلى" },
  },
} satisfies Record<string, Record<string, L | Record<string, L>>>;
