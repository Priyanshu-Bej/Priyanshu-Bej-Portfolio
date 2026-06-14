# Deployment Guide

This portfolio is a Vite static app. Build output is generated in `dist/`.

## Local Verification

```bash
npm install --legacy-peer-deps
npm run build
npm run preview
```

## Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Use the Vite defaults:

```text
Build command: npm run build
Output directory: dist
```

4. Add EmailJS environment variables if needed:

```text
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Netlify

1. Connect the repository in Netlify.
2. Use:

```text
Build command: npm run build
Publish directory: dist
```

3. Add the same EmailJS variables under site environment settings if needed.

## Notes

- The site uses client-side routing, so `vercel.json` is configured to rewrite all paths to `index.html`.
- The contact form can run with the embedded EmailJS defaults, but production credentials should be managed in the hosting dashboard.
- Run `npm run build` before deployment to catch broken imports, missing assets, or Tailwind class issues.
