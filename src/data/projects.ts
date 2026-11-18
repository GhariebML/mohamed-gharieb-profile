import type { Project } from "./types";

/**
 * Featured projects. Add `github` / `demo` only for public, working URLs.
 * NexaServe and DIGILINK repositories are private, so no repo link is shown.
 */
export const projects: Project[] = [
  {
    id: "nexaserve",
    title: "NexaServe",
    category: { en: "AI-Powered Customer Service Platform", ar: "منصة خدمة عملاء مدعومة بالذكاء الاصطناعي" },
    summary: {
      en: "A multi-tenant SaaS platform that helps businesses build intelligent customer service systems powered by RAG, LLMs, bilingual knowledge bases and WhatsApp Business integration.",
      ar: "منصة SaaS متعددة المستأجرين تساعد الشركات على بناء أنظمة خدمة عملاء ذكية مدعومة بـ RAG ونماذج اللغة الكبيرة وقواعد معرفة ثنائية اللغة وتكامل مع WhatsApp Business.",
    },
    capabilities: [
      { en: "Multi-tenant architecture", ar: "بنية متعددة المستأجرين" },
      { en: "RAG-based knowledge retrieval", ar: "استرجاع المعرفة القائم على RAG" },
      { en: "WhatsApp integration", ar: "تكامل مع WhatsApp" },
      { en: "AI-powered customer support", ar: "دعم عملاء مدعوم بالذكاء الاصطناعي" },
      { en: "Human-in-the-Loop escalation", ar: "تصعيد بمشاركة العنصر البشري" },
      { en: "Workflow automation", ar: "أتمتة سير العمل" },
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "n8n", "LLMs", "RAG"],
    note: { en: "Private repository — details available on request", ar: "مستودع خاص — التفاصيل متاحة عند الطلب" },
  },
  {
    id: "digilink",
    title: "DIGILINK",
    category: { en: "Digilians Career & Opportunity Platform", ar: "منصة Digilians للمسارات المهنية والفرص" },
    tagline: { en: "Connecting Talent with the Right Opportunities.", ar: "نربط المواهب بالفرص المناسبة." },
    summary: {
      en: "A career and opportunity management platform that connects students with employers through intelligent matching and automated interview distribution.",
      ar: "منصة لإدارة المسارات المهنية والفرص تربط الطلاب بجهات التوظيف عبر مطابقة ذكية وتوزيع آلي للمقابلات.",
    },
    capabilities: [
      { en: "Student and company management", ar: "إدارة الطلاب والشركات" },
      { en: "Smart opportunity distribution", ar: "توزيع ذكي للفرص" },
      { en: "Skills-based matching", ar: "مطابقة قائمة على المهارات" },
      { en: "Interview allocation", ar: "تخصيص المقابلات" },
      { en: "Student dashboards", ar: "لوحات متابعة للطلاب" },
      { en: "Centralized recruitment workflows", ar: "سير عمل توظيف مركزي" },
    ],
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    note: { en: "Private repository — details available on request", ar: "مستودع خاص — التفاصيل متاحة عند الطلب" },
  },
  {
    id: "enterprise-cs",
    title: "Enterprise AI Customer Service System",
    category: { en: "Enterprise AI Architecture", ar: "بنية ذكاء اصطناعي للمؤسسات" },
    summary: {
      en: "An AI-powered customer service architecture that integrates knowledge retrieval, conversational AI, workflow orchestration and human escalation for enterprise environments.",
      ar: "بنية لخدمة العملاء مدعومة بالذكاء الاصطناعي تدمج استرجاع المعرفة والذكاء الاصطناعي المحادثي وتنسيق سير العمل والتصعيد البشري لبيئات المؤسسات.",
    },
    capabilities: [
      { en: "Bilingual RAG", ar: "RAG ثنائي اللغة" },
      { en: "Local LLM integration", ar: "تكامل نماذج لغة محلية" },
      { en: "Workflow automation", ar: "أتمتة سير العمل" },
      { en: "Data privacy", ar: "خصوصية البيانات" },
      { en: "Multi-channel communication", ar: "تواصل متعدد القنوات" },
    ],
    technologies: [],
    wide: true,
  },
  {
    id: "ml-systems",
    title: "Applied Machine Learning Systems",
    category: { en: "Two Deployed ML Systems", ar: "نظاما تعلّم آلي منشوران" },
    summary: {
      en: "Two end-to-end machine learning projects taken from exploratory analysis and modeling through to live, publicly accessible deployments.",
      ar: "مشروعان متكاملان لتعلّم الآلة، انطلقا من التحليل الاستكشافي والنمذجة وصولًا إلى نشر حي ومتاح للجميع.",
    },
    capabilities: [],
    technologies: [],
    wide: true,
    systems: [
      {
        name: "Hotel Booking Intelligence System",
        summary: {
          en: "Predictive analytics dashboard for hospitality: an 11-table SQL database built from 119,390 booking records, ML cancellation prediction, guest segmentation and a Power BI KPI dashboard.",
          ar: "لوحة تحليلات تنبؤية لقطاع الفنادق: قاعدة بيانات SQL من 11 جدولًا مبنية على 119,390 سجل حجز، مع التنبؤ بالإلغاء بتعلّم الآلة وتقسيم النزلاء ولوحة مؤشرات Power BI.",
        },
        technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "K-Means", "SQL", "Power BI"],
        github: "https://github.com/GhariebML/Hotel-Intelligence-System",
        demo: "https://hotel-booking-dashboard-nine.vercel.app",
      },
      {
        name: "APEX · Body Performance Intelligence",
        summary: {
          en: "Live ML application that predicts physical performance class (A–D) from 11 physiological measurements, using a Random Forest classifier.",
          ar: "تطبيق تعلّم آلي حي يتنبأ بفئة الأداء البدني (A–D) اعتمادًا على 11 قياسًا فسيولوجيًا باستخدام مصنّف Random Forest.",
        },
        technologies: ["Python", "Scikit-learn", "Random Forest", "FastAPI"],
        github: "https://github.com/GhariebML/apex-performance-app",
        demo: "https://apex-performance-app.vercel.app",
      },
    ],
  },
];
