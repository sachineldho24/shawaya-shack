const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionNodes = [...document.querySelectorAll("[data-motion]")];

function revealAll() {
  motionNodes.forEach((node) => {
    node.dataset.inview = "true";
  });
}

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealAll();
} else {
  document.documentElement.classList.add("motion-ready");
  const observedNodes = new Map();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (observedNodes.get(entry.target) || [entry.target]).forEach((node) => {
          node.dataset.inview = "true";
        });
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
  );

  motionNodes.forEach((node) => {
    const target = node.dataset.motion === "mask" ? node.closest("section") || node : node;
    const grouped = observedNodes.get(target) || [];
    grouped.push(node);
    observedNodes.set(target, grouped);
  });
  observedNodes.forEach((_, target) => observer.observe(target));
  requestAnimationFrame(() => document.documentElement.classList.add("motion-loaded"));
}

const menuDialog = document.querySelector("[data-menu-dialog]");
const orderDialog = document.querySelector("[data-order-dialog]");
const orderList = document.querySelector("[data-order-list]");
const orderEmpty = document.querySelector("[data-order-empty]");
const orderFooter = document.querySelector("[data-order-footer]");
const orderStatus = document.querySelector("[data-order-status]");
const orderCounts = [...document.querySelectorAll("[data-order-count]")];
const toast = document.querySelector("[data-toast]");
const storageKey = "shawaya-shack-order-request";
const availableItems = new Set(
  [...document.querySelectorAll("[data-add-item]")]
    .map((button) => button.dataset.addItem)
    .filter(Boolean),
);
let toastTimer;

function openDialog(dialog, triggerEvent) {
  if (!dialog) return;
  dialog.dataset.instant = triggerEvent?.detail === 0 ? "true" : "false";
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function closeDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

document.querySelector("[data-open-menu]")?.addEventListener("click", (event) => openDialog(menuDialog, event));
document.querySelector("[data-close-menu]")?.addEventListener("click", () => closeDialog(menuDialog));
document.querySelectorAll(".nav-sheet a").forEach((link) => link.addEventListener("click", () => closeDialog(menuDialog)));

document.querySelectorAll("[data-open-order]").forEach((button) => {
  button.addEventListener("click", (event) => openDialog(orderDialog, event));
});
document.querySelector("[data-close-order]")?.addEventListener("click", () => closeDialog(orderDialog));

function readOrder() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return Object.fromEntries(
      Object.entries(saved).filter(
        ([name, quantity]) => availableItems.has(name) && Number.isInteger(quantity) && quantity > 0,
      ),
    );
  } catch {
    return {};
  }
}

let order = readOrder();

function saveOrder() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(order));
  } catch {
    // The order remains usable for this visit when storage is unavailable.
  }
}

function totalItems() {
  return Object.values(order).reduce((sum, quantity) => sum + quantity, 0);
}

function pulseOrderCount() {
  if (reducedMotion.matches) return;
  orderCounts.forEach((badge) => {
    badge.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.16)", offset: 0.45 },
        { transform: "scale(1)" },
      ],
      { duration: 220, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
    );
  });
}

function setStatus(message = "") {
  if (orderStatus) orderStatus.textContent = message;
}

function showToast(message) {
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.dataset.visible = "true";
  toastTimer = window.setTimeout(() => {
    toast.dataset.visible = "false";
  }, 2200);
}

function changeQuantity(name, delta) {
  const nextQuantity = (order[name] || 0) + delta;
  if (nextQuantity <= 0) delete order[name];
  else order[name] = nextQuantity;
  saveOrder();
  renderOrder();
  pulseOrderCount();
}

function makeQuantityButton(label, symbol, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pressable";
  button.setAttribute("aria-label", label);
  button.textContent = symbol;
  button.addEventListener("click", onClick);
  return button;
}

function renderOrder() {
  const entries = Object.entries(order);
  const count = totalItems();

  orderCounts.forEach((badge) => {
    badge.textContent = String(count);
    badge.setAttribute("aria-label", `${count} ${count === 1 ? "item" : "items"}`);
  });

  if (!orderList || !orderEmpty || !orderFooter) return;
  orderList.replaceChildren();
  orderEmpty.hidden = entries.length > 0;
  orderFooter.hidden = entries.length === 0;

  entries.forEach(([name, quantity]) => {
    const item = document.createElement("li");
    item.className = "order-item";

    const itemCopy = document.createElement("div");
    const heading = document.createElement("h3");
    heading.textContent = name;
    const note = document.createElement("p");
    note.textContent = quantity === 1 ? "1 plate selected" : `${quantity} plates selected`;
    itemCopy.append(heading, note);

    const control = document.createElement("div");
    control.className = "quantity-control";
    const decrease = makeQuantityButton(`Remove one ${name}`, "−", () => changeQuantity(name, -1));
    const output = document.createElement("output");
    output.setAttribute("aria-label", `${quantity} ${name}`);
    output.textContent = String(quantity);
    const increase = makeQuantityButton(`Add one ${name}`, "+", () => changeQuantity(name, 1));
    control.append(decrease, output, increase);

    item.append(itemCopy, control);
    orderList.append(item);
  });

  setStatus();
}

document.querySelectorAll("[data-add-item]").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.addItem;
    if (!name) return;
    changeQuantity(name, 1);
    showToast(`${name} added. ${totalItems()} ${totalItems() === 1 ? "item" : "items"} in your request.`);
  });
});

document.querySelector("[data-browse-menu]")?.addEventListener("click", () => {
  closeDialog(orderDialog);
  document.querySelector("#menu")?.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" });
});

function buildOrderText() {
  const lines = Object.entries(order).map(([name, quantity]) => `${quantity} × ${name}`);
  return [
    "Shawaya Shack order request",
    "",
    ...lines,
    "",
    "Please confirm availability, portion details, and total.",
  ].join("\n");
}

async function copyOrder() {
  const text = buildOrderText();
  try {
    await navigator.clipboard.writeText(text);
    setStatus("Order request copied. Paste it into your preferred message app.");
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.append(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    setStatus(copied ? "Order request copied. Paste it into your preferred message app." : "Copy is unavailable in this browser. Try Share order instead.");
  }
}

document.querySelector("[data-copy-order]")?.addEventListener("click", copyOrder);

document.querySelector("[data-share-order]")?.addEventListener("click", async () => {
  const text = buildOrderText();
  if (!navigator.share) {
    await copyOrder();
    return;
  }

  try {
    await navigator.share({ title: "Shawaya Shack order request", text });
    setStatus("Order request shared.");
  } catch (error) {
    if (error?.name !== "AbortError") setStatus("Sharing did not open. Use Copy request instead.");
  }
});

document.querySelector("[data-year]").textContent = String(new Date().getFullYear());
renderOrder();
