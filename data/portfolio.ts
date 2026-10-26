export type FeaturedProject = {
  type: string;
  title: string;
  copy: string;
  href: string;
  tags: readonly string[];
};

export type Experience = {
  period: string;
  company: string;
  role: string;
};

export type TechStackItem = {
  name: string;
  category: string;
  mark: string;
  logo: string;
};

export type FooterColumn = {
  title: string;
  links: readonly { label: string; href: string }[];
};

export const profile = {
  name: "Shirish Shrestha",
  email: "contact@shirishshrestha.com.np",
  location: "Kathmandu",
  social: {
    github: "https://github.com/shirishshrestha",
    linkedIn: "https://www.linkedin.com/in/shirish-shrestha-153510258",
  },
} as const;

export const featuredWork = [
  {
    type: "AI-assisted system",
    title: "Vendor billing reconciliation",
    copy: "A system for ingesting vendor rate cards and invoices, matching services, and reconciling billed amounts against contracted rates.",
    href: "https://github.com/shirishshrestha/nom",
    tags: ["Next.js", "PostgreSQL", "AI workflows"],
  },
  {
    type: "Internal platform",
    title: "Journal Portal",
    copy: "A journal publishing workflow that makes submission, review, and administration easier to follow.",
    href: "https://github.com/shirishshrestha/journal-portal",
    tags: ["React", "Product systems", "UI"],
  },
  {
    type: "Education",
    title: "EPathshala",
    copy: "A learning platform interface shaped for practical navigation across course material and student tasks.",
    href: "https://github.com/shirishshrestha/epathshala",
    tags: ["React", "Responsive UI", "Frontend"],
  },
] as const satisfies readonly FeaturedProject[];

export const experience = [
  { period: "July 2026 — Present", company: "eSewa", role: "Senior Associate Engineer" },
  { period: "February 2026 — July 2026", company: "Vynspire AI Labs", role: "Frontend Engineer" },
  { period: "November 2025 — February 2026", company: "Omway", role: "Frontend Developer" },
  { period: "July 2024 — August 2025", company: "Web Tuned Studio", role: "Frontend Developer" },
] as const satisfies readonly Experience[];

export const techStack = [
  { name: "React", category: "Interface", mark: "R", logo: "/images/tech-stack/react.svg" },
  { name: "Next.js", category: "Web apps", mark: "N", logo: "/images/tech-stack/nextjs.svg" },
  { name: "TypeScript", category: "Language", mark: "TS", logo: "/images/tech-stack/typescript.svg" },
  { name: "Angular", category: "Interface", mark: "A", logo: "/images/tech-stack/angular.svg" },
  { name: "Python", category: "Backend", mark: "PY", logo: "/images/tech-stack/python.svg" },
  { name: "Node.js", category: "Backend", mark: "JS", logo: "/images/tech-stack/nodejs.svg" },
  { name: "Tailwind CSS", category: "UI systems", mark: "TW", logo: "/images/tech-stack/tailwindcss.svg" },
  { name: "PostgreSQL", category: "Data", mark: "PG", logo: "/images/tech-stack/postgresql.svg" },
  { name: "Docker", category: "Delivery", mark: "DX", logo: "/images/tech-stack/docker.svg" },
] as const satisfies readonly TechStackItem[];

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Selected work", href: "#work" },
      { label: "Experience", href: "#experience" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: profile.social.github },
      { label: "LinkedIn", href: profile.social.linkedIn },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "Email Shirish", href: `mailto:${profile.email}` }],
  },
] as const satisfies readonly FooterColumn[];
