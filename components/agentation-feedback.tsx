"use client";

import dynamic from "next/dynamic";

const DevelopmentAgentation =
  process.env.NODE_ENV === "development"
    ? dynamic(
        () => import("agentation").then((module) => module.Agentation),
        { ssr: false },
      )
    : null;

export function AgentationFeedback() {
  if (!DevelopmentAgentation) return null;

  return <DevelopmentAgentation appName="Shirish Shrestha Portfolio" />;
}
