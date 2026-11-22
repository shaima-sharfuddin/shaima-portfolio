# Shaima Sharfuddin — Portfolio

Personal portfolio built with **React + Vite** (JavaScript, HTML5, CSS3). No backend, no paid services.

## Run it

```bash
npm install
npm run dev       # local development
npm run build     # production build → dist/
npm run preview   # serve the production build
npm run lint
```

## Updating content

| What | Where |
| --- | --- |
| Name, email, GitHub, **LinkedIn URL**, **resume file** | `src/data/siteConfig.js` |
| Skills, projects, experience, education, services | `src/data/content.js` |
| SEO title / description | `index.html` |
| Colours, fonts, spacing | `:root` tokens at the top of `src/index.css` |

- **LinkedIn** — set `linkedinUrl`. While it is empty, LinkedIn links are hidden (no dead links).
- **Resume** — copy the PDF into `public/` (e.g. `public/Shaima-Sharfuddin-Resume.pdf`) and set
  `resumeUrl: '/Shaima-Sharfuddin-Resume.pdf'`. While it is empty, "Download Resume" scrolls to Contact.
- **Project links** — set `repoUrl` / `liveUrl` per project. Empty values show "coming soon" labels.

## Structure

```
src/
  App.jsx               page layout
  components/           one component per section + small shared pieces
  data/                 all editable content
  hooks/                scroll-aware navigation helpers
  index.css             design tokens + styles
```

## Deploying

The `dist/` folder is a static site — it works on GitHub Pages, Netlify or Vercel free tiers.
For GitHub Pages under a sub-path (e.g. `/portfolio/`), set `base: '/portfolio/'` in `vite.config.js`.
