# Zikai Zhou Academic Homepage

Source code for [Klayand.github.io](https://klayand.github.io/), the personal academic homepage of Zikai Zhou.

The site is a lightweight static page for research updates, selected publications, experience, service, and profile links. It is intentionally dependency-free so GitHub Pages can serve it directly.

## Repository Structure

- `index.html` contains the page content, metadata, publication entries, and lightbox markup.
- `styles.css` defines the responsive visual system.
- `images/` stores the profile image, favicons, web manifest, and paper preview images.
- `robots.txt` and `sitemap.xml` provide basic search engine metadata.
- `.nojekyll` tells GitHub Pages to publish the static files as-is.

## Local Preview

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Updating Content

Most updates only require editing `index.html`:

- Add recent highlights in the `news-strip` section.
- Add or revise research areas in the `research` section.
- Add publication entries in the `publications` section.
- Update roles, service, and contact links in their corresponding sections.

Place new paper preview images under `images/papers/` and reference them with relative paths.

## Deployment

Push changes to GitHub and let GitHub Pages publish the site:

```bash
git add .
git commit -m "Update homepage"
git push origin source
```

The live site is available at [https://klayand.github.io/](https://klayand.github.io/).
