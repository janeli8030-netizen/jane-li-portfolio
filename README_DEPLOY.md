# jane-li.top — CMF Portfolio

## Local dev

```bash
cd jane-li-portfolio
npm run dev
```

Open: http://localhost:3000

## Deploy (recommended): Vercel

1. Push this folder to a GitHub repo (or I can help you do it).
2. Go to https://vercel.com/new and import the repo.
3. Build command: `next build` (default)
4. Output: Next.js (default)

### Set the domain

In Vercel → Project → Settings → Domains:
- Add: `jane-li.top`
- (Optional) add: `www.jane-li.top`

Update your DNS at your domain registrar:
- `A` record for `@` → Vercel IP (Vercel will show it)
- `CNAME` for `www` → `cname.vercel-dns.com`

## Content editing

- Site basics: `src/lib/site.ts`
- Projects list + structure: `src/lib/content.ts`
- Pages:
  - Home: `src/app/page.tsx`
  - Projects list: `src/app/projects/page.tsx`
  - Project detail: `src/app/projects/[slug]/page.tsx`
  - Research: `src/app/research/page.tsx`
  - Experiments: `src/app/experiments/page.tsx`
  - Contact: `src/app/contact/page.tsx`

## Next steps (we can do together)

- Replace placeholders with your real copy (ZH/EN)
- Add images (cover, swatches, renders) under `public/`
- Make the whole site language-switchable per section (currently shows EN + ZH together)
- Add a PDF resume download + social links
