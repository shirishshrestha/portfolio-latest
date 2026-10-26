# Shirish Shrestha — Portfolio

The source for [shirishshrestha.com.np](https://shirishshrestha.com.np): a personal portfolio for Shirish Shrestha, Software Engineer. It presents selected work, experience, a focused technology stack, and a direct contact path in a responsive, accessible editorial layout.

## Highlights

- Server-rendered Next.js homepage with typed portfolio content.
- Light and dark themes, with the system preference used by default.
- Keyboard-accessible navigation, skip link, visible focus states, and reduced-motion support.
- Responsive layouts for phone, tablet, and desktop widths.
- Local image and technology-mark assets—no runtime logo or media requests.
- Purposeful motion for content entry and the technology-stack orbit.

## Stack

- Next.js 16, React 19, and TypeScript
- Tailwind CSS 4 with a small token-based global stylesheet
- `motion/react` and Framer Motion for motion
- Phosphor and Lucide icons
- `next-themes` for theme preference

## Run locally

Use a current Node.js LTS release and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
# Lint
npm run lint

# Type-check without output
npx tsc --noEmit

# Production build
npm run build -- --webpack
```

The explicit Webpack flag is intentional for this workspace: the default Turbopack production build can be blocked by the host's internal-port restriction.

## Project structure

```text
app/
  page.tsx              # Homepage composition
  globals.css           # Tokens, responsive layout, and component styles
  layout.tsx            # Metadata, fonts, and theme provider
components/
  ui/                   # Interactive visual components
  reveal.tsx            # Reduced-motion-aware entry transition
data/
  portfolio.ts          # Profile, work, experience, and stack content
  site.ts               # Site metadata and canonical URL
public/images/
  brand/                # Brand lockup and generated icons
  tech-stack/           # Local technology marks
guides/                 # Content, design, asset, and implementation records
```

## Updating content

Keep public portfolio content in `data/portfolio.ts` and metadata in `data/site.ts`. Before publishing a project, employer detail, metric, or image, confirm that it is accurate and approved for public use. The supporting records in `guides/` document those verification boundaries.

Place public assets under `public/images/`, reference them with root-relative paths, and provide meaningful alternative text for informative images.

## Deployment

This repository is a static Next.js deployment. Build it with the production command above, configure the deployment environment with the intended canonical domain, and verify:

- desktop, tablet, and mobile rendering;
- keyboard navigation and visible focus;
- reduced-motion behavior;
- light and dark themes;
- external project and social links; and
- contact email behavior.

## Security

Do not commit access tokens, passwords, API keys, personal credentials, or unapproved private contact details. Use environment variables managed by the deployment provider if a future feature requires a secret.
