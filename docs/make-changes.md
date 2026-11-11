# Make changes to the portfolio

This guide covers local preview, editing portfolio content, adding case studies, and checking changes before sharing them.

## Run locally

From the repository root, start a local server:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open `http://localhost:8000`. Serving over HTTP is recommended over opening the HTML through `file://`, especially when checking browser storage, media, and asset paths. Stop the server with `Ctrl+C`.

## Where to make changes

- Portfolio content, translations, and case data: [`js/data.js`](../js/data.js)
- Routing, rendering, and interactions: [`js/app.js`](../js/app.js)
- Global styles and responsive layouts: [`css/styles.css`](../css/styles.css)
- Reusable case markup: [`js/blocks/`](../js/blocks/)
- Visual tokens and component guidance: [`design-system.md`](design-system.md)

## Add or edit a case

1. Add a new object to the `CASES` array in `js/data.js`, following the existing cases. Give it a unique, URL-safe `id`, a category (`seg`), a `cover` type, localized `title`, `short`, and `line` text, `sections`, `skills`, `tools`, and `artifacts`.
2. Provide every visible text value in both `en` and `uk`. A section has an `id`, localized heading (`h`), and localized HTML body (`body`). Section IDs are used for Story navigation.
3. Use an existing cover type (`tam`, `bars`, `type`, or `phone`) or add rendering for the new type in `js/app.js`.
4. Put images in `assets/images/cases/<case-id>/` and reference them with a site-relative path, for example `assets/images/cases/<case-id>/image.webp`.
5. Add skills and tools to the case object. If a skill should also appear in the home-page skill directory or filter/highlight cases, add or update it in `SKILLS` and include the case `id` in its `c` list. Keep the English skill label stable because it is used as the skill key.
6. Add downloadable links to `artifacts` only when they are ready to share. Localize their labels.
7. The case page, card, and Story links are rendered from the case data. For a visual pattern reused across cases, add a block under `js/blocks/`, load it from `index.html` after `data.js`, and call it from the app.

## Update other portfolio content

- Home-page translations, navigation labels, experience, skills, talks, certificates, and recommendations are in `js/data.js`.
- Shared page structure and interactions are in `js/app.js`.
- Use `css/styles.css` for styling; responsive rules are grouped near the bottom of the file.
- Keep images under the appropriate `assets/images/` folder and documents under `assets/documents/`. Use descriptive filenames and optimized web formats for large images.

## Check changes

There is no automated test suite or build step. After content, layout, or behavior changes:

1. Run the site locally over HTTP.
2. Check the home page and every affected case page in English and Ukrainian.
3. Check light and dark themes and desktop and narrow/mobile layouts.
4. Verify images, document links, case navigation, filters, and interactive controls.
5. Run `git diff --check` and, for JavaScript changes, `node --check` on the changed JavaScript files.

## Deploy

This is a static site. Configure GitHub Pages, Netlify, Vercel, or another static host to publish the repository root as the site root; no compilation is needed. Before publishing, review the CV and other personal documents/images in `assets/` and only make publicly available materials intended to be shared.
