# Zikai Zhou Academic Homepage

Source code for [Klayand.github.io](https://klayand.github.io/), the personal academic homepage of Zikai Zhou.

The site is a lightweight static page for research updates, selected publications, experience, service, and profile links. It is intentionally dependency-free so GitHub Pages can serve it directly.

## Repository Structure

- `index.html` contains the page content, metadata, publication entries, and lightbox markup.
- `styles.css` defines the responsive visual system.
- `images/` stores the profile image, favicons, web manifest, and paper preview images.
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

- Add recent highlights in the `news-strip` section.
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
