# 🚀 Deployment Guide

Your premium glassmorphism portfolio is ready for production!

## ✅ Build Status

**Latest Build:** Success ✅
**Build Time:** 1.77s
**CSS Size:** 38.82 KB (6.61 KB gzipped)
**JS Size:** 477.29 KB (164.59 KB gzipped)

---

## 📦 Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "feat: Premium glassmorphism redesign with dark mode"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!** Your portfolio will be live in ~2 minutes at `your-project.vercel.app`

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

---

## 🌐 Deploy to Netlify

### Option 1: Netlify Dashboard

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "feat: Premium glassmorphism redesign"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Choose GitHub and your repository
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

---

## 🔧 Environment Variables (Optional)

If you want to customize EmailJS credentials:

**Vercel:**
- Go to Project Settings → Environment Variables
- Add:
  ```
  VITE_EMAILJS_SERVICE_ID=your_service_id
  VITE_EMAILJS_TEMPLATE_ID=your_template_id
  VITE_EMAILJS_PUBLIC_KEY=your_public_key
  ```

**Netlify:**
- Go to Site settings → Build & deploy → Environment
- Add the same variables

---

## 🎯 Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `priyanshubej.com`)
3. Follow DNS configuration instructions
4. Vercel auto-provisions SSL certificate

### Netlify

1. Go to Domain settings → Add custom domain
2. Update your DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   ```
3. SSL auto-provisioned by Netlify

---

## 📊 Performance Optimization

### Already Optimized ✅

- **Tree-shaken CSS:** Only 6.61 KB gzipped
- **Code splitting:** React lazy loading for modals
- **Image optimization:** Lazy loading enabled
- **Modern build:** ES modules with Vite

### Further Improvements (Optional)

1. **Convert images to WebP:**
   ```bash
   # Install cwebp
   brew install webp  # macOS

   # Convert images
   cwebp -q 80 src/assets/priyanshu_bej_code_theme.jpg -o src/assets/priyanshu_bej_code_theme.webp
   ```

2. **Add image placeholders:**
   - Use `blurhash` or `lqip` for smooth loading

3. **Enable HTTP/2 Server Push:**
   - Automatically enabled on Vercel/Netlify

---

## 🐛 Troubleshooting

### Build Fails with "Cannot resolve image"

**Solution:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Rebuild
npm run build
```

### Dark mode not working after deploy

**Check:**
- localStorage is enabled (required for theme persistence)
- No Content Security Policy blocking localStorage

### Fonts not loading

**Verify:**
- Google Fonts CDN is accessible
- Check `src/index.css` imports

---

## 🔒 Security Headers (Optional)

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 📈 Analytics Setup (Optional)

### Google Analytics

1. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Vercel Analytics

1. Install package:
   ```bash
   npm install @vercel/analytics
   ```

2. Add to `src/main.jsx`:
   ```javascript
   import { inject } from '@vercel/analytics';
   inject();
   ```

---

## ✅ Pre-Deployment Checklist

- [x] Build succeeds locally (`npm run build`)
- [x] All images load correctly
- [x] Dark/light mode toggles work
- [x] Navigation links scroll smoothly
- [x] Contact form sends emails (test EmailJS)
- [x] Mobile responsive (test on phone)
- [x] Lighthouse score > 90 (run audit)
- [ ] Custom domain configured (optional)
- [ ] Analytics added (optional)

---

## 🎉 Post-Deployment

**Share your portfolio:**
- LinkedIn: Update profile URL
- GitHub: Add to profile README
- Resume: Link to live site
- Email signature: Add portfolio link

**Monitor:**
- Vercel Analytics Dashboard
- Lighthouse CI for performance
- Google Search Console for SEO

---

## 🆘 Need Help?

**Vercel Issues:** [vercel.com/support](https://vercel.com/support)
**Netlify Issues:** [answers.netlify.com](https://answers.netlify.com)
**Build Errors:** Check `npm run build` output

---

**Your portfolio is production-ready! 🚀**
