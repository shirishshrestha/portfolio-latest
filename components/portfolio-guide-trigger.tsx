"use client";

import { useState } from "react";
import { XIcon } from "@phosphor-icons/react";
import { Mascot } from "page-mascot";
import {
  guideAudienceOptions,
  guideLinks,
  type GuideAudience,
  type GuideLink,
} from "@/data/portfolio-guide";
import { Popover, PopoverAnchor, PopoverContent } from "./ui/popover";

type GuideView = "home" | GuideAudience;

function GuideLinkList({
  links,
  onNavigate,
}: {
  links: readonly GuideLink[];
  onNavigate: () => void;
}) {
  return (
    <nav className="mt-5 grid gap-2" aria-label="Portfolio guide links">
      {links.map((link) => (
        <a
          href={link.href}
          key={link.href}
          onClick={onNavigate}
          className="flex min-h-14 items-center justify-between gap-4 rounded-[13px] border border-[color-mix(in_srgb,var(--line)_82%,transparent)] bg-[color-mix(in_srgb,var(--paper)_58%,transparent)] px-3.25 py-2.75 text-left text-sm transition-[border-color,background-color,color,transform] duration-150 ease-out hover:border-(--accent) hover:bg-[color-mix(in_srgb,var(--accent)_10%,var(--paper))] hover:text-(--accent) focus-visible:outline-3 focus-visible:outline-(--accent) focus-visible:outline-offset-4 active:scale-[0.96]"
        >
          <span className="grid gap-0.5">
            <strong className="text-sm font-bold">{link.label}</strong>
            <small className="text-xs font-medium leading-[1.3] text-(--muted)">
              {link.description}
            </small>
          </span>
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </nav>
  );
}

function GuideHome({ onChoose }: { onChoose: (view: GuideAudience) => void }) {
  return (
    <>
      <p className="eyebrow mb-5 ml-1 inline-flex min-h-6 items-center rounded-full border border-[color-mix(in_srgb,var(--accent)_44%,var(--line))] px-2 py-1 text-[10px] font-bold tracking-[0.12em] text-(--accent)">
        Portfolio guide
      </p>
      <h2
        className="mb-2 pt-3 mr-11 max-w-70 text-[31px] font-extrabold leading-[0.94] tracking-[-0.06em]"
        id="portfolio-guide-title"
      >
        What brings you here?
      </h2>
      <p className="text-[13px] leading-normal text-(--muted)">
        Pick a route and I’ll point you to the useful parts first.
      </p>
      <div className="mt-5 grid gap-2">
        {guideAudienceOptions.map((option) => (
          <button
            type="button"
            key={option.id}
            onClick={() => onChoose(option.id)}
            className="flex min-h-14 items-center justify-between gap-4 rounded-[13px] border border-[color-mix(in_srgb,var(--line)_82%,transparent)] bg-[color-mix(in_srgb,var(--paper)_58%,transparent)] px-3.25 py-2.75 text-left text-sm transition-[border-color,background-color,color,transform] duration-150 ease-out hover:border-(--accent) hover:bg-[color-mix(in_srgb,var(--accent)_10%,var(--paper))] hover:text-(--accent) focus-visible:outline-3 focus-visible:outline-(--accent) focus-visible:outline-offset-4 active:scale-[0.96]"
          >
            <span className="grid gap-0.5">
              <strong className="text-sm font-bold">{option.label}</strong>
              <small className="text-xs font-medium leading-[1.3] text-(--muted)">
                {option.description}
              </small>
            </span>
            <span aria-hidden="true">→</span>
          </button>
        ))}
      </div>
    </>
  );
}

function GuideAudienceView({
  audience,
  onBack,
  onNavigate,
}: {
  audience: GuideAudience;
  onBack: () => void;
  onNavigate: () => void;
}) {
  const option = guideAudienceOptions.find((item) => item.id === audience);

  return (
    <>
      <div className="flex items-center gap-2 mb-5">
        <button
          type="button"
          className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-[color-mix(in_srgb,var(--line)_82%,transparent)] bg-[color-mix(in_srgb,var(--paper)_58%,transparent)] px-2 py-1.25 text-xs text-(--muted) transition-[border-color,color,transform] duration-150 ease-out hover:border-(--accent) hover:text-(--accent) focus-visible:outline-3 focus-visible:outline-(--accent) focus-visible:outline-offset-4 active:scale-[0.96]"
          onClick={onBack}
        >
          <span aria-hidden="true">←</span> All routes
        </button>
        <p className="eyebrow inline-flex min-h-6 items-center rounded-full border border-[color-mix(in_srgb,var(--accent)_44%,var(--line))] px-2 py-1 text-[10px] font-bold tracking-[0.12em] text-(--accent)">
          {option?.label}
        </p>
      </div>
      <h2
        className="mb-2 mr-11 max-w-70 text-[31px] font-extrabold leading-[0.94] tracking-[-0.06em]"
        id="portfolio-guide-title"
      >
        Start here.
      </h2>
      <p className="text-[13px] leading-normal text-(--muted)">
        {option?.description}
      </p>
      <GuideLinkList links={guideLinks[audience]} onNavigate={onNavigate} />
    </>
  );
}

export function PortfolioGuideTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<GuideView>("home");

  const closeGuide = () => setIsOpen(false);
  const chooseView = (nextView: GuideView) => setView(nextView);
  const handleMascotClick = () => {
    if (!isOpen) setView("home");
    setIsOpen((open) => !open);
  };

  return (
    <div className="portfolio-guide">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverAnchor asChild>
          <div className="relative z-2 h-24 w-24" onClick={handleMascotClick}>
            <Mascot
              directions="/mascots/code-weaver-directions.webp"
              reactions="/mascots/code-weaver-reactions.webp"
              size={96}
              label="Code Weaver portfolio guide"
              className="portfolio-guide__mascot-control"
            />
          </div>
        </PopoverAnchor>
        <PopoverContent
          id="portfolio-guide-panel"
          aria-labelledby="portfolio-guide-title"
          className="w-[min(368px,calc(100vw-32px))] max-h-[min(620px,calc(100dvh-48px))] overflow-auto overscroll-contain rounded-[22px] border border-[color-mix(in_srgb,var(--line)_86%,transparent)] bg-[color-mix(in_srgb,var(--paper)_94%,var(--deep))] p-6 text-(--ink) shadow-[0_24px_60px_color-mix(in_srgb,#000_28%,transparent),0_5px_18px_color-mix(in_srgb,#000_14%,transparent)] motion-reduce:animate-none"
          side="top"
          align="start"
          sideOffset={14}
        >
          <button
            type="button"
            className="absolute right-4.5 top-4.5 grid size-8 place-items-center rounded-full border border-[color-mix(in_srgb,var(--line)_92%,transparent)] bg-[color-mix(in_srgb,var(--paper)_80%,transparent)] text-(--ink) transition-[border-color,color,transform] duration-150 ease-out hover:border-(--accent) hover:text-(--accent) focus-visible:outline-3 focus-visible:outline-(--accent) focus-visible:outline-offset-4 active:scale-[0.96]"
            aria-label="Close portfolio guide"
            onClick={closeGuide}
          >
            <XIcon
              className="portfolio-guide__close-icon"
              weight="bold"
              aria-hidden="true"
            />
          </button>
          {view === "home" ? <GuideHome onChoose={chooseView} /> : null}
          {view !== "home" ? (
            <GuideAudienceView
              audience={view}
              onBack={() => chooseView("home")}
              onNavigate={closeGuide}
            />
          ) : null}
        </PopoverContent>
      </Popover>
    </div>
  );
}
