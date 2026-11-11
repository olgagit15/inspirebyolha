# Design system

This document describes the styles currently implemented in `site/css/styles.css`. It is a practical reference for extending the existing portfolio, not a separate design specification. When a value changes in CSS, update this document to match.

## Visual direction

The portfolio uses a quiet editorial style: neutral backgrounds, strong typography, generous whitespace, subtle borders and shadows, and restrained pink accents for case visuals and details. Keep information easy to scan; visual treatments should not compete with case content or metrics.

## Theme and design tokens

Tokens are defined on `:root`. Prefer these variables over new literal colors so the shared UI responds to theme changes.

| Token | Light | Dark | Intended use |
|---|---|---|---|
| `--bg` | `#f1f1f0` | `#0a0a0a` | Page background |
| `--surface` | `#ffffff` | `#141414` | Cards, controls, and content surfaces |
| `--surface-2` | `#f7f7f6` | `#1b1b1b` | Secondary surfaces and image placeholders |
| `--text` | `#111111` | `#f2f2f2` | Primary text |
| `--muted` | `#636363` | `#a3a3a3` | Supporting text |
| `--faint` | `#9b9b9b` | `#6e6e6e` | De-emphasized text |
| `--border` | `#e2e2df` | `#2a2a2a` | Dividers, outlines, and card borders |
| `--accent` | `#161616` | `#f2f2f2` | Interactive emphasis and active states |
| `--accent-strong` | `#000000` | `#ffffff` | Strong accent |
| `--accent-soft` | `rgba(17, 17, 17, .06)` | `rgba(255, 255, 255, .08)` | Soft emphasis backgrounds |
| `--accent-line` | `rgba(17, 17, 17, .28)` | `rgba(255, 255, 255, .3)` | Accent borders |
| `--cover` | `#d78da3` | `#f08aa5` | Case charts and cover accents |
| `--cover-soft` | `rgba(215, 141, 163, .14)` | `rgba(240, 138, 165, .16)` | Subtle cover tint |
| `--on-accent` | `#ffffff` | `#0a0a0a` | Text on accent surfaces |
| `--on-cover` | `#ffffff` | `#241016` | Text on cover surfaces |

Other shared tokens:

| Token | Value | Use |
|---|---|---|
| `--radius` | `28px` | Large cards and case containers |
| `--radius-sm` | `16px` | Smaller cards, images, and content blocks |
| `--shadow` | `0 1px 2px rgba(0,0,0,.04), 0 8px 30px rgba(0,0,0,.05)` | Light-theme elevation |
| `--font` | Inter with system sans-serif fallbacks | Body and UI text |
| `--font-accent` | Space Grotesk, then Inter/system fallbacks | Headings, labels, metrics, and compact UI |
| `--gutter` | `16px` mobile; `28px` from `768px` | Horizontal page padding |
| `--max` | `1240px` | Main content maximum width |
| `--header-h` | `64px` | Sticky header and scroll offset |

The custom pointer tokens `--paw` and `--paw-hot` are SVG data URLs. Preserve them when changing general or interactive cursor styles.

### Theme behavior

The active theme is selected with `:root[data-theme="dark"]`. Shared surfaces and text use the tokens above. Some decorative sections and accents intentionally use explicit colors (for example the pink recommendation quote mark and cover palettes); check their dark-theme overrides before reusing them on a new surface.

## Typography

- **Inter** is the primary reading and interface font.
- **Space Grotesk** is the accent font for headings, buttons, badges, tags, dates, and numerical values.
- Body text is generally `16px` with a `1.6` line-height. Case prose uses `17px` with a `1.7` line-height.
- Major headings use `clamp()` to scale across viewport sizes. Follow nearby styles rather than setting fixed large heading sizes.
- Weights are generally `400` for body copy and `500–600` for emphasis.
- Use `--muted` for explanatory text and `--faint` sparingly for secondary emphasis.

## Reusable components

Reuse these existing classes and patterns before creating new ones:

| Component | Classes | How it is used |
|---|---|---|
| Content wrapper | `.wrap` | Centers content and applies responsive gutters and maximum width |
| Home section | `.block`, `.sec-head`, `.sec-title`, `.sec-sub` | Standard vertical section and heading hierarchy |
| Primary action | `.btn .btn-primary` | Filled, high-contrast action; pair with `.btn-sm` for compact controls |
| Secondary action | `.btn .btn-secondary` | Quiet bordered alternative |
| Tags | `.tags`, `.tag`, `.tag.skill`, `.tag.tool`, `.tag.key` | Skill and tool lists; tags may be interactive when rendered as buttons |
| Badge | `.badge` | Small status or project-format label |
| Case card | `.case-card`, `.cover`, `.case-body`, `.card-foot` | Repeated case item on the Cases grid |
| Case section | `.cs`, `.prose` | Story section and readable case copy |
| Stat tile | `.stats`, `.stat` | Market or product metric; three columns from tablet width |
| Point card | `.points`, `.point` | Grouped case arguments or findings |
| Chart | `.chart`, `.bar`, `.track`, `.fill` | Labeled percentage bars; use direct values in addition to bar length |
| Image figure | `.figure`, `.frame`, `figcaption` | Image with a lightbox frame and caption |
| Case contents | `.case-layout`, `.toc`, `.case-sections` | Desktop Story navigation and section layout |
| Skills/tools block | `.kit`, `.kit-row` | Skills and tools at the end of a case |
| Reveal | `.rv`, `.rv.in` | One-time entrance transition when JavaScript is active |

Case-card and Story-section markup is implemented in `site/js/blocks/`. For content-only changes, edit `site/js/data.js`; add a reusable visual block when the same pattern is needed in multiple places.

## Layout and responsive behavior

Breakpoints currently used:

| Breakpoint | Behavior |
|---|---|
| `max-width: 559px` | Single-column creative gallery; compact contact/footer layout |
| `min-width: 560px` | Header CV and LinkedIn controls become available |
| `max-width: 767px` | Speaking details are simplified for mobile; event description and venue metadata are hidden |
| `min-width: 768px` | Larger page gutters; two-column cases, skills, certifications, and recommendation layouts |
| `min-width: 900px` | CV dialog gets a centered, constrained desktop layout |
| `min-width: 1024px` | Three-column cases/skills, four-column certificates, desktop case Story with sticky contents |
| `min-width: 1280px` | Full desktop navigation replaces the mobile menu |

Use fluid sizing (`clamp`, percentages, `minmax`) and test around existing breakpoints when adding layouts. Avoid fixed widths that overflow narrow screens.

## Motion, interaction, and accessibility

- Transitions are short and subtle, usually around `.15–.25s`; reveal animations use `.6s`.
- Hover states may lift cards slightly or shift arrow icons; do not make motion necessary to understand a control.
- `prefers-reduced-motion: reduce` disables transitions and animations and reveals content immediately.
- Keep keyboard focus visible with `:focus-visible`. Use native buttons for actions and anchors for navigation.
- Preserve visible text labels, image alternatives/captions, and `aria-pressed` states for selectable filters and language controls.
- The image viewer and CV viewer use native `<dialog>` elements.

## Adding or changing styles

1. Check whether an existing token or component class already provides the needed style.
2. Prefer semantic component classes and CSS variables over inline presentation or new hard-coded colors.
3. If a new color is genuinely case-specific, keep it scoped to that case component instead of changing shared tokens.
4. Add responsive rules alongside the relevant component or in the existing breakpoint group.
5. Check light and dark themes, keyboard focus, reduced motion, and mobile/desktop widths.
6. Update this document when shared tokens, breakpoints, or reusable component patterns change.
