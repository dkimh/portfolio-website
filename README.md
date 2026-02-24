# Danielle Kim — Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** IBM Plex Mono, Rethink Sans
- **Assets CDN:** Cloudflare R2
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```bash
# Password for protected case study pages
PROJECT_PASSWORD=your_password

# Empty in local dev (assets served from /public)
# Set to R2 URL in Vercel for production
NEXT_PUBLIC_R2_BASE=
```

## Asset Storage

Large assets (images, videos) are hosted on Cloudflare R2 and excluded from the repo via `.gitignore`. In local development, place assets under `/public` to serve them locally. In production, set `NEXT_PUBLIC_R2_BASE` to the R2 bucket URL in Vercel environment variables.
