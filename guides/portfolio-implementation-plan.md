# Portfolio implementation plan

## Scope

Build a new portfolio from the approved content and design direction. This is a greenfield visual system. Do not reproduce the current site's design system.

## Phase 0: approvals and missing inputs

Before writing application code, confirm:

- Primary public email and phone visibility.
- Exact LinkedIn URL.
- Whether the eSewa role and selected work can be described publicly.
- Which projects can be shown publicly and whether source code or screenshots may be linked.
- The preferred portrait or whether the hero should use a project artifact instead.
- Which impact metrics are verifiable and publishable.
- Whether the site should have project detail routes in the first release.

Deliverable: an approved content matrix with no `needs verification` items in the homepage content.

## Phase 1: repository and stack baseline

The current `/Users/esewa/Documents/portfolio` directory is empty. Select and record the app stack before implementation.

Recommended baseline, subject to user approval:

- Next.js with TypeScript and App Router.
- Tailwind CSS v4 if a utility system is wanted, otherwise a small CSS token layer.
- One component system only. Prefer owned components or shadcn/ui when the project needs primitives, with all visual tokens customized to the approved direction.
- Motion for React for small, isolated interactions. Do not add GSAP or Three.js unless a specific approved interaction requires them.
- Phosphor, Hugeicons, Radix Icons, or Tabler as the single icon family if icons are needed.
- Local or framework-optimized font loading.

Do not install dependencies until the stack is approved and the implementation begins.

## Phase 2: information architecture

Recommended routes:

- `/` homepage and conversion path.
- `/work` project archive.
- `/work/[slug]` project detail template.
- `/about` experience, education, and working profile.
- `/contact` optional dedicated contact page if a mailto CTA is not enough.

If the initial release needs to stay small, ship `/`, `/work`, and `/about` first, with project detail content rendered from the same data model.

Primary navigation:

- Work
- About
- Contact

Keep it on one desktop line and make it collapsible with a keyboard-accessible menu on small screens.

## Phase 3: content model

Create typed content data rather than scattering copy across components.

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  featured: boolean;
  status: "published" | "needs-verification" | "private";
  role: string;
  timeline?: string;
  stack: string[];
  problem: string;
  contribution: string[];
  evidence: string[];
  outcome?: string;
  links: {
    live?: string;
    source?: string;
    caseStudy?: string;
  };
  media: {
    src: string;
    alt: string;
    kind: "screenshot" | "portrait" | "diagram" | "photo";
  }[];
};

type Experience = {
  company: string;
  title: string;
  location: string;
  start: string;
  end?: string;
  summary: string;
  highlights: string[];
  public: boolean;
};
```

Initial project records should include Nomambhoy, Journal Portal, Blog App, EPathshala, AMS, PEI, IntuCart, and Tic Tac Toe. Mark records private or needs-verification until publication permission and links are confirmed.

## Phase 4: homepage implementation order

### 4.1 Header

- Wordmark or text name.
- Work, About, Contact links.
- No decorative status dot or oversized navigation.

### 4.2 Hero

- One factual eyebrow at most, or none.
- Headline: a clear statement about building interfaces and systems.
- Supporting line: current role and technical range.
- One primary CTA to selected work.
- One approved visual asset.

Hero acceptance criteria:

- Headline fits within two lines at desktop.
- CTA is visible without scrolling on common laptop heights.
- No invented metric, client name, or vague superlative.

### 4.3 Selected work

- Feature three projects at most in the first pass.
- Use the proofline structure.
- Give each project a distinct composition rather than three identical cards.
- Prefer Nomambhoy, Journal Portal, and EPathshala if they are publishable.

### 4.4 Experience

- Use a compact vertical progression with role, company, date range, and one or two evidence bullets.
- Do not repeat the entire resume verbatim.
- Keep confidential employer details generalized when required.

### 4.5 Capabilities

Group skills by work they enable:

- Product interfaces: React, Next.js, TypeScript, Angular, Tailwind CSS, shadcn/ui, Material UI.
- State and data: Redux Toolkit, TanStack Query, React Hook Form, Zod, REST APIs.
- Systems and delivery: Python, Node.js, PostgreSQL, Docker, Linux VPS, Nginx, PM2.
- Interaction and quality: accessibility, performance, SSR, SSG, testing, code review.

Avoid rendering a logo wall of every tool.

### 4.6 About and contact

- One short personal statement.
- Location only when useful, not as decoration.
- Use the approved public email and one consistent contact CTA.
- Include GitHub and LinkedIn once their exact links are confirmed.
- Keep X and Instagram out of the primary navigation. Add them only if they serve the professional story and are explicitly approved.
- Decide between a direct email link and a contact form. If using a form, specify delivery, spam protection, privacy handling, validation, accessible errors, and a truthful success state before implementing it.

## Phase 5: project detail template

Each project detail page should answer these questions in order:

1. What is this project?
2. Why was it difficult or valuable?
3. What did Shirish own?
4. What technical decisions mattered?
5. What evidence can the reader inspect?
6. What changed because of the work?
7. Where can the reader go next?

Do not use a long technology list as a substitute for contribution or outcomes.

## Phase 6: responsive and interaction behavior

- Mobile collapses every multi-column composition to one readable column under 768px.
- Project media keeps reserved aspect-ratio space to avoid layout shift.
- Hover effects run only on hover-capable pointers.
- Pressable controls scale subtly around `0.97` for 120-160ms.
- Tooltips and popovers use origin-aware transitions, not a scale-from-center default.
- No scroll event listeners that update React state.
- Reduced motion removes movement and keeps useful opacity or color transitions.

## Phase 7: SEO and metadata

Add after the content is approved:

- Page titles and descriptions for `/`, `/work`, and `/about`.
- Open Graph and Twitter card images using approved portrait or project media.
- JSON-LD `Person` data with only public, verified links.
- JSON-LD `CreativeWork` or `SoftwareApplication` data only for projects with verified public information.
- Canonical URL for `https://shirishshrestha.com.np`.
- `robots.txt` and sitemap.
- Descriptive image alt text that explains the evidence, not the design mood.

## Phase 8: verification checklist

### Content

- No unverified metrics or project claims in public sections.
- All links work and point to the intended destination.
- Contact email is correct.
- Contact delivery works, including error handling when a form is used.
- Project permissions are recorded.

### Design

- Design read and dials match the approved direction.
- One accent color and one radius system are used consistently.
- No generic three-card feature row, fake screenshot, decorative section numbering, or excessive eyebrow labels.
- Real imagery is used for hero and featured projects.

### Accessibility

- Keyboard navigation reaches every control.
- Focus is visible and not clipped.
- Headings follow a sensible hierarchy.
- Images have useful alt text or are marked decorative.
- Contrast passes WCAG AA.
- Reduced motion is respected.

### Performance

- Images are sized and lazy-loaded appropriately.
- Hero media is prioritized without blocking the page.
- Motion is isolated to client leaves.
- No unnecessary 3D or animation dependency is added.
- Run Lighthouse or equivalent browser checks before release.

## Definition of done

The first release is done when the approved content is complete, the homepage communicates Shirish's level within one viewport, featured projects have real evidence, contact actions work, the site is responsive and keyboard usable, and the implementation passes the design-taste, accessibility, performance, and browser verification checks.
