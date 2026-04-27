# MicroFinTech Inc (MFTI) Corporate Website

A production-ready, componentized Next.js website for MicroFinTech Inc focused on **Digital Transformation and Responsible AI Adoption for Microfinance Institutions**.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- lucide-react icons

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### 3) Build for production
```bash
npm run build
```

### 4) Start production server
```bash
npm run start
```

## Project Structure

- `app/layout.tsx`: global metadata and root layout.
- `app/page.tsx`: main page sections and content.
- `app/globals.css`: global styles and utility classes.
- `components/Navbar.tsx`: sticky responsive navigation with mobile menu and EN/ES placeholder.
- `components/ContactForm.tsx`: front-end validated contact form and submit placeholder.
- `data/siteContent.ts`: reusable data arrays (navigation, services, methodology).

## Where to Edit Content
- Edit page copy and section composition in `app/page.tsx`.
- Edit service items and methodology steps in `data/siteContent.ts`.
- Edit SEO metadata in `app/layout.tsx`.

## Contact Form Integration Placeholder
The current contact form in `components/ContactForm.tsx` performs front-end validation and uses a placeholder submit function.

To connect it:
1. Create an API route such as `app/api/contact/route.ts`.
2. Replace the placeholder promise in `onSubmit` with a `fetch('/api/contact')` call.
3. Integrate with your email/CRM provider (e.g., HubSpot, Salesforce, SendGrid).

## Suggested Next Enhancements
- Add full bilingual content architecture (EN/ES dictionaries + route localization).
- Add CMS support for content updates.
- Add analytics, conversion tracking, and consent-aware cookie banner.
- Add server-side form handling with spam protection (honeypot/reCAPTCHA).
- Add case-study pages and resources for SEO expansion.
