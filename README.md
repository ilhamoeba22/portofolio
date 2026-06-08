# Muhammad Ilham Pratama — Enterprise Portfolio & Digital CV

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel)

A modern, interactive, bilingual portfolio website for **Muhammad Ilham Pratama**, built to present professional experience, technical skills, enterprise application work, and digital transformation projects in a clean executive-style interface.

This portfolio is designed not only as a personal CV website, but also as a curated showcase of real-world systems, including banking operations platforms, internal enterprise tools, public-facing company portals, monitoring dashboards, and on-going digital infrastructure initiatives.

---

## Overview

This project is a personal portfolio and digital CV application built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and 3D visual elements. The website highlights professional identity, domain expertise, work experience, education, certifications, and enterprise portfolio items.

The content supports both **English** and **Indonesian** language modes, allowing the portfolio to be presented professionally to local and international audiences.

---

## Key Highlights

- Executive-style personal portfolio and digital CV
- Bilingual content support: English and Indonesian
- Enterprise portfolio section with detailed project modals
- Project status support for on-going development work
- Responsive layout for desktop, tablet, and mobile
- Animated UI interactions using Framer Motion
- 3D visual experience using React Three Fiber and Drei
- Optimized for Vercel deployment
- Clean structure for maintaining project data, translations, and visual assets

---

## Featured Enterprise Portfolio

The portfolio currently showcases several enterprise and professional systems, including:

| Project | Status | Category |
|---|---|---|
| Dashboard Monitoring System | On Going | Enterprise Monitoring Dashboard |
| SSO Server MCI | On Going | Internal Access Platform |
| BPRS Front Office System | Live | Digital Banking Operations |
| BPRS Procurement System | Internal | Enterprise Procurement Workflow |
| BPRS Portal & CMS | Live | Banking Public Website & CMS |
| The Evidence - Archive Extractor | Internal | Data Archive & Reporting |
| BPRS RIPLAY System | Live | OJK Product Information Directory |
| ECC Online Personal Assessment | Private | Assessment Platform Backend |
| Lost And Found System PT KAI Daop 6 Yogyakarta | Private | Public Service Application |
| PTJIM Corporate Ecosystem | Live | Corporate Website & Analytics |

---

## Tech Stack

### Frontend & UI

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

### 3D & Visual Layer

- Three.js
- React Three Fiber
- Drei

### Tooling

- ESLint
- PostCSS
- Autoprefixer
- Git & GitHub
- Vercel deployment workflow

---

## Project Structure

```bash
space-portfolio/
├── app/                 # Next.js App Router pages and layout
├── components/          # Main and reusable UI components
│   ├── main/            # Page sections such as hero, projects, skills, etc.
│   └── sub/             # Smaller reusable components
├── constants/           # Portfolio data, project list, links, and translations
├── context/             # Language context and global language state
├── lib/                 # Utility functions
├── public/              # Static assets, icons, and project visuals
│   └── projects/        # Portfolio project images and SVG covers
├── scripts/             # Build or maintenance scripts
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

---

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js 20 or newer
- npm
- Git

### Installation

```bash
git clone https://github.com/ilhamoeba22/portofolio.git
cd portofolio
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the local development URL in your browser:

```bash
http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Deployment

This portfolio is prepared for deployment on **Vercel**.

Recommended Vercel configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

When connected to GitHub, every push to the configured production branch can trigger an automatic Vercel deployment.

---

## Content Management Notes

Most portfolio content is managed from centralized files:

| File | Purpose |
|---|---|
| `constants/index.ts` | Skills, project list, social links, footer links, experience, and education data |
| `constants/translations.ts` | English and Indonesian text content |
| `context/LanguageContext.tsx` | Language state and fallback translation handling |
| `public/projects/` | Project cover images and SVG visuals |

To add a new project, update the `PROJECTS` array in `constants/index.ts`, add the required translation keys, and provide a visual asset under `public/projects/`.

---

## Author

**Muhammad Ilham Pratama**  
IT Specialist • Backend Engineer • Full Stack Web Developer

- LinkedIn: `linkedin.com/in/m-ilhampratama`
- GitHub: `github.com/ilhamoeba22`
- Email: `muhammad.ilham.yk@gmail.com`

---

## License

This project is maintained as a personal portfolio and professional CV website. Reuse of the structure is allowed with proper attribution, but personal content, project descriptions, identity, and branding assets should not be copied without permission.
