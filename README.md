# Jianibieke Adalibieke — Academic Homepage

Static academic homepage for [janebek.github.io](https://janebek.github.io/).

## Content

- `index.html` — profile and selected research
- `stylesheet.css` — responsive, accessible presentation
- `assets/` — local profile image, research thumbnails, and favicon
- `robots.txt` and `sitemap.xml` — search-engine discovery
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## Local preview

Run a static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Updating the profile image

Replace `assets/profile.jpg` with a square portrait. Keep the filename unchanged so that the page and social metadata continue to work without edits.

## Deployment

Every push to `main` deploys the repository root through GitHub Actions. The repository's Pages source should remain set to **GitHub Actions**.

## Credits

The layout is inspired by [Jon Barron's academic homepage](https://jonbarron.info/) and [Tianming Wei's homepage](https://www.stillwtm.site/). Research thumbnails are derived from the corresponding authors' project media and link back to the [AdaDexTrack](https://janebek.github.io/AdaDexTrack/) and [DexTrack](https://meowuu7.github.io/DexTrack/) project pages.
