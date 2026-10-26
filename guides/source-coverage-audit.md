# Source coverage audit

Audit date: 2026-10-25

## Sources compared

- Resume: `/Users/esewa/Downloads/Shirish_Shrestha_Resume.pdf`
- Current portfolio: <https://shirishshrestha.com.np>
- Current portfolio repository: <https://github.com/shirishshrestha/portfolio-shirish>
- Public GitHub profile: <https://github.com/shirishshrestha>

The purpose of this audit is content coverage. It does not reuse or evaluate the current portfolio's visual design system.

## Resume coverage

| Resume content | Guide location | Coverage | Notes |
| --- | --- | --- | --- |
| Name, software-engineering positioning, phone, email, GitHub, portfolio, LinkedIn labels | `content-inventory.md` identity and positioning | Covered | LinkedIn destination is recorded from the GitHub profile. Choose one public email before launch. |
| Professional summary | `content-inventory.md` positioning | Covered | Homepage wording is shorter and keeps the technical scope. |
| Technical skills | `content-inventory.md` technical skills and `portfolio-implementation-plan.md` capability groups | Covered | Tools are grouped by what they enable rather than rendered as a logo wall. |
| eSewa role | `content-inventory.md` work experience | Covered | Publication scope remains a confidentiality check. |
| Vynspire AI Labs role | `content-inventory.md` work experience | Covered | No public project links supplied. |
| Omway Technologies role | `content-inventory.md` work experience | Covered | Deployment, accessibility, and API work retained. |
| Web Tuned Studio role | `content-inventory.md` work experience | Covered with review gate | The 40% and 60% claims are explicitly held for verification. |
| Intuji internship | `content-inventory.md` work experience | Covered | Included as early-career progression, not homepage emphasis. |
| Nomambhoy | `content-inventory.md` featured projects | Covered with publication gate | Needs public URL, media, role, timeline, and permission. |
| Journal Portal | `content-inventory.md` featured projects | Covered with publication gate | Needs public URL, media, role, timeline, and permission. |
| Blog App | `content-inventory.md` featured projects | Covered with publication gate | Needs public URL, media, role, timeline, and deployment check. |
| EPathshala | `content-inventory.md` featured projects | Covered with publication gate | Needs public URL, media, role, timeline, and permission. |
| Education and Hult Prize leadership | `content-inventory.md` education and leadership | Covered | Suitable for About, not hero. |

## Current portfolio coverage

| Current-site content | Guide location | Coverage | Decision |
| --- | --- | --- | --- |
| Old hero title: Web Developer | `content-inventory.md` positioning and `design-direction.md` hero | Replaced intentionally | The resume's current Senior Associate Engineer context is more accurate. |
| Introductory learner copy | `content-inventory.md` positioning | Replaced intentionally | It undersells the current experience level. |
| AMS project and GitHub link | `content-inventory.md` existing public project archive | Covered | Secondary archive candidate. |
| PEI Admin Panel and GitHub link | `content-inventory.md` existing public project archive | Covered | Secondary archive candidate. |
| IntuCart project and GitHub link | `content-inventory.md` existing public project archive | Covered | Secondary archive candidate. |
| Tic Tac Toe and GitHub link | `content-inventory.md` existing public project archive | Covered | Secondary archive candidate. |
| Tech stack visual section | `content-inventory.md` skills and `portfolio-implementation-plan.md` capability groups | Covered with a better format | Replace the logo wall with evidence-led capability groups. |
| Phone and Bhaktapur address | `content-inventory.md` identity and contact | Covered with decision gate | Use a single, intentional public location and confirm phone visibility. |
| Contact form | `portfolio-implementation-plan.md` contact and `asset-checklist.md` | Covered with decision gate | Choose mailto or a real form endpoint. Do not recreate the form without delivery and spam design. |
| Copyright footer | `implementation-guide.md` component list | Partially covered | Footer is required, but final copyright and legal copy need confirmation during implementation. |
| Sitemap and search verification artifact | `portfolio-implementation-plan.md` SEO | Covered | New sitemap and metadata will be generated for the new app. |

## Public link audit

| Link | Status | Guide treatment |
| --- | --- | --- |
| `https://shirishshrestha.com.np` | Public portfolio source | Canonical domain planned for new site. |
| `https://github.com/shirishshrestha` | Public profile source | Approved profile link. |
| `https://www.linkedin.com/in/shirish-shrestha-153510258` | Destination listed by public GitHub profile | Add after owner confirms it is the intended public profile. |
| `https://github.com/shirishshrestha/portfolio-shirish` | Public repository for previous portfolio | Content and deployment source only. No design reuse. |
| `https://github.com/shirishshrestha/nom` | Public source repository | Verified as the vendor billing reconciliation platform; featured-work code link. |
| `https://github.com/shirishshrestha/journal-portal` | Public source repository | Verified as the Journal Portal frontend; featured-work code link. |
| `https://github.com/shirishshrestha/epathshala` | Public source repository | Verified public EPathshala repository; featured-work code link. |
| `https://github.com/rikeshhh/Asset-Management-System` | Linked from current site | Archive candidate. Verify ownership and current availability before featuring. |
| `https://github.com/shirishshrestha/plastering-admin-panel` | Linked from current site | Archive candidate. Verify current availability before featuring. |
| `https://github.com/shirishshrestha/shopping-cart` | Linked from current site | Archive candidate. Verify current availability before featuring. |
| `https://github.com/shirishshrestha/TicTacToe` | Linked from current site | Archive candidate. Verify current availability before featuring. |

## Findings

### Covered well

- The guide set covers the complete resume structure: identity, summary, skills, five roles, four stronger project candidates, education, and leadership.
- It captures all four named public projects from the current site and directs them to a secondary archive so they do not dilute the current senior-level narrative.
- It includes content safety gates for confidentiality, metrics, source links, screenshots, and public contact information.
- It protects the greenfield design direction from accidental reuse of the old portfolio's visual system.

### Gaps that require user decisions, not more speculative guide content

1. Select one public email and confirm phone visibility.
2. Confirm the LinkedIn profile destination.
3. Decide whether to show X and Instagram.
4. Confirm which featured projects and eSewa details may be published.
5. Supply real project media and direct URLs for the featured case studies.
6. Verify the 40% maintainability and 60% form-error claims before publishing them.
7. Choose a contact approach. A mailto CTA is simpler; a form needs a real endpoint, spam prevention, privacy language, and error handling.
8. Confirm footer copyright wording and whether a downloadable resume should be public.

## Verdict

The guide set is complete enough to begin information architecture and implementation once the decision-gated items above are resolved. No resume section or current-site project was omitted. The remaining work is source verification and asset collection, not a gap in the plan.
