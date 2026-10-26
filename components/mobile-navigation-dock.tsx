"use client";

import { BriefcaseBusiness, Mail, UserRound } from "lucide-react";
import { Dock } from "@/components/ui/dock-two";

const navigationItems = [
  { label: "Work", icon: BriefcaseBusiness, target: "work" },
  { label: "Experience", icon: UserRound, target: "experience" },
  { label: "Contact", icon: Mail, target: "contact" },
] as const;

export function MobileNavigationDock() {
  const items = navigationItems.map(({ label, icon: Icon, target }) => ({
    label,
    icon: Icon,
    onClick: () => {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      document.getElementById(target)?.scrollIntoView({ behavior, block: "start" });
      window.history.replaceState(null, "", `#${target}`);
    },
  }));

  return (
    <nav className="mobile-navigation-dock" aria-label="Mobile navigation">
      <Dock items={items} />
    </nav>
  );
}
