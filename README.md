# Portfolio

Interactive CV + portfolio site built with Next.js (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Structure

```
app/
  layout.tsx           Root layout — fonts, theme provider, header/footer
  page.tsx              Home route: the interactive, filterable CV
  achievements/page.tsx Academic + athletic achievements, side by side
  about/page.tsx         Narrative about page
  globals.css            Design tokens (colors) for light + dark mode

components/
  Header.tsx / Footer.tsx
  ThemeProvider.tsx / ThemeToggle.tsx   Dark/light mode
  FilterBar.tsx                         CV category filter tabs
  ExperienceList.tsx                    Filter state + animated list
  ExperienceCard.tsx                    One CV entry (reusable)
  AchievementColumn.tsx                 One achievements column (reusable)
  AchievementCard.tsx                   One achievement entry, with optional photo

data/
  experience.ts          Your CV content — edit this
  achievements.ts         Your achievements content — edit this

lib/
  types.ts                Shared TypeScript types for the data above

public/
  achievements/           Drop achievement photos/certificates here
  resume.pdf               Add your resume here (referenced by the header)
```

Everything in `data/` is placeholder content — replace it with your own.
The components don't need to change when you do; they just render whatever
is in the arrays.

---

## 1. Local setup

You'll need [Node.js](https://nodejs.org) 18.18 or newer. Check with:

```bash
node -v
```

From inside the `portfolio` folder:

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Editing any file under `app/`, `components/`,
or `data/` hot-reloads in the browser.

---

## 2. Edit your content

You said you'll go through and edit the actual copy yourself — here's where
everything lives:

- **CV entries:** `data/experience.ts`. Each object is one entry; `categories`
  controls which filter tabs it appears under (an entry can belong to more
  than one).
- **Achievements:** `data/achievements.ts`. `track` must be `"academic"` or
  `"athletic"` — that's what splits them into the two columns.
- **Achievement photos:** drop an image into `public/achievements/` (e.g.
  `worlds-2022.jpg`), then set `photo: "/achievements/worlds-2022.jpg"` on
  that achievement in `data/achievements.ts`. Leave `photo` unset and the
  card just shows an empty slot instead — no error.
- **About page copy:** `app/about/page.tsx` — replace the `[Edit me]`
  paragraphs.
- **Name, nav, and social links:** `components/Header.tsx` — replace
  `"Your Name"` and the `SOCIAL_LINKS` object (GitHub, LinkedIn, resume path).
- **Resume:** add your PDF at `public/resume.pdf` (exact filename), or change
  the path in `SOCIAL_LINKS.resume`.
- **Colors/fonts:** CSS variables in `app/globals.css` (`:root` for light
  mode, `.dark` for dark mode); font choices in `app/layout.tsx`.

---

## 3. Deploying to Vercel

Vercel is built by the same team as Next.js and needs zero configuration for
this project. Two ways to do it — pick whichever you're more comfortable
with.

### Option A: GitHub + Vercel dashboard (recommended, no CLI)

1. **Create a GitHub repo.**
   - Go to https://github.com/new, name it (e.g. `portfolio`), leave it
     empty (no README/gitignore — you already have those), and create it.
2. **Push this project to it.** From inside the `portfolio` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
3. **Import it on Vercel.**
   - Go to https://vercel.com and sign up/log in with your GitHub account.
   - Click **Add New… → Project**.
   - Select your `portfolio` repo and click **Import**.
   - Vercel auto-detects Next.js — leave the build settings as default
     (`next build`, output handled automatically).
   - Click **Deploy**. First deploy takes 1–2 minutes.
4. **You're live.** Vercel gives you a URL like `portfolio-yourname.vercel.app`.
   Every future `git push` to `main` auto-deploys a new version.

### Option B: Vercel CLI (no GitHub required)

From inside the `portfolio` folder:

```bash
npm install -g vercel
vercel login
vercel
```

Answer the prompts (link to a new project, accept the defaults). This deploys
a preview. When you're happy with it:

```bash
vercel --prod
```

This pushes it to your permanent production URL.

---

## 4. Custom domain (optional)

If you own a domain (or want to buy one):

1. In the Vercel dashboard, open your project → **Settings → Domains**.
2. Enter the domain and follow Vercel's instructions to either buy it through
   them or point your existing domain's DNS records (they'll show you the
   exact A/CNAME records to add at your registrar).
3. Vercel issues an SSL certificate automatically — no extra steps.

---

## 5. Ongoing edits after deploy

Once connected to GitHub (Option A), your workflow going forward is just:

```bash
# edit data/experience.ts, data/achievements.ts, etc.
git add .
git commit -m "Update experience"
git push
```

Vercel picks up the push and redeploys automatically — usually live within
a minute.
