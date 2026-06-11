# Dayanand Shah — Portfolio

A scroll-driven, three-act animated portfolio telling the story of an AI/ML engineer's career: **perception → reasoning → agency**.

Built with **React + Vite + Tailwind CSS + Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Production build:

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Where to edit content

**Everything lives in one file: [`src/data/content.js`](src/data/content.js).** No component changes needed for text edits.

| What | Where in `src/data/content.js` |
|---|---|
| Name, title, tagline, hook | `profile` object (top of file) |
| **Email** | `profile.email` (~line 17) |
| **GitHub URL** | `profile.github` (~line 18) |
| **LinkedIn URL** | `profile.linkedin` (~line 19) |
| **Medium URL** | `profile.medium` (~line 20) |
| Career story (3 acts, roles, bullets) | `acts` array |
| The animated 40% stat | `acts[1].stat` |
| Project cards | `projects` array |
| Skill groups | `skillGroups` array |
| Education | `education` object (bottom of file) |

Other tweakables:

- **Colors / theme** — `tailwind.config.js` (`ink`, `panel`, accent colors).
- **Fonts** — Google Fonts link in `index.html` + `fontFamily` in `tailwind.config.js`.
- **Page `<title>` / meta description** — `index.html`.

## Deploy

### Vercel (one-click)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Vite — accept the defaults (`npm run build`, output `dist`). Click **Deploy**.

Or via CLI: `npm i -g vercel && vercel`.

### Netlify (one-click)

1. Push to GitHub.
2. Go to [app.netlify.com/start](https://app.netlify.com/start), pick the repo.
3. Build command `npm run build`, publish directory `dist`. Click **Deploy site**.

Or drag-and-drop: run `npm run build` and drop the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

## Structure

```
src/
  data/content.js        ← ALL site content (edit here)
  components/
    Hero.jsx             ← name, typewriter title, particle background, CTA
    NeuralBackground.jsx ← canvas particle field (hero)
    ActScene.jsx         ← one full "scene" per career act
    Motif.jsx            ← evolving dots → graph → live network motif
    Projects.jsx         ← 3 featured project cards
    Skills.jsx           ← grouped skills grid
    Contact.jsx          ← closing CTA, email, social icons, footer
    Reveal.jsx           ← shared scroll-reveal animation wrappers
    Counter.jsx          ← animated number counters
    ScrollProgress.jsx   ← top scroll-progress bar
```

## Accessibility & performance notes

- All heavy motion (particles, typewriter, travelling pulses, counters) is disabled or simplified when the visitor has `prefers-reduced-motion` set.
- Semantic landmarks (`header`, `main`, `section`, `footer`), labelled sections, keyboard-focus rings, decorative graphics marked `aria-hidden`.
- No images to lazy-load; the only canvas caps its particle count and pauses when the tab is hidden.
