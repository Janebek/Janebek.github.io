# Jianibieke Adalibieke — Academic Homepage

Static academic homepage for [janebek.github.io](https://janebek.github.io/).

## Content

- `index.html` — profile and selected research
- `stylesheet.css` — responsive, accessible presentation
- `motion.js` — viewport-aware, reduced-motion-safe research previews
- `assets/` — local profile image, research preview videos, poster images, and favicon
- `robots.txt` and `sitemap.xml` — search-engine discovery
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## Local preview

Run a static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Updating the profile image

Replace `assets/profile.jpg` with a portrait. The page crops it to a square; adjust `object-position` in `stylesheet.css` when a different focal point is needed. Update the image version in `index.html` to prevent stale browser caches.

## Deployment

Every push to `main` deploys the repository root through GitHub Actions. The repository's Pages source should remain set to **GitHub Actions**.

## Credits

The layout is based on [Jon Barron's academic homepage](https://jonbarron.info/). Research previews are derived from the corresponding authors' project media and link back to the [AdaDexTrack](https://janebek.github.io/AdaDexTrack/) and [DexTrack](https://meowuu7.github.io/DexTrack/) project pages.
