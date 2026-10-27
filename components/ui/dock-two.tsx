"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DockProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    icon: LucideIcon;
    label: string;
    onClick?: () => void;
  }[];
}

interface DockIconButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  className?: string;
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

function DockIconButton({ icon: Icon, label, onClick, className }: DockIconButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      whileHover={shouldReduceMotion ? undefined : { scale: 1.06, y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      onClick={onClick}
      aria-label={label}
      className={cn(
        "group relative grid size-11 place-items-center rounded-lg text-(--ink) transition-colors",
        "hover:bg-(--theme-control-hover) focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--accent)",
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1",
          "bg-(--ink) text-xs text-(--paper) opacity-0 transition-opacity",
          "group-hover:opacity-100 group-focus-visible:opacity-100",
        )}
      >
        {label}
      </span>
    </motion.button>
  );
}

export function Dock({ items, className, ...props }: DockProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div {...props} className={cn("flex w-full items-center justify-center p-2", className)}>
      <motion.div
        initial="initial"
        animate={shouldReduceMotion ? undefined : "animate"}
        variants={floatingAnimation}
        className={cn(
          "flex items-center gap-1 rounded-2xl border border-(--line) p-2",
          "bg-(--paper) shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl",
        )}
      >
        {items.map((item) => (
          <DockIconButton key={item.label} {...item} />
        ))}
      </motion.div>
    </div>
  );
}
