# Shawaya Food-Editorial Style Language

## Purpose

Translate the animated pancake-site reference into an original Shawaya Shack system. Keep the product-showcase energy while grounding it in charcoal grilling, traditional masala, generous portions, and the existing Firehouse Editorial brand direction.

## Visual signature

- Monumental condensed headlines with short sensory phrases.
- Cream, charcoal, flame orange, and rare ember-gold color fields.
- Large food photography treated as the main interface material.
- Strong vertical composition punctuated by occasional horizontal movement.
- Rounded image frames paired with mostly square or lightly rounded controls.
- Small monospaced labels and price chips against oversized display type.
- Spacious layouts that let one dish or one message dominate each moment.

## Motion vocabulary

Use these terms consistently:

- **Reveal**: uncover content using a clip-path or mask.
- **Orchestration**: time hero elements so they read as one coordinated entrance.
- **Stagger**: introduce sibling cards `40-70ms` apart.
- **Scroll reveal**: trigger a one-time entrance as a section enters the viewport.
- **Continuity transition**: preserve orientation when an image or product changes size or position.
- **Shared element transition**: carry a menu image into a product/detail view when routing supports it.
- **Layout animation**: animate an element to a new measured position instead of snapping.
- **Crossfade**: exchange product states in the same place; add at most `2px` blur when the overlap looks harsh.
- **Press feedback**: scale a button to approximately `0.97` for `120-160ms`.
- **Reduced motion**: remove spatial movement and masks while preserving immediate content and lightweight opacity/color changes.

## Page choreography

| Moment | Composition | Motion | Purpose |
| --- | --- | --- | --- |
| Navigation | Cream bar, compact brand, direct order action | None on load; fast press/hover only | Keep conversion immediate |
| Hero | Huge headline plus dominant shawaya image | Line reveal, image mask, subtle badge scale | Establish appetite and identity |
| Menu intro | Char field with display headline | One-time translate/opacity reveal | Mark a strong section change |
| Menu cards | 4:5 food images and price chips | Short stagger; hover scale on pointer devices | Make choices feel tactile |
| Featured item | One oversized plate with ingredient callouts | Optional continuity/shared-element transition | Explain a signature product |
| Process/story | Documentary preparation image plus short copy | Directional mask on image only | Reinforce authenticity |
| Social proof | Compact avatars/review summary | Small stagger or number ticker once | Add trust without spectacle |
| Order CTA | Flame field and one dominant action | Simple reveal; press feedback | Convert without delay |
| Footer | Char information block | No decorative entrance | End calmly and reliably |

## Shawaya-specific mapping

Translate the reference's playful pancake elements as follows:

- Stacked pancakes -> plated shawaya hero or layered rice/chicken composition.
- Syrup/berry color accents -> masala glaze, ember light, lemon, herbs, and pickles.
- Floating ingredients -> use only in an optional first-load hero composition, with realistic weight and a fast settle. Never keep ingredients orbiting.
- Product carousel -> signature plates or portion sizes with stable price and ordering actions.
- Customer review strip -> genuine reviews, ratings, and location-specific proof.

Do not imitate the reference site's exact page structure, copy, illustration, or branded assets.

## Brand constraints

Use repository `design.md` as authority. Default tokens when it is unavailable:

| Role | Value |
| --- | --- |
| Flame | `#FF3803` |
| Accessible action fire | `#D83A0A` |
| Ember | `#EAA300` |
| Char | `#1A0F0A` |
| Smoke | `#6D625C` |
| Cream | `#F8F3ED` |
| Paper | `#FFFFFF` |

Use white on `#D83A0A` for small CTA text. Reserve white on `#FF3803` for large display typography because the smaller-text contrast is insufficient.

## Anti-patterns

- Continuous parallax or scroll hijacking.
- Every section animating from a different direction.
- Products floating without believable weight.
- Slow navigation, menu, or order interactions.
- `scale(0)` entrances, bounce-heavy springs, or elastic overshoot.
- Text hidden behind masks long enough to delay reading.
- Hover-only product information.
- Animation that causes the page to shift horizontally on mobile.
- Auto-playing audio or video backgrounds.
- Repeated decorative animations after the first view.

## Content style

Favor short phrases: `Slow heat. Deep flavor.`, `Made by fire.`, `Masala in every layer.`, `Built to share.`

Use direct actions: `View Menu`, `Order on WhatsApp`, `Call to Order`, `Get Directions`.

Avoid fabricated heritage, unsupported “best” claims, and generic `Learn More` labels.
