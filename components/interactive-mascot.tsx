"use client";

// @refresh reset
// Remount on edits so Fast Refresh cannot retain an outdated effect signature.

import { forwardRef, useEffect, useRef, useState, type ButtonHTMLAttributes, type MouseEvent, type RefObject } from "react";
import { cn } from "@/lib/utils";

const directions = [
  "up-left", "up", "up-right", "left", "center", "right", "down-left", "down", "down-right",
] as const;
const reactions = [
  "blink", "heart", "sparkle", "surprised", "wink", "bashful", "sleepy", "dizzy", "delighted",
] as const;
const clockwise = ["right", "down-right", "down", "down-left", "left", "up-left", "up", "up-right"] as const;
const payoffReactions = ["heart", "sparkle", "delighted"] as const;
const sectorSize = (Math.PI * 2) / clockwise.length;

function cell(index: number) {
  return { backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%` };
}

type InteractiveMascotProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type"> & {
  directions: string;
  reactions: string;
  size?: number;
  label: string;
  expanded?: boolean;
  controls?: string;
  onBoop?: () => void;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonRef?: RefObject<HTMLButtonElement | null>;
};

export const InteractiveMascot = forwardRef<HTMLButtonElement, InteractiveMascotProps>(function InteractiveMascot({
  directions: directionsSrc,
  reactions: reactionsSrc,
  size = 96,
  label,
  expanded,
  controls,
  onBoop,
  buttonRef: externalButtonRef,
  onClick: triggerOnClick,
  className,
  style,
  ...buttonProps
}, forwardedRef) {
  const internalButtonRef = useRef<HTMLButtonElement>(null);
  const buttonRef = externalButtonRef ?? internalButtonRef;
  const squashRef = useRef<HTMLSpanElement>(null);
  const timersRef = useRef<number[]>([]);
  const boopsRef = useRef({ count: 0, at: 0 });
  const [direction, setDirection] = useState<(typeof directions)[number]>("center");
  const [reaction, setReaction] = useState<(typeof reactions)[number] | null>(null);

  useEffect(() => {
    let sector = -1;
    let pointer: { x: number; y: number } | null = null;
    const aim = () => {
      const button = buttonRef.current;
      if (!button || !pointer) return;
      const box = button.getBoundingClientRect();
      const dx = pointer.x - (box.left + box.width / 2);
      const dy = pointer.y - (box.top + box.height / 2);
      if (Math.hypot(dx, dy) < 70) {
        sector = -1;
        setDirection("center");
        return;
      }
      const nextSector = (Math.round(Math.atan2(dy, dx) / sectorSize) + clockwise.length) % clockwise.length;
      if (sector === nextSector) return;
      sector = nextSector;
      setDirection(clockwise[sector]);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      pointer = { x: event.clientX, y: event.clientY };
      aim();
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", aim, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", aim);
    };
  }, [buttonRef]);

  useEffect(() => () => timersRef.current.forEach(window.clearTimeout), []);

  const setButtonRefs = (node: HTMLButtonElement | null) => {
    if (externalButtonRef) externalButtonRef.current = node;
    if (forwardedRef) {
      if (typeof forwardedRef === "function") forwardedRef(node);
      else forwardedRef.current = node;
    }
  };

  const boop = (event: MouseEvent<HTMLButtonElement>) => {
    onBoop?.();
    triggerOnClick?.(event);
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
    const now = Date.now();
    const boops = boopsRef.current;
    boops.count = now - boops.at < 1600 ? boops.count + 1 : 1;
    boops.at = now;
    const later = (delay: number, next: (typeof reactions)[number] | null) => {
      timersRef.current.push(window.setTimeout(() => setReaction(next), delay));
    };
    if (boops.count >= 4) {
      boops.count = 0;
      setReaction("dizzy");
      later(1100, null);
    } else {
      setReaction("blink");
      later(120, payoffReactions[(boops.count - 1) % payoffReactions.length]);
      later(560, null);
    }
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      squashRef.current?.animate([
        { transform: "scale(1, 1)" },
        { transform: "scale(1.10, 0.86)", offset: 0.18 },
        { transform: "scale(0.95, 1.08)", offset: 0.45 },
        { transform: "scale(1.03, 0.97)", offset: 0.72 },
        { transform: "scale(1, 1)" },
      ], { duration: 420, easing: "linear" });
    }
  };

  const layer = {
    position: "absolute" as const,
    inset: 0,
    backgroundSize: "300% 300%",
    backgroundRepeat: "no-repeat" as const,
  };

  return (
    <button
      ref={setButtonRefs}
      {...buttonProps}
      type="button"
      onClick={boop}
      aria-label={`Boop the ${label}`}
      aria-expanded={expanded}
      aria-controls={controls}
      className={cn("portfolio-guide__mascot-control", className)}
      style={{ position: "relative", display: "block", width: size, height: size, padding: 0, border: 0, background: "transparent", cursor: "pointer", userSelect: "none", ...style }}
    >
      <span ref={squashRef} style={{ position: "relative", display: "block", width: "100%", height: "100%", transformOrigin: "50% 78%" }}>
        <span style={{ ...layer, backgroundImage: `url(${directionsSrc})`, ...cell(directions.indexOf(direction)), opacity: reaction ? 0 : 1 }} />
        <span style={{ ...layer, backgroundImage: `url(${reactionsSrc})`, ...cell(reactions.indexOf(reaction ?? "blink")), opacity: reaction ? 1 : 0 }} />
      </span>
    </button>
  );
});
InteractiveMascot.displayName = "InteractiveMascot";
