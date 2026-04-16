# cameron.ball

Personal portfolio site.

## Stack

HTML · CSS · Vanilla JS — no framework, no build step, no dependencies.

One file. Open it in a browser and it works.

## Why so simple?

The first version of this site was a React app. A portfolio site. Four pages. All of them mostly empty.

Most portfolio sites are built with Next.js, Vite, Tailwind, a component library, and three config files before a single line of content is written. This one isn't.

The stack _is_ the point. A single `index.html` that is fast, readable, and requires nothing to run is a more honest reflection of the more I learn, the more I find myself reaching for less. Simplicity is a deliberate choice, not a limitation.

It also deploys anywhere, loads instantly, and will still work in ten years without a dependency audit.

## Structure

```
index.html   — everything. markup, styles, and the ~20 lines of JS it takes to run this site.
```

## Running locally

```bash
open index.html
```

Or drop it in a browser. That's it.

## Deployment

Hosted on Cloudflare Pages. Every push to `main` deploys automatically via GitHub integration.

## Customisation

All design tokens (colours, typography, spacing) are CSS custom properties at the top of index.css — easy to tweak without hunting through the file.
