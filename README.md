# The Magpie Institute — Principles Diagram

Interactive constellation diagram of the seven organizing principles.

## Setup

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Versions

- **`src/App.jsx`** — Current version (v3): constellation + expandable discipline spokes + orbiting ring for In-Between
- **`src/App.v2-snapshot.jsx`** — Snapshot (v2): constellation with ambient animation, explorable connections, no disciplines

To revert to v2:
```bash
cp src/App.v2-snapshot.jsx src/App.jsx
```

## Interactions

- **Hover** a principle node to see its description and highlight connections
- **Hover** any connection line (outer or radial) to see how two principles relate
- **Click** a principle to expand its discipline spokes (click again to collapse)
- The In-Between expands as an orbiting ring; outer principles expand as a fan
- Bottom legend also works as navigation

## No dependencies beyond React

The component uses only `useState`, `useEffect`, `useRef`, and `useCallback`. Fonts load from Google Fonts CDN.
