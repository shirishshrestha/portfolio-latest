# Implementation guide

## Build order

1. Confirm the missing inputs in `guides/content-inventory.md`.
2. Select the framework and record the decision in this file.
3. Create the typed content model and populate only verified fields.
4. Define the token layer for color, type, spacing, radii, borders, shadows, and z-index.
5. Build the semantic shell: layout, navigation, skip link, focus styles, and footer.
6. Build the hero and selected work using real approved media.
7. Add experience, capabilities, about, and contact.
8. Add project detail routes only after the homepage content is stable.
9. Add motion only after static layout and keyboard behavior pass review.
10. Run the full verification matrix and record results.

## Component boundaries

Prefer small components with one responsibility:

- `SiteHeader`
- `MobileNavigation`
- `Hero`
- `Proofline`
- `FeaturedProject`
- `ProjectIndex`
- `ExperienceTimeline`
- `CapabilityGroups`
- `AboutPanel`
- `ContactPanel`
- `SiteFooter`

Keep static layout in server-rendered components when using Next.js. Isolate Motion, pointer tracking, and scroll behavior in client leaf components.

## Copy rules

- Use first person only where it makes the relationship clear.
- Prefer concrete verbs: build, model, integrate, optimize, test, ship.
- Explain systems in plain language before listing tools.
- Keep one CTA label per intent across the site.
- Do not publish claims from the resume that have not been checked for confidentiality or measurement context.

## Media rules

Required before featured project implementation:

- One approved portrait or hero artifact.
- One real screenshot or approved visual for each featured project.
- Desktop and mobile crops where the UI needs both.
- Alt text written from the reader's point of view.
- Clear licensing or ownership for any external image.

Do not use generic stock images for software projects and do not fabricate application screens with CSS rectangles.

## Motion rules

Use the animation decision framework from `emil-design-eng`:

- Animate only when it explains hierarchy, state, spatial relationship, feedback, or a meaningful first-time moment.
- Use ease-out for entry, ease-in-out for movement, and custom curves where needed.
- Keep ordinary UI interactions under 300ms.
- Use transitions for rapidly interruptible states.
- Never animate from `scale(0)`.
- Respect reduced motion and hover capability.

## Data integrity rules

Every project record must carry a publication state:

- `published`: verified and approved for the public site.
- `needs-verification`: useful candidate but missing links, permission, role, or metrics.
- `private`: keep in source notes only; do not render publicly.

The renderer must not accidentally publish `private` or `needs-verification` records.

## Suggested file structure after stack approval

```text
app/
  layout.tsx
  page.tsx
  work/page.tsx
  work/[slug]/page.tsx
  about/page.tsx
components/
  site-header.tsx
  hero.tsx
  proofline.tsx
  featured-project.tsx
  experience-timeline.tsx
  capability-groups.tsx
  contact-panel.tsx
content/
  projects.ts
  experience.ts
  profile.ts
public/
  images/
styles/
  tokens.css
```

This is a proposal, not a mandate. Update it when the approved framework differs.

## Implementation record: 2026-10-25

- Selected stack: Next.js 16 App Router, TypeScript, Tailwind CSS, local Gilroy fonts, `motion/react`, and Phosphor icons.
- Source media: approved legacy portfolio assets copied into `public/images/` and `app/fonts/`. They are used as real portrait and archive-project media, not as visual-system references.
- Design source: code-first implementation based on the approved guides, verified resume/site content, user feedback, and the required frontend-design skills. The current Penpot boards are exploratory only.
- Context7 use: checked current Next.js local-font/static-image guidance and Motion reduced-motion usage before implementation.
- Checks passed: ESLint; TypeScript; static production build with `next build --webpack`; browser rendering at default and 390px widths; keyboard entry through the skip link; visible focus styling; reduced-motion CSS and Motion hook present.
- Environment note: plain `next build` currently fails before code compilation because this host prevents Turbopack's CSS worker from binding an internal port. The Webpack production build completed successfully, so use `npm run build -- --webpack` here until the host restriction is removed.
- Still needs owner confirmation before public deployment: the LinkedIn URL, the featured-project descriptions/roles, and permission to expose every external project link.

## Theme implementation: 2026-10-25

- Added `next-themes` with `attribute="class"`, system preference detection, persistent manual choice, hydration suppression, and transition suppression during theme changes.
- Added an accessible header toggle with an explicit light/dark action label and sun/moon state icon.
- Verified both theme states in the local browser and retained the same semantic color-token system across them.
- 21st.dev's configured MCP tools are not exposed in this current Codex session. Component research used the public 21st catalog as a temporary reference only; restart Codex before treating 21st as MCP-verified.

## Visual feedback tooling: 2026-10-25

- Added `agentation` as a development dependency and mounted its toolbar through `components/agentation-feedback.tsx`.
- The toolbar appears only when `NODE_ENV=development`; it is excluded from the production portfolio.
- Direct Agentation MCP sync is not configured. Use the toolbar to annotate an element and copy its generated feedback into this chat, or explicitly request MCP setup later.

## Hydration note: 2026-10-26

- Added `suppressHydrationWarning` to the root `body` as well as `html`. This narrowly suppresses the known development-only mismatch caused by a browser extension injecting `cz-shortcut-listen` before React hydration; application-generated markup remains deterministic.

## Mascot development refresh: 2026-10-26

- The mascot pointer effect has a fixed `[buttonRef]` dependency array. A reported `[]` to `[object Object]` dependency-size warning was consistent with stale hook state during hot reload after changing its ref wiring.
- Added Next.js's documented `// @refresh reset` directive to `components/interactive-mascot.tsx`. Development edits now remount this component instead of retaining an older effect signature. This does not change production behavior or remove the required dependency.
- Verified a fresh browser load and mascot guide open/close with no console warnings or errors. ESLint passes. Production compilation succeeds, but the full build is blocked by an unrelated Motion `Variants` type error in `components/ui/dock-two.tsx:74` (`transition.ease` inferred as `string`).

## Homepage scope: 2026-10-25

- Removed the legacy Archive section from the homepage. The selected-work section now carries the project evidence; the footer GitHub link remains the path to additional public code.

## Tech stack grid: 2026-10-26

- Replaced the plain capability list with a Magnified Bento-style tech-stack surface containing nine verified technologies.
- Three local-logo rows move beneath a pointer-positioned magnifying lens, following the 21st.dev reference while replacing its generic tags with the portfolio's real technology marks.
- SVG brand marks are stored locally and sourced from the public Simple Icons CDN, with text fallbacks; no runtime logo requests, remote videos, Hugeicons dependency, or decorative frame assets were added. The existing `motion/react` and reduced-motion systems remain in use.
- Verified ESLint, TypeScript, Webpack production build, and localhost:3000 browser behavior at a narrow viewport. Existing development mascot and feedback overlays remain present during local preview only.

## Footer utility rail: 2026-10-26

- Separated the footer copyright and “Back to top” action from the halftone canvas with an opaque bottom rail, a clear divider, and responsive stacking below 720px.
- Raised the animated halftone wordmark by 110px on desktop and 140px on narrow screens so it reads as a deliberate footer feature rather than clipped decoration.
- Reduced the narrow-screen footer minimum height from 620px to 500px while retaining the footer links, wordmark, and utility rail.
- Verified the rail remains readable at the local preview's narrow viewport. ESLint and the Webpack production build pass.

## Selected brand integration: 2026-10-26

- Replaced the text navbar monogram with a trimmed derivative of the owner's selected transparent lockup. Source files remain intact.
- The dark theme uses a white silhouette of the selected lockup; light mode retains its source colors. Below 540px, navigation occupies a second row to preserve the full logo.
- Generated the browser favicon (16/32/48px), 192px icon and 180px Apple icon from the selected icon source through `scripts/prepare-brand-assets.mjs` and Next.js file-based metadata.
- ESLint and the Webpack production build, including TypeScript, pass. Browser checks at 320px, 390px, 768px and 1440px showed no header overlap or horizontal overflow. Inspected light and dark theme rendering and confirmed the generated icon links in the document head.
