# Kronisk Syg

Website for det danske AI-band og fortælleunivers **Kronisk Syg** og
konceptalbummet **Fest i Hvalen**.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS 3 med tematiske farver: ocean, brass, amber, accent
- Statisk-prerenderet — alle sider serveres som static (`○ Static`)
- Billeder leveres som responsive WebP i `public/images/` (960 & 1600 bredder)

## Sider

- `/` — Forside. Hero, projekt-introduktion, manifest, Fest i Hvalen-teaser,
  lytte-CTA og slut-CTA.
- `/fest-i-hvalen` — Album landing. Parallax-hero, “Hvad er Fest i Hvalen?”,
  9-fase albumrejse (timeline), karakterer, temaer, presse/lyt og slut-CTA.

## Motion og tilgængelighed

- Parallax styres via `ParallaxHero` (rAF + scroll) og CSS `--depth`-variabler.
- Scroll-reveal styres af `<Reveal />` med IntersectionObserver.
- `prefers-reduced-motion` slukker alle bevægelser og animationer.
- Fokus-states bruger en messing-ring; `Spring til hovedindhold`-link findes.

## Udvikling

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produktionsbuild
npm run start    # produktionsserver
npm run lint
```

## Indhold

- Tonen er voksen, filmisk, maritim, theatrical cruise-cabaret, let steampunk.
- Lytte-links er endnu ikke leveret — komponenten `ListenPlaceholder` rummer
  pladsholdere, klar til ægte links.
