"use client";

import { BracketsAngleIcon } from "@phosphor-icons/react";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { TechStackItem } from "@/data/portfolio";

type OrbitingTechStackProps = {
  items: readonly TechStackItem[];
};

type OrbitConfig = {
  radius: "inner" | "middle" | "outer";
  speed: number;
  phase: number;
  items: readonly TechStackItem[];
};

export function OrbitingTechStack({ items }: OrbitingTechStackProps) {
  const reducedMotion = useReducedMotion();
  const orbits: OrbitConfig[] = [
    { radius: "inner", speed: 18, phase: 0, items: items.slice(0, 3) },
    { radius: "middle", speed: 26, phase: 60, items: items.slice(3, 6) },
    { radius: "outer", speed: 34, phase: 120, items: items.slice(6, 9) },
  ];

  return (
    <div className="orbiting-tech-stack">
      <div className="orbiting-tech-stack__stage" data-reduced-motion={reducedMotion ? "true" : "false"}>
        <div className="orbiting-tech-stack__wash" aria-hidden="true" />
        <div className="orbiting-tech-stack__center" aria-hidden="true">
          <div className="orbiting-tech-stack__center-glow" />
          <BracketsAngleIcon size={38} weight="regular" />
        </div>

        {orbits.map((orbit) => (
          <Orbit key={orbit.radius} config={orbit} />
        ))}

        <div className="orbiting-tech-stack__sr-list" aria-label="Technologies in the stack">
          {items.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Orbit({ config }: { config: OrbitConfig }) {
  return (
    <div className={`orbiting-tech-stack__orbit orbiting-tech-stack__orbit--${config.radius}`}>
      <div
        className="orbiting-tech-stack__path"
        aria-hidden="true"
        style={{ animationDuration: `${config.speed * 1.7}s` }}
      />
      <div
        className="orbiting-tech-stack__track"
        style={{ "--orbit-duration": `${config.speed}s` } as CSSProperties}
      >
        {config.items.map((item, index) => (
          <TechNode key={item.name} item={item} index={index} count={config.items.length} phase={config.phase} />
        ))}
      </div>
    </div>
  );
}

function TechNode({ item, index, count, phase }: { item: TechStackItem; index: number; count: number; phase: number }) {
  const angle = phase + (360 / count) * index;

  return (
    <div
      className="orbiting-tech-stack__node"
      style={{
        "--node-angle": `${angle}deg`,
        "--node-angle-reverse": `${-angle}deg`,
      } as CSSProperties}
    >
      <div className="orbiting-tech-stack__node-orientation">
        <div className="orbiting-tech-stack__node-card">
          <span className="orbiting-tech-stack__logo-wrap">
            <Image src={item.logo} alt="" width={32} height={32} unoptimized />
          </span>
        </div>
      </div>
    </div>
  );
}
