# Shawaya Shack Website Design Direction

## Creative direction: Firehouse Editorial

Shawaya Shack should feel like a food magazine produced beside a charcoal grill: bold, tactile, direct, and unmistakably warm. The system combines monumental condensed typography with premium food photography, simple geometric layouts, and a limited palette drawn from the supplied logo.

The design should communicate three ideas immediately: authentic masala craft, live-fire cooking, and food made for sharing. It must feel more considered than fast food and more energetic than a traditional fine-dining site.

Use contrast as the primary rhythm. Alternate warm-cream editorial space with near-black menu sections and concentrated orange conversion bands. Let photography carry appetite; let typography carry confidence. Decoration should come from spice color, charcoal texture, grill marks, smoke, and deliberate cropping rather than generic restaurant icons.

The visual hierarchy is intentionally dramatic: oversized display headlines, small tracked labels, generous negative space, and tightly framed food. Components remain simple and usable so the art direction never interferes with ordering.

## Brand attributes

- Authentic, fire-led, generous, confident, communal
- Premium ingredients without luxury pretension
- Energetic and contemporary without looking trendy or synthetic
- Tactile, smoky, spiced, and appetizing
- Direct voice; short statements over long marketing prose

Avoid cartoon flames, rustic-western clichés, generic fast-food red/yellow combinations, glossy plastic surfaces, neon effects, excessive gradients, and overdecorated menu cards.

## Color system

The logo's measured dominant colors are hot orange-red, warm white, and charcoal. Use vivid flame orange for brand recognition and a deeper orange for accessible small-text buttons.

| Token | Hex | Role |
| --- | --- | --- |
| Flame | `#FF3803` | Logo match, large headlines, decorative blocks, price chips |
| Action Fire | `#D83A0A` | Primary interactive backgrounds with white text |
| Ember Gold | `#EAA300` | Rare story accent, spice highlight, editorial tag |
| Char | `#1A0F0A` | Dark sections, primary text, footer, primary buttons |
| Smoke | `#6D625C` | Secondary text on cream |
| Ash | `#D9CFC7` | Borders, quiet dividers, disabled states |
| Cream | `#F8F3ED` | Main page background |
| Paper | `#FFFFFF` | Cards, logo safety field, high-contrast surfaces |

Recommended distribution: 55% cream/paper, 25% char, 15% flame/action fire, and no more than 5% ember gold.

Contrast references:

- Cream on Char: `17.05:1`
- White on Action Fire: `4.64:1`
- Char on Ember Gold: `8.72:1`
- Smoke on Cream: `5.36:1`
- White on Flame is only `3.61:1`; reserve this combination for large display text, not small buttons.

## Typography

### Families

- Display: **Anton**, fallback `Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif`
- Body/UI: **DM Sans**, fallback `Inter, "Segoe UI", Arial, sans-serif`
- Labels/prices: **Space Mono**, fallback `Consolas, "Courier New", monospace`

Use no more than these three families. The condensed display face carries the identity; body copy stays neutral and highly legible.

### Responsive scale

| Style | Desktop | Mobile | Weight | Leading | Usage |
| --- | ---: | ---: | ---: | ---: | --- |
| Display XL | `clamp(4.5rem, 9vw, 8.75rem)` | `3.5rem` minimum | 400 | `0.88` | Hero headline |
| Display L | `4.5rem` | `2.75rem` | 400 | `0.94` | Section headlines |
| H3 | `2rem` | `1.75rem` | 400 | `1` | Menu item names |
| Eyebrow | `0.75rem` | `0.6875rem` | 700 | `1.2` | Uppercase tracked labels |
| Body L | `1.125rem` | `1rem` | 400 | `1.65` | Story and CTA copy |
| Body | `1rem` | `1rem` | 400 | `1.55` | General content |
| Price | `0.875rem` | `0.875rem` | 700 | `1` | Price chips |

Headlines are uppercase with tracking between `-0.02em` and `0`. Eyebrows use `0.16em` tracking. Never use the condensed display face for paragraphs.

## Photography direction

- Show real food texture: crisp char, glistening masala, separate rice grains, steam, blistered bread, and creamy sauces.
- Use low three-quarter views for heroes and menu products; use overhead framing for family/share-meal stories.
- Light with warm directional firelight or soft daylight. Shadows should be deep but retain food detail.
- Favor charcoal ceramics, dark stone, seasoned wood, warm cream surfaces, and restrained orange textiles.
- Leave deliberate negative space when copy will sit beside or over an image.
- Crop confidently but keep the main dish anatomically believable and fully readable.
- Use shallow depth of field selectively; primary food detail must remain sharp.

Do not bake text or logos into photography. Avoid excessive garnish, oversaturated reds, duplicated food parts, unsafe raw-food handling, glossy stock-photo polish, and unrelated props.

### Approved project assets

| Asset | Recommended placement |
| --- | --- |
| `assets/images/hero-fire-grilled-shawaya.webp` | Desktop hero or full-width conversion panel |
| `assets/images/hero-fire-grilled-shawaya-mobile.webp` | Mobile hero/source-set crop |
| `assets/images/family-shawaya-feast.webp` | Sharing, catering, or occasion section |
| `assets/images/traditional-masala-preparation-v2.webp` | Ingredients/process/story section |
| `assets/images/signature-half-shawaya.webp` | Menu card, featured item, or social tile |
| `assets/images/hero-shawaya-realistic.webp` | Current centered hero; realistic carved breast texture and firelit presentation |

## Layout and composition

- Content maximum: `1280px`
- Desktop grid: 12 columns, `24px` gutters
- Mobile grid: 4 columns, `16px` gutters
- Page edge padding: `24px` mobile, `40px` tablet, `64px` desktop
- Section padding: `56px` mobile, `80px` tablet, `112px` desktop
- Body copy measure: `58ch` maximum
- Alternate cream, char, and action-fire bands to create a clear editorial sequence.
- Use asymmetric editorial compositions on desktop, then convert to clean vertical stacking on mobile.
- Keep every decorative overlay within the mobile viewport. The story accent tile should use `right: 0` and a reduced width below `640px`.

## Components

### Navigation

- Cream background with a thin Ash divider.
- `72px` desktop height and at least `64px` mobile height.
- Full horizontal logo at `120-180px` wide on desktop; icon-only mark at `40-48px` on mobile.
- Mobile must include a menu trigger or expose Menu and Locations; do not hide all navigation except Order.
- Primary order action has a minimum `44px` touch height.

### Buttons

- Primary: Char background, Paper text; hover to Action Fire.
- Fire CTA: Action Fire background, Paper text; hover darkens approximately 8%.
- Secondary: transparent background, 1px current-color border.
- Shape: restrained `2-4px` radius; avoid pill buttons except small labels.
- Minimum height: `44px`; horizontal padding: `24px`.
- Focus: `3px` Ember Gold ring with `2px` offset.

### Menu cards

- Use 4:5 imagery and `12-16px` image radius.
- Price chip sits inside the image at the top-right, never over a key food detail.
- Item name uses the display face; description uses Body/UI.
- On dark sections, use Cream titles and a lightened Smoke body color.
- Cards may lift `4px` and scale the image to `1.025` on hover, but remain flat by default.

### Story collage

- Pair a warm documentary image with a solid Ember Gold caption tile.
- Desktop overlap is allowed; mobile overlap must remain inside the viewport.
- Keep at least `24px` between the collage and following headline on mobile.

### Conversion band

- Full-width Action Fire field with centered Cream headline.
- One primary action should be visually dominant; secondary action is outlined.
- “Order Online” must lead to a real provider, cart, WhatsApp conversation, or telephone action—not back to the same section.

### Footer

- Char background, Cream headings, muted light body copy.
- Use real address, hours, social URLs, and legal destinations.
- Social targets should be at least `44 × 44px` with accessible labels.

## Motion

- Fast interaction: `140-220ms`; standard transition: `240-360ms`; cinematic reveal: `520-760ms`.
- Ease: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Hero choreography: reveal the food photograph from a compact center aperture into the full landscape frame while the image settles from `1.12` to `1`; follow with the brand seal.
- Typography choreography: desktop reveals `Built for the Flame.` / `Made for the Table.` as two clipped lines. Mobile reflows the same statement into four clipped beats, staggered by `45ms`, so the type remains bold without crowding a narrow screen.
- Menu choreography: stagger cards by `70ms`; uncover each photograph vertically while its crop settles from `1.1` to `1`.
- Story choreography: use a directional image mask and reveal the two heading lines immediately after the copy container enters view.
- Conversion choreography: reveal heading, copy, and actions in order at `60ms` intervals.
- Interaction feedback: buttons stay fast; the order count uses a single `220ms` pulse after an item is added.
- No heavy parallax, bouncing CTAs, continuous flame animation, or motion that competes with food.
- Every entrance plays once, uses transform/opacity/clip-path only, and remains interruptible through normal scrolling.
- Respect `prefers-reduced-motion` by removing transforms, masks, stagger delays, and nonessential reveals.

## Voice and copy

Write with short, sensory confidence.

Preferred language: flame-grilled, traditional masala, slow heat, deep flavor, fire-kissed, freshly grilled, made to share.

Avoid unsupported superlatives, invented history, “secret recipe” clichés, and overly ornate language. CTA labels should describe a real outcome: **View Menu**, **Order on WhatsApp**, **Call to Order**, or **Get Directions**.

## Accessibility and responsive requirements

- Provide one `<main>` landmark and preserve a single `<h1>`.
- Meet WCAG AA contrast: `4.5:1` for normal text and `3:1` for large text/UI graphics.
- Keep body copy at `16px` minimum and touch targets at `44px` when practical.
- Provide visible keyboard focus states.
- Give informative food images concise alt text; decorative texture images use empty alt text.
- Prevent horizontal scrolling at `320px` and above.
- Do not place required information only on hover.

## Token starter

```css
:root {
  /* Primitive */
  --flame-500: #ff3803;
  --flame-700: #d83a0a;
  --ember-500: #eaa300;
  --char-950: #1a0f0a;
  --smoke-600: #6d625c;
  --ash-300: #d9cfc7;
  --cream-50: #f8f3ed;
  --paper: #ffffff;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  --radius-control: 0.25rem;
  --radius-image: 0.875rem;
  --shadow-lift: 0 18px 50px rgb(26 15 10 / 0.18);

  /* Semantic */
  --color-background: var(--cream-50);
  --color-surface: var(--paper);
  --color-foreground: var(--char-950);
  --color-muted-foreground: var(--smoke-600);
  --color-brand: var(--flame-500);
  --color-action: var(--flame-700);
  --color-accent: var(--ember-500);
  --color-border: var(--ash-300);

  --font-display: "Anton", Impact, sans-serif;
  --font-body: "DM Sans", Inter, sans-serif;
  --font-label: "Space Mono", Consolas, monospace;

  /* Components */
  --button-bg: var(--char-950);
  --button-fg: var(--paper);
  --button-hover-bg: var(--color-action);
  --button-radius: var(--radius-control);
  --card-image-radius: var(--radius-image);
  --focus-ring: var(--color-accent);
}
```

## Mood board artifact

The visual expression is available at `moodboard/shawaya-shack-moodboard.png`; its editable HTML source is `moodboard/moodboard.html`.

## Approved reference composition

The supplied Lovable desktop and Pixel 7 screenshots are the composition contract for the current landing page. Copy may evolve, but the established Anton / DM Sans / Space Mono typography system must remain.

The page sequence is:

1. Compact cream navigation with a direct order action.
2. Centered cream hero with a two-line desktop lockup (`BUILT FOR THE FLAME.` / `MADE FOR THE TABLE.`), a four-beat mobile reflow, the landscape shawaya image, and an overlapping circular logo seal.
3. Charcoal signature-menu field with three equal portrait food features and compact orange price tags.
4. White two-column story section pairing the spice-market photograph with an Ember Gold caption tile.
5. Full-width Action Fire conversion band with one dark primary action and one outlined secondary action.
6. Compact Char information footer in three columns, stacking cleanly on mobile.

Mobile retains the same visual hierarchy in one column. The menu trigger remains visible beside the order action so navigation is not sacrificed for screenshot fidelity. Motion is limited to coordinated hero reveals, short one-time section entrances, image masks, and fast interaction feedback.
