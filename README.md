# Muhammad Ilham Pratama | Personal Portfolio (Next.js 16)

<!-- Table of Contents -->
<details>
<summary># :notebook_with_decorative_cover: Table of Contents</summary>

- [#️⃣ Folder Structure](#bangbang-folder-structure)
- [🚀 Getting Started](#toolbox-getting-started)
- [⚙️ Tech Stack](#gear-tech-stack)
- [☁️ Deployment](#cloud-deployment)
- [📦 Required Packages](#package-required-packages)

</details>

## 📁 Folder Structure

```bash
space-portfolio/
├── app/                 # Next.js App Router pages
├── components/          # React components
├── constants/           # App constants & config
├── lib/                 # Utility functions
├── public/              # Static assets
├── scripts/             # Build scripts
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20+ 
- **Git**

### Local Development
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
npm run start    # Production server
npm run lint     # Lint code
```

## ⚙️ Tech Stack

![React](https://img.shields.io/badge/React-19.2.4-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-green)
![Three.js](https://img.shields.io/badge/Three.js-0.183-orange)

**Key Dependencies:**
```
Next.js 16.2.4 (App Router + Turbopack)
React 19.2.4
Framer Motion 12.34
@react-three/fiber & drei (3D)
Tailwind CSS 3.3
TypeScript 5
```

## ☁️ Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo at [vercel.com](https://vercel.com)
3. Auto-deploys on push to `main`
4. Framework: **Next.js**
5. Root: `./`
6. Build: `npm run build`
7. Output: `.next`

**Vercel Config (vercel.json):**
```json
{
  \"buildCommand\": \"npm run build\",
  \"outputDirectory\": \".next\",
  \"framework\": \"nextjs\"
}
```

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add `netlify.toml`:
```
[build]
  command = \"npm run build\"
  publish = \".next\"
```

### Other Platforms
| Platform | Build Command | Publish Dir |
|----------|---------------|-------------|
| Railway | `npm run build` | `.next` |
| Render | `npm run build` | `.next` |
| Docker | See Dockerfile | N/A |

**Production Notes:**
- Images unoptimized (next.config.js)
- Static export supported (all pages SSG)

## 📦 Required Packages

**Runtime Dependencies:**
```bash
npm i next@16.2.4 react@19.2.4 react-dom@19.2.4
npm i @react-three/fiber@9.5.0 @react-three/drei@10.7.7 three@0.183.1
npm i framer-motion@12.34.2 clsx@2.1.1 tailwind-merge@3.5.0
```

**Dev Dependencies:**
```bash
npm i -D typescript@5 @types/react@19.2.14 @types/node@25.3.0
npm i -D tailwindcss@3.3.0 postcss autoprefixer eslint-config-next@16.1.6
```

**Environment Variables:** None required.

---

⭐ **Star this repo if you found it helpful!**  
🤝 **Deploy anywhere with zero-config!**
