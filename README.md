
# Keval Amin Portfolio

A personal portfolio site for Keval Amin, built with Next.js, React, TypeScript, and Tailwind CSS. The site presents Keval's work across machine learning, data science, applied AI, blockchain infrastructure, statistical modeling, and full-stack data products.

## Overview

This portfolio is designed as a dark, editorial-style personal site with animated interactions, project cards, professional experience, systems-focused positioning, and a technical toolbelt section.

It includes:

- A full-screen animated hero section
- About, projects, experience, systems, and tools sections
- Project cards with live links, source links, papers, technology tags, and feature highlights
- Portfolio data managed from a central TypeScript data file
- Vercel Analytics in production
- A custom dark visual system using Tailwind CSS, shadcn styles, grid/dot textures, and monochrome imagery

## Tech Stack

- **Framework:** Next.js
- **UI:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn styles, tw-animate-css
- **Components & Utilities:** Base UI, Lucide React, class-variance-authority, clsx, tailwind-merge
- **Analytics:** Vercel Analytics

## Project Structure

```txt
.
├── app/
│   ├── globals.css        # Global Tailwind theme, tokens, and visual effects
│   ├── layout.tsx         # Root layout, metadata, viewport, analytics
│   └── page.tsx           # Main portfolio page composition
├── components/
│   └── site/              # Portfolio sections and site-specific UI components
├── lib/
│   └── portfolio-data.ts  # Contact info, experience, projects, systems, and toolbelt data
├── public/                # Images, project previews, PDFs, and static assets
├── package.json
└── tsconfig.json
````

## Getting Started

### Prerequisites

* Node.js 20 or newer recommended
* npm, pnpm, yarn, or bun

### Installation

Clone the repository:

```bash
git clone https://github.com/kxvlar/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

### `npm run dev`

Starts the Next.js development server.

### `npm run build`

Creates a production build.

### `npm run start`

Runs the production build locally.

### `npm run lint`

Runs TypeScript type checking with:

```bash
tsc --noEmit
```

## Customizing Content

Most portfolio content lives in:

```txt
lib/portfolio-data.ts
```

Update this file to change:

* Contact information
* Work experience
* Project descriptions
* Project links
* Technology tags
* Systems positioning
* Toolbelt entries

The homepage is assembled in:

```txt
app/page.tsx
```

The main page currently renders:

1. Hyperspace intro
2. Site navigation
3. Hero
4. About
5. Projects
6. Logo marquee
7. Experience
8. Systems
9. Tools
10. Footer

## Styling

Global styling, theme tokens, dark mode colors, grid textures, dot textures, and animation-related styles are defined in:

```txt
app/globals.css
```

The site uses a dark-first visual identity with mono/display typography, red accent states, grayscale image treatments, border-heavy layouts, and subtle texture overlays.

## Deployment

This app can be deployed on Vercel or any platform that supports Next.js.

For Vercel:

1. Import the repository into Vercel.
2. Use the default Next.js build settings.
3. Deploy.

Vercel Analytics is included and only rendered in production.

## Contact

**Keval Amin**
Berkeley, CA
Email: [keval.amin@berkeley.edu](mailto:keval.amin@berkeley.edu)
LinkedIn: [linkedin.com/in/kdamin](https://www.linkedin.com/in/kdamin/)
GitHub: [github.com/kxvlar](https://github.com/kxvlar)

```
```
