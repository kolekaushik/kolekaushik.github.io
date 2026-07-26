# Kosha screenshots

This folder holds the screenshot gallery images for the Kosha card in the
"Featured Projects" section of the site.

Currently `1.svg`, `2.svg`, and `3.svg` are lightweight placeholder graphics
generated for scaffolding purposes — they are **not** real product
screenshots.

## Replacing the placeholders

1. Export 2–3 real screenshots of Kosha (PNG or JPG recommended, ~1200px wide
   is plenty for the gallery card size).
2. Drop them in this folder, e.g. `1.png`, `2.png`, `3.png`.
3. Update the `images` array for the `kosha` entry in
   `src/data/projects.ts` so each `src` points at the new filename and each
   `alt` describes what the screenshot shows (for accessibility).
4. You can add or remove slots freely — the gallery and lightbox render
   however many images are listed.
