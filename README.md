# Priyanshu Bej Portfolio

Premium minimal portfolio for **Priyanshu Bej**, Senior Mobile Developer at IRISS Inc.

This is the place where my mobile engineering work gets a proper stage: shipped apps, industrial products, Flutter systems, IoT workflows, AI/cloud learning, credentials, notes, and the small details that show how I think while building.

The vibe is simple: clean interface, sharp content, no noisy portfolio circus.

## What This Site Shows

- Senior mobile engineering work across Flutter, Android, iOS, IoT, AI-enabled workflows, and hybrid cloud products.
- Selected project case studies first, with smaller shipped apps tucked under **View all projects** so the page stays focused.
- Light and dark mode with a restrained premium visual system.
- Experience timeline, capability index, certifications showcase, mobile craft notes, resume, and direct contact.
- Real app store links and product context instead of fake placeholder cards.

## Tech Stack

| Area | Stack |
| --- | --- |
| Frontend | React 19 + Vite 8 |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| Routing | React Router |
| Content | Markdown notes + React Markdown |
| Contact | EmailJS browser SDK |
| Icons | React Icons |
| Runtime | Node 24.x |

## Project Structure

```text
src/
├── App.jsx
├── assets/              # Project previews and certification placeholders
├── blog/                # Markdown notes with front matter
├── components/
│   ├── layout/          # Navbar, footer, theme toggle, scroll progress
│   ├── projects/        # Project cards and modal
│   └── sections/        # Hero, work, about, skills, notes, credentials, contact
├── constants/           # Portfolio content, projects, credentials, links
├── context/             # Theme persistence
├── pages/               # Route pages
└── utils/               # Animation helpers
```

## Run Locally

Use Node 24.x.

```bash
npm install
npm run dev
```

Vite will print the local URL, usually:

```text
http://localhost:5173/
```

## Useful Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local Vite server. |
| `npm run build` | Creates the production build in `dist/`. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs ESLint for JS/JSX files. |
| `npm audit --audit-level=moderate` | Checks dependency security status. |

## Environment Variables

The contact form uses EmailJS. Add this to `.env.local` if you want to override the configured defaults:

```text
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Content Updates

Most portfolio content lives in:

```text
src/constants/index.js
```

Common updates:

- Projects: edit the `projects` array.
- Featured work: keep strong projects visible by default. Add `featured: false` for smaller apps that should stay under **View all projects**.
- Notes: add Markdown files inside `src/blog/`.
- Certifications: add certificate data in `certificationShowcase`, then place images in `src/assets/certifications/`.
- Resume: update `resumeResource`.
- Social links: update `heroContent`.

## Design Notes

This portfolio follows a premium minimal direction:

- clean typography with Plus Jakarta Sans and Inter
- light/dark mode built around high contrast and readable surfaces
- compact cards, thin borders, subtle shadows, and controlled animation
- phone-style previews for mobile apps
- no unnecessary local icon image files
- content-first layout, because shipped work should do the talking

## Deployment

Static SPA build:

```bash
npm run build
```

Deploy settings:

```text
Build command: npm run build
Output directory: dist
```

`vercel.json` rewrites all routes to `index.html`, so direct links like `/projects` work correctly.

## SEO & Public Branding

The site includes:

- indexable meta tags in `index.html`
- canonical URL
- Open Graph and Twitter/X preview tags
- Person/Profile structured data
- `public/robots.txt`
- `public/sitemap.xml`
- web app manifest

After deployment:

1. Open Google Search Console.
2. Add the production domain as a property.
3. Submit:

```text
https://your-domain.com/sitemap.xml
```

4. Use URL Inspection for the homepage and request indexing.
5. When a custom domain is added, update these files from `priyanshu-dev.vercel.app` to the final domain:

```text
index.html
public/robots.txt
public/sitemap.xml
```

For stronger Google coverage later, create dedicated pages for major projects and notes instead of keeping every detail only inside modals.

## Verification Checklist

Before pushing:

```bash
npm audit --audit-level=moderate
npm run lint
npm run build
```

Current verification status:

- `npm audit --audit-level=moderate` - 0 vulnerabilities
- `npm run lint` - passing
- `npm run build` - passing

## Contact

Built and maintained by **Priyanshu Bej**.

- LinkedIn: https://www.linkedin.com/in/priyanshubej/
- GitHub: https://github.com/Priyanshu-Bej
- Email: priyanshubej2001@gmail.com
