import type { L } from "./types";

/**
 * Central source of truth for personal details.
 * Edit here — every section, the vCard, metadata and the footer read from this file.
 */
export const profile = {
  name: "Mohamed Gharieb",
  firstName: "Mohamed",
  lastName: "Gharieb",
  initials: "MG",
  title: {
    en: "Applied AI Engineer & Social Entrepreneur",
    ar: "مهندس ذكاء اصطناعي تطبيقي ورائد أعمال اجتماعي",
  } satisfies L,
  headline: {
    en: "Building Intelligent AI Solutions | From Data Exploration to Production",
    ar: "أبني حلول ذكاء اصطناعي عملية | من استكشاف البيانات إلى الإنتاج",
  } satisfies L,
  location: { en: "Alexandria, Egypt", ar: "الإسكندرية، مصر" } satisfies L,
  status: {
    en: "Open to Professional Opportunities & Collaboration",
    ar: "متاح للفرص المهنية والتعاون",
  } satisfies L,
  intro: {
    en: "I am an Applied AI Engineer passionate about transforming data and emerging AI technologies into practical, scalable solutions. My work focuses on building intelligent systems, developing AI-powered products, and deploying solutions that deliver measurable business value.",
    ar: "أنا مهندس ذكاء اصطناعي تطبيقي شغوف بتحويل البيانات وتقنيات الذكاء الاصطناعي الناشئة إلى حلول عملية وقابلة للتوسع. يتركّز عملي على بناء الأنظمة الذكية، وتطوير المنتجات المدعومة بالذكاء الاصطناعي، ونشر حلول تحقق قيمة ملموسة للأعمال.",
  } satisfies L,
  highlights: [
    { en: "2 Deployed ML Systems", ar: "نظاما تعلّم آلي منشوران" },
    { en: "AI & Data Analytics", ar: "الذكاء الاصطناعي وتحليل البيانات" },
    { en: "End-to-End AI Development", ar: "تطوير ذكاء اصطناعي متكامل" },
  ] satisfies L[],
  contact: {
    email: "moghariebai@gmail.com",
    phoneDisplay: "+20 102 248 7565",
    phoneE164: "+201022487565",
  },
  links: {
    email: "mailto:moghariebai@gmail.com",
    phone: "tel:+201022487565",
    whatsapp: "https://wa.me/201022487565",
    linkedin: "https://www.linkedin.com/in/ghariebml/",
    github: "https://github.com/GhariebML",
    portfolio: "https://mohamed-gharieb-portfolio.vercel.app/",
  },
} as const;

export const about = {
  paragraphs: [
    {
      en: "I'm an Applied AI Engineer based in Alexandria, Egypt, focused on turning data and emerging AI technologies into systems that people and organizations can actually use. My work spans data analytics, machine learning and generative AI — from the first exploratory analysis to a deployed, maintainable product.",
      ar: "أنا مهندس ذكاء اصطناعي تطبيقي مقيم في الإسكندرية، أركّز على تحويل البيانات وتقنيات الذكاء الاصطناعي الحديثة إلى أنظمة يستخدمها الأفراد والمؤسسات فعليًا. يمتد عملي عبر تحليل البيانات وتعلّم الآلة والذكاء الاصطناعي التوليدي — من أول تحليل استكشافي وحتى منتج منشور وقابل للصيانة.",
    },
    {
      en: "I work end to end: understanding the data, building and evaluating models, and shipping them behind clean APIs and automated workflows. Recently that has meant designing RAG-based customer service platforms, LLM-powered automation with n8n, and production-minded back ends with FastAPI, PostgreSQL and Docker.",
      ar: "أعمل على المشروع من بدايته إلى نهايته: فهم البيانات، وبناء النماذج وتقييمها، ثم إطلاقها عبر واجهات برمجية واضحة وسير عمل مؤتمت. ومؤخرًا شمل ذلك تصميم منصات خدمة عملاء قائمة على RAG، وأتمتة مدعومة بنماذج اللغة الكبيرة باستخدام n8n، وأنظمة خلفية جاهزة للإنتاج باستخدام FastAPI وPostgreSQL وDocker.",
    },
    {
      en: "Beyond engineering, I founded LEADUP, a nonprofit initiative, and I'm driven by using AI and automation for social impact — building products that are useful, responsible and accessible.",
      ar: "وإلى جانب الهندسة، أسّست LEADUP، وهي مبادرة غير ربحية، ويحرّكني توظيف الذكاء الاصطناعي والأتمتة لإحداث أثر اجتماعي — عبر بناء منتجات مفيدة ومسؤولة ومتاحة للجميع.",
    },
  ] satisfies L[],
  approach: [
    { key: "eda", label: { en: "EDA", ar: "EDA" }, detail: { en: "Explore, clean and understand the data", ar: "استكشاف البيانات وتنظيفها وفهمها" } },
    { key: "modeling", label: { en: "Modeling", ar: "النمذجة" }, detail: { en: "Build, evaluate and select models", ar: "بناء النماذج وتقييمها واختيارها" } },
    { key: "deployment", label: { en: "Deployment", ar: "النشر" }, detail: { en: "Serve through APIs and workflows", ar: "الإتاحة عبر واجهات برمجية وسير عمل" } },
    { key: "production", label: { en: "Production", ar: "الإنتاج" }, detail: { en: "Operate, monitor and improve", ar: "التشغيل والمراقبة والتحسين" } },
  ],
  focus: [
    { en: "Applied Artificial Intelligence", ar: "الذكاء الاصطناعي التطبيقي" },
    { en: "Data Analytics & Machine Learning", ar: "تحليل البيانات وتعلّم الآلة" },
    { en: "End-to-End AI Development", ar: "تطوير الذكاء الاصطناعي المتكامل" },
    { en: "Production-Ready Solutions", ar: "حلول جاهزة للإنتاج" },
    { en: "AI Product Development", ar: "تطوير منتجات الذكاء الاصطناعي" },
    { en: "Automation & Social Impact", ar: "الأتمتة والأثر الاجتماعي" },
  ] satisfies L[],
};

export const skills = [
  {
    id: "ai-ml",
    icon: "brain",
    title: { en: "AI & Machine Learning", ar: "الذكاء الاصطناعي وتعلّم الآلة" },
    items: ["Machine Learning", "Applied AI", "Model Development", "Model Evaluation", "Predictive Analytics"],
  },
  {
    id: "data",
    icon: "chart",
    title: { en: "Data Analytics", ar: "تحليل البيانات" },
    items: ["Python", "SQL", "Pandas", "Data Cleaning", "Exploratory Data Analysis", "Power BI", "DAX"],
  },
  {
    id: "genai",
    icon: "sparkles",
    title: { en: "Generative AI & Automation", ar: "الذكاء الاصطناعي التوليدي والأتمتة" },
    items: [
      "Large Language Models",
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents and Workflows",
      "n8n Automation",
      "LLM Integration",
    ],
  },
  {
    id: "engineering",
    icon: "server",
    title: { en: "Engineering & Deployment", ar: "الهندسة والنشر" },
    items: ["FastAPI", "PostgreSQL", "Docker", "Git & GitHub", "API Integration", "Deployment & MLOps"],
  },
] as const;

export const education = {
  academic: [
    {
      id: "damanhour",
      institution: "Damanhour University",
      faculty: { en: "Faculty of Science", ar: "كلية العلوم" },
    },
  ],
  programs: [
    {
      id: "digilians",
      program: "DIGILIANS – Digital Pioneers Initiative",
      credential: { en: "Specialized Diploma", ar: "دبلومة متخصصة" },
      specialization: { en: "Artificial Intelligence and Data Analytics", ar: "الذكاء الاصطناعي وتحليل البيانات" },
      duration: { en: "9 Months", ar: "9 أشهر" },
      context: {
        en: "Delivered under Egypt's Ministry of Communications and Information Technology (MCIT).",
        ar: "ضمن مبادرات وزارة الاتصالات وتكنولوجيا المعلومات (MCIT).",
      },
    },
  ],
};
