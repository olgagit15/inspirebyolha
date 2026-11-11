# Olga Tereshchenko — Portfolio

A bilingual, responsive portfolio for Product Manager. It is a static website built with HTML, CSS, and vanilla JavaScript.

The site includes a home page with experience, case studies, skills, speaking, certifications, and recommendations, plus individual case pages. English and Ukrainian content, theme switching, case filtering, image lightboxes, and the CV viewer are handled in the browser.

## Project structure

```text
site/
├── index.html                 # Document shell, shared navigation/footer/dialogs
├── css/
│   └── styles.css             # Global styles, theme tokens, responsive layouts
├── js/
│   ├── app.js                 # Routing, interactions, and page rendering
│   ├── data.js                # Translations and portfolio content
│   └── blocks/
│       ├── case-card.js       # Reusable card used in the Cases grid
│       └── case-section.js    # Reusable section used in each case Story
└── assets/
    ├── documents/             # CV and other downloadable documents
    └── images/
        ├── profile/           # Profile photos
        ├── certificates/      # Certificate images
        └── cases/             # Case-specific screenshots and creative assets
            ├── email-subscription/
            ├── market-research/
            ├── review-analysis/
            └── strava-match/
```

Repository documentation is indexed in [`docs/README.md`](docs/README.md); the visual style reference is [`docs/design-system.md`](docs/design-system.md).

Scripts are regular browser scripts loaded in dependency order at the end of `site/index.html`: portfolio data, reusable blocks, then the app. Keep this order when adding another script.

## Run locally

From the repository root, serve the `site/` folder:

```sh
python3 -m http.server 8000 --directory site
```

Then open `http://localhost:8000`. Serving over HTTP is recommended over opening the HTML through `file://`, especially when checking browser storage, media, and asset paths. Stop the server with `Ctrl+C`.

## Updating content

Most text and case content lives in [`site/js/data.js`](site/js/data.js). The presentation and behavior live in [`site/js/app.js`](site/js/app.js), shared styles in [`site/css/styles.css`](site/css/styles.css), and reusable case markup in [`site/js/blocks/`](site/js/blocks/).

### Adding a case

1. Add a new object to the `CASES` array in `site/js/data.js`, following the existing objects. Each case has a unique, URL-safe `id`, a category (`seg`), a `cover` type, localized `title`, `short`, and `line` text, `sections`, `skills`, `tools`, and `artifacts`.
2. Add every visible text value in both `en` and `uk`. A section has an `id`, a localized heading (`h`), and localized HTML body (`body`). Section IDs are used for Story navigation.
3. Use an existing `cover` type (`tam`, `bars`, `type`, or `phone`) or add its rendering in `site/js/app.js`.
4. Put images in the matching `site/assets/images/cases/<case-id>/` folder. Reference them from the content with a site-relative path such as `assets/images/cases/<case-id>/image.webp`.
5. Add the case skills and tools to the case object. If a skill should also appear in the home-page skill directory or filter/highlight cases, add or update its entry in `SKILLS` and include the case `id` in that skill's `c` list. Keep the English skill label stable because it is used as the skill key.
6. Add downloadable links to `artifacts` only when they are ready to share. Keep labels localized.
7. The case page, reusable case card, and Story links are rendered from the case data. If a new visual pattern should be reused by other cases, add its markup as a block under `site/js/blocks/`, load it from `site/index.html` after `data.js`, and call it from the app.

### Updating other portfolio content

- Home-page translations, navigation labels, experience, skills, talks, certificates, and recommendations are data in `site/js/data.js`.
- Shared page structure and event handling are in `site/js/app.js`.
- Change colors and layout in `site/css/styles.css`; responsive rules are grouped near the bottom of the file.
- Keep each image/document in the appropriate `assets` subfolder and update references when moving files.
- Put images in an appropriate `site/assets/images/` subfolder and documents in `site/assets/documents/`. Use descriptive filenames and reasonably optimized web formats for large images.
- For existing colors, typography, responsive rules, and reusable UI patterns, see [`docs/design-system.md`](docs/design-system.md).

## Check changes

There is no automated test suite or build step. After content, layout, or behavior changes:

1. Run the site locally over HTTP.
2. Check the home page and every affected case page in English and Ukrainian.
3. Check light and dark themes, and both desktop and narrow/mobile layouts.
4. Verify images, document links, case navigation, filters, and interactive controls still work.
5. Run `git diff --check` and, for JavaScript changes, `node --check` on the changed JavaScript files.

## Deploy

This is a static site. Configure GitHub Pages, Netlify, Vercel, or another static host to publish the `site/` directory as the site root; no compilation is needed. Before publishing, review the CV and other personal documents/images in `site/assets/` and only make publicly available materials that are intended to be shared.
