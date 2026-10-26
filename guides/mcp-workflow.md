# MCP workflow for portfolio implementation

## Purpose

This guide connects the audited MCP stack to the portfolio implementation process. It is not a setup guide and does not replace the existing Codex configuration backup or MCP audit.

## Current stack

| MCP or tool | Status at audit | Role in this project | Do not use it for |
| --- | --- | --- | --- |
| Penpot MCP | Connected and verified on 2026-10-25 | Optional reference for a user-approved Penpot design or focused visual review | Treating the current exploratory draft as the design authority, editing without an approved request, or exposing private design data |
| shadcn MCP | Registered; startup probe passed | Searching the official registry and inspecting component metadata or source before implementation | Installing components automatically or making the portfolio look like default shadcn/ui |
| Context7 MCP | Registered; startup probe passed | Looking up current documentation for the exact libraries and versions in the selected stack | Generic research unrelated to the project |
| 21st.dev MCP | Registered on 2026-10-25; pending post-restart tool verification | Optional research for distinctive component or layout references | Storing secrets, installing arbitrary components, or duplicating shadcn discovery |
| Playwright or existing browser tools | Reference and verification tooling | Responsive, interaction, accessibility, and visual checks after a local app exists | Replacing semantic test coverage or adding tooling before it is needed |

`Registered` and `startup probe passed` are not the same as a successful tool call in the Codex desktop session. Restart Codex after configuration changes and record a successful test before upgrading an MCP's status to connected and verified.

## Penpot verification record

- Date: 2026-10-25
- Registration: confirmed
- Authentication and connection: confirmed through a successful read-only Penpot MCP call
- Capability tested: listed pages, inspected the active-page shape structure, token overview, local library, and connected libraries
- Result: passed
- Active design context: `New File 1`, `Page 1`; exploratory desktop and mobile boards were created during planning
- Decision: on 2026-10-25, the user declined the current Penpot direction. The boards remain drafts only and must not constrain the code-first implementation.
- Follow-up: use Penpot again only when the user approves a design source or requests a focused design review.

## Required use by phase

### Planning

1. Read `guides/content-inventory.md`, `guides/design-direction.md`, and `guides/source-coverage-audit.md`.
2. Use Penpot only when a user-approved design file is open and connected. For the current code-first implementation, use the approved guides, verified content, user feedback, and approved local assets instead.
3. Use Context7 to validate stack decisions against current framework documentation.
4. Use shadcn MCP only to investigate components that solve a real interaction need.
5. Keep a decision record when a reference changes the implementation approach.

### Build

1. Compare a section against the approved design direction and content inventory. Compare against a Penpot frame only if the user has approved that frame as a source.
2. Use Context7 before writing code that depends on nontrivial framework, animation, styling, or component APIs.
3. Use shadcn discovery before adding a custom primitive. Choose owned custom UI when the visual direction requires it.
4. Use 21st.dev only when it offers a specific, approved reference unavailable through Penpot or shadcn. It is inspiration, not a component-install command.
5. Do not import a package merely because an MCP suggests it. Verify it is compatible with the selected stack and obtain the required approval if it changes dependencies.

### Verify

1. Use browser tooling to test at small, medium, and large breakpoints.
2. Check keyboard navigation, focus, contrast, reduced motion, images, links, and form states.
3. Compare the finished section to its Penpot source only when that source is user-approved; otherwise review against the guides and browser evidence.
4. Use Context7 for version-sensitive fixes, not memory or unverified snippets.
5. Record failures and manual steps in the implementation notes.

## Tool selection rules

| Need | First choice | Fallback |
| --- | --- | --- |
| Approved colors, spacing, composition, design tokens, or source assets | User-approved guides and assets | Approved Penpot export or user-provided design evidence |
| Current library API or migration detail | Context7 MCP | Official library documentation |
| Accessible base component or registry source | shadcn MCP | shadcn/ui official documentation or owned component |
| Portfolio pattern inspiration | Approved design direction, then 21st.dev when authenticated | Official component or animation examples |
| Responsive and interaction test | Browser or Playwright tooling | Manual browser checklist |

## Security and design safeguards

- Do not paste MCP URLs containing tokens into repository files, issues, guides, screenshots, or chat summaries.
- Do not expose Penpot design content, private projects, user data, customer data, or credentials returned by an MCP.
- Keep Penpot edits separate from implementation unless the user specifically requests a design change.
- Never install a component directly from an MCP prompt without reviewing its source, dependencies, accessibility, and visual fit.
- Keep the 21st.dev key only in the local environment. Never record, print, or copy its value into this repository.
- If a server is unavailable, state the limitation and use the designated official-docs fallback.

## Penpot readiness checklist

Before relying on Penpot MCP:

- [ ] The local Penpot instance is running.
- [ ] The MCP endpoint is reachable.
- [ ] MCP is enabled in the Penpot account integration settings.
- [ ] The intended design file is open.
- [ ] The file is connected through Penpot's MCP Server menu.
- [ ] A read-only request successfully returns the focused page or file structure.
- [ ] The Penpot MCP key remains private.

## MCP verification log template

Add an entry when a tool becomes fully usable:

```md
### YYYY-MM-DD - MCP name

- Registration: confirmed
- Startup: confirmed
- Authentication: confirmed or not required
- Capability tested: describe one read-only test
- Result: passed or failed
- Follow-up: none or explicit next action
```
