export type GuideAudience = "hiring" | "collaboration" | "curious";

export type GuideLink = {
  label: string;
  description: string;
  href: string;
};

export const guideAudienceOptions = [
  {
    id: "hiring",
    label: "I’m hiring",
    description: "See the work and experience most relevant to a role.",
  },
  {
    id: "collaboration",
    label: "I’m building something",
    description: "Jump to the projects and contact route for a conversation.",
  },
  {
    id: "curious",
    label: "I’m just exploring",
    description: "Take a quick tour through the portfolio.",
  },
] as const satisfies readonly {
  id: GuideAudience;
  label: string;
  description: string;
}[];

export const guideLinks: Record<GuideAudience, readonly GuideLink[]> = {
  hiring: [
    { label: "Selected work", description: "A short list of shipped product work.", href: "#work" },
    { label: "Experience", description: "Roles across fintech, AI, agency, and product teams.", href: "#experience" },
    { label: "Start a conversation", description: "Get in touch with Shirish directly.", href: "#contact" },
  ],
  collaboration: [
    { label: "Selected work", description: "See how product problems were approached.", href: "#work" },
    { label: "Start a conversation", description: "Share what you are working on.", href: "#contact" },
  ],
  curious: [
    { label: "Selected work", description: "Browse a few projects first.", href: "#work" },
    { label: "Experience", description: "See the path behind the work.", href: "#experience" },
    { label: "Play a small game", description: "Open a short, casual browser game.", href: "#game" },
  ],
};

export const portfolioGame = {
  title: "Stone & Key",
  description: "A short mouse-driven game about finding a hidden key.",
  href: "https://torukmakto0.itch.io/stone-key",
  source: "itch.io",
} as const;
