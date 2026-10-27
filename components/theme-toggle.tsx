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

  if (!mounted) return <span className="grid size-[30px] shrink-0 place-items-center rounded-full border border-(--line) bg-transparent" aria-hidden="true" />;
  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";
  return <button className="grid size-[30px] shrink-0 place-items-center rounded-full border border-(--line) bg-transparent text-(--ink) transition-[background-color,border-color,color,transform] duration-200 ease-in-out hover:rotate-4 hover:border-(--theme-control-hover-border) hover:bg-(--theme-control-hover) hover:text-(--theme-control-hover-ink)" type="button" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={label} title={label}><SunIcon className="size-3.5 dark:hidden" weight="bold" aria-hidden="true" /><MoonIcon className="hidden size-3.5 dark:block" weight="fill" aria-hidden="true" /></button>;
}
