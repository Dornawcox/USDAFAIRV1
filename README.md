# USDA FAIR Tech Registry

A browsable, filterable registry of 132 USDA conservation software tools and datasets, each with auto-generated ETA (Ethical Technology Assessment) and DTAP (Data Trust & Access Profile) scores.

## Architecture — Git-Native & Static-First

```
usda-registry/
├── index.html          ← Main registry browser (self-contained, no build step)
├── registry.js         ← Single source of truth — all records as a JS module
├── README.md           ← This file
└── cards/
    ├── software-*.html ← One card per software tool (97 files)
    └── dataset-*.html  ← One card per dataset (35 files)
```

### How it works

All 132 tool/dataset records live in `registry.js` as a single JSON object. The index page imports this file and renders the registry UI entirely client-side — no server, no database, no build step required.

Each card in `cards/` is a static HTML file generated from the same records. Cards can be regenerated at any time by running the Python generator script.

### Deploy to GitHub Pages (zero-cost)

```bash
git init
git add .
git commit -m "initial registry"
git remote add origin https://github.com/YOUR-ORG/usda-registry.git
git push -u origin main
# Enable GitHub Pages → Settings → Pages → Source: main, / (root)
# Live at: https://YOUR-ORG.github.io/usda-registry/
```

## Adding or Editing a Tool

### Option A: Edit registry.js directly

Find the record in `registry.js` under `REGISTRY.software` or `REGISTRY.datasets`. Edit the fields, then regenerate the card:

```bash
python3 generate_cards.py  # re-renders cards/ from registry.js
```

### Option B: Submit a PR

1. Fork the repository
2. Edit `registry.js` (add/update a record)
3. Open a pull request — maintainers review and merge

## ETA / DTAP Scores

Scores are **auto-generated from available metadata** at confidence tier 1/3 (Provisional). To raise confidence:

| Tier | Label | Modifier | How to achieve |
|------|-------|----------|----------------|
| 1/3 | Provisional | ×0.92 | Auto-scored from registry data |
| 2/3 | Peer-reviewed | ×1.00 | Reviewed by second registrar |
| 3/3 | Audited | ×1.04 | Full ETA/DTAP audit conducted |

### ETA scoring (Software)
- **G1 Transparency** — documentation and link available
- **G2 Rights & Control** — publicly accessible
- **G3 No Lock-in** — no forced proprietary dependency
- **G4 Stewardship** — point of contact listed
- **Categories:** Data Ethics · Interoperability · Commons Fit · Accessibility

### DTAP scoring (Datasets)
- **D1 Consent** — access terms and consent documented
- **D2 Provenance** — methodology documented, steward identified
- **D3 Access** — aggregate data freely accessible
- **D4 Machine Readability** — non-proprietary format, API available
- **D5 Longitudinal Integrity** — temporal coverage, versioning
- **D6 Governance** — farmer/user representation, archival plan

## Next Steps: Dynamic Backend

This static architecture is designed to be replaced with a dynamic backend without changing the frontend:

```
Current:  index.html → registry.js (static)
Future:   index.html → /api/registry (Supabase / GitHub API / Node.js)
```

### Option A — GitHub API backend
```js
// Replace registry.js import with:
const REGISTRY = await fetch('https://api.github.com/repos/YOUR-ORG/usda-registry/contents/registry.js')
  .then(r => r.json())
  .then(r => JSON.parse(atob(r.content)));
```

### Option B — Supabase (full-featured)
- Migrate registry.js records into Supabase Postgres tables
- Enable Row-Level Security for role-based edit access
- Add real-time peer review threads, score history, and claim-level annotations
- Replace static filter UI with Supabase full-text search

### Option C — Next.js + Vercel
```bash
npx create-next-app usda-registry-app
# registry.js → lib/registry.ts (typed records)
# index.html → pages/index.tsx (server-side rendering)
# cards/*.html → pages/cards/[slug].tsx (dynamic routes)
```

## Data Source

`ConservationDataTools_31Oct2024.csv` — USDA/NRCS Conservation Data Tools inventory, October 2024.

97 Software/Model records · 35 Dataset records · 9 resource concern categories · 7 land use types
