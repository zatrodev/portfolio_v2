import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowUp,
  Check,
  Copy,
  Github,
  MapPin,
  Linkedin,
  Plus,
  X,
  Asterisk,
  Sparkles,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  siAndroid,
  siExpo,
  siFirebase,
  siGo,
  siIced,
  siJetpackcompose,
  siKotlin,
  siNuxt,
  siReact,
  siRust,
  siSvelte,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import Magnet from "./components/react-bits/Magnet";
import ScrollFloat from "./components/react-bits/ScrollFloat";

gsap.registerPlugin(ScrollTrigger);
const email = "santos.robertoneil@gmail.com";

const kuboPhotos = [
  {
    src: "/images/kubo-conversation.webp",
    alt: "Robbie discussing Kubo at a laptop during an in-person meeting",
    caption: "Listening & learning",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/kubo-demo.webp",
    alt: "Robbie demonstrating Kubo on a laptop in an office",
    caption: "Showing what we’re building",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/kubo-hands-on.webp",
    alt: "Robbie working at a laptop with a teammate on site",
    caption: "Still hands-on",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/kubo-property-visit.webp",
    alt: "Robbie with a backpack on a property walkthrough beside a stairway",
    caption: "Out on a dorm visit",
    width: 900,
    height: 1200,
  },
];

const creatorPosts = [
  {
    title: "Cookies, minus the confusion.",
    description: "What websites remember about you, and why it matters.",
    image: "/images/tiktok-cookies.webp",
    href: "https://www.tiktok.com/@zatrodev/video/7683847978607693076",
  },
  {
    title: "The padlock isn’t the whole story.",
    description:
      "An encrypted connection doesn’t always mean a trustworthy website.",
    image: "/images/tiktok-https.webp",
    href: "https://www.tiktok.com/@zatrodev/video/7680515693883772180",
  },
  {
    title: "Spotting a scam link.",
    description: "A closer look at domains before you open that link.",
    image: "/images/tiktok-scam-links.webp",
    href: "https://www.tiktok.com/@zatrodev/video/7678613615842315541",
  },
];

const readBooks = [
  {
    title: "Influence",
    subtitle: "The Psychology of Persuasion",
    author: "Robert B. Cialdini",
    style: "influence",
  },
  {
    title: "12 Rules for Life",
    subtitle: "An Antidote to Chaos",
    author: "Jordan B. Peterson",
    style: "rules",
  },
  {
    title: "The Motive",
    subtitle: "",
    author: "Patrick Lencioni",
    style: "motive",
  },
  {
    title: "The 48 Laws of Power",
    subtitle: "",
    author: "Robert Greene",
    style: "power",
  },
];

type Project = {
  name: string;
  type: string;
  image?: string;
  href?: string;
  description: string;
  stack: string[];
  gallery?: { src: string; alt: string }[];
  note?: string;
};

const kuboProject: Project = {
  name: "Kubo",
  type: "Student housing · React Native",
  image: "/images/kubo-today.webp",
  description:
    "I started as frontend lead, then became CEO in May 2026. I work with dorm owners and lead the product across student, management, admin, and mobile experiences.",
  stack: ["React Native", "Expo", "TypeScript", "SvelteKit"],
  gallery: [
    {
      src: "/images/kubo-dorm.webp",
      alt: "Kubo mobile dorm information, with a map, directions, and property photos",
    },
    {
      src: "/images/kubo-today.webp",
      alt: "Kubo mobile Today screen for reviewing incoming ocular requests",
    },
    {
      src: "/images/kubo-room-information.webp",
      alt: "Kubo mobile room information sheet showing monthly rent and move-in price breakdown",
    },
  ],
  note: "App captures use sample data. The room information sheet was captured from the current component on October 22, 2026; the other screens use earlier app captures.",
};

const yseisProject: Project = {
  name: "YSES Inventory System",
  type: "Frontend Lead · November 2025–January 2026",
  image: "/images/yseis.webp",
  description:
    "As Frontend Lead from November 2025 to January 2026, I led seven developers through delivery, delegating work and reviewing code across the software lifecycle. I built responsive admin and user dashboards from wireframes, using MVVM to separate the interface from presentation logic.",
  stack: ["React"],
  note: "The live website is currently unavailable. This is an archived dashboard screenshot.",
};

const archive: Project[] = [
  {
    name: "LOLCode Interpreter",
    type: "Rust · Language tools",
    href: "https://github.com/rndsantos/lolcode",
    description:
      "A LOLCode language implementation in Rust, from lexical analysis and parsing to execution. Its Iced desktop interface keeps the editor, token and symbol tables, and console together, with asynchronous input and output.",
    stack: ["Rust", "Iced", "lexer", "parser", "interpreter"],
  },
  {
    name: "KainWell",
    type: "Android · Nutrition",
    image: "/images/kainwell.webp",
    description:
      "A diet planner that turns nutritional goals into personalized meal plans, using the simplex optimization method.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase Firestore"],
  },
  {
    name: "Beehive",
    type: "Android · Privacy",
    image: "/images/beehive.webp",
    description:
      "A local-first password manager with encryption, fingerprint authentication, and app and browser autofill.",
    stack: ["Kotlin", "Jetpack Compose", "Room"],
  },
];

const technologyIcons: Record<string, SimpleIcon> = {
  "React Native": siReact,
  Expo: siExpo,
  TypeScript: siTypescript,
  SvelteKit: siSvelte,
  Rust: siRust,
  Iced: siIced,
  Kotlin: siKotlin,
  "Jetpack Compose": siJetpackcompose,
  "Firebase Firestore": siFirebase,
  Room: siAndroid,
  Go: siGo,
  Nuxt: siNuxt,
  React: siReact,
  Android: siAndroid,
};

function TechnologyLabel({ name }: { name: string }) {
  const icon = technologyIcons[name];

  return (
    <span className="technology-label">
      {icon && (
        <svg
          className="technology-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ color: `#${icon.hex}` }}
        >
          <path fill="currentColor" d={icon.path} />
        </svg>
      )}
      {name}
    </span>
  );
}

function TechnologyLabels({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <span className={`technology-labels ${className}`.trim()}>
      {items.map((name) => (
        <TechnologyLabel key={name} name={name} />
      ))}
    </span>
  );
}

function TechnologyPhrase({ phrase }: { phrase: string }) {
  const parts = phrase.split(" · ");

  return (
    <>
      {parts.map((part, index) => (
        <span className="technology-phrase-part" key={`${part}-${index}`}>
          {index > 0 && <span aria-hidden="true"> · </span>}
          {technologyIcons[part] ? <TechnologyLabel name={part} /> : part}
        </span>
      ))}
    </>
  );
}

function HeroPortrait() {
  return (
    <figure className="hero-portrait">
      <div className="portrait-ring" aria-hidden="true" />
      <div className="portrait-crop">
        <img
          src="/images/robbie-portrait.webp"
          alt="Roberto Neil Santos outdoors, known as Robbie"
          width="1100"
          height="1100"
          fetchPriority="high"
        />
      </div>
      <figcaption>
        <span>that’s me.</span>
      </figcaption>
    </figure>
  );
}

function BrowserFrame({
  image,
  alt,
  address,
  className = "",
}: {
  image: string;
  alt: string;
  address: string;
  className?: string;
}) {
  return (
    <div className={`browser-frame ${className}`}>
      <div className="browser-bar" aria-hidden="true">
        <div className="browser-dots">
          <i />
          <i />
          <i />
        </div>
        <span>{address}</span>
        <Plus aria-hidden="true" size={11} />
      </div>
      <img src={image} alt={alt} loading="lazy" width="1440" height="900" />
    </div>
  );
}

function App() {
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const modalAnimation = useRef<Animation | null>(null);
  const closingModal = useRef(false);
  const [project, setProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const lightTheme = {
      "--background": "#fef9f7",
      "--surface": "#faf4f0",
      "--foreground": "#2c2420",
      "--muted": "#5a504a",
      "--primary": "#983408",
      "--border": "#dbd2cd",
      "--on-primary": "#fef9f7",
    };
    const darkTheme = {
      "--background": "#171a18",
      "--surface": "#222722",
      "--foreground": "#f3f1e9",
      "--muted": "#b7beb3",
      "--primary": "#d4ed83",
      "--border": "#41493e",
      "--on-primary": "#171a18",
    };

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        if (context.conditions?.reduced) {
          ScrollTrigger.create({
            trigger: ".fun-transition",
            start: "top 45%",
            onEnter: () => gsap.set(root.current, darkTheme),
            onLeaveBack: () => gsap.set(root.current, lightTheme),
          });
        } else {
          const transition = gsap.timeline({
            scrollTrigger: {
              trigger: ".fun-transition",
              start: "top bottom",
              end: "top top",
              scrub: 0.65,
            },
          });
          transition.fromTo(root.current, lightTheme, {
            ...darkTheme,
            duration: 0.7,
            ease: "none",
          });
          // Reveal the heading after the palette settles so its foreground and
          // background never pass through the same midtone while it is visible.
          transition.fromTo(
            ".fun-transition h2",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
          );
          gsap.fromTo(
            ".creator-poster",
            { rotate: 5, y: 35 },
            {
              rotate: -3,
              y: -15,
              ease: "none",
              scrollTrigger: {
                trigger: ".creator-feature",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
        return () => gsap.set(root.current, lightTheme);
      },
      root,
    );
    return () => mm.revert();
  }, []);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    let lenis: Lenis | undefined;
    let tick: ((time: number) => void) | undefined;
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        anchors: { offset: -96 },
      });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      const ctx = gsap.context(() => {
        gsap.from(".hero-line > span", {
          yPercent: 115,
          rotate: 3,
          duration: 1.25,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.12,
        });
        gsap.from(".hero-intro, .hero-bottom", {
          y: 20,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          delay: 0.65,
          ease: "power2.out",
        });
        gsap.from(".portrait-crop", {
          scale: 0.96,
          duration: 1.6,
          ease: "power3.out",
        });
        gsap.to(".hero-portrait", {
          y: 42,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".hero-title", {
          y: -65,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "30% top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 45,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 91%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: 8, rotation: -2 },
            {
              yPercent: -5,
              rotation: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            },
          );
        });
        gsap.fromTo(
          ".kubo-phones",
          { y: 95, rotateX: 12, scale: 0.94 },
          {
            y: -12,
            rotateX: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".kubo-stage",
              start: "top 95%",
              end: "center 35%",
              scrub: 1,
            },
          },
        );
        gsap.to(".project-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#work",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }, root);
      return () => {
        ctx.revert();
        if (tick) gsap.ticker.remove(tick);
        lenis?.destroy();
      };
    });
    const refresh = () => ScrollTrigger.refresh();
    void document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => {
      mm.revert();
      window.removeEventListener("load", refresh);
    };
  }, []);

  function openProject(item: Project, trigger: HTMLButtonElement) {
    lastTrigger.current = trigger;
    setProject(item);
    const modal = dialog.current;
    if (!modal) return;
    closingModal.current = false;
    modalAnimation.current?.cancel();
    modal.showModal();
    modal.scrollTop = 0;
    document.body.style.overflow = "hidden";
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      modalAnimation.current = modal.animate(
        [
          { transform: "translateY(64px)", opacity: 0 },
          { transform: "translateY(0)", opacity: 1 },
        ],
        { duration: 420, easing: "cubic-bezier(.16,1,.3,1)" },
      );
    }
  }
  function closeProject() {
    const modal = dialog.current;
    if (!modal?.open || closingModal.current) return;
    modalAnimation.current?.cancel();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      modal.close();
      return;
    }
    closingModal.current = true;
    const animation = modal.animate(
      [
        { transform: "translateY(0)", opacity: 1 },
        { transform: "translateY(32px)", opacity: 0 },
      ],
      { duration: 180, easing: "ease-in", fill: "forwards" },
    );
    modalAnimation.current = animation;
    animation.onfinish = () => {
      modal.close();
      animation.cancel();
    };
  }
  function afterClose() {
    closingModal.current = false;
    modalAnimation.current?.cancel();
    document.body.style.overflow = "";
    lastTrigger.current?.focus();
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyFailed(false);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyFailed(true);
    }
  }

  return (
    <div ref={root} className="portfolio">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          className="wordmark"
          href="#"
          aria-label="Roberto Neil Santos, back to top"
        >
          zatro<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="contact-nav" href="#contact">
            Let’s talk <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-main">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-line">
                <span>
                  A little <em>care.</em>
                </span>
              </span>
              <span className="hero-line">
                <span>A lot of code.</span>
              </span>
            </h1>
            <HeroPortrait />
          </div>
          <div className="hero-intro">
            <span className="intro-dash" />
            <p>
              I’m Roberto Neil Santos. I build <b>emphatic</b>
              <br className="desktop-break" /> experiences for web and mobile.
            </p>
          </div>
          <div className="hero-bottom">
            <a href="#work" className="scroll-link">
              <span className="circle-icon">
                <ArrowDown aria-hidden="true" size={17} />
              </span>{" "}
              A few things I’ve made
            </a>
            <span className="hero-location">
              <span className="status-dot" /> Based in the Philippines
            </span>
          </div>
          <div className="hero-rule" />
        </section>

        <section id="work" className="work wrap" aria-label="Selected work">
          <div className="section-heading">
            <ScrollFloat
              containerClassName="section-title scroll-float--open"
              scrollStart="top bottom"
              scrollEnd="bottom 70%"
              ease="power3.out"
              stretch={1.2}
              distance={45}
              smoothing={0.5}
            >
              Small details. Real impact.
            </ScrollFloat>
          </div>

          <article className="project project-kubo" data-reveal>
            <div className="kubo-card">
              <button
                className="project-visual kubo-stage"
                onClick={(event) =>
                  openProject(kuboProject, event.currentTarget)
                }
                aria-label="Explore Kubo mobile screenshots"
              >
                <div className="kubo-stage-top">
                  <img
                    src="/images/kubo-logo.webp"
                    alt="Kubo"
                    width="110"
                    height="45"
                  />
                </div>
                <div className="kubo-stage-copy">
                  Find home
                  <br />
                  <span>with confidence</span>
                </div>
                <div className="kubo-phones">
                  {kuboProject.gallery!.map((capture, index) => (
                    <div
                      className={`phone-frame phone-${index + 1}`}
                      key={capture.src}
                    >
                      <img
                        src={capture.src}
                        alt={capture.alt}
                        loading="lazy"
                        width="572"
                        height="1270"
                      />
                    </div>
                  ))}
                </div>
                <span className="project-open">
                  <ArrowUpRight aria-hidden="true" size={24} />
                </span>
              </button>
              <section
                className="kubo-fieldwork"
                aria-labelledby="kubo-fieldwork-title"
              >
                <div className="kubo-fieldwork-heading">
                  <h3 id="kubo-fieldwork-title">Building Kubo, in person.</h3>
                  <p>
                    Talking to people, visiting dorms, and turning what we learn
                    into a better product.
                  </p>
                </div>
                <div className="kubo-fieldwork-grid">
                  {kuboPhotos.map((photo) => (
                    <figure className="kubo-fieldwork-photo" key={photo.src}>
                      <a
                        href={photo.src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View full photo: ${photo.caption} (opens in a new tab)`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          loading="lazy"
                          decoding="async"
                        />
                        <ArrowUpRight
                          className="kubo-photo-open"
                          aria-hidden="true"
                          size={18}
                        />
                      </a>
                      <figcaption>{photo.caption}</figcaption>
                    </figure>
                  ))}
                  <figure className="kubo-founder-reel">
                    <video
                      controls
                      playsInline
                      autoPlay={false}
                      preload="none"
                      poster="/images/kubo-founder-reel.webp"
                      width="720"
                      height="1280"
                      aria-label="Kubo founder reel: why we’re building Kubo, in Filipino with English phrases and burned-in captions"
                    >
                      <source
                        src="/videos/kubo-founder-reel.mp4"
                        type="video/mp4"
                      />
                      <track
                        kind="captions"
                        src="/videos/kubo-founder-reel.vtt"
                        srcLang="fil"
                        label="Filipino"
                      />
                      <a href="/videos/kubo-founder-reel.mp4">
                        Watch the Kubo founder reel
                      </a>
                    </video>
                    <figcaption>
                      <span>Why we’re building Kubo</span>
                      <span>Founder reel · 3:04</span>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </div>
            <div className="project-caption">
              <div>
                <h3>
                  <a
                    href="https://kubo.community"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kubo <ArrowUpRight aria-hidden="true" size={19} />
                  </a>
                </h3>
                <p>Find home with confidence</p>
              </div>
              <span>Frontend Lead → CEO · Web & mobile</span>
            </div>
          </article>

          <div className="project-grid">
            <article className="project project-hatagi" data-reveal>
              <a
                className="project-visual hatagi-stage"
                href="https://hatagi.zatro.dev"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Hatagi, my fundraising platform"
              >
                <BrowserFrame
                  image="/images/hatagi-hero.webp"
                  alt="Hatagi’s new homepage with a warm yellow sky, giving and fundraising actions, and a tree of community fundraisers"
                  address="hatagi.zatro.dev"
                  className="hatagi-preview"
                />
                <span className="project-open">
                  <ArrowUpRight aria-hidden="true" size={24} />
                </span>
              </a>
              <div className="project-caption">
                <div>
                  <h3>
                    <a
                      href="https://hatagi.zatro.dev"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hatagi <ArrowUpRight aria-hidden="true" size={19} />
                    </a>
                  </h3>
                  <p>Direct donations. Fewer barriers.</p>
                </div>
                <span className="project-meta">
                  Founder &amp; Sole Developer ·{" "}
                  <TechnologyLabels items={["Go", "Nuxt"]} />
                </span>
              </div>
            </article>
            <article className="project project-yseis" data-reveal>
              <button
                className="project-visual yseis-stage"
                onClick={(event) => openProject(yseisProject, event.currentTarget)}
                aria-label="Explore my work as YSES Inventory System Frontend Lead"
                aria-haspopup="dialog"
              >
                <div className="yseis-symbol" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <BrowserFrame
                  image="/images/yseis.webp"
                  alt="YSES inventory dashboard showing equipment borrowing, availability, and scheduled returns"
                  address="yseis.hatagi.org"
                  className="yseis-preview"
                />
                <span className="project-open">
                  <ArrowUpRight aria-hidden="true" size={24} />
                </span>
              </button>
              <div className="project-caption">
                <div>
                  <h3>
                    <button
                      onClick={(event) => openProject(yseisProject, event.currentTarget)}
                      aria-haspopup="dialog"
                    >
                      YSES Inventory{" "}
                      <ArrowUpRight aria-hidden="true" size={19} />
                    </button>
                  </h3>
                  <p>Shared resources. Simply managed.</p>
                </div>
                <span className="project-meta">
                  Frontend Lead · <TechnologyLabels items={["React"]} />
                </span>
              </div>
            </article>
          </div>

          <article className="project project-experience" data-reveal>
            <a
              className="project-visual experience-stage"
              href="https://expe21ence.yses.org"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit EXPE21ENCE YSES Week"
            >
              <div className="experience-copy">
                Where excellence
                <br />
                <span>comes together.</span>
              </div>
              <BrowserFrame
                image="/images/expe21ence.webp"
                alt="EXPE21ENCE YSES Week event website, with its expressive typography and metallic hand illustrations"
                address="expe21ence.yses.org"
                className="experience-preview"
              />
              <span className="project-open">
                <ArrowUpRight aria-hidden="true" size={24} />
              </span>
            </a>
            <div className="project-caption">
              <div>
                <h3>
                  <a
                    href="https://expe21ence.yses.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YSES Week <ArrowUpRight aria-hidden="true" size={19} />
                  </a>
                </h3>
                <p>An event experience for 315+ attendees.</p>
              </div>
              <span className="project-meta">
                Frontend Lead · <TechnologyLabels items={["SvelteKit"]} />
              </span>
            </div>
          </article>
          <div className="work-end">
            <span>Different problems. The same attention to detail.</span>
            <div className="progress-track">
              <div className="project-progress" />
            </div>
          </div>
        </section>

        <section className="archive wrap" aria-labelledby="archive-title">
          <div className="archive-heading" data-reveal>
            <h2 id="archive-title">A little more exploring.</h2>
            <p>Some earlier work, still close to my heart.</p>
          </div>
          <div className="archive-list">
            {archive.map((item, i) => (
              <button
                className="archive-row"
                key={item.name}
                onClick={(e) => openProject(item, e.currentTarget)}
                data-reveal
              >
                <span className="archive-index">0{i + 1}</span>
                <span className="archive-name">{item.name}</span>
                <span className="archive-type">
                  <TechnologyPhrase phrase={item.type} />
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="archive-arrow"
                  size={24}
                />
              </button>
            ))}
          </div>
          <a
            className="text-link archive-github"
            href="https://github.com/zatrodev"
            target="_blank"
            rel="noreferrer"
          >
            The rest lives on GitHub{" "}
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </section>

        <section id="about" className="about" aria-label="About Robbie">
          <div className="about-inner wrap">
            <div className="experience-list" data-reveal>
              <div className="experience-row">
                <h3>Kubo</h3>
                <p>Frontend Lead → CEO</p>
                <span>2026—present</span>
              </div>
              <div className="experience-row">
                <h3>TenX Development</h3>
                <p>AI Software Developer Intern</p>
                <span>May—October 2026</span>
              </div>
              <div className="experience-row">
                <h3>Hatagi</h3>
                <p>Founder & Sole Developer</p>
                <span>2025—26</span>
              </div>
            </div>
            <div className="about-content">
              <ScrollFloat
                containerClassName="about-title scroll-float--open"
                scrollStart="top bottom"
                scrollEnd="bottom 75%"
                stretch={1.2}
                distance={30}
                ease="power3.out"
              >
                Curious by nature. Builder by habit.
              </ScrollFloat>
              <div data-reveal>
                <p>
                  I study Computer Science at UP Los Baños and lead Kubo as CEO.
                  I like turning real conversations into products people can
                  use.
                </p>
                <p>
                  I founded Hatagi, led frontend teams at YSES, and worked on AI
                  developer tools at TenX. Different problems, the same care for
                  how things work and feel.
                </p>
              </div>
              <div className="about-capabilities" data-reveal>
                <span>Full-stack development</span>
                <span>Mobile experiences</span>
                <span>Interface design</span>
                <span>Product & team leadership</span>
              </div>
              <span className="about-location" data-reveal>
                <MapPin aria-hidden="true" size={15} /> Los Baños, Philippines
              </span>
            </div>
          </div>
        </section>

        <div className="fun-chapter">
          <section
            className="fun-transition wrap"
            aria-labelledby="fun-transition-title"
          >
            <h2 id="fun-transition-title">
              Now, let’s get to
              <br />
              <span>the fun part.</span>
              <Sparkles
                aria-hidden="true"
                className="fun-spark"
                strokeWidth={1.2}
              />
            </h2>
          </section>

          <section
            id="outside-work"
            className="outside-work wrap"
            aria-labelledby="outside-work-title"
          >
            <div className="creator-feature">
              <div className="creator-copy" data-reveal>
                <h2 id="outside-work-title">
                  Content
                  <br />
                  <em>creation.</em>
                </h2>
                <p>
                  Sometimes I trade the code editor for the camera. I make
                  videos about digital literacy, software development, and the
                  things I’m learning while building Kubo. A little tech, a few
                  stories, and a lot of figuring things out along the way.
                </p>
                <div
                  className="creator-interests"
                  aria-label="Creative interests"
                >
                  <span>Digital literacy</span>
                  <span>Software</span>
                  <span>Building Kubo</span>
                </div>
                <a
                  className="creator-profile text-link"
                  href="https://www.tiktok.com/@zatrodev"
                  target="_blank"
                  rel="noreferrer"
                >
                  @zatrodev on TikTok{" "}
                  <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </div>
              <div className="creator-art" aria-hidden="true">
                <div className="creator-orbit" />
                <div className="creator-poster">
                  <div className="poster-top">
                    <span>Robbie / off the clock</span>
                    <Asterisk size={23} strokeWidth={1.5} />
                  </div>
                  <span className="poster-title">
                    a little
                    <br />
                    off script.
                  </span>
                  <div className="poster-portrait">
                    <img
                      src="/images/robbie-off-script.webp"
                      alt=""
                      loading="lazy"
                      width="1200"
                      height="1593"
                    />
                  </div>
                </div>
                <span className="creator-sticker">
                  <Sparkles size={17} strokeWidth={1.5} /> Just for the joy of
                  it.
                </span>
              </div>
            </div>
            <div className="creator-posts">
              {creatorPosts.map((post) => (
                <article className="creator-post" key={post.href} data-reveal>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Watch ${post.title} on TikTok`}
                  >
                    <img
                      src={post.image}
                      alt={`Robbie’s TikTok video about ${post.title.toLowerCase()}`}
                      width="540"
                      height="720"
                      loading="lazy"
                    />
                    <h3>
                      {post.title}
                      <ArrowUpRight aria-hidden="true" size={19} />
                    </h3>
                  </a>
                  <p>{post.description}</p>
                </article>
              ))}
            </div>
            <section
              className="drawing-section"
              aria-labelledby="drawing-title"
            >
              <div data-reveal>
                <h2 id="drawing-title">I also draw.</h2>
                <p className="drawing-punchline">...once a year</p>
                <p className="drawing-caption">
                  A very exclusive release schedule.
                </p>
              </div>
              <figure className="drawing-artwork" data-reveal>
                <img
                  src="/images/annual-drawing.webp"
                  alt="Robbie’s pen drawing of small figures crossing a rocky canyon, photographed on a sketchbook at his desk"
                  width="1600"
                  height="2125"
                  loading="lazy"
                />
              </figure>
            </section>
            <section className="books-section" aria-labelledby="books-title">
              <div className="books-heading" data-reveal>
                <h2 id="books-title">
                  On my <em>bookshelf.</em>
                </h2>
                <p>
                  A few books I’ve read, on people, responsibility, and
                  leadership.
                </p>
              </div>
              <ul className="bookshelf" aria-label="Books I’ve read">
                {readBooks.map((book) => (
                  <li
                    className={`book-cover book-cover--${book.style}`}
                    key={book.title}
                    data-reveal
                  >
                    <h3>{book.title}</h3>
                    {book.subtitle && (
                      <p className="book-subtitle">{book.subtitle}</p>
                    )}
                    <span className="book-art" aria-hidden="true" />
                    <p className="book-author">{book.author}</p>
                  </li>
                ))}
              </ul>
            </section>
            <div className="outside-work-end" data-reveal>
              <Asterisk aria-hidden="true" size={24} strokeWidth={1.5} />
              <p>
                A different medium.
                <br />
                <span>The same love for making things.</span>
              </p>
            </div>
          </section>
        </div>

        <section
          id="contact"
          className="contact wrap"
          aria-labelledby="contact-title"
        >
          <div className="contact-top" data-reveal>
            <p>
              Have something in mind?
              <br />
              I’d love to hear about it.
            </p>
            <Asterisk
              className="contact-spark"
              aria-hidden="true"
              size={52}
              strokeWidth={1.5}
            />
          </div>
          <div className="contact-main">
            <h2 id="contact-title">
              <a href={`mailto:${email}`}>
                Let’s make
                <br />
                <span>something good.</span>
              </a>
            </h2>
            <Magnet
              padding={65}
              magnetStrength={4}
              maxOffset={16}
              wrapperClassName="contact-magnet"
            >
              <a
                className="contact-arrow"
                href={`mailto:${email}`}
                aria-label="Email Robbie"
              >
                <ArrowUpRight aria-hidden="true" strokeWidth={1.25} />
              </a>
            </Magnet>
          </div>
          <div className="contact-email">
            <a href={`mailto:${email}`}>{email}</a>
            <button
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
            >
              {copied ? (
                <Check aria-hidden="true" size={17} />
              ) : (
                <Copy aria-hidden="true" size={16} />
              )}
            </button>
            <span className="copy-feedback" role="status">
              {copied
                ? "Copied!"
                : copyFailed
                  ? "Please copy the address above."
                  : ""}
            </span>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <a className="wordmark" href="#" aria-label="Back to top">
          zatro<span>.</span>
        </a>
        <span className="footer-note">
          Made with care. © {new Date().getFullYear()}
        </span>
        <div className="footer-links">
          <a
            href="https://github.com/zatrodev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Github aria-hidden="true" size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/roberto-neil-santos-675125340/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Linkedin aria-hidden="true" size={14} />
          </a>
          <a href="#" className="back-top">
            Back to top <ArrowUp aria-hidden="true" size={15} />
          </a>
        </div>
      </footer>

      <dialog
        ref={dialog}
        className="project-dialog"
        onClose={afterClose}
        onCancel={(event) => {
          event.preventDefault();
          closeProject();
        }}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const items = event.currentTarget.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex="0"]',
          );
          const first = items[0];
          const last = items[items.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeProject();
        }}
        aria-labelledby="dialog-title"
        data-lenis-prevent
      >
        <div className="dialog-body">
          <button
            className="dialog-close"
            aria-label="Close project"
            onClick={closeProject}
          >
            <X aria-hidden="true" size={22} />
          </button>
          {project && (
            <>
              {project.gallery ? (
                <div className="dialog-gallery">
                  {project.gallery.map((capture) => (
                    <figure key={capture.src}>
                      <img
                        src={capture.src}
                        alt={capture.alt}
                        width="572"
                        height="1270"
                      />
                      <figcaption>
                        {capture.alt.includes("Today")
                          ? "Today"
                          : capture.alt.includes("room information sheet")
                            ? "Price breakdown"
                            : "Dorm information"}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : project.image ? (
                <div className="dialog-image">
                  <img
                    src={project.image}
                    alt={`${project.name} application screens`}
                    width="1920"
                    height="1080"
                  />
                </div>
              ) : (
                <div className="code-cover" aria-hidden="true">
                  <span>HAI 1.2</span>
                  <span>I HAS A language</span>
                  <span>VISIBLE "Hello, world!"</span>
                  <span>KTHXBYE</span>
                </div>
              )}
              <div className="dialog-copy">
                <h2 id="dialog-title">{project.name}</h2>
                <p>{project.description}</p>
                <TechnologyLabels
                  items={project.stack}
                  className="dialog-stack"
                />
                {project.href && (
                  <a
                    className="text-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore the source{" "}
                    <ArrowUpRight aria-hidden="true" size={17} />
                  </a>
                )}
                {project.note && <p className="dialog-note">{project.note}</p>}
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
}
export default App;
