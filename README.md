# Brandon Angulo - Portfolio Website

A Next.js 15 portfolio showcasing data engineering, data science, and software projects. Built with React, Tailwind CSS, and Framer Motion.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Images

Add project preview images to `public/images/Proj-prev/` (e.g. `resume-job-matcher-prev.png`). Add `About-Me.webp`, `Hero-Icon.png`, and `Logo.png` to `public/images/`. The site shows "No preview" for missing project images.

## Environment Variables

When adding features that require API keys (e.g., analytics, contact form), create a `.env.local` file with your secrets. Never commit `.env*` files. See `.env.example` (if present) for required variables.

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) or any Next.js-compatible platform.
