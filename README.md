# The Magpie Institute

Website for The Magpie Institute — collectors of ideas that don't yet have a home.

## Setup

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Pages

- **Home** (`/`) — Hero and About section
- **Ideas** (`/ideas`) — Essays, research notes, and collections
- **Experiments** (`/experiments`) — Active investigations at disciplinary boundaries
- **Events** (`/events`) — Salons, workshops, and gatherings
- **People** (`/people`) — Fellows and visiting scholars
- **Principles** (`/principles`) — Interactive constellation diagram of seven organizing principles

## Principles Diagram

The Principles page features an interactive SVG constellation showing seven organizing principles and their relationships:

- **Hover** a principle node to see its description and highlight connections
- **Hover** any connection line (outer or radial) to see how two principles relate
- **Click** a principle to expand its discipline spokes (click again to collapse)
- The In-Between expands as an orbiting ring; outer principles expand as a fan

## Tech Stack

- React 18 + Vite + React Router v6
- Plain CSS with custom properties
- No dependencies beyond React and React Router
