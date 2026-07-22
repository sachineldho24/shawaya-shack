const motionQuery = "[data-motion]";
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionNodes = [...document.querySelectorAll(motionQuery)];

function revealAll() {
  motionNodes.forEach((node) => {
    node.dataset.inview = "true";
  });
}

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealAll();
} else {
  document.documentElement.classList.add("motion-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.dataset.inview = "true";
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  motionNodes.forEach((node) => observer.observe(node));
}
