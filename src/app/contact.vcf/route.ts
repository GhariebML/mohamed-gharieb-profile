import { profile } from "@/data/profile";
import { SITE_URL } from "@/lib/site";

/** vCard so people who scan the business card can save the contact in one tap. */
export function GET() {
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(profile.lastName)};${esc(profile.firstName)};;;`,
    `FN:${esc(profile.name)}`,
    `TITLE:${esc(profile.title.en)}`,
    `EMAIL;TYPE=INTERNET,PREF:${profile.contact.email}`,
    `TEL;TYPE=CELL,VOICE:${profile.contact.phoneE164}`,
    "ADR;TYPE=WORK:;;;Alexandria;;;Egypt",
    `URL:${SITE_URL}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${profile.links.linkedin}`,
    `X-SOCIALPROFILE;TYPE=github:${profile.links.github}`,
    `NOTE:${esc(`LinkedIn: ${profile.links.linkedin} | GitHub: ${profile.links.github} | Portfolio: ${profile.links.portfolio}`)}`,
    "END:VCARD",
  ];
  return new Response(lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Mohamed_Gharieb.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
