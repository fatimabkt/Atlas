# Atlas & Sand — Morocco Tourism Website

A premium, fully responsive Morocco tourism website built with Next.js, Tailwind CSS, and Framer Motion. No payment system, no user accounts — every "Book Now" button opens WhatsApp with a pre-filled message instead.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before You Launch — Things You Must Update

1. **WhatsApp number** — open `src/data/site.ts` and replace `WHATSAPP_NUMBER` with your real business number (digits only, country code, no `+` or leading `0`). Example: a Moroccan number `06XX-XXXXXX` becomes `2126XXXXXXXX`.
2. **Email & phone** — update `CONTACT_EMAIL` and `CONTACT_PHONE` in the same file.
3. **Office address** — update `OFFICE_ADDRESS` in `src/data/site.ts`, and update the Google Maps embed URL in `src/app/contact/page.tsx` (search for `google.com/maps`) to your real location.
4. **Domain** — update the placeholder domain `https://www.atlasandsand.ma` in `src/app/sitemap.ts` and `src/app/robots.ts` once you know your real domain.
5. **Photos** — every image currently points to a curated Unsplash photo. Search is hot-linked, free to use, and good for launch, but swap in your own photography whenever you're ready. All image URLs live in `src/data/site.ts` (and `src/components/Hero.tsx` / `PageHero` calls in each page file for hero banners) — there's no need to hunt through every component.
6. **Trips & tours content** — `src/data/site.ts` is the single source of truth for trip packages, tour listings, destinations, and testimonials. Edit the arrays there; every page updates automatically.
7. **Social links** — update the Instagram/Facebook URLs in `src/components/SiteFooter.tsx`.

## Project Structure

```
src/
  app/                 → pages (App Router): /, /trips, /tours, /about, /contact
  components/          → all UI building blocks
  data/site.ts         → all editable content: trips, tours, destinations, contact info
```

## Booking Flow

There is no payment processor and no login system, by design. Every "Book Now" / "Send via WhatsApp" action builds a `wa.me` link with a pre-filled message and opens it in a new tab — a real person on your team replies from there. See `whatsappBookingLink()` in `src/data/site.ts`.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (design tokens defined in `src/app/globals.css`)
- **Framer Motion** for page transitions, scroll reveals, and the tour detail modal
- **lucide-react** for icons

## Deploying

This is a standard Next.js app — deploy to Vercel, Netlify, or any Node host:

```bash
npm run build
npm run start
```

If deploying to a static host, note the contact form opens WhatsApp client-side (no server/database required), so this app needs no backend or environment variables to function.
