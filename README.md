# Shawaya Shack website

A mobile-first TanStack Start and React restaurant site built from the project logo, food imagery, and `design.md` direction.

## Run locally

```powershell
npm run dev
```

Open `http://127.0.0.1:4173`.

## Production build

```powershell
npm run build
```

TanStack Start creates the production server and client output through Vite and Nitro. Vercel detects the TanStack Start framework preset from `vercel.json`.

## Source structure

- `src/routes/index.tsx` — landing page route
- `src/components/MenuSection.tsx` — menu presentation
- `src/data/menu.ts` — menu items and prices
- `src/styles.css` — brand and responsive styles

The Instagram destination is configured in the header, conversion band, and footer. Address, hours, and direct ordering should be added only after the restaurant confirms them.
