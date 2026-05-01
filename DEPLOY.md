# Deploying Your Portfolio Website

This is a Next.js application. Below are step-by-step instructions for deploying it.

---

## Option 1: Vercel (Recommended)

Vercel is the company behind Next.js — deployment is seamless and free for personal projects.

### Steps

1. **Push your code to GitHub**

   ```bash
   cd /Users/soham/Developer/Code/portfolio_website
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/soham-06/portfolio_website.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy via Vercel CLI (one command)**

   ```bash
   npx -y vercel --prod
   ```

   Follow the prompts — it will ask you to log in (GitHub OAuth), link the project, and deploy. Done.

3. **Or deploy via Vercel Dashboard**

   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click **"Add New Project"**
   - Import your `portfolio_website` repository
   - Click **Deploy** — no configuration needed
   - Your site will be live at `https://portfolio-website-<hash>.vercel.app`

4. **Custom Domain (optional)**

   - In Vercel Dashboard → your project → **Settings → Domains**
   - Add your custom domain (e.g., `sohamthipse.com`)
   - Update your domain's DNS records as instructed by Vercel

---

## Option 2: Netlify

1. **Push your code to GitHub** (same as step 1 above)

2. **Connect to Netlify**

   - Go to [netlify.com](https://netlify.com) and sign in with GitHub
   - Click **"Add new site" → "Import an existing project"**
   - Select your repository

3. **Configure build settings**

   | Setting         | Value            |
   | --------------- | ---------------- |
   | Build command   | `npm run build`  |
   | Publish directory | `.next`        |

4. **Deploy** — Netlify will build and deploy automatically

> **Note:** For Netlify, you may need the `@netlify/plugin-nextjs` plugin. Add it in your Netlify dashboard under **Plugins**.

---

## Option 3: GitHub Pages (Static Export)

GitHub Pages only serves static files, so you need to export the app.

1. **Update `next.config.mjs`**

   ```js
   const nextConfig = {
     output: "export",
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. **Build the static export**

   ```bash
   npm run build
   ```

   This generates an `out/` directory with static HTML files.

3. **Push to GitHub and enable Pages**

   ```bash
   git add .
   git commit -m "Add static export config"
   git push
   ```

   - Go to your repo → **Settings → Pages**
   - Source: **GitHub Actions** or point to the `out/` folder
   - Your site will be at `https://soham-06.github.io/portfolio_website`

> **⚠️ Limitation:** Static export disables some Next.js features like API routes and server-side rendering. For a portfolio, this is perfectly fine.

---

## Environment Checklist

Before deploying, make sure:

- [ ] All images are in the `public/images/` directory
- [ ] Links (GitHub, email, resume) are correct
- [ ] `npm run build` completes without errors
- [ ] Site looks good locally at `http://localhost:3000`

## Quick Test Build

```bash
npm run build
npm run start
```

This runs the production build locally on `http://localhost:3000` to verify everything works before deploying.
