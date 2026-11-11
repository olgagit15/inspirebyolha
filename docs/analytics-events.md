# Google Analytics 4 Events

The site uses one direct Google Analytics 4 `gtag.js` integration configured with measurement ID `G-3KGC2RVNBZ`. It does not install Google Tag Manager. Interaction events are sent by one delegated click handler in `js/app.js`. Each call checks that `gtag` is available.

## Events

| Event | When it is sent | Parameters |
|---|---|---|
| `cv_open` | A `[data-cv]` element is clicked to open the CV | `location`: `header` or `footer`; the mobile menu counts as `header` |
| `cv_download` | The `#cvvDl` button in the CV dialog is clicked | None |
| `nav_click` | A link in `#nav` or `#mobileNav` is clicked | `location`: `header` or `mobile_nav`; `link_text`: visible text; `link_target`: hash route, `cv`, or `linkedin` |
| `language_change` | A different language is selected using `[data-lang]` | `language`: `en` or `uk`; selecting the active language again does not send an event |
| `theme_toggle` | `#themeBtn` is clicked | `theme`: the new theme, `light` or `dark` |
| `contact_click` | An email, LinkedIn, or Telegram link in the header, hero, or footer is clicked | `method`: `email`, `linkedin`, or `telegram`; `location`: `header`, `hero`, or `footer` |
| `case_open` | A `.case-card` is clicked | `case_id`: stable case ID, such as `market-research`, `review-analysis`, `email-subscription`, or `strava-match`; `case_title`: the case title shown on the card |
| `image_open` | An element with `[data-lb]` is clicked to open the lightbox | `case_title`, when the image is on a case page; omitted for other images |
| `page_view` | The app handles a change to the SPA hash route | `page_title`, `page_location`, `page_path` |

The initial `page_view` is sent by `gtag('config')`. For subsequent routes, the app sends one `page_view` event per eligible `hashchange`, with `page_path` set to the hash or `/` when the hash is empty. The app uses hash routes and does not call `pushState` or `replaceState`.

GA4 Enhanced Measurement can also send page views on browser-history changes when that option is enabled in the web data stream. Google documents this measurement as listening for `pushState`, `popState`, and `replaceState`. Normal hash-link navigation in this app is handled by `hashchange`, so it is not expected to trigger that history-based measurement. Back/Forward navigation between hash routes may also produce a `popstate`; if browser-history page views are enabled in GA4, verify that it does not create an additional `page_view`. This setting is managed in GA4, not in this repository.

## Privacy

Event parameters do not include email addresses, LinkedIn profile URLs, or other contact details. `case_title` and `link_text` contain only visible portfolio titles and labels. Do not add personal data to analytics parameters.

## Verify events in the browser

1. Open the site, press `F12` or open DevTools, and select the **Network** tab.
2. Enable **Preserve log** and enter `collect` in the request filter.
3. Perform the relevant action on the site and select the corresponding GA4 request.
4. In the request parameters, check `tid=G-3KGC2RVNBZ`, `en` (the event name), and the parameters listed above. No request should use `tid=G-EY52DDGH3L`.
5. Test each `location` where applicable, both language and theme changes, and the lightbox on and off a case page.
6. Test hash navigation using both links and browser Back/Forward. Check whether the GA4 web stream's browser-history page-view setting causes an extra `page_view` on Back/Forward.

| Action to test | `en` value |
|---|---|
| Open the CV from the header, footer, or mobile menu | `cv_open` |
| Click the download button in the CV dialog | `cv_download` |
| Click a link in the desktop or mobile navigation | `nav_click` |
| Switch between English and Ukrainian | `language_change` |
| Toggle the theme | `theme_toggle` |
| Click email, LinkedIn, or Telegram in the header, hero, or footer | `contact_click` |
| Open a case card | `case_open` |
| Open an image in the lightbox | `image_open` |
| Navigate to another site route | `page_view` |
