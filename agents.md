# Portfolio implementation instructions

## Project intent

This repository is the greenfield implementation workspace for Shirish Shrestha's new portfolio. Treat the existing public site as a source of content and links only. Do not reuse its colors, typography, layout, component styling, interaction patterns, or visual design system.

The primary audience is technical hiring managers, engineering leads, product collaborators, and clients evaluating frontend and full-stack capability. The site's job is to make Shirish's level, judgment, and shipped work obvious within the first minute, then provide enough evidence for a deeper review.

Read these guides before implementing or changing UI:

- [Content inventory](guides/content-inventory.md)
- [Design direction](guides/design-direction.md)
- [Implementation plan](guides/portfolio-implementation-plan.md)
- [Implementation guide](guides/implementation-guide.md)
- [Asset checklist](guides/asset-checklist.md)
- [Source coverage audit](guides/source-coverage-audit.md)
- [MCP workflow](guides/mcp-workflow.md)

## Required global skills

Use the following skills when their scope matches the work. Read the complete skill file before acting on it.

- [$design-taste-frontend](/Users/esewa/.agents/skills/design-taste-frontend/SKILL.md) for portfolio direction, anti-slop checks, design dials, responsive composition, motion constraints, and pre-flight review.
- [$frontend-design](/Users/esewa/.agents/skills/frontend-design/SKILL.md) for distinctive visual direction, typography, palette, layout exploration, and content-aware design decisions.
- [$emil-design-eng](/Users/esewa/.agents/skills/emil-design-eng/SKILL.md) for animation purpose, easing, timing, interaction polish, reduced motion, and component-level review format.
- [$better-accessibility](/Users/esewa/.agents/skills/better-accessibility/SKILL.md) for keyboard behavior, focus, accessible names, ARIA, contrast, zoom, and WCAG 2.2 checks.
- [$better-layout](/Users/esewa/.agents/skills/better-layout/SKILL.md) for responsive grouping, reading order, alignment, translation resilience, and mirrored layouts.
- [$better-typography](/Users/esewa/.agents/skills/better-typography/SKILL.md) for type scale, wrapping, truncation, font loading, punctuation, and text rhythm.
- [$better-colors](/Users/esewa/.agents/skills/better-colors/SKILL.md) for semantic color tokens and contrast validation.
- [$better-ui](/Users/esewa/.agents/skills/better-ui/SKILL.md) for radii, borders, shadows, icon states, motion polish, and surface consistency.
- [$better-writing](/Users/esewa/.agents/skills/better-writing/SKILL.md) for interface copy, labels, errors, empty states, and concise portfolio language.
- [$web-design-guidelines](/Users/esewa/.agents/skills/web-design-guidelines/SKILL.md) for final web interface review.
- [$vercel-react-best-practices](/Users/esewa/.agents/skills/vercel-react-best-practices/SKILL.md) for React or Next.js implementation and performance decisions.
- [$shadcn](/Users/esewa/.agents/skills/shadcn/SKILL.md) when using, searching, or composing shadcn/ui components.

Use `documents`, `pdf`, `presentations`, or `spreadsheets` skills only when the task actually creates or edits those artifact types. Do not add a skill as a dependency just because it is available.

## Working rules

1. Do not begin implementation until the user approves the plan in `guides/portfolio-implementation-plan.md`.
2. Use the resume and verified public links as the source of truth. Never invent employers, metrics, client names, awards, testimonials, or outcomes.
3. Mark unverified content as `needs verification` rather than filling gaps with plausible copy.
4. Preserve private contact details in source data only when they are intended for the public site. Prefer the public professional email for the contact surface after confirmation.
5. Use one visual system for the whole site. Do not mix unrelated design systems or copy the current portfolio's system.
6. Keep page copy specific and factual. Avoid filler words such as "seamless", "elevate", "next-gen", and "revolutionize".
7. Use real project screenshots or approved media. Do not create fake product screenshots out of decorative divs.
8. Keep animation purposeful, interruptible, performant, and disabled or reduced under `prefers-reduced-motion`.
9. Use semantic HTML, visible focus states, keyboard access, descriptive alt text, and tested contrast from the first implementation pass.
10. Do not install Three.js, React Three Fiber, GSAP, Motion, shadcn components, or other dependencies until the stack is chosen and the install is explicitly part of the implementation phase.
11. Do not change deployment, DNS, URL structure, analytics, or contact form behavior without explicit approval.
12. After each implementation phase, run the relevant checks and record unresolved items in the guides rather than hiding them.

## MCP workflow

Use the available MCPs as reference and verification tools during implementation. Do not treat an MCP registration as proof that a server, credential, or design file is available.

1. **Penpot MCP is an optional design reference, not an implementation gate.** The current Penpot boards are exploratory drafts that the user has not approved. Build from the approved guides, verified source content, user feedback, and approved local assets. Use Penpot only when a user-approved design file or a focused review explicitly calls for it; begin with read-only calls.
2. **shadcn MCP is for component discovery.** Search registries and inspect component APIs before deciding whether to use a component. It does not authorize installation. Check `package.json`, the approved stack, and existing component configuration before adding anything.
3. **Context7 MCP is for version-specific documentation.** Resolve the exact library and version that the project uses before implementation questions involving Next.js, React, Tailwind, Motion, shadcn/ui, or another dependency. Do not query unrelated libraries.
4. **21st.dev is optional inspiration, not a dependency.** It may be used to research portfolio patterns or components only after `API_KEY_21ST` is securely configured and the server is verified. Never add its key to source code, `config.toml`, logs, or guides.
5. **Use official documentation when an MCP is unavailable.** The fallback sources are the official Penpot, shadcn/ui, Context7, framework, and library documentation. Record the limitation instead of claiming MCP-backed verification.
6. **Treat MCP output as evidence, not final authority.** Reconcile it against the approved content inventory, source code, and user decisions. Do not publish confidential design content, secrets, internal URLs, or private project details returned by a tool.

### MCP status at the last audit

| Tool | Recorded status | Implementation use |
| --- | --- | --- |
| Penpot | Connected and verified on 2026-10-25 | MCP read-only inspection succeeded. Current Penpot boards are exploratory drafts and are not the design authority for this implementation. Use only for an explicitly approved future review or design source. |
| shadcn | Registered; stdio startup probe passed | Use after Codex restart for registry discovery. Do not install components during planning. |
| Context7 | Registered; stdio startup probe passed | Use after Codex restart for current, version-specific documentation. |
| 21st.dev | Registered on 2026-10-25; pending post-restart tool verification | Optional design inspiration and component research. Do not install components without source, dependency, accessibility, and visual-fit review. |

If any status changes, update `guides/mcp-workflow.md` and this table before relying on it.

## Design read and dials

Use this starting read for planning and implementation:

> Reading this as: a technical portfolio for hiring managers and engineering collaborators, with a precise editorial systems language, leaning toward an evidence-led asymmetric layout with restrained tactile motion.

Starting dials:

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 5`
- `VISUAL_DENSITY: 4`

These are planning defaults, not permission to add decoration. Revisit them if the approved brief changes.

## Required verification before delivery

- Test at mobile, tablet, and desktop widths.
- Test keyboard-only navigation and visible focus.
- Test light and dark modes if both are implemented.
- Test `prefers-reduced-motion`.
- Check hero copy wrapping, CTA contrast, image dimensions, and no layout shift.
- Check every external link and contact action.
- Run the project's lint, typecheck, build, and browser verification commands.
- Perform the design-taste pre-flight and the Emil review format for interaction changes.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
