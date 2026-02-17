# The Magpie Institute

An interactive constellation diagram of seven organizing principles for an interdisciplinary research institute.

## Stack

- React 18 + Vite
- Single-component app (`src/App.jsx`) — pure SVG, no external UI libraries
- Only React hooks: `useState`, `useEffect`, `useRef`, `useCallback`
- Fonts from Google Fonts CDN (DM Sans, Instrument Serif)

## Project Structure

- `src/App.jsx` — Current version (v3): constellation + expandable discipline spokes + orbiting ring for The In-Between
- `src/App.v2-snapshot.jsx` — Snapshot of v2 for reference/revert
- `src/main.jsx` — Entry point
- `principles.md` — Source-of-truth document for principle descriptions, roles, and connection labels

## Key Concepts

- **7 principles**: The In-Between (center), Generative Thresholds, Coherence, Parallax, Embodiment, Animacy, Recursive Self-Shaping
- **Connections**: Every pair of outer principles has a labeled relationship; each outer principle also connects to The In-Between
- **Interactions**: Hover nodes for descriptions, hover connection lines for relationship labels, click to expand discipline spokes

## Design Notes

- Dark background (#0E1117), muted earth-tone palette
- Ambient animation: gentle drift, breathing rings, subtle curves
- Discipline spokes fan outward for outer nodes; orbit as a ring for The In-Between
- Connection lines bow outward (curved) to stay clear of radial center lines

## Commands

```bash
npm run dev      # Dev server at localhost:5173
npm run build    # Production build
npm run preview  # Preview production build
```
