# Sheila Monera Cabarique — Portfolio

An interactive CV and portfolio site, built as a filterable, animated
alternative to a static resume PDF. Live at
[sheila-moneracabarique-website.vercel.app](https://sheila-moneracabarique-website.vercel.app).

## Built with

- **Next.js** (App Router) for routing and server-rendered pages
- **TypeScript** throughout
- **Tailwind CSS** for styling
- **Framer Motion** for list/filter animations
- Deployed on **Vercel**, with automatic redeploys on every push to `main`

## Notes on how it works

- Roles that aren't a clean fit for Employment, Research, or Project (club
  leadership, varsity athletics) are tagged `Other` for filtering, with an
  optional `displayType` (e.g. "Club", "Athletics") shown on the card
  instead of the generic label
- Experience entries auto-sort most-recent-first based on parsed
  start/end dates, regardless of the order they're written in the data
  file
- SEO handled via Next.js's Metadata API: `sitemap.xml` and `robots.txt`
  are generated dynamically, and Open Graph metadata is set for clean
  link previews

## Project structure

```
app/
  layout.tsx           Root layout — fonts, theme provider, header/footer, sidebar
  page.tsx              Home route: the filterable experience list
  achievements/page.tsx Academic + athletic achievements, side by side
  about/page.tsx         Narrative about page
  robots.ts              Generates /robots.txt
  sitemap.ts              Generates /sitemap.xml
  globals.css            Design tokens (colors) for light + dark mode

components/
  Header.tsx / Footer.tsx
  Sidebar.tsx                            Photo, education, languages, skills
  ThemeProvider.tsx / ThemeToggle.tsx     Dark/light mode
  FilterBar.tsx                          Subject area + role type filter tabs
  ExperienceList.tsx                     Filter state, sorting, animated list
  ExperienceCard.tsx                     One experience entry (reusable)
  AchievementColumn.tsx                  One achievements column (reusable)
  AchievementCard.tsx                    One achievement entry, with optional photo

data/
  experience.ts           Experience/CV entries
  education.ts             Degree entries
  skills.ts                 Skill groups + languages
  achievements.ts           Academic and athletic achievements

lib/
  types.ts                  Shared TypeScript types for the data above

public/
  achievements/              Achievement photos/certificates
  headshot.jpg                Profile photo
  resume.pdf                  Downloadable resume
```

Content lives entirely in `data/`; components render whatever is in those
arrays, so updating a role, degree, or achievement never requires
touching component code.

## Running locally

Requires [Node.js](https://nodejs.org) 18.18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## License

Personal project, not licensed for reuse.