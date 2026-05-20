# Madestic Premium Website

A premium multi-page Next.js website for Madestic with a black, red, and white cinematic theme.

## Pages included

- `/` — Home
- `/studio` — premium studio positioning
- `/capabilities` — services/capabilities
- `/work` — project showcase
- `/work/[slug]` — case study detail pages
- `/lab` — Canva strategy deck embeds
- `/manifesto` — brand philosophy
- `/start` — project intake/contact page

## Run locally

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Where to edit content

Most content lives in:

```txt
data/site.js
```

Edit this file to change:

- nav labels
- services
- projects
- Canva decks
- manifesto items
- tech stack

## Add Canva embeds

In `data/site.js`, update each deck:

```js
embedUrl: "https://www.canva.com/design/YOUR_DESIGN_ID/view?embed",
link: "https://www.canva.com/design/YOUR_DESIGN_ID/view"
```

## Replace project screenshots

Replace the placeholder SVGs in:

```txt
public/images/projects/
```

Or update each project `image` path in `data/site.js`.

## Notes

- Built with Next.js App Router.
- Uses Framer Motion for cinematic transitions.
- Uses Tailwind CSS v4.
- Uses lucide-react icons.
- Start page form is UI-only. Connect it later to Formspree, Google Forms, your backend, or CRM.
