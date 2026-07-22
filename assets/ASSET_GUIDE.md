# Shawaya Shack Website Image Assets

This set was art-directed from the supplied Shawaya Shack logo. The recurring visual language is hot orange-red, charcoal black, warm cream, live-fire glow, bold contrast, and premium but authentic food texture.

## Recommended files

| File | Dimensions | Best use |
| --- | ---: | --- |
| `images/shawaya-shack-logo.png` | 2870 x 2706 | High-resolution raster logo reference |
| `images/hero-fire-grilled-shawaya.webp` | 1672 x 941 | Desktop landing-page hero; copy on the left |
| `images/hero-fire-grilled-shawaya-mobile.webp` | 1080 x 1350 | Mobile hero, story, or vertical campaign crop |
| `images/family-shawaya-feast.webp` | 1536 x 1024 | Family/share-meal or catering section |
| `images/traditional-masala-preparation-v2.webp` | 1536 x 1024 | Authenticity, ingredients, or process section |
| `images/signature-half-shawaya.webp` | 1254 x 1254 | Menu card, featured product, or social post |
| `images/hero-shawaya.jpg` | 1200 x 608 | Approved centered landscape hero |
| `images/hero-shawaya-realistic.webp` | 1762 x 892 | Current centered hero with corrected realistic carved-chicken texture |
| `images/masala-quarter.jpg` | 736 x 912 | Masala Quarter menu feature |
| `images/shack-platter.jpg` | 736 x 912 | Shack Platter menu feature |
| `images/fire-dust-fries.jpg` | 736 x 912 | Fire-Dust Fries menu feature |
| `images/spice-market.jpg` | 800 x 1008 | Approved origin/story collage |

The matching PNG files are full-resolution masters. The WebP files are the preferred web-delivery assets. `traditional-masala-preparation-v2` is the selected preparation image; the unversioned preparation image is retained only as an earlier source variant.

The five JPEG files were supplied with the approved Lovable reference and are the selected assets for the current landing-page composition.

## Suggested implementation

- Use `hero-fire-grilled-shawaya.webp` with `object-position: center right` so the dark left side remains available for the headline and calls to action.
- Switch to `hero-fire-grilled-shawaya-mobile.webp` below the mobile breakpoint rather than relying on an aggressive automatic crop.
- Use descriptive alt text such as: `Whole masala shawaya chicken served beside garlic sauce over a charcoal grill.`
- Keep page typography and buttons outside the image. No text or logos are baked into the generated food photography.
- The generated images are polished mock assets. Replace individual dishes with commissioned photography if exact menu-item fidelity is required for ordering.

## Generation method and final prompt set

All food images were created with the built-in image generator. The supplied logo was used only as a palette and mood reference and was explicitly excluded from the photographic scenes.

### Desktop hero

```text
Use case: ads-marketing
Asset type: Shawaya Shack website hero image
Input image: supplied Shawaya Shack logo as a color-and-mood reference only; do not reproduce the logo or text.
Primary request: premium photorealistic whole grilled shawaya chicken, deeply charred and glistening with traditional masala, on a dark ceramic platter with lemon, roasted onion, garlic sauce, and fresh herbs.
Scene: dramatic charcoal-grill restaurant setting with subtle embers and smoke.
Composition: wide 16:9 landscape; platter on the right; dark negative space on the left for web copy; low three-quarter angle.
Lighting and palette: warm firelight, orange-red highlights, charcoal shadows, warm cream accents.
Constraints: no text, logo, watermark, people, malformed food, duplicated parts, or excessive garnish.
```

### Family feast

```text
Use case: photorealistic-natural
Asset type: family dining section image
Primary request: overhead family-style feast with grilled masala chicken portions, long-grain rice, kuboos, garlic sauce, pickled vegetables, salad, lemon, and small bowls of traditional sides.
Scene: warm cream stone tabletop with charcoal plates and orange-red napkin accents.
Composition: wide 3:2 overhead editorial flat lay with natural adult hands entering at the edges.
Lighting: bright, soft, welcoming daylight.
Constraints: culturally respectful, photorealistic, no text, logo, watermark, branded packaging, malformed hands, duplicated plates, or spills.
```

### Masala preparation

```text
Use case: precise-object-edit
Asset type: authenticity and ingredients section image
Primary request: one clearly readable whole spatchcocked chicken - one body, exactly two legs and two wings - as a cook rubs in red-orange masala beside bowls of spices, lemon, garlic, herbs, and a live charcoal grill.
Composition: wide 3:2 documentary food photograph; close three-quarter view; hands and ingredients sharp; grill atmospheric behind.
Lighting and palette: warm firelight, charcoal black, vivid orange-red masala, warm cream highlights.
Constraints: preserve realistic hands and clean food handling; no extra chicken pieces, duplicated limbs, gore, text, logo, or watermark.
```

### Signature plate

```text
Use case: product-mockup
Asset type: menu card and social food image
Primary request: close-up of a signature half shawaya chicken with char marks and glossy masala, saffron rice, garlic sauce, pickled cucumber, onion, lemon, and flatbread.
Scene: charcoal tabletop, warm cream plate, subtle orange-red cloth accent.
Composition: square editorial photograph, plate slightly off-center with one clean corner for an optional UI badge.
Lighting: crisp premium restaurant lighting with warm highlights, rich shadows, and fresh steam.
Constraints: one coherent realistic plate; no text, numbers, logo, watermark, duplicate pieces, or garnish overload.
```
