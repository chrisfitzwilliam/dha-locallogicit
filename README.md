# DHA Sheet Metal

Static GitHub Pages deploy repository for `https://dha.locallogicit.com/`.

## Hosting

- GitHub repo: `chrisfitzwilliam/dha-locallogicit`
- GitHub Pages source: `main` branch, `/`
- Custom domain: `dha.locallogicit.com`
- DNS target: `chrisfitzwilliam.github.io`
- HTTPS: enforced

## Site Contents

- `index.html` - homepage with project hero, services, slideshow projects, why DHA, and featured work.
- `gallery.html` - filterable project gallery.
- `contact.html` - contact and capability page.
- `assets/css/styles.css` - site styling.
- `assets/js/main.js` - gallery filters and homepage project slideshow.
- `assets/images/dha-original-logo.png` - official original DHA logo asset.

## Logo And Header

The current header uses the real black/white DHA logo from the scrape, not the earlier recreated SVG. The logo image is left unmodified so it looks original. The surrounding header styling provides integration:

- white/very light header background
- subtle orange rule below the header and logo
- charcoal nav text
- orange CTA button

Do not recolor the logo unless the client explicitly approves changing the brand artwork.

## Verify

From the parent DHA workspace:

```powershell
powershell -ExecutionPolicy Bypass -File .\tests\verify-site.ps1
```

Live smoke checks:

```powershell
curl.exe -sSI https://dha.locallogicit.com/
curl.exe -sL https://dha.locallogicit.com/ | Select-String 'dha-original-logo.png'
curl.exe -sL https://dha.locallogicit.com/assets/css/styles.css | Select-String 'site-header::after'
```

Latest screenshot evidence in the parent workspace:

- `tests/screenshots/index-logo-integrated-desktop.png`
- `tests/screenshots/index-logo-integrated-mobile.png`

## Deploy

```powershell
git status --short --branch
git add .
git commit -m "Describe change"
git push
```

Recent useful commits:

- `0d50d1c` - integrate original logo styling
- `53f019c` - use original DHA logo
- `55f3886` - initial DHA Sheet Metal site
