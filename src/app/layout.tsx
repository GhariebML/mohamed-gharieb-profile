import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { RevealObserver } from "@/components/providers/RevealObserver";
import { profile } from "@/data/profile";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false, // only needed when Arabic is selected
});

const title = "Mohamed Gharieb | Applied AI Engineer & Data Analytics";
const description =
  "Discover Mohamed Gharieb's professional profile, Applied AI projects, Machine Learning experience, Data Analytics expertise, certifications, and professional contact information.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    "Mohamed Gharieb",
    "Applied AI Engineer",
    "Machine Learning",
    "Data Analytics",
    "RAG",
    "LLM",
    "FastAPI",
    "Power BI",
    "Alexandria",
    "Egypt",
    "DIGILIANS",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title,
    description,
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    firstName: profile.firstName,
    lastName: profile.lastName,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#071B35",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title.en,
  url: SITE_URL,
  image: `${SITE_URL}/images/mohamed-gharieb.jpg`,
  email: `mailto:${profile.contact.email}`,
  telephone: profile.contact.phoneE164,
  address: { "@type": "PostalAddress", addressLocality: "Alexandria", addressCountry: "EG" },
  sameAs: [profile.links.linkedin, profile.links.github, profile.links.portfolio],
  knowsAbout: ["Applied Artificial Intelligence", "Machine Learning", "Data Analytics", "Large Language Models", "RAG"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr" className={`${jakarta.variable} ${plexArabic.variable} antialiased`}>
      <body className="min-h-dvh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <LocaleProvider>
          {children}
          <RevealObserver />
        </LocaleProvider>
      </body>
    </html>
  );
}
