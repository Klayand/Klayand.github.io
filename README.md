# Zikai Zhou Academic Homepage

Source code for [Klayand.github.io](https://klayand.github.io/), the personal academic homepage of Zikai Zhou.

The site is a lightweight static page for research updates, selected publications, experience, service, and profile links. It is intentionally dependency-free so GitHub Pages can serve it directly.

## Repository Structure

- `index.html` contains the page content, metadata, publication entries, and lightbox markup.
- `styles.css` defines the responsive visual system.
- `main.js` handles publication filters/search, mobile navigation, active-section
  links, and the accessible paper-preview dialog. No build step is required.
- `images/` stores the profile image, favicons, web manifest, and paper preview images.
- `images/fonts/` self-hosts DM Sans and Newsreader with their SIL Open Font
  Licenses. `images/icons/` contains Lucide SVGs and its ISC license. The site
  does not request third-party fonts or scripts at runtime.
- `images/projects/` contains locally hosted official Blog covers and the Qwen brand mark.
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

- Add recent highlights in the `news-section` / `news-strip` section.
- Add or revise research areas in the `research` section.
- List model releases and official resources in the `industry` section. Use
  "Series GitHub" for a shared repository, and only add version-specific links
  after confirming the official destination.
- Industry projects use a responsive two-column gallery with official Blog
  covers, concise contribution summaries, and resource links. Cover images link
  directly to the corresponding Blog. Preserve complete cover artwork with
  `object-fit: contain`; do not overlay more titles or substitute paper cases.
- When an official cover cannot be verified, retain a clearly differentiated
  HTML brand cover instead of borrowing artwork from another model version.
- Add publication entries in the `publications` section. Add `data-selected`
  to an article to include it in the default selected view. All work remains
  available from the filter controls and searchable by title, author, venue,
  and summary. Search starts across the full bibliography.
- Keep venue/status labels accurate: `main.js` classifies recognized accepted
  venues as peer-reviewed and keeps under-review entries with reports/preprints.
- Update roles, service, and contact links in their corresponding sections.

Place new paper preview images under `images/papers/` and reference them with relative paths.

## Presentation Update - 20 November 2026

- Reworked the profile masthead with editorial typography, an unframed portrait,
  compact contact links, and a separate horizontal Scholar snapshot.
- Added numbered research/experience sections and a responsive three-column
  industry gallery, preserving the official cover artwork in full.
- Defaulted to eight selected publications; all 27 original entries, authors,
  statuses, abstracts, and paper links are retained. Added full-text search,
  peer-reviewed/report filters, counts, and an empty-state reset.
- Replaced the preview overlay with a native dialog supporting keyboard access,
  Escape dismissal, focus containment/restoration, and backdrop dismissal.
- Added mobile navigation, section highlighting, reduced-motion handling, and
  a no-JavaScript fallback that exposes the complete bibliography/navigation.
- Validated with Playwright/Chrome at 320, 375, 390, 600, 768, 1024, 1440, and
  1920px: no horizontal overflow or broken visible image assets. Checked filters,
  search/reset, preview focus, and mobile navigation. Citation figures were
  refreshed against Google Scholar on 20 November 2026.

## Content Verification

Citation snapshot updated: 20 November 2026. The public Google Scholar profile
was fetched directly from both its Chinese and English interfaces; both returned
the same metrics. Publication titles and author lists were last cross-checked
against arXiv and ACL Anthology on 9 November 2026. Existing model release
information and cover sources retain their 22 September 2026 verification date.

- [Google Scholar](https://scholar.google.com/citations?user=u6TjscAAAAAJ&hl=en&pagesize=100):
  481 total citations, h-index 11, i10-index 13, and 124 citations for Golden Noise.
  The full profile contains 28 entries, including preprints and technical reports;
  this is not a count of first-author or accepted conference papers. The homepage
  retains its 27 curated entries and the conservative 25+ papers/reports label.
- New entries: [Qwen-Image-PE](https://arxiv.org/abs/2610.33472),
  [Golden Anchor](https://arxiv.org/abs/2610.13217), and
  [Qwen-Image-Layered 1.5](https://aclanthology.org/2026.emnlp-main.2409/).
  Layered 1.5 is an EMNLP 2026 paper; PE and Golden Anchor are preprints.
- [PISA](https://arxiv.org/abs/2602.01077): v4 states acceptance at NeurIPS 2026.
- [D2C](https://arxiv.org/abs/2507.05914): uses the CVPR 2026 camera-ready title
  and author list. The method selects training examples and augments their
  conditioning; it does not synthesize a replacement dataset.
- [Golden Noise](https://arxiv.org/abs/2411.09502),
  [AMD](https://arxiv.org/abs/2602.07345),
  [RF-Sampling](https://arxiv.org/abs/2603.06165),
  [MGT](https://arxiv.org/abs/2411.10781), and
  [Zigzag](https://arxiv.org/abs/2412.10891): public titles and author lists
  aligned with the linked versions. Existing user-provided under-review statuses
  are retained, not upgraded to acceptances.
- Fuguang AI experience is scoped to video data pipelines per the author's
  clarification. End-to-end model-development contributions refer to Qwen Image.
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
h-index, i10-index, Golden Noise highlight and publication entry, and snapshot
date together.

## Project Covers

The following are the corresponding official Blog release/share covers. They
are resized to at most 1200px and WebP-compressed locally; no content is cropped
or generated, and their original artwork is preserved.

| Cover | Official source | Original image |
| --- | --- | --- |
| `qwen-21-blog.webp` | [Qwen Image 2.1 Blog](https://qwen.ai/blog?id=qwen-image-2.1), also [published by Alibaba Cloud](https://www.alibabacloud.com/blog/qwen-image-2-1-compact-efficient-and-unified-image-creation_603586) | [Release banner](https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image2.1/banner_en.png) |
| `qwen-30-blog.webp` | [Qwen Image 3.0 Blog](https://qwen.ai/blog?id=qwen-image-3.0), also [published by Alibaba Cloud](https://www.alibabacloud.com/blog/qwen-image-3-0-rich-content-authentic-details-deep-knowledge_603385) | [Release banner](https://yqintl.alicdn.com/a1f75ad93428d26aab1b1eecb1f328c26191a05b.png) |
| `qwen-20-blog.webp` | [Qwen Image 2.0 Blog](https://qwen.ai/blog?id=qwen-image-2.0), also [published by Alibaba Cloud](https://www.alibabacloud.com/blog/qwen-image-2-0-professional-infographics-exquisite-photorealism_602880) | [Release banner](https://yqintl.alicdn.com/2893b60c7304fe38b7082af8f9b89b1ac9d14447.png) |
| `qwen-bench-blog.webp` | [Qwen-Image-Bench Blog](https://www.alibabacloud.com/blog/qwen-image-bench-beyond-basic-generation-%E2%80%94-evaluating-t2i-models-in-complex-scenarios_603335) | [Blog share cover (og:image)](https://yqintl.alicdn.com/ac13008efe163afffa1115967d7b85ad91d16846.jpeg) |

Qwen Image 3.1 and Flash/Turbo retain HTML brand covers because corresponding
official Blog covers have not been verified. These are homepage presentations,
not official release artwork. The Qwen mark is from the
[official Qwen site](https://qwen.ai/home), downloaded from its
[brand asset](https://img.alicdn.com/imgextra/i4/O1CN01OXv3EM1FN8t9W4P79_!!6000000000474-2-tps-80-80.png)
and stored unchanged as `images/projects/qwen.png`.

Qwen Image 3.1 is marked as continuing work, not a verified public release.
Do not infer release availability from its inclusion in the project gallery.

## Deployment

Push changes to GitHub and let GitHub Pages publish the site:

```bash
git add .
git commit -m "Update homepage"
git push origin source
```

The live site is available at [https://klayand.github.io/](https://klayand.github.io/).
