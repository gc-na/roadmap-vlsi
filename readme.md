# VLSI Korea Roadmaps

Semiconductor design career roadmaps built on the [roadmap.sh](https://roadmap.sh) engine (MIT-licensed fork from `nilbuild/developer-roadmap`).

**Live preview**: `http://localhost:3000` (run `pnpm dev`)

---

## Goal

A standalone interactive roadmap site at **roadmap.vlsi.kr** that maps semiconductor design career paths for students, junior engineers, and experienced professionals.

Each roadmap shows a visual skill tree, and each skill node links to learning resources (books, courses, videos) with **affiliate tags**.

## Current State

7 VLSI tracks live, all rendering clean:

| Slug | Title | Type | Nodes |
|------|-------|------|-------|
| `sta` | Static Timing Analysis | skill | 4 rows × 4 boxes |
| `physical-design` | Physical Design | skill | 4 rows × 4 boxes |
| `rtl-design` | RTL Design | role | 4 rows × 4 boxes |
| `design-verification` | Design Verification | role | 4 rows × 4 boxes |
| `analog-design` | Analog / Mixed-Signal | role | 4 rows × 4 boxes |
| `dft` | Design for Test | skill | 4 rows × 4 boxes |
| `eda-toolflow` | EDA Toolflow Engineering | skill | 4 rows × 4 boxes |

## Project Structure

```
projects/roadmap-vlsi/
├── astro.config.mjs           # Astro 5 config (site: roadmap.vlsi.kr)
├── package.json               # Dependencies (roadmap-renderer ^1.0.7)
├── .env                       # PUBLIC_API_URL, PUBLIC_APP_URL = localhost:3000
├── src/
│   ├── data/roadmaps/         # Roadmap JSON data (Balsamiq format)
│   │   ├── sta/sta.json       #  41 Balsamiq controls
│   │   ├── physical-design/
│   │   ├── rtl-design/
│   │   ├── design-verification/
│   │   ├── analog-design/
│   │   ├── dft/
│   │   └── eda-toolflow/
│   ├── pages/
│   │   ├── index.astro        # Homepage (VLSI Korea branded)
│   │   ├── [roadmapId]/
│   │   │   ├── index.astro    # Main roadmap page (renders SVG)
│   │   │   ├── svg.astro      # Standalone SVG page
│   │   │   └── [...topicId].astro  # Topic detail (redirects home)
│   │   ├── [roadmapId].json.ts    # Serves Balsamiq JSON from disk
│   │   ├── pages.json.ts      # Lists all VLSI roadmaps
│   │   └── v1-stats.json.ts   # Stub (no git history in shallow clone)
│   ├── queries/
│   │   ├── official-roadmap.ts    # Static VLSI_ROADMAPS metadata
│   │   └── official-project.ts    # Stub (returns [])
│   ├── lib/
│   │   ├── roadmap-renderer-client.ts  # Client-side renderer module
│   │   └── config.ts          # Site title, SEO keywords
│   ├── components/
│   │   ├── Navigation/Navigation.astro  # VLSI Korea nav bar
│   │   └── ChangelogBanner.astro        # Static VLSI banner
│   └── layouts/BaseLayout.astro  # Updated OG tags, meta
├── node_modules/roadmap-renderer/  # Renders Balsamiq mockup → SVG
└── dist/                      # Build output (server mode)
```

## Key Architecture Decisions

### Renderer: Balsamiq format, NOT React Flow

**This is the hardest-won insight.** The `roadmap-renderer` npm package (`wireframeJSONToSVG`) expects **Balsamiq mockup format**, not React Flow nodes/edges:

```json
{
  "mockup": {
    "measuredW": 1200,
    "measuredH": 800,
    "mockupW": 1200,
    "mockupH": 800,
    "controls": {
      "control": [
        {
          "typeID": "Label",
          "x": 150, "y": 30,
          "measuredW": 400, "measuredH": 40,
          "properties": { "text": "Title", "size": 28, "bold": true },
          "zOrder": 1
        },
        {
          "typeID": "TextInput",
          "x": 50, "y": 105,
          "measuredW": 140, "measuredH": 45,
          "properties": { "text": "Skill Name", "size": 13, ... },
          "zOrder": 2
        },
        {
          "typeID": "Arrow",
          "x": 190, "y": 127,
          "measuredW": 20, "measuredH": 2,
          "properties": { "p0": {...}, "p1": {...}, "p2": {...} },
          "zOrder": 1
        }
      ]
    }
  }
}
```

The React Flow format (nodes/edges) was used by `@roadmapsh/editor` — a **private workspace package** not available on npm. We replaced it entirely with `roadmap-renderer` + Balsamiq format.

Supported `typeID`s: `Label`, `TextInput`, `Canvas` (background), `Arrow`, `Icon`, `HRule`, `__group__`.

### Client-side rendering pipeline

```
Browser loads /sta
  → <script type="module"> imports src/lib/roadmap-renderer-client.ts
  → renderRoadmap() fetches /sta.json
  → wireframeJSONToSVG(json) returns SVGElement
  → Injected into #resource-svg-wrap div
  → Each leaf topic is wrapped in a `__group__` control (data-group-id="{slug}@{slug}")
  → Clicking a group fetches /{roadmapId}/{slug}@{slug} (rendered markdown fragment)
    and shows it in a modal (see openTopic() in roadmap-renderer-client.ts)
```

Critical: The `<script>` tag in `.astro` files must **not** use `is:inline` (that bypasses Vite bundling). Without `is:inline`, Astro/Vite bundles the script as a module.

### JSON endpoint

`/sta.json` is served by `src/pages/[roadmapId].json.ts` which reads the Balsamiq JSON file from disk at `src/data/roadmaps/{id}/{id}.json`. Previously it returned static metadata with empty `nodes: []`, which caused the renderer to crash.

### Topic content pages

`src/pages/[roadmapId]/[...topicId].astro` reads `src/data/roadmaps/{roadmapId}/content/{slug}@{slug}.md` directly from disk, renders it with `markdownToHtmlWithHighlighting()`, and rewrites `[@type@Title](url)` resource links into emoji-prefixed labels (📖 book, 🎓 course, 🎥 video, 📰 article). This same fragment is what the click-to-open modal fetches.

## Remaining Work

### Done
1. ✅ **Content markdown files** — All 112 `content/{slug}@{slug}.md` files written (16 per roadmap × 7 roadmaps: STA, Physical Design, RTL Design, Design Verification, Analog Design, DFT, EDA Toolflow). Each file has a technical description plus `@book@`/`@course@`/`@video@`/`@article@` resource links using search-style URLs (Amazon `/s?k=...`, Udemy `/courses/search/?q=...`, YouTube `/results?search_query=...`, vlsi.kr `/?s=...`) so they can't 404. Launched without affiliate tags for now.
2. ✅ **Affiliate tagging** — Deferred until traffic/sign-ups exist. When ready:
   - Get Amazon Associates approval, then append `&tag=YOUR_TAG` to all Amazon search URLs
   - Get Udemy partner/referral code, append to Udemy search URLs
   - Use find/replace across `src/data/roadmaps/**/content/*.md` to add them
4. ✅ Removed ~80 leftover SW roadmaps from `src/data/roadmaps/` (kept only the 7 VLSI dirs)
5. ✅ Replaced roadmap.sh logo/favicon with VLSI Korea branding (`src/icons/vlsi-logo.svg`, `public/favicon.svg`, `public/manifest/*`)
6. ✅ Footer rewritten with VLSI Korea branding and nav links (no more "roadmap.sh is the 7th most starred...")
7. ✅ Removed Google Analytics/Tag Manager, Clarity, HubSpot, Reddit Pixel, Bluconic, OneTrust, LinkedIn Insight from `BaseLayout.astro`
8. ✅ Fixed hardcoded `https://roadmap.sh` URLs (ShareIcons, JSON-LD, OG image base URL) → `https://roadmap.vlsi.kr`
9. ✅ Mobile navigation — hamburger menu in `src/components/Navigation/Navigation.astro` (CSS/JS toggle, no extra deps)
10. ✅ Search/filter for roadmaps listing — client-side filter on the homepage (`src/pages/index.astro`), filters both Role-based and Skill-based roadmap grids by title
12. ✅ Topic nodes are now clickable — JSON data for all 7 roadmaps was restructured so each leaf topic is a `__group__` with a stable `{slug}@{slug}` id, and clicking a node opens its content in a modal (previously nodes were not clickable at all and the topic page's content API call was broken/non-functional)

### High priority — remaining
3. **Deploy to Vercel** (requires your GitHub/Vercel accounts — not done by this pass)
   ```bash
   cd projects/roadmap-vlsi
   git remote add origin git@github.com:chase-na/roadmap-vlsi.git
   git push -u origin main
   # Vercel: Import repo → Framework: Other (Astro) → Build: pnpm build → Domain: roadmap.vlsi.kr
   ```

### Low priority — remaining
11. **Multi-language (Korean version)** — not implemented; scope assessment below.

   Full i18n (translating all 112 content files + UI strings + a `/ko/*` route tree) is a large, separate effort and was intentionally not attempted in this pass to avoid a half-translated site. Recommended approach when ready:
   - Add `ko` as a second locale using Astro's built-in i18n routing (`i18n.locales: ['en', 'ko']`, `defaultLocale: 'en'`), which gives `/ko/sta`, `/ko/physical-design`, etc. for free via `[roadmapId]` becoming `[locale]/[roadmapId]`.
   - Translate UI strings first (Navigation, Footer, homepage hero/search placeholder, modal "Loading…"/"Failed to load" text) — small, fixed surface area.
   - Translate content markdown incrementally, roadmap by roadmap, falling back to the English file via `fs.existsSync` if a `content/{slug}@{slug}.ko.md` doesn't exist yet — this lets the Korean site ship immediately with partial coverage instead of blocking on all 112 translations.
   - Update `hreflang`/`og:locale` tags in `BaseLayout.astro` and the JSON-LD `inLanguage` field once `/ko/*` routes exist.

## Environment Variables

```
# .env (dev)
PUBLIC_API_URL=http://localhost:3000
PUBLIC_APP_URL=http://localhost:3000
```

## Commands

```bash
cd projects/roadmap-vlsi
export PATH=~/.npm-global/bin:$PATH

pnpm dev        # Dev server on :3000
pnpm build      # Production build
pnpm preview    # Preview production build
```

## Stubbed Files (removed @roadmapsh/editor dependency)

These 13 files were deleted and replaced with null-return stubs:
- `src/queries/ai-roadmap.ts`
- `src/queries/roadmap.ts` (replaced with functional stub)
- `src/components/EditorRoadmap/EditorRoadmap.tsx`
- `src/components/EditorRoadmap/EditorRoadmapRenderer.tsx`
- `src/components/UserProgress/UserProgressModal.tsx`
- `src/components/UserProgress/UserCustomProgressModal.tsx`
- `src/components/GenerateRoadmap/GenerateRoadmap.tsx`
- `src/components/CustomRoadmap/CustomRoadmap.tsx`
- `src/components/CustomRoadmap/FlowRoadmapRenderer.tsx`
- `src/components/TeamProgress/MemberProgressModal.tsx`
- `src/components/TeamProgress/MemberCustomProgressModal.tsx`
- `src/components/RoadmapAIChat/ChatRoadmapRenderer.tsx`
- `src/components/GenerateCourse/AICourseRoadmapView.tsx`
- `src/components/AIRoadmap/AIRoadmapRegenerate.tsx`
- `src/components/UserPublicProfile/UserProfileRoadmapRenderer.tsx`

Additional component stubs (imported by remaining code): `PersonalizedRoadmap`, `CustomRoadmap`, `GenerateRoadmap`, `FlowRoadmapRenderer`.

All AI/custom-roadmap pages redirect to `/`.
