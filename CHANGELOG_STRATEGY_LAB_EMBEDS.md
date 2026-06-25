# Strategy Lab Canva Embed Update

Changed files:

- `data/site.js` — replaced the placeholder deck data with six real Canva embed URLs and matching full-deck links.
- `app/page.tsx` — changed the homepage Strategy Lab section from showing only the first two decks to showing all decks.
- `components/UI.tsx` — made Canva iframes render in a responsive 16:9 frame using `aspect-video` so slides keep their proper presentation ratio.

Note: Build was not run because dependencies are not installed in this extracted project (`next: not found`). Run `npm install` and then `npm run build` locally or on the server.
