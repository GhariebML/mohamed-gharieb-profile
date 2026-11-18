# Mohamed Gharieb — Digital Profile

The personal landing page that the QR code on Mohamed Gharieb's business card opens.
It's a fast, single-page professional profile with a print-ready QR code, an optional Arabic (RTL) version, and one-tap contact actions.

**Stack:** Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS v4 · Lucide icons · `qrcode`. There's no database and no server-side secrets. Every route is prerendered as static content.

---

## Features

- **Hero / digital business card:** real portrait, name, title, location, availability status, and CTAs (projects, CV, contact). It also shows three highlights.
- **Sections:** About (with an EDA → Modeling → Deployment → Production approach), Core Expertise, Selected Projects, Experience & Leadership timeline, Certifications, Education & Programs, CV, Contact, and Footer.
- **Contact:** `mailto:` link, a copy-email button, WhatsApp (`wa.me`), phone, LinkedIn, GitHub and Portfolio links, plus a **Save Contact** vCard at `/contact.vcf`.
- **QR code:** the print-ready page at `/qr` offers SVG, 2048 px PNG and Print. The code uses error correction H with a small MG centre mark that doesn't affect scanning.
- **English / Arabic:** English is the default and Arabic switches the whole page to RTL. The choice is saved per visitor. `?lang=ar` also works.
- **SEO:** title and description, canonical URL, Open Graph and Twitter cards, JSON-LD `Person`, `sitemap.xml`, `robots.txt`, a web manifest, an MG favicon and an Apple touch icon.
- **Quality:** semantic HTML, a skip link, keyboard focus styles, support for `prefers-reduced-motion`, and a custom 404 page. Security headers are set as well.

## Getting started

```bash
npm install
cp .env.example .env.local   # then set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (includes type-checking) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run qr -- <url>` | Generate and **verify** the print QR files in `deliverables/qr/` |

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | The final public HTTPS domain, with no trailing slash (for example `https://mohamed-gharieb.vercel.app`). It feeds the canonical URL, OG tags, sitemap, robots, vCard and **QR code**. If it isn't set on Vercel, the project's production domain (`VERCEL_PROJECT_PRODUCTION_URL`) is used. Locally it falls back to `http://localhost:3000`, and `/qr` shows a warning. |

There are no API keys or secrets in this project.

## Editing content

Every piece of personal content lives in `src/data/`, so you never need to touch the components.

| File | Contents |
|---|---|
| `src/data/profile.ts` | Name, title, headline, intro, status, highlights, contact and social links, About text, skills, and education |
| `src/data/projects.ts` | Project cards. Add `github` or `demo` only for **public**, working URLs. |
| `src/data/experience.ts` | Timeline entries. `role`, `period`, `description` and `highlights` are optional. The AURVIX role is intentionally left unset until it's confirmed. |
| `src/data/certifications.ts` | Certifications. `issued` and `verifyUrl` are optional. **Use real verification links only.** |
| `src/data/ui.ts` | Interface labels in English and Arabic |

Most text fields take `{ en, ar }`. Names, product names, program names and technical terms stay in English in both languages.

## Optional assets (they switch on automatically)

At build time, `next.config.ts` detects these files. Drop them in and redeploy, with no code changes:

| File | Effect |
|---|---|
| `public/files/Mohamed_Gharieb_CV.pdf` | Turns on **Download CV** in the hero and the CV section. Until the file exists, both offer "Request CV by email", and no placeholder PDF is shipped. |
| `public/images/digilians-logo.png` | Shows the DIGILIANS logo on the program card |
| `public/images/mcit-logo.png` | Shows the MCIT logo on the program card |

The portrait is `public/images/mohamed-gharieb.jpg`, optimized from the original photo. The social preview image is `src/app/opengraph-image.png` (1200×630). The footer states that program logos indicate participation, not endorsement.

## QR code

- `/qr` always encodes `NEXT_PUBLIC_SITE_URL`, the canonical landing page. It's rendered as SVG at build time and can be downloaded as SVG or a 2048 px PNG.
- For print files with automatic decode verification, run:

  ```bash
  npm run qr -- https://your-final-domain.vercel.app
  ```

  This writes `deliverables/qr/mohamed-gharieb-qr.svg|png` (with the MG mark) and `mohamed-gharieb-qr-plain.svg|png`. Each file is decoded back at 2048, 600 and 240 px, and the script exits with an error if any decode doesn't match the URL exactly.
- For print, keep the code at least 2 cm wide with a white quiet zone around it.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project**, import the repository and keep the framework preset **Next.js**.
3. Name the project for the domain you want. For example, the project name `mohamed-gharieb` gives `https://mohamed-gharieb.vercel.app`.
4. Under **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL=https://<final-domain>` for Production.
5. Deploy. Then open `https://<final-domain>/qr`: it should show **no** warning banner.
6. Regenerate the print QR with `npm run qr -- https://<final-domain>`, scan it with an iPhone and an Android camera, and only then send it to print.

> The QR encodes the domain itself. If you later move to a custom domain, update `NEXT_PUBLIC_SITE_URL`, redeploy, and reprint, or keep the `*.vercel.app` domain live so printed cards keep working.

## Project structure

```
src/
  app/            layout, page, /qr, /contact.vcf, sitemap, robots, manifest, icons, OG image, 404
  components/     Navbar, Hero, About, Skills, Projects, Experience, Certifications,
                  Education, CvDownload, Contact, Footer, QRCode, BackToTop, ...
  data/           all editable content (see above)
  lib/            site URL config, QR builder, monogram, utils
scripts/          generate-qr.mts (print QR + decode verification)
deliverables/qr/  generated print-ready QR files
public/images     portrait (+ optional logos)
public/files      CV PDF (add when ready)
```
