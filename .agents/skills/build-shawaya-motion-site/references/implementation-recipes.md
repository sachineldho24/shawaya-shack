# Implementation Recipes

## Choose the lightest tool

1. Use CSS for deterministic entrances, hover, press, and mask reveals.
2. Use `IntersectionObserver` for one-time viewport triggers.
3. Use the Web Animations API for a programmatic sequence that still maps to CSS properties.
4. Use View Transitions as progressive enhancement for route continuity when the browser and router support it.
5. Use Motion/Framer only when already installed or when interruptible gestures/layout animation justify the dependency.

## Dependency-free setup

Copy the bundled `assets/shawaya-motion-tokens.css` into the application styles and load `assets/reveal-observer.js` from the client entry. The controller adds `.motion-ready`; without JavaScript, content stays visible.

Markup:

```html
<p data-motion="reveal">Traditional masala · Premium fire</p>
<h1 data-motion="reveal">Slow heat. Deep flavor.</h1>
<figure data-motion="mask">
  <img src="/assets/hero.webp" width="1672" height="941" alt="Whole masala shawaya beside garlic sauce">
</figure>

<div data-motion-group>
  <article data-motion="reveal">...</article>
  <article data-motion="reveal">...</article>
  <article data-motion="reveal">...</article>
</div>
```

Load the observer once:

```js
import "./styles/shawaya-motion-tokens.css";
import "./motion/reveal-observer.js";
```

## Hero orchestration

Use a parent class or data attribute to coordinate elements without blocking input:

```css
.motion-ready .hero__eyebrow { transition-delay: 40ms; }
.motion-ready .hero__line:nth-child(1) { transition-delay: 80ms; }
.motion-ready .hero__line:nth-child(2) { transition-delay: 130ms; }
.motion-ready .hero__media { transition-delay: 170ms; }
.motion-ready .hero__badge { transition-delay: 230ms; }
```

Keep the total visible entrance under approximately `850ms`. Render the order action outside the delayed sequence or make it clickable immediately.

## React integration without an animation library

Run the observer in a client effect and clean it up if the page mounts repeatedly:

```tsx
useEffect(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = [...document.querySelectorAll<HTMLElement>("[data-motion]")];

  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach((node) => (node.dataset.inview = "true"));
    return;
  }

  document.documentElement.classList.add("motion-ready");
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      (entry.target as HTMLElement).dataset.inview = "true";
      observer.unobserve(entry.target);
    }),
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
  );

  nodes.forEach((node) => observer.observe(node));
  return () => observer.disconnect();
}, []);
```

Prefer the bundled controller for a simple single-page site; use the component-scoped version when route lifecycles require cleanup.

## Motion/Framer integration

Use it only when present or justified. Prefer a full `transform` string over shorthand `x`, `y`, or `scale` when the page is under load:

```tsx
const reduced = useReducedMotion();

<motion.figure
  initial={reduced ? false : { opacity: 0, transform: "translate3d(0, 24px, 0)" }}
  whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.56, ease: [0.23, 1, 0.32, 1] }}
/>
```

Use a spring only for a drag or interruptible continuity transition. Default to `{ type: "spring", duration: 0.5, bounce: 0.15 }` and remove it in reduced-motion mode.

## Product hover and press

```css
.menu-card__media {
  overflow: clip;
  border-radius: var(--radius-image, 14px);
}

.menu-card__media img {
  transform: scale(1);
  transition: transform 480ms var(--motion-ease-in-out);
}

@media (hover: hover) and (pointer: fine) {
  .menu-card:hover .menu-card__media img { transform: scale(1.025); }
}

.pressable {
  transition: transform 140ms var(--motion-ease-out),
              background-color 180ms ease,
              color 180ms ease;
}

.pressable:active { transform: scale(0.97); }
```

## View-transition enhancement

Use stable names only on the active product:

```css
.product-card[aria-current="true"] .product-card__image {
  view-transition-name: active-food-image;
}

::view-transition-old(active-food-image),
::view-transition-new(active-food-image) {
  animation-duration: 420ms;
  animation-timing-function: var(--motion-ease-in-out);
}
```

Do not assign the same `view-transition-name` to several elements simultaneously.

## Reduced motion

Reduced motion is not a second design. Preserve hierarchy and state while removing travel, masks, scale, and long delays:

```css
@media (prefers-reduced-motion: reduce) {
  [data-motion], [data-motion] > * {
    opacity: 1 !important;
    transform: none !important;
    clip-path: none !important;
    animation: none !important;
    transition-duration: 1ms !important;
    transition-delay: 0ms !important;
  }
}
```

Do not smooth-scroll anchor navigation in reduced-motion mode.

## QA

- Slow animations to `4×` while tuning orchestration.
- Step through the hero frame by frame and check transform origins.
- Confirm image/text transitions start and finish together.
- Throttle the CPU and verify predetermined CSS motion stays smooth.
- Check repeat navigation; frequent actions should feel nearly instant.
- Test real touch input before shipping swipe or drag behavior.
