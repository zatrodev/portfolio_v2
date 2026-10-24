# Roberto Neil Santos — Portfolio

A React + TypeScript portfolio with Kubo mobile's warm palette, Plus Jakarta Sans, generous spacing, and minimal copy. Built with Vite, GSAP ScrollTrigger, Lenis, and React Bits.

```sh
bun install
bun run dev
```

Open the URL printed by Vite. `bun run build` checks TypeScript and creates the production site in `dist/`; `bun run preview` serves that build.

## Editing

- `src/App.tsx`: project links, short descriptions, email, biography, and project dialogs.
- `src/styles.css`: Kubo-derived color variables, layout, typography, and responsive styles.
- `src/components/react-bits/`: React Bits ScrollFloat and Magnet components.
- `public/images/`: optimized, local WebP screenshots and portrait.

The page uses native anchor navigation and native modal dialogs, with slide-up entrance and short exit animations, Escape dismissal, keyboard focus management, clipboard feedback, and a reduced-motion alternative. With reduced motion enabled, scroll choreography and smooth scrolling are disabled and content remains visible.

After the About section, “Now, let’s get to the fun part.” introduces a scroll-driven shift into a charcoal and lime extracurricular chapter. Content creation features [@zatrodev on TikTok](https://www.tiktok.com/@zatrodev), with an illustrative poster using Robbie’s supplied forest photograph (`public/images/robbie-off-script.webp`) and three real video covers. The public profile, captions, and covers were checked on October 24, 2026. The covers are saved locally; the page does not depend on TikTok embeds. The drawing section pairs the “...once a year” joke with Robbie’s supplied sketchbook photograph, resized proportionally and compressed as `public/images/annual-drawing.webp`. The bookshelf lists the four books Robbie supplied, with custom typographic jackets rather than reproductions of published covers. The palette blends over a viewport of scrolling at the divider, then the heading fades in against the settled dark colors. The About section keeps its readable warm palette while leaving the viewport. The dark theme continues through contact and the footer, and scrolling back reverses the transition. Reduced motion uses an immediate palette switch and disables heading and poster movement.

Book titles and authors were checked against [Robert Cialdini’s Influence page](https://cialdini.com/books/influence), [12 Rules for Life at Penguin Random House](https://www.penguinrandomhouse.com/books/258237/12-rules-for-life-by-jordan-b-peterson--foreword-by-norman-doige-md-illustrated-by-ethan-van-sciver/), [The Motive at The Table Group](https://www.tablegroup.com/product/themotive/), and [The 48 Laws of Power at Penguin Random House](https://www.penguinrandomhouse.com/books/330912/the-48-laws-of-power-by-robert-greene/).

## Content and references

The primary content source is the latest résumé, `~/Documents/Resumes & Career/Roberto Neil Santos - Resume.pdf` (October 15, 2026). The selected projects are Kubo, Hatagi, YSES Inventory, and YSES Week, with the role stated for each. The earlier KainWell and Beehive work is supported by the prior portfolio and résumé. LOLCode is backed by the Rust workspace at `~/study/rust/lolcode` (lexer, parser, interpreter, and Iced GUI). Its cover is an illustrative code excerpt, not an application screenshot. Professional experience uses the current résumé's Kubo, TenX, and Hatagi entries.

The hero portrait comes from Hatagi's local personal assets. Hatagi's hero image is a capture of `https://hatagi.zatro.dev/` taken October 24, 2026; YSES Inventory uses its local dashboard screenshot. YSES Week uses a capture of `https://expe21ence.yses.org/`.

YSES Inventory opens a project modal from both its preview and title because its live website is unavailable. The Frontend Lead summary comes from the October 15, 2026 résumé in `~/Documents/Resumes & Career/Roberto Neil Santos - Resume.pdf`: November 2025–January 2026, leading seven developers, delegating work, reviewing code, and building responsive admin/user dashboards from wireframes with MVVM.

Kubo's gallery uses actual mobile captures with sample data:

- Dorm information: October 15, 2026, from `cmsc 128/output/kubo-play-store-listing-2026-10-15/references/01-dorm-information.png`.
- Today / ocular requests: October 21, 2026, from `cmsc 128/output/kubo-visit-scheduling-2026-10-21/references/owner-today-ocular-request.png`.
- Room information sheet: October 22, 2026. A fresh isolated Android capture of the production `dorm-room-information-sheet.tsx`, with its price breakdown and sample room data. Source PNG, UIAutomator XML, fixture, and component hash are in `/home/zatro/.codex/visualizations/2026/10/21/01a15f0b-2cfc-7993-95dd-68b898350776/kubo-room-information/`.

These captures show the app with sample data; they are not a new live-backend verification. On mobile, the project gallery scrolls horizontally so each full screen remains readable.

The Kubo card also includes four user-confirmed behind-the-scenes photos: the laptop-work photo from `cmsc 128/output/kubo-ichec-acknowledgment-2026-10-22/revision-2/references/setup.png`, and three photos supplied on October 24, 2026 (a conversation at a laptop, a property walkthrough, and an office demo). The dorm-photography image was excluded at the user's direction. Local WebP copies preserve the full compositions; card thumbnails link to those full photos. The photo and reel strip scrolls horizontally on smaller screens.

The founder reel uses `cmsc 128/output/kubo-founder-reel-edited-2026-10-22/revision-3/Kubo-Founder-Reel-1-shortened.mp4`, encoded at 720 × 1280 for the web. It retains the source audio and burned-in captions; a WebVTT caption track is converted from the matching SRT. Playback requires user interaction, with `preload="none"` and a local poster image.

Kubo color and font references were read from `~/projects/cmsc 128/apps/mobile/src/constants/theme.ts`, `tailwind.config.ts`, and `src/lib/theme/fonts.ts`. The site uses the current Plus Jakarta Sans mobile typography and neutral structural colors, with rust and muted green accents.

- [React Bits](https://reactbits.dev/get-started/index): ScrollFloat and Magnet; license in `public/licenses/React-Bits.md`.
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/): entrance choreography, gentle portrait parallax, and project preview depth.
- [Lenis](https://lenis.darkroom.engineering/): smooth wheel scrolling and anchor navigation.
- Plus Jakarta Sans is served locally; its SIL Open Font License is in `public/licenses/Plus-Jakarta-Sans.txt`.

This is a local project. No hosted deployment has been created.
