
# Aizat Sagymbaeva — Portfolio (React + Tailwind)

This is a minimal Vite + React + Tailwind portfolio prepared for quick deployment.

## Quick start (locally)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Deploy options (three easy ways)

### 1) Vercel (recommended for React)
1. Create an account at vercel.com and connect your GitHub (or drag & drop).
2. Push this repo to GitHub (or upload as a ZIP), then import the project in Vercel.
3. Build command: `npm run build`
   - Framework: Other (Vite)
   - Output directory: `dist`
4. Vercel will give you a public link like `https://your-project.vercel.app`.

### 2) Netlify
1. Create an account at netlify.com.
2. Drag & drop the **dist** folder after running `npm run build`, or connect your GitHub repo and set build command `npm run build` and publish directory `dist`.
3. Netlify provides a public link like `https://your-project-name.netlify.app`.

### 3) GitHub Pages (free)
1. Push the repo to GitHub.
2. Build locally: `npm run build`
3. Commit the contents of the `dist` folder to the `gh-pages` branch (or use a GitHub Action).
4. In repository settings → Pages → set source to `gh-pages` branch and `/` (root).
5. The site will be available at `https://<yourusername>.github.io/<repo-name>/`.

---

## Files included
- `index.html` — main entry
- `src/` — React app (App.jsx, main.jsx, index.css)
- `public/assets/` — PDFs and asset placeholders

The uploaded PDFs (thesis and research paper) are copied into `public/assets/`.

If you want, I can:
- Add a GitHub Action to automatically build and publish to GitHub Pages.
- Convert to Next.js for better SEO (if you prefer).
- Replace the Resume placeholder with your resume (if you upload it).

Contact: aizatsagymbaeva@gmail.com
