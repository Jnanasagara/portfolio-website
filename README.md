# Jnanasagara Srinivasa — portfolio

A static Astro portfolio with Frappe Framework as its editable content backend, one Frappe UI Vue control, restrained Anime.js motion, and Lenis wheel scrolling.

## Design and architecture

- **Identity:** warm charcoal, off-white type, one muted brass accent, thin rules, large editorial type, technical metadata.
- **Astro:** static page and writing routes, semantic content, SEO, responsive layout. The theme button is rendered from Vue on the server and controlled by a tiny browser script.
- **Frappe Framework:** four Desk-managed DocTypes, read with a typed build-time API layer in `src/lib/frappe/`.
- **Frappe UI:** the accessible header theme control, styled with the same tokens as the rest of the site.
- **Anime.js:** a restrained hero entrance. Reduced motion disables it, leaving the content immediately visible.
- **Lenis:** gentle page-wide wheel easing and smooth anchor travel. It is disabled when reduced motion is requested.

The theme starts dark, persists user choices, and uses a warm light palette. The static build remains usable if the backend is temporarily offline.
