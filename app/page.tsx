import Image from "next/image";
import navbarLogo from "@/public/images/brand/navbar-logo-web.png";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { experience, featuredWork, profile, techStack } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { OrbitingTechStack } from "@/components/ui/orbiting-tech-stack";
import { ThemeToggle } from "@/components/theme-toggle";
import { HalftoneWordmarkFooter } from "@/components/halftone-wordmark-footer";
import { PortfolioGuideTrigger } from "@/components/portfolio-guide-trigger";
import { MobileNavigationDock } from "@/components/mobile-navigation-dock";

function ExternalLink({
  href,
  children,
  label,
  className,
}: {
  href: string;
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <a
      className={`inline-flex shrink-0 items-center gap-1.25 whitespace-nowrap text-[13px] text-(--ink) [&>svg]:size-3.75 [&>svg]:shrink-0 [&>svg]:text-(--accent) ${className ?? ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
      <ArrowUpRightIcon aria-hidden="true" weight="bold" />
    </a>
  );
}

export default function Home() {
  return (
    <>
    <main className="relative z-1 mb-[var(--footer-reveal-height)] bg-(--paper) max-[720px]:mb-0">
      <a className="fixed left-4 -top-20 z-5 bg-(--accent) px-4 py-3 text-white transition-[top] focus:top-4" href="#work">
        Skip to content
      </a>
      <header className="mx-auto flex w-[calc(100%-64px)] max-w-320 items-center justify-between border-b border-(--line) py-6.75 max-[720px]:w-[calc(100%-36px)] max-[720px]:py-5 max-[540px]:grid max-[540px]:grid-cols-[minmax(0,1fr)_auto] max-[540px]:gap-y-5.5">
        <a
          className="inline-flex shrink-0 items-center"
          href="#top"
          aria-label="Shirish Shrestha, back to top"
        >
          <Image
            className="navbar-logo block h-auto w-70 max-[720px]:w-55"
            src={navbarLogo}
            alt="Shirish Shrestha — Software Engineer"
            sizes="(max-width: 720px) 220px, 280px"
            preload
          />
        </a>
        <div className="flex items-center gap-4.5 max-[720px]:gap-3 max-[540px]:contents">
          <nav className="flex items-center gap-6.25 text-[13px] max-[720px]:gap-3.75 max-[720px]:text-xs max-[540px]:hidden" aria-label="Primary navigation">
            <a className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-(--accent) after:transition-[width] after:duration-200 after:ease-in-out hover:after:w-full" href="#work">Work</a>
            <a className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-(--accent) after:transition-[width] after:duration-200 after:ease-in-out hover:after:w-full" href="#experience">Experience</a>
            <a className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-(--accent) after:transition-[width] after:duration-200 after:ease-in-out hover:after:w-full" href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <section className="mx-auto flex min-h-195 w-[calc(100%-64px)] max-w-320 flex-col pt-11.5 max-[720px]:w-[calc(100%-36px)] max-[720px]:min-h-175 max-[720px]:pt-9.25" id="top">
        <Reveal>
          <p className="m-0 text-[11px] uppercase leading-[1.35] tracking-[0.1em] text-(--muted)">Shirish Shrestha / Software engineer</p>
        </Reveal>
        <div className="mt-18.75 grid grid-cols-[1.6fr_0.6fr] items-end gap-8 max-[720px]:mt-14.25 max-[720px]:block">
          <Reveal delay={0.05}>
            <h1 className="m-0 max-w-235 text-[clamp(58px,8.2vw,132px)] font-extrabold leading-[0.84] tracking-[-0.075em] max-[720px]:text-[clamp(52px,16vw,82px)] max-[720px]:leading-[0.86]">
              Complex systems,
              <br />
              <em className="not-italic text-(--accent)">made clear.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="max-w-61.25 pb-2.5 max-[720px]:ml-auto max-[720px]:mt-9">
              <p className="m-0 text-lg leading-[1.25] tracking-[-0.025em] max-[720px]:text-base">
                I build product interfaces and backend services that make
                complex workflows clear and reliable.
              </p>
              <a
                className="mt-7 grid size-14.5 place-items-center rounded-full bg-(--ink) text-(--paper) transition-[transform,background-color] duration-200 ease-in-out hover:translate-x-0.75 hover:translate-y-0.75 hover:bg-(--accent) [&>svg]:size-6 [&>svg]:text-(--paper)"
                href="#work"
                aria-label="View selected work"
              >
                <ArrowDownRightIcon weight="bold" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="mt-auto flex items-end justify-between gap-9 max-[720px]:mt-11.25 max-[720px]:block">
            <div className="w-[min(36vw,420px)] self-end overflow-hidden bg-[#d8dfd6] max-[720px]:w-full max-[720px]:max-w-85">
              <Image
                src="/images/shirish.png"
                alt="Portrait of Shirish Shrestha"
                width={560}
                height={680}
                className="block h-auto w-full grayscale contrast-[1.05] mix-blend-multiply"
                priority
                sizes="(max-width: 720px) 100vw, 36vw"
              />
            </div>
            <p className="pb-5 text-sm leading-[1.45] text-(--muted) max-[720px]:pt-4.25 max-[720px]:pb-0 max-[720px]:text-[13px]">
              Building software across frontend and backend at eSewa.
              <br />
              React, Next.js, TypeScript, Node.js, REST APIs.
            </p>
          </div>
        </Reveal>
      </section>
      <section className="mx-auto w-[calc(100%-64px)] max-w-320 py-38 max-[720px]:w-[calc(100%-36px)] max-[720px]:py-22" id="work">
        <div className="mb-20 grid grid-cols-2 max-[720px]:mb-12 max-[720px]:block">
          <p className="m-0 text-[11px] uppercase leading-[1.35] tracking-[0.1em] text-(--muted) max-[720px]:mb-5">01 / Selected work</p>
          <p className="m-0 max-w-97.5 text-[23px] leading-[1.17] tracking-[-0.03em] max-[720px]:text-xl">A selection of products and platforms I’ve contributed to.</p>
        </div>
        <div className="border-t border-(--line)">
          {featuredWork.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="group grid grid-cols-[80px_1fr_1fr_80px] items-center gap-6 border-b border-(--line) py-8.75 transition-[border-color] duration-200 ease-in-out hover:border-b-(--accent) max-[720px]:grid-cols-[28px_1fr] max-[720px]:gap-3.75 max-[720px]:py-7 max-[720px]:hover:border-b-(--line)">
                <p className="m-0 text-xs text-(--accent)">0{index + 1}</p>
                <div>
                  <p className="m-0 text-[11px] uppercase leading-[1.35] tracking-[0.1em] text-(--muted)">{item.type}</p>
                  <h2 className="m-[7px_0_0] text-[clamp(32px,3.6vw,58px)] leading-[0.93] tracking-[-0.065em] transition-[color,transform] duration-200 ease-in-out group-hover:text-(--accent) group-hover:translate-x-2 max-[720px]:text-[42px]">{item.title}</h2>
                </div>
                <div className="max-[720px]:col-start-2">
                  <p className="mb-3.5 text-[15px] leading-[1.35] text-(--muted)">{item.copy}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span className="border border-(--line) px-1.75 py-1 text-[10px] uppercase tracking-[0.06em]" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <ExternalLink
                  className="max-[720px]:col-start-2 max-[720px]:justify-self-start"
                  href={item.href}
                  label={`View ${item.title} source code on GitHub`}
                >
                  <GithubLogoIcon aria-hidden="true" />
                  View code
                </ExternalLink>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="grid min-h-127.5 place-items-center bg-(--deep) px-[9vw] py-12.5 text-center text-(--on-deep) max-[720px]:min-h-90">
        <Reveal>
          <p className="m-0 max-w-252.5 text-[clamp(43px,6.5vw,100px)] font-bold leading-[0.92] tracking-[-0.07em] max-[720px]:text-[46px]">
            The best software makes complexity easier to <em className="not-italic text-[#f3b6a7]">work with.</em>
          </p>
        </Reveal>
      </section>
      <section className="mx-auto w-[calc(100%-64px)] max-w-320 py-38 max-[720px]:w-[calc(100%-36px)] max-[720px]:py-22" id="experience">
        <Reveal>
          <div className="mb-20 grid grid-cols-2 max-[720px]:mb-12 max-[720px]:block">
            <p className="m-0 text-[11px] uppercase leading-[1.35] tracking-[0.1em] text-(--muted) max-[720px]:mb-5">02 / Experience</p>
            <p className="m-0 max-w-97.5 text-[23px] leading-[1.17] tracking-[-0.03em] max-[720px]:text-xl">Experience across fintech, AI, agency, and product teams.</p>
          </div>
        </Reveal>
        <div className="border-t border-(--line)">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.05}>
              <article className="grid grid-cols-[1fr_1fr_1.35fr] gap-6 border-b border-(--line) py-7.25 max-[720px]:grid-cols-1 max-[720px]:gap-2.25 max-[720px]:py-6">
                <p className="m-0 text-[13px] text-(--muted)">{item.period}</p>
                <h3 className="m-0 text-[22px] tracking-[-0.04em]">{item.company}</h3>
                <div>
                  <strong className="text-sm">{item.role}</strong>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto w-[calc(100%-64px)] max-w-320 pb-38 max-[720px]:w-[calc(100%-36px)] max-[720px]:pb-22">
        <div className="grid grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] items-center gap-[clamp(42px,7vw,112px)] max-[720px]:grid-cols-1 max-[720px]:gap-10.5">
          <Reveal>
            <div className="max-w-136">
              <p className="m-0 mb-5.5 text-[11px] uppercase leading-[1.35] tracking-[0.1em] text-(--muted)">03 / Tech stack</p>
              <h2 className="m-0 max-w-[11ch] text-[clamp(38px,4.4vw,66px)] leading-[0.94] tracking-[-0.065em] max-[720px]:max-w-[12ch] max-[720px]:text-[clamp(38px,12vw,54px)]">Tools for product interfaces and the systems behind them.</h2>
              <p className="mt-6.25 max-w-[38ch] text-base leading-[1.55] text-(--muted) max-[720px]:text-[15px]">A focused stack for building responsive interfaces, connected application services, and reliable delivery workflows.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="min-w-0">
              <OrbitingTechStack items={techStack} />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="relative isolate min-h-[85dvh] bg-(--accent) px-0 pb-[clamp(150px,20vw,255px)] pt-27.5 text-[#fff8ef] after:absolute after:inset-x-0 after:bottom-0 after:z-0 after:h-[clamp(210px,20vw,320px)] after:bg-[linear-gradient(180deg,transparent_0%,var(--deep)_100%)] after:content-[''] after:pointer-events-none max-[720px]:min-h-0 max-[720px]:pb-34 max-[720px]:pt-19" id="contact">
        <div className="relative z-1 mx-auto w-[calc(100%-64px)] max-w-320 max-[720px]:w-[calc(100%-36px)]">
          <Reveal>
            <p className="m-0 text-[11px] uppercase leading-[1.35] tracking-[0.1em] text-[#ffe5dc]">04 / Start a conversation</p>
            <h2 className="my-10.75 mb-8.5 text-[clamp(48px,6.5vw,100px)] leading-[0.85] tracking-[-0.073em] max-[720px]:my-8 max-[720px]:mb-6.75 max-[720px]:text-5xl">
              Have a product that
              <br />
              <em className="not-italic text-(--deep)">needs to make sense?</em>
            </h2>
            <a
              className="inline-flex items-center gap-2.75 border-b-2 border-current pb-1.5 text-[clamp(18px,2vw,29px)] tracking-[-0.04em] max-[720px]:text-lg [&>svg]:size-6"
              href={`mailto:${profile.email}`}
            >
              {profile.email}{" "}
              <ArrowUpRightIcon aria-hidden="true" weight="bold" />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
    <div className="footer-reveal">
      <HalftoneWordmarkFooter />
    </div>
    <PortfolioGuideTrigger />
    <MobileNavigationDock />
    </>
  );
}
