# Labdoo Flow Explorer

An interactive visualization tool for exploring the global Labdoo laptop donation
network : where devices come from, where demand is still unmet, and where devices
get stuck in the delivery pipeline.

Built with [Next.js](https://nextjs.org), [D3.js](https://d3js.org), and
[PapaParse](https://www.papaparse.com), bootstrapped from
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Team Albatross · NEIdI 2026 · University of Rostock

---

## Project Overview

The tool answers three research questions, each represented as its own tab:

- **Origins** — where donations come from, and how that has changed over time
  (arc flow map, timeline, top-origin bar chart)
- **Demand & Delivery** — where devices go, and how much demand is still unmet
  (proportional bubble map, stacked demand bar chart)
- **Pipeline Status** — where devices get stuck in the donation process
  (funnel chart, country backlog panel)

All three tabs share a region filter in the sidebar, and the summary statistics
at the top of the page update live based on the selected region.

---

## File Structure

```
src/app/project/
├── page.tsx                      ← main entry point: tab layout, sidebar, stats strip
└── components/
    ├── Regions.ts                ← shared region definitions used for filtering across all tabs
    ├── MapBase.tsx                ← shared D3 world map base (projection, zoom, pan)
    ├── Q1Origins.tsx              ← Origins tab: arc map, timeline, hub-level view
    ├── Q2Demand.tsx               ← Demand & Delivery tab: bubble map, stacked bar chart
    └── Q3Pipeline.tsx             ← Pipeline Status tab: funnel chart, country backlog

public/data/
├── origin-flows.csv               ← trips per origin country per year
├── arc-pairs.csv                  ← origin-destination-year trip pairs (Q1 arc map)
├── destination-flows.csv          ← cross-border trips received per destination country
├── demand-gap.csv                 ← needed/delivered/remaining devices per country
├── pipeline-stages.csv            ← total device count per pipeline stage
├── pipeline-by-country.csv        ← pre-delivery backlog per country
├── pipeline-by-country-stage.csv  ← pre-delivery backlog per country, per stage
├── hubs.csv                       ← open Labdoo hubs with coordinates and delivery stats
└── world.geojson                  ← world country boundaries, used as the map basemap

data/
├── prepare.py                     ← cleaning script: raw CSVs → the 8 files in public/data/
└── raw/                           ← original, unmodified CSV exports from Labdoo
    ├── Dootrips.csv
    ├── Dootronics.csv
    ├── Edoovillages.csv
    └── Hubs_geolocated_by_city.csv
```

**Entry point:** `src/app/project/page.tsx`. This is where the tab navigation, the
region filter sidebar, and the top summary statistics live. The three tab
components (`Q1Origins.tsx`, `Q2Demand.tsx`, `Q3Pipeline.tsx`) are rendered from
here and stay mounted at all times (hidden with `display: none` when inactive)
so the map does not lose its zoom and pan state when switching tabs.

---

## Dependencies

All dependencies are managed locally through `package.json`. No external API
tokens or keys are required anywhere in this project — all data (the four raw
CSVs, the cleaned output CSVs, and the world map GeoJSON) is stored locally
under `public/data/`, and the app reads it client-side. Aside from the initial
`npm install`, the project runs fully offline.

Main libraries:
 
| Package | Purpose |
|---|---|
| `next` | Application framework (routing, build, rendering) |
| `react` | UI library — component state and rendering, used directly via hooks (`useState`, `useEffect`, `useRef`, `useCallback`) in every component |
| `typescript` | Type safety |
| `d3` | Map projection, zoom/pan, arcs, charts |
| `topojson-client` | Converts the world map TopoJSON into drawable GeoJSON features |
| `papaparse` | Parses the CSV data files client-side |

Dev dependencies (`@types/d3`, `@types/papaparse`) provide TypeScript type
definitions for editor autocomplete and compile-time checks, they have no
effect on the running application.

---

## Setup & Installation

**Requirements:** [Node.js](https://nodejs.org) (LTS version recommended) and npm.
On macOS, the easiest way to install Node is via [Homebrew](https://brew.sh):

```bash
brew install node
node --version
npm --version
```

**1. Clone the repository** into a directory on your computer.

**2. Install dependencies.** From the project root, run:

```bash
npm install
```

This creates a `node_modules` folder containing every dependency listed in
`package.json`. Re-run this command any time a dependency is added or removed.

**3. Regenerate the data (optional).** The cleaned CSVs in `public/data/` are
already included in the repository, so this step is not required to run the
app. If you want to regenerate them from the raw source files yourself:

```bash
cd data
python3 prepare.py
```

This requires Python 3 and `pandas` (`pip install pandas`). The script reads
the four raw CSVs from `data/raw/`, applies the cleaning rules described
in-line in `prepare.py`, and writes the 8 output files to `public/data/`.

**4. Run the app in development mode.** From the project root:

```bash
npm run dev
```

Open [http://localhost:3000/project](http://localhost:3000/project) in your
browser. The page hot-reloads automatically as files are edited and saved —
no manual refresh needed.

---

## Notes for Future Developers

- **No API tokens are needed anywhere in this project.** All data, including
  the world map basemap, is stored as static local files under `public/data/`.
- **The map's basemap** (`world.geojson`) was originally sourced from
  [world-atlas](https://github.com/topojson/world-atlas) via:
  ```bash
  curl -o public/data/world.geojson https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json
  ```
  It only needs to be re-downloaded if the file is ever removed from the repo.
- **Data cleaning logic** lives entirely in `data/prepare.py`, with comments
  explaining each filtering and aggregation decision. The three trip-derived
  output files (`origin-flows.csv`, `arc-pairs.csv`, `destination-flows.csv`)
  are all built from one shared filtered dataset (`real_trips`) inside that
  script, specifically so they cannot disagree with each other about which
  countries are real origins or destinations.
- **`MapBase.tsx`** is shared between the Origins and Demand & Delivery tabs.
  It handles the map projection, zoom, and pan behaviour, and passes the
  D3 projection function up to whichever tab is using it, so that anything
  drawn on top (arcs, bubbles, dots) stays correctly aligned to the map at
  any zoom level.
- **`Regions.ts`** is the single source of truth for which countries belong
  to which region filter. All three tabs and the top-level stats import from
  here, so a country's region classification only ever needs to be changed
  in one place.

---

## Code of Conduct

This project meets the following requirements:

- The entire implementation lives inside `src/app/project/`. Data assets are
  stored one level up, under `public/data/` and `data/`.
- All dependencies are managed locally via `package.json` — no `<script>` or
  `<style>` tags are used anywhere.
- The project is deployable as a standalone website with no external server
  components and no API tokens.
- A `.gitignore` file controls what gets pushed to the repository
  (`node_modules/`, `.next/`, etc. are excluded).

---

## Learn More

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font).

To learn more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js)