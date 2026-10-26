"use client";

import Image from "next/image";
import { useRef } from "react";
import type { PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react";
import type { TechStackItem } from "@/data/portfolio";

type MagnifiedTechStackProps = {
  items: readonly TechStackItem[];
};

const rows = (items: readonly TechStackItem[]) => [
  { label: "Build", items: items.slice(0, 3) },
  { label: "Connect", items: items.slice(3, 6) },
  { label: "Ship", items: items.slice(6, 9) },
];

export function MagnifiedTechStack({ items }: MagnifiedTechStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lensX = useMotionValue(0);
  const lensY = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  const tagRows = rows(items);
  const lensPosition = useMotionTemplate`circle(58px at calc(50% + ${lensX}px) calc(50% + ${lensY}px))`;
  const inverseMask = useMotionTemplate`radial-gradient(circle 58px at calc(50% + ${lensX}px) calc(50% + ${lensY}px), transparent 0 100%, black 100%)`;

  const moveLens = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    lensX.set(event.clientX - (bounds.left + bounds.width / 2));
    lensY.set(event.clientY - (bounds.top + bounds.height / 2));
  };

  const resetLens = () => {
    lensX.set(0);
    lensY.set(0);
  };

  return (
    <div className="magnified-tech-stack">
      <div
        ref={containerRef}
        className="magnified-tech-stack__viewport"
        onPointerMove={moveLens}
        onPointerLeave={resetLens}
      >
        <div className="magnified-tech-stack__sr-list">
          {items.map((item) => <span key={item.name}>{item.name}</span>)}
        </div>

        <motion.div
          className="magnified-tech-stack__rows"
          style={{ WebkitMaskImage: inverseMask, maskImage: inverseMask }}
          aria-hidden="true"
        >
          {tagRows.map((row) => (
            <TechRow key={`base-${row.label}`} {...row} />
          ))}
        </motion.div>

        <motion.div
          className="magnified-tech-stack__reveal"
          style={{ clipPath: lensPosition }}
          aria-hidden="true"
        >
          {tagRows.map((row) => (
            <TechRow key={`reveal-${row.label}`} {...row} reveal />
          ))}
        </motion.div>

        <div className="magnified-tech-stack__lens" aria-hidden="true">
          <MagnifyingLens />
        </div>

        <div className="magnified-tech-stack__fade magnified-tech-stack__fade--left" />
        <div className="magnified-tech-stack__fade magnified-tech-stack__fade--right" />
      </div>
      <p className="magnified-tech-stack__hint">Move across the stack to inspect the tools.</p>
    </div>
  );
}

function TechRow({
  label,
  items,
  reveal = false,
}: {
  label: string;
  items: readonly TechStackItem[];
  reveal?: boolean;
}) {
  return (
    <div
      className={`magnified-tech-stack__row${reveal ? " magnified-tech-stack__row--reveal" : ""}`}
    >
      <span className="magnified-tech-stack__row-label">{label}</span>
      <div className="magnified-tech-stack__items">
        {items.map((item) => (
        <div className={`magnified-tech-stack__tag${reveal ? " magnified-tech-stack__tag--reveal" : ""}`} key={item.name}>
          <Image src={item.logo} alt="" width={16} height={16} unoptimized />
          <span>{item.name}</span>
        </div>
        ))}
      </div>
    </div>
  );
}

function MagnifyingLens() {
  return (
    <svg width="78" height="78" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="206" cy="206" r="150" fill="rgba(223,233,239,0.82)" stroke="#7A858C" strokeWidth="18" />
      <circle cx="206" cy="206" r="126" fill="rgba(255,255,255,0.2)" stroke="#DFE9EF" strokeWidth="10" />
      <path d="M318 318L470 470" stroke="#333333" strokeWidth="48" strokeLinecap="round" />
      <path d="M335 335L470 470" stroke="#B0BDC6" strokeWidth="20" strokeLinecap="round" />
    </svg>
  );
}
