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
- List model releases and official resources in the `industry` section. Use
  "Series GitHub" for a shared repository, and only add version-specific links
  after confirming the official destination.
- Add publication entries in the `publications` section.
- Update roles, service, and contact links in their corresponding sections.

Place new paper preview images under `images/papers/` and reference them with relative paths.

## Content Verification

Last checked: 22 September 2026.

- [Google Scholar](https://scholar.google.com/citations?user=u6TjscAAAAAJ&hl=en&pagesize=100):
  375 total citations, h-index 8, and 116 citations for Golden Noise.
  The profile lists Qwen-Image-Bench at EMNLP 2026.
- [Qwen Image 2.1](https://github.com/QwenLM/Qwen-Image-2.1): the official README
  confirms the 20 September release and links to weights, blog, and demo.
- [Qwen Image 3.0 blog](https://qwen.ai/blog?id=qwen-image-3.0) and
  [Qwen Image series repository](https://github.com/QwenLM/Qwen-Image) provide
  public model descriptions and release links for 3.0 and 2.0.
- [Qwen-Image-Flash](https://arxiv.org/abs/2606.03746): title and author order
  follow v3, revised 14 September 2026. The PDF's first page marks Tianhe Wu and
  Zikai Zhou as equal contributors; the homepage preview uses that same page.
- [Qwen-Image-Bench](https://github.com/QwenLM/Qwen-Image-Bench): official
  evaluation repository and judge-model reference.
- Qwen Image 3.1 is included at the author's request. Version-specific official
  release links could not yet be verified; do not infer links or release specs.

Citation counts are a dated snapshot, not a live counter. Update the total,
Golden Noise highlight and publication entry, and verification date together.

## Deployment

Push changes to GitHub and let GitHub Pages publish the site:

```bash
git add .
git commit -m "Update homepage"
git push origin source
```

The live site is available at [https://klayand.github.io/](https://klayand.github.io/).
