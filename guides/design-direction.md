# New portfolio design direction

## Design read

Reading this as: a technical portfolio for hiring managers and engineering collaborators, with a precise editorial systems language, leaning toward an evidence-led asymmetric layout with restrained tactile motion.

This is a greenfield visual direction. The current portfolio is not a design reference.

## What the site should communicate

1. Shirish is already operating at product engineering level, not only collecting tutorials.
2. He can move between interface craft, application architecture, data flow, and deployment.
3. His strongest work sits where complex systems need a clear human interface.
4. He can explain technical decisions without turning the portfolio into documentation.

## Design dials

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 5`
- `VISUAL_DENSITY: 4`

The variance creates an intentional offset between narrative copy and evidence. Motion stays tactile and explanatory instead of becoming a visual trick. Density is high enough to show technical range without becoming a resume dump.

## Visual thesis

Use a cool, mineral base with one controlled signal color. The portfolio should feel closer to a well-made engineering notebook or systems map than a startup landing page. The signature is a proof-led project presentation where each featured project exposes the problem, the contribution, and the technical evidence in one continuous reading path.

## Proposed token direction

These are starting tokens for the approved direction. Validate contrast and adjust during implementation.

| Token | Starting value | Role |
| --- | --- | --- |
| `ink-950` | `#13201F` | Primary text and dark surfaces |
| `ink-700` | `#364846` | Secondary text |
| `paper-50` | `#F2F5F2` | Main light surface |
| `paper-100` | `#E6ECE8` | Quiet section surface |
| `signal-500` | `#D85B3F` | One accent for actions, active states, and evidence markers |
| `line-300` | `#B9C6C0` | Hairlines and structural separators |

Do not add a second accent without a documented semantic reason. Avoid purple gradients, black-on-black glow treatments, and decorative noise.

## Typography direction

- Display and primary heading: `Cabinet Grotesk` or another approved geometric grotesk with enough personality for large editorial headlines.
- Body: `DM Sans` or an equally legible neutral sans with strong text rendering at small sizes.
- Utility and code evidence: `IBM Plex Mono` for stack labels, metadata, and technical annotations only.

Load fonts through the framework's supported local or optimized font mechanism. Do not use a Google Fonts `<link>` in production.

## Layout concept

The page uses a wide reading column with a persistent but quiet evidence rail. Sections should not become a sequence of identical cards.

```text
┌──────────────────────────────────────────────────────────────┐
│ SHIRISH                         Work  About  Contact          │
├───────────────────────┬──────────────────────────────────────┤
│ I build interfaces    │ one real project artifact or portrait │
│ for complex systems.  │ with a caption below                  │
│ short proof line      │                                       │
│ [View selected work]  │                                       │
├───────────────────────┴──────────────────────────────────────┤
│ selected work: one large project narrative + evidence rail    │
├───────────────────────┬──────────────────────────────────────┤
│ project problem       │ contribution / technical decisions    │
├───────────────────────┴──────────────────────────────────────┤
│ experience timeline with role, scope, and verified outcomes   │
├──────────────────────────────────────────────────────────────┤
│ capability groups, not a wall of logos                        │
├──────────────────────────────────────────────────────────────┤
│ short about statement + contact                               │
└──────────────────────────────────────────────────────────────┘
```

## Signature element: the proofline

Each featured project gets one horizontal proofline with three factual stops:

- Problem: what was difficult or important.
- Contribution: what Shirish owned or built.
- Evidence: the stack, system behavior, screenshot, or verified outcome that supports the claim.

The proofline is not a decorative timeline and should not use numbered labels. It gives every project the same editorial logic while allowing each project to have a different visual composition.

## Page structure

### Homepage

- Asymmetric hero with a short thesis, primary action, and one approved portrait or project artifact.
- Selected work with three to four projects, led by Nomambhoy if publication is approved.
- Experience as a compressed, readable progression rather than a resume copy dump.
- Capability groups that connect tools to the kind of work they enable.
- Short about and contact CTA.

### Work index

- Filterable or grouped project archive only if there are enough verified projects to justify it.
- Each project row shows title, category, contribution, stack, and a direct link.
- No fake case study metrics or generic thumbnails.

### Project detail

- Project thesis.
- Context and role.
- Problem and constraints.
- Contribution and technical decisions.
- Selected implementation evidence.
- Outcome, only when verified.
- Links and next project.

### About

- Longer positioning statement.
- Experience and education.
- Working preferences and current focus.
- Contact CTA.

## Motion direction

Use Motion for React or CSS transitions only after the project stack is confirmed.

- Hero content reveals once to establish hierarchy.
- Project proofline responds to scroll or focus to show the reading relationship between problem, contribution, and evidence.
- Project media can use a restrained clip-path reveal when it clarifies sequence.
- Buttons use fast press feedback around 120-160ms.
- No perpetual animation, custom cursor, scroll hijack, or animation that exists only to look impressive.
- Every moving component must support `prefers-reduced-motion`.

## Content and accessibility rules

- One primary CTA intent across the site: `View selected work` or an approved equivalent.
- One contact CTA intent across the site: `Start a conversation` or an approved equivalent.
- Keep hero subcopy to 20 words or fewer.
- Avoid excessive eyebrows, section numbering, decorative dots, and fake status labels.
- Use sentence case for visible copy.
- Use real project media, not fabricated interface rectangles.
- Keep the page theme consistent. If dark mode is supported, design and test both modes from the beginning.
