---
name: build-shawaya-motion-site
description: Build, redesign, or polish the Shawaya Shack website in a cinematic food-editorial style inspired by animated product-showcase sites. Use when implementing Shawaya Shack landing pages, hero sections, menu/product cards, story sections, ordering CTAs, scroll choreography, clip-path or mask reveals, staggered entrances, shared-element transitions, responsive motion, or reduced-motion fallbacks in HTML/CSS/JavaScript, React, Vite, Next.js, or similar frontend projects.
---

# Build Shawaya Motion Site

Create a product-first Shawaya Shack experience with oversized food imagery, hard cream/charcoal/flame color blocking, condensed editorial type, and restrained cinematic motion. Preserve ordering clarity and performance.

## Establish context

1. Read the repository's `design.md` as the visual source of truth when present.
2. Read `assets/ASSET_GUIDE.md` and inspect `assets/images/` before sourcing or generating imagery.
3. Inspect the actual framework, existing dependencies, routes, component patterns, and user changes before editing.
4. Read [references/style-language.md](references/style-language.md) before choosing compositions or animation patterns.
5. Read [references/implementation-recipes.md](references/implementation-recipes.md) when writing motion code.
6. Reuse [assets/shawaya-motion-tokens.css](assets/shawaya-motion-tokens.css) and [assets/reveal-observer.js](assets/reveal-observer.js) when the project benefits from a dependency-free starter.

Do not require the reference video at implementation time. Reproduce its principles, not its exact content or layout.

## Follow the implementation workflow

### 1. Audit the current experience

- Identify the hero, menu/products, story/process, social proof, order conversion, locations, and footer.
- Record broken or placeholder destinations before styling CTAs.
- Find horizontal overflow, undersized touch targets, weak focus states, missing landmarks, and image-loading problems.
- Inventory existing animation libraries. Do not add one unless the requested behavior cannot be delivered cleanly with the current stack.

### 2. Write a motion storyboard

Define each moment as `trigger -> subject -> purpose -> motion -> reduced-motion result`.

Use this default sequence:

1. Hero eyebrow and headline: orchestrated clip-path reveal with a short line stagger.
2. Hero food image: mask reveal with a subtle `translateY`, never a dramatic zoom from zero.
3. Logo or accent badge: small scale-in from `0.96`, used once.
4. Menu introduction: scroll reveal; product cards stagger by `40-70ms`.
5. Product imagery: restrained hover scale on fine-pointer devices only.
6. Story/process image: one directional mask reveal; keep the text stable.
7. Conversion band: immediate readability with simple opacity/translate reveal.
8. Buttons: instant press feedback and explicit focus treatment.

Animate to explain hierarchy, preserve spatial continuity, and acknowledge interaction. Remove motion that exists only to keep the page busy.

### 3. Build the static page first

- Make the page complete and usable with JavaScript disabled.
- Use semantic landmarks and one `h1`.
- Wire every order, menu, WhatsApp, telephone, location, and social action to a real destination or an explicit placeholder configuration.
- Ensure the page works at `320px` before adding motion.
- Use the project assets and `design.md` tokens instead of inventing another palette or font system.

### 4. Add motion in layers

Apply motion in this order:

1. Press/focus feedback.
2. One-time in-view reveals.
3. Hero orchestration.
4. Optional route or product continuity transitions.
5. Optional decorative motion only after performance remains healthy.

Prefer CSS transitions and transforms. Use `IntersectionObserver` for one-time in-view state. Use the Web Animations API for programmatic, predetermined sequences. Use an existing Motion/Framer dependency only for interruptible gestures, layout animation, or shared-element behavior that CSS cannot express cleanly.

Never use `transition: all`. Never animate `width`, `height`, `top`, `left`, margin, or padding during scrolling. Prefer `transform`, `opacity`, and carefully bounded `clip-path`.

### 5. Apply the motion budget

| Interaction | Default |
| --- | --- |
| Press feedback | `120-160ms` |
| Hover/color change | `160-220ms` |
| Small entrance | `220-320ms` |
| Section reveal | `420-600ms` |
| Hero mask/reveal | `600-850ms` |
| Card stagger | `40-70ms` between items |

Use these curves:

```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
```

Use ease-out for entrances and feedback, ease-in-out for elements moving between visible positions, and linear only for genuine continuous progress. Avoid ease-in for UI response.

### 6. Protect accessibility and performance

- Provide a `prefers-reduced-motion` path that removes masks, spatial travel, scale, parallax, and stagger delays while retaining useful opacity/color feedback.
- Gate hover motion with `@media (hover: hover) and (pointer: fine)`.
- Keep controls at least `44px` tall when practical.
- Never hide required content until JavaScript runs; activate hidden reveal states only after the motion controller initializes.
- Keep text and CTAs interactive while decorative entrances run.
- Use responsive images, stable aspect ratios, and explicit dimensions to prevent layout shift.
- Add `will-change` only immediately around an animation; do not leave it on large images permanently.
- Avoid simultaneous full-screen blur, filter, clip-path, and scale animations.

### 7. Verify the result

Test at minimum:

- `375 × 812` mobile
- `768 × 1024` tablet
- `1440 × 900` desktop
- reduced-motion mode
- keyboard-only navigation
- touch or coarse-pointer behavior

Confirm:

- No horizontal scrollbar.
- No clipped headline, image, badge, or story overlay.
- Every CTA reaches its intended destination.
- Images load without layout shift.
- The console has no site-generated errors.
- Motion does not block reading or ordering.
- Repeated interactions feel faster than one-time marketing reveals.

Use browser screenshots and slow-motion inspection for animation QA. When reviewing existing motion code, report changes in a `Before | After | Why` table.

## Deliver the implementation

Report:

- Changed files.
- Motion storyboard implemented.
- Framework or library choices and why.
- Responsive and reduced-motion behavior.
- Verification performed and any remaining external placeholders.

Do not claim ordering is complete when links still point to a decorative section.
