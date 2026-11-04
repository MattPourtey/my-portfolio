# my-portfolio

Personal site for Matt Pourteymaur. Plain HTML, CSS, and JavaScript. No build step.

## Update the content
Everything on the page comes from `site-data.js`. Edit it, commit, push. GitHub Pages redeploys in about a minute.

- **Resume:** drop the PDF in `assets/` and set `links.resume` to `"assets/your-file.pdf"`
- **Headshot:** drop a square photo in `assets/` and set `person.photo`
- **LinkedIn / email:** fill `links.linkedin` and `links.email`
- **Credly badges:** paste each badge URL into the `verify` field of that cert
- **Projects:** change `status` to `active`, `building`, `planning`, or `shipped`. Add `hide: true` to hide one
- **Go live:** set `draft: false` so any missing links are hidden instead of shown as placeholders

## Host on GitHub Pages
1. Push `index.html`, `site-data.js`, and `assets/` to the `main` branch
2. Repo **Settings > Pages > Build and deployment**: Source = *Deploy from a branch*, Branch = `main` / `root`
3. Site goes live at `https://mattpourtey.github.io/my-portfolio/`

## Custom domain (later)
After buying `mattpourtey.com`, add it under **Settings > Pages > Custom domain**, then point DNS at GitHub Pages and tick **Enforce HTTPS**.
