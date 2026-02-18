# The Magpie Institute

Multi-page website for an interdisciplinary research institute organized around principles rather than disciplines.

## Stack

- React 18 + Vite + React Router v6
- Plain CSS with CSS custom properties (no Tailwind/CSS-in-JS)
- Google Fonts: EB Garamond (display), Crimson Text (body), Inter (UI), DM Sans + Instrument Serif (Principles page)

## Project Structure

```
src/
  main.jsx                  # Entry point with createBrowserRouter
  App.jsx                   # Layout shell: Nav + Outlet + Footer
  styles/                   # Global CSS, nav, footer styles
  components/               # Nav, Footer, MagpieLogo, card components
  pages/                    # Home, Ideas, Experiments, Events, People, Principles
  features/principles-diagram/  # Interactive SVG constellation diagram + data
  data/                     # Placeholder content (ideas, experiments, events, people)
```

## Routes

- `/` — Home (Hero + About)
- `/ideas` — Ideas grid
- `/experiments` — Experiments list
- `/events` — Events grid
- `/people` — People grid
- `/principles` — Interactive constellation diagram (dark theme)

## Key Design Decisions

- Light theme (paper-white #FAFAFA) for all pages except Principles
- Principles page uses dark theme (#0E1117) via `body.dark-theme` class toggle
- Nav adapts to dark/light via CSS overrides on `body.dark-theme`
- Principles diagram uses all inline styles (idiomatic for programmatic SVG)
- `principles.md` is the source-of-truth for principle descriptions and connections

## Reference Files

- `remixed-14f64eae.html` — Original HTML sketch used as design baseline
- `src/App.v2-snapshot.jsx` — Legacy v2 diagram snapshot (pre-disciplines)

## Commands

```bash
npm run dev      # Dev server at localhost:5173
npm run build    # Production build
npm run preview  # Preview production build
```
