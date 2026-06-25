# Hero Logo Image Update

Changed because the homepage hero card previously used a text-only `M`, but the requested design needs to incorporate Madestic's half-logo artwork.

## Files changed

- `components/HeroMachine.tsx`
  - Replaced the text `M` inside the hero machine card with the Madestic half-logo image.
  - Added a subtle oversized background version of the same logo inside the card for depth.
  - Uses Next.js `Image` so the asset is served from the project itself.

- `public/images/brand/madestic-half-logo-source.png`
  - Original uploaded Madestic half-logo image kept inside the project folder.

- `public/images/brand/madestic-half-logo-hero.png`
  - Hero-ready transparent/cropped version generated from the uploaded image for cleaner display in the card.

## Notes

The image path used in code is:

```tsx
/images/brand/madestic-half-logo-hero.png
```
