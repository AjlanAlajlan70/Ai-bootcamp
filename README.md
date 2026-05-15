# معسكر بناء التطبيقات بالذكاء الاصطناعي

Workshop companion site for the 4-day AI coding bootcamp at King Saud University. Mobile-first, Arabic (RTL), built with React + Vite, themed as a desktop lofi office with a CRT monitor.

## Run locally

```bash
pnpm install
pnpm dev
```

Open <http://localhost:5173/Ai-bootcamp/>.

## Build

```bash
pnpm build
pnpm preview
```

## Deploy

GitHub Actions publishes `dist/` to GitHub Pages on every push to `main`
(`.github/workflows/deploy.yml`). Live URL:
<https://AjlanAlajlan70.github.io/Ai-bootcamp/>.

To enable: in the repo settings → **Pages** → set source to **GitHub Actions**.

## Layout

```
index.html              entry HTML
vite.config.js          base path /Ai-bootcamp/
src/
  main.jsx              mounts <Shell>
  Shell.jsx             office backdrop + CRT monitor + view router
  data.js               curriculum content (rules, days, commands, prompts)
  components/
    primitives.jsx      Button, Card, Pill, CopyButton, Icon, Mascot, WisdomCard
    HomePage.jsx
    DaysIndexPage.jsx
    DayPage.jsx         concepts + boss-fight checklist (localStorage)
    CommandsPage.jsx
    PromptsPage.jsx
  assets/               mascot poses, logo, office scene
  styles/
    tokens.css          colors, type, fonts (Zanjabeel + JetBrains Mono)
    app.css             layout, hero, cards, monitor chrome
    fonts/              Zanjabeel OTF weights 100–900
```

Boss-fight progress persists to `localStorage` under `bootcamp:progress:day-{N}`.
Home and Days pages re-read it via the `bootcamp:progress` window event.

## Design system

The source-of-truth design system lives in `AI Bootcamp Design System/`
(brand README, color & type tokens, font files, mascot art, original HTML/JSX
prototype). The Vite app lifts those assets into `src/` and the prototype's
inline styles into `src/styles/app.css`.
