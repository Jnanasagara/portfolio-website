# Portfolio Content for Frappe

This is a small Frappe app containing the four editable DocTypes consumed by the Astro build. Install it into an existing Frappe bench/site:

```bash
bench get-app /absolute/path/to/portfolio-website/frappe_app/portfolio_content
bench --site your-site install-app portfolio_content
bench --site your-site migrate
```

Create records in Desk under **Portfolio Project**, **Portfolio Experience**, **Portfolio Writing**, and **Portfolio Skill**. The site reads them through Frappe's resource API at build time. Give a dedicated API user read access to these DocTypes, generate an API key/secret, and set `FRAPPE_URL` and `FRAPPE_API_TOKEN` in the Astro build environment. The token stays on the build server; it is never sent to browsers.

Set `display_order` to control ordering. Mark writing `published` to include it. The static site keeps serving its last generated pages if Frappe is down; a new build falls back to the checked-in snapshot if a collection cannot be fetched.
