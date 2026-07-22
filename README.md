# Shawaya Shack website

A mobile-first, dependency-free restaurant showcase built from the project logo, food imagery, and `design.md` direction.

## Run locally

```powershell
npm run dev
```

Open `http://127.0.0.1:4173`.

## Production build

```powershell
npm run build
```

The production-ready static site is written to `dist/`. Vercel uses the settings in `vercel.json` to run this build and publish only that directory.

## Ordering flow

Visitors can assemble a plate request, change quantities, and share or copy the request through their preferred app. Prices, location, hours, and a direct checkout or WhatsApp destination should be added only after the restaurant confirms those business details.
