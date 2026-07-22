import { copyFile, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "dist");
const publicFiles = ["index.html", "styles.css", "app.js"];
const imageFiles = [
  "shawaya-shack-logo.png",
  "hero-shawaya-realistic.webp",
  "masala-quarter.jpg",
  "shack-platter.jpg",
  "fire-dust-fries.jpg",
  "spice-market.jpg",
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

await Promise.all(
  publicFiles.map((file) => copyFile(resolve(root, file), resolve(output, file))),
);
await mkdir(resolve(output, "assets", "images"), { recursive: true });
await Promise.all(
  imageFiles.map((file) =>
    copyFile(resolve(root, "assets", "images", file), resolve(output, "assets", "images", file)),
  ),
);

console.log(`Built static site in ${output}`);
