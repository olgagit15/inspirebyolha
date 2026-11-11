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

Repository documentation is indexed in [`docs/README.md`](docs/README.md). See [`docs/make-changes.md`](docs/make-changes.md) for development instructions and [`docs/design-system.md`](docs/design-system.md) for the visual style reference.

Scripts are regular browser scripts loaded in dependency order at the end of `site/index.html`: portfolio data, reusable blocks, then the app. Keep this order when adding another script.

## Deploy

This is a static site. Configure GitHub Pages, Netlify, Vercel, or another static host to publish the `site/` directory as the site root; no compilation is needed. Before publishing, review the CV and other personal documents/images in `site/assets/` and only make publicly available materials that are intended to be shared.
