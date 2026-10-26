"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) return <span className="theme-toggle-placeholder" aria-hidden="true" />;
  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";
  return <button className="theme-toggle" type="button" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={label} title={label}><SunIcon className="theme-icon theme-icon-light" weight="bold" aria-hidden="true" /><MoonIcon className="theme-icon theme-icon-dark" weight="fill" aria-hidden="true" /></button>;
}
