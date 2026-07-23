import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tanstackStart(), viteReact()],
  server: {
    host: "127.0.0.1",
    port: 4173,
  },
});
