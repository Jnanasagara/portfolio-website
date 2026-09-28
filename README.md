# Jnanasagara Srinivasa — portfolio

A static Astro portfolio with Frappe Framework as its editable content backend, one Frappe UI Vue control, restrained Anime.js motion, and Lenis wheel scrolling.

## Run

```bash
npm install
cp .env.example .env
npm run dev
```

`npm run build` writes a static site to `dist/`. Without `FRAPPE_URL`, it uses `src/lib/frappe/snapshot.ts`, which contains starter content based on the project brief. Set `FRAPPE_URL` and optionally `FRAPPE_API_TOKEN` to read live records during the build. The public site makes no content API requests. Do not prefix the token with `PUBLIC_`.

The Frappe app and installation instructions are in `frappe_app/portfolio_content`. Frappe is a separate service; this repository does not start a bench or database. The backend needs a running Frappe site before live content can be verified.

Set `PUBLIC_SITE_URL` for canonical URLs. The supplied email, GitHub, LinkedIn, and X profiles are built in and can be overridden with `PUBLIC_EMAIL`, `PUBLIC_GITHUB_URL`, `PUBLIC_LINKEDIN_URL`, and `PUBLIC_X_URL`. Add `PUBLIC_RESUME_URL` when available.

## Design and architecture

- **Identity:** warm charcoal, off-white type, one muted brass accent, thin rules, large editorial type, technical metadata.
- **Astro:** static page and writing routes, semantic content, SEO, responsive layout. The theme button is rendered from Vue on the server and controlled by a tiny browser script.
- **Frappe Framework:** four Desk-managed DocTypes, read with a typed build-time API layer in `src/lib/frappe/`.
- **Frappe UI:** the accessible header theme control, styled with the same tokens as the rest of the site.
- **Anime.js:** a restrained hero entrance. Reduced motion disables it, leaving the content immediately visible.
- **Lenis:** gentle page-wide wheel easing and smooth anchor travel. It is disabled when reduced motion is requested.

The theme starts dark, persists user choices, and uses a warm light palette. The static build remains usable if the backend is temporarily offline.
