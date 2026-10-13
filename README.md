# Portfolio

Source for my personal portfolio site — **Erasto Wanjau — Data Scientist** — a static [Astro](https://astro.build) site deployed on Vercel's free Hobby tier.

- **Live**: https://erasto-wanjau.vercel.app
- **Writing**: the article list is pulled at build time from [dev.to/erasto](https://dev.to/erasto)
- **Résumé**: served from `public/resume.pdf` — drop the PDF there to publish it

## Work on it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Add a case study

1. Create `src/content/case-studies/<slug>.md` (copy an existing file's frontmatter)
2. Optionally drop charts into `public/images/case-studies/<slug>/`
3. Set `status: final` once the numbers are verified — drafts render with a badge
4. Commit and push to `main`; Vercel redeploys automatically

Push to `main` = deploy. Nothing else to run.
