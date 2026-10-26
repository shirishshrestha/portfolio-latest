"use client";

import * as React from "react";
import { ArrowUpIcon } from "@phosphor-icons/react";
import { footerColumns, profile } from "@/data/portfolio";

const COLORS = {
  background: "#10211F",
  ink: "#F3F5F1",
  warm: "#F37859",
};

const FOOTER_CSS = `
.halftone-footer {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 620px;
  background: var(--halftone-bg);
  color: var(--halftone-ink);
  -webkit-font-smoothing: antialiased;
}
.halftone-footer canvas {
  position: absolute;
  inset: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.halftone-footer__content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(190px, 1.2fr) repeat(3, minmax(100px, 1fr));
  gap: 28px;
  padding: 34px clamp(20px, 5vw, 72px) 0;
  font-family: var(--font-gilroy), Arial, sans-serif;
  font-size: 12px;
  line-height: 1.5;
}
.halftone-footer__brand strong,
.halftone-footer__brand span {
  display: block;
}
.halftone-footer__brand strong {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.03em;
}
.halftone-footer__brand span,
.halftone-footer__column h3 {
  color: color-mix(in srgb, var(--halftone-ink) 58%, transparent);
}
.halftone-footer__brand span {
  margin-top: 5px;
}
.halftone-footer__column h3 {
  margin: 0 0 10px;
  font: inherit;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.halftone-footer__column ul {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.halftone-footer__column a,
.halftone-footer__up {
  color: inherit;
  text-decoration: none;
  text-underline-offset: 4px;
  transition: color 160ms ease, text-decoration-color 160ms ease;
}
.halftone-footer__column a:focus-visible,
.halftone-footer__up:focus-visible {
  outline: 2px solid var(--halftone-warm);
  outline-offset: 4px;
}
.halftone-footer__rule {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-sizing: border-box;
  min-height: 72px;
  padding: 12px clamp(20px, 5vw, 72px) max(12px, env(safe-area-inset-bottom));
  background: var(--halftone-rail);
  border-top: 1px solid color-mix(in srgb, var(--halftone-ink) 24%, transparent);
  font-size: 12px;
}
.halftone-footer__rule small {
  color: color-mix(in srgb, var(--halftone-ink) 68%, transparent);
}
.halftone-footer__up {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 4px 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}
.halftone-footer__up svg {
  transition: transform 160ms ease;
}
@media (hover: hover) and (pointer: fine) {
  .halftone-footer__column a:hover,
  .halftone-footer__up:hover {
    color: var(--halftone-warm);
    text-decoration: underline;
  }
  .halftone-footer__up:hover svg {
    transform: translateY(-2px);
  }
}
.halftone-footer__up:active {
  transform: scale(0.96);
}
@media (max-width: 720px) {
  .halftone-footer {
    min-height: 500px;
  }
  .halftone-footer__content {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 26px;
  }
  .halftone-footer__brand {
    grid-column: 1 / -1;
  }
  .halftone-footer__rule {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
    min-height: 92px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .halftone-footer__column a,
  .halftone-footer__up,
  .halftone-footer__up svg {
    transition: none;
  }
}
`;

function hexToRgb(hex: string) {
  const value = hex.replace("#", "");
  const normalized = value.length === 3 ? value.split("").map((part) => part + part).join("") : value;
  if (normalized.length !== 6) return null;
  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16),
  ];
}

function dotRadius(coverage: number, gap: number) {
  return Math.sqrt(Math.min(1, Math.max(0, coverage))) * gap * 0.54;
}

export function HalftoneWordmarkFooter() {
  const rootRef = React.useRef<HTMLElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false, willReadFrequently: true });
    if (!root || !canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    const resizeObserver = new ResizeObserver(() => {
      layout();
      wake();
    });
    let dots = new Float32Array();
    let width = 0;
    let height = 0;
    let ratio = 1;
    let pointerX = -100000;
    let pointerY = -100000;
    let awake = true;

    const ink = hexToRgb(COLORS.ink) ?? [243, 245, 241];
    const warm = hexToRgb(COLORS.warm) ?? [243, 120, 89];

    const layout = () => {
      const bounds = root.getBoundingClientRect();
      width = Math.max(1, Math.round(bounds.width));
      height = Math.max(1, Math.round(bounds.height));
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);

      const gap = width < 720 ? 8 : 7;
      const mask = document.createElement("canvas");
      mask.width = width;
      mask.height = height;
      const maskContext = mask.getContext("2d", { willReadFrequently: true });
      if (!maskContext) return;

      const fontFamily = getComputedStyle(root).getPropertyValue("--font-gilroy").trim() || "Arial, sans-serif";
      maskContext.font = `800 100px ${fontFamily}`;
      const measured = maskContext.measureText("shirish").width;
      const fontSize = measured > 0 ? (width * 1.04 * 100) / measured : 100;
      const wordmarkLift = width < 720 ? 140 : 110;
      maskContext.font = `800 ${fontSize}px ${fontFamily}`;
      maskContext.textAlign = "center";
      maskContext.textBaseline = "alphabetic";
      maskContext.fillStyle = "#000";
      maskContext.fillText("shirish", width / 2, height + fontSize * 0.13 - wordmarkLift);

      const pixels = maskContext.getImageData(0, 0, width, height).data;
      const columns = Math.ceil(width / gap);
      const rows = Math.ceil(height / gap);
      const values: number[] = [];

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          let alpha = 0;
          for (let sampleY = 0; sampleY < 3; sampleY += 1) {
            for (let sampleX = 0; sampleX < 3; sampleX += 1) {
              const x = Math.min(width - 1, Math.floor(column * gap + ((sampleX + 0.5) * gap) / 3));
              const y = Math.min(height - 1, Math.floor(row * gap + ((sampleY + 0.5) * gap) / 3));
              alpha += pixels[(y * width + x) * 4 + 3];
            }
          }
          const coverage = alpha / (9 * 255);
          if (coverage < 0.06) continue;
          const homeX = column * gap + gap / 2;
          const homeY = row * gap + gap / 2;
          values.push(homeX, homeY, 0, 0, homeX, homeY, dotRadius(coverage, gap));
        }
      }

      dots = new Float32Array(values);
      awake = true;
    };

    const draw = () => {
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.fillStyle = COLORS.background;
      context.fillRect(0, 0, width, height);
      let moving = false;
      const interactive = !reducedMotion.matches;

      for (let index = 0; index < dots.length; index += 7) {
        let x = dots[index];
        let y = dots[index + 1];
        let velocityX = dots[index + 2];
        let velocityY = dots[index + 3];
        const homeX = dots[index + 4];
        const homeY = dots[index + 5];

        if (interactive) {
          const dx = x - pointerX;
          const dy = y - pointerY;
          const distanceSquared = dx * dx + dy * dy;
          const radius = 84;
          if (distanceSquared < radius * radius) {
            const distance = Math.sqrt(distanceSquared) + 0.001;
            const force = (1 - distance / radius) * 2.1;
            velocityX += (dx / distance) * force;
            velocityY += (dy / distance) * force;
          }
          velocityX = (velocityX + (homeX - x) * 0.05) * 0.84;
          velocityY = (velocityY + (homeY - y) * 0.05) * 0.84;
          x += velocityX;
          y += velocityY;
          if (Math.abs(velocityX) + Math.abs(velocityY) > 0.02 || Math.abs(x - homeX) + Math.abs(y - homeY) > 0.05) {
            moving = true;
          } else {
            x = homeX;
            y = homeY;
            velocityX = 0;
            velocityY = 0;
          }
          dots[index] = x;
          dots[index + 1] = y;
          dots[index + 2] = velocityX;
          dots[index + 3] = velocityY;
        }

        const distanceFromHome = Math.hypot(x - homeX, y - homeY);
        const warmth = Math.min(1, distanceFromHome / 28);
        context.fillStyle = `rgb(${Math.round(ink[0] + (warm[0] - ink[0]) * warmth)}, ${Math.round(ink[1] + (warm[1] - ink[1]) * warmth)}, ${Math.round(ink[2] + (warm[2] - ink[2]) * warmth)})`;
        context.beginPath();
        context.arc(x, y, dots[index + 6], 0, Math.PI * 2);
        context.fill();
      }

      awake = interactive && moving;
    };

    const loop = () => {
      animationFrame = 0;
      draw();
      if (awake) animationFrame = window.requestAnimationFrame(loop);
    };

    const wake = () => {
      awake = true;
      if (!animationFrame) animationFrame = window.requestAnimationFrame(loop);
    };

    const toLocal = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      return [event.clientX - bounds.left, event.clientY - bounds.top];
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion.matches) return;
      [pointerX, pointerY] = toLocal(event);
      wake();
    };
    const handlePointerLeave = () => {
      pointerX = -100000;
      pointerY = -100000;
      wake();
    };

    layout();
    draw();
    root.addEventListener("pointermove", handlePointerMove, { passive: true });
    root.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    resizeObserver.observe(root);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      root.removeEventListener("pointermove", handlePointerMove);
      root.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer
      ref={rootRef}
      className="halftone-footer"
      style={{
        "--halftone-bg": COLORS.background,
        "--halftone-ink": COLORS.ink,
        "--halftone-warm": COLORS.warm,
        "--halftone-rail": "#0B1B19",
      } as React.CSSProperties}
      aria-labelledby="halftone-footer-title"
    >
      <style>{FOOTER_CSS}</style>
      <canvas ref={canvasRef} aria-hidden="true" />
      <h2 id="halftone-footer-title" className="sr-only">{profile.name}</h2>
      <div className="halftone-footer__content">
        <div className="halftone-footer__brand">
          <strong>{profile.name}</strong>
          <span>Software engineer · {profile.location}</span>
        </div>
        {footerColumns.map((column) => (
          <nav className="halftone-footer__column" aria-label={column.title} key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="halftone-footer__rule">
        <small>© 2026 {profile.name}</small>
        <button className="halftone-footer__up" type="button" onClick={scrollToTop}>
          Back to top <ArrowUpIcon aria-hidden="true" weight="bold" />
        </button>
      </div>
    </footer>
  );
}
