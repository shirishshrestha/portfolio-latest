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
}: {
  href: string;
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <a
      className="inline-link"
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
    <main className="page-content">
      <a className="skip-link" href="#work">
        Skip to content
      </a>
      <header className="site-header shell">
        <a
          className="wordmark"
          href="#top"
          aria-label="Shirish Shrestha, back to top"
        >
          <Image
            className="navbar-logo"
            src={navbarLogo}
            alt="Shirish Shrestha — Software Engineer"
            sizes="(max-width: 720px) 220px, 280px"
            preload
          />
        </a>
        <div className="header-actions">
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <section className="hero shell" id="top">
        <Reveal>
          <p className="eyebrow">Shirish Shrestha / Software engineer</p>
        </Reveal>
        <div className="hero-grid">
          <Reveal delay={0.05}>
            <h1>
              Complex systems,
              <br />
              <em>made clear.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="hero-aside">
              <p>
                I build product interfaces and backend services that make
                complex workflows clear and reliable.
              </p>
              <a
                className="round-link"
                href="#work"
                aria-label="View selected work"
              >
                <ArrowDownRightIcon weight="bold" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="hero-foot">
            <div className="portrait-frame">
              <Image
                src="/images/shirish.png"
                alt="Portrait of Shirish Shrestha"
                width={560}
                height={680}
                priority
                sizes="(max-width: 720px) 100vw, 36vw"
              />
            </div>
            <p>
              Building software across frontend and backend at eSewa.
              <br />
              React, Next.js, TypeScript, Node.js, REST APIs.
            </p>
          </div>
        </Reveal>
      </section>
      <section className="section shell" id="work">
        <div className="section-head">
          <p className="eyebrow">01 / Selected work</p>
          <p>A selection of products and platforms I’ve contributed to.</p>
        </div>
        <div className="work-list">
          {featuredWork.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="work-item">
                <p className="work-index">0{index + 1}</p>
                <div>
                  <p className="eyebrow">{item.type}</p>
                  <h2>{item.title}</h2>
                </div>
                <div className="work-summary">
                  <p>{item.copy}</p>
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <ExternalLink
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
      <section className="statement">
        <Reveal>
          <p>
            The best software makes complexity easier to <em>work with.</em>
          </p>
        </Reveal>
      </section>
      <section className="section shell" id="experience">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">02 / Experience</p>
            <p>Experience across fintech, AI, agency, and product teams.</p>
          </div>
        </Reveal>
        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.05}>
              <article>
                <p>{item.period}</p>
                <h3>{item.company}</h3>
                <div>
                  <strong>{item.role}</strong>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section shell tech-stack-section">
        <div className="tech-stack-layout">
          <Reveal>
            <div className="tech-stack-copy">
              <p className="eyebrow">03 / Tech stack</p>
              <h2>Tools for product interfaces and the systems behind them.</h2>
              <p>A focused stack for building responsive interfaces, connected application services, and reliable delivery workflows.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="tech-stack-visual">
              <OrbitingTechStack items={techStack} />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">04 / Start a conversation</p>
            <h2>
              Have a product that
              <br />
              <em>needs to make sense?</em>
            </h2>
            <a
              className="email-link"
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
