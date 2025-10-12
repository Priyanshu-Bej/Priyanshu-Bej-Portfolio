## Priyanshu.dev — React + Vite Portfolio

Modern single-page portfolio for showcasing Priyanshu Pritam Bej’s mobile engineering work. The redesign delivers a glassmorphism-inspired canvas with neon accents, soft particles, and performant motion that works across devices and themes.

### ✨ Highlights
- Responsive one-page layout with anchored navigation, sticky glass nav, and smooth scroll.
- Dark / light themes with localStorage persistence, neon-accented surfaces, and floating particle depth.
- Auto-scrolling glass project carousel (pauses on hover/click) with modal deep-dives, skill tag cloud, and press-worthy notes.
- Framer Motion 3D hero tilt, reveal animations that respect reduced-motion, and lazy-loaded media for Lighthouse ≥ 90.
- EmailJS-powered contact form wrapped in glass with animated focus states and quick info cards.

---

## Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (custom design tokens), CSS variables
- **Animation:** Framer Motion
- **Content:** Markdown notes parsed with a lightweight custom front-matter parser + React Markdown
- **Forms:** EmailJS browser SDK
- **Icons:** React Icons

Project structure:

```
src/
├── App.jsx
├── components/
│   ├── layout/           # Navbar, Footer, Theme Toggle
│   ├── projects/         # Glass cards + lazy modal
│   ├── sections/         # Hero, About, Skills, Projects, Notes, Highlights, Contact
│   └── ui/               # FloatingParticles, shared glass utilities
├── config/designTokens.js
├── constants/            # Content + metadata
├── context/ThemeContext.jsx
├── hooks/                # `useMediaQuery`
├── utils/                # Motion variants, smooth scrolling
└── blog/                 # Markdown notes with front matter
```

---

## Quick Start

```bash
git clone https://github.com/Priyanshu-Bej/Priyanshu-Bej-Portfolio.git
cd Priyanshu-Bej-Portfolio
npm install --legacy-peer-deps
npm run dev
```

Local dev server runs on `http://localhost:5173` by default.

### Environment Variables (optional)

Create `.env.local` with EmailJS overrides if you prefer not to use the embedded defaults:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

When these values are absent, the form falls back to the project’s existing EmailJS credentials.

---

## Design Tokens

Defined in `src/config/designTokens.js` and Tailwind’s `extend` block.

| Token | Value |
|-------|-------|
| Primary (`brand.primary`) | `#00CFFF` |
| Accent (`brand.accent`) | `#FF4D6D` |
| Secondary (`brand.secondary`) | `#9B51E0` |
| Background (light / dark) | `#F5F7FA` / `#0B0D17` |
| Glass Layer | `rgba(255, 255, 255, 0.08)` |
| Text (light / dark) | `#1A202C` / `#E5E5E5` |
| Gradient Highlight | `linear-gradient(135deg, #00CFFF 0%, #9B51E0 100%)` |

- **Fonts:** `Poppins` for display headlines, `Inter` for interface/body copy.
- **Spacing:** Section padding ~`5–7rem`, extended spacing scale (`theme.spacing`) for layout rhythm.
- **Shadows & glow:** `shadow-soft-xl`, `shadow-glow`, `shadow-card-light/dark` emulate soft neon bloom.
- **Motion:** `fade-up`, `shimmer`, `scroll-x`, `pulse-glow`, and `float` keyframes with eased transitions.

---

## Scripts

| Command               | Purpose |
|-----------------------|---------|
| `npm run dev`         | Start the Vite dev server. |
| `npm run build`       | Create an optimized production build. |
| `npm run preview`     | Serve the built app locally for testing. |
| `npm run lint`        | Lint JS/JSX files with ESLint. |

---

## Deployment

The app is a static SPA—build output lives under `dist/`. Either platform below works well:

### 1. Vercel
1. Push changes to GitHub.
2. Import the repo in Vercel, select the Vite preset.
3. Build command: `npm run build`, Output directory: `dist`.
4. Add environment variables (EmailJS IDs) under Project Settings → Environment Variables if needed.

### 2. Netlify
1. `netlify init` (or connect via dashboard).
2. Build command: `npm run build`, Publish directory: `dist`.
3. Configure EmailJS env vars in Site settings → Build & deploy → Environment.

> **Note:** Deployments require credentials I can’t access from this workspace, so the final publish step must be completed in your Vercel/Netlify account.

---

## Measuring Performance

- Run `npm run build && npm run preview` then audit with Chrome Lighthouse to keep metrics ≥ 90.
- Images are lazy-loaded; for further gains, replace PNGs with optimized WebP/AVIF variants and host remote assets locally.
- Framer Motion respects `prefers-reduced-motion`; test keyboard navigation in both themes to maintain accessibility.

---

## Credits & Contact

Designed and built by **Priyanshu Pritam Bej**.  
Questions or collaboration ideas? Reach out via [LinkedIn](https://www.linkedin.com/in/priyanshubej/) or email at `priyanshubej2001@gmail.com`.
