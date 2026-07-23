import type { ReactNode } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Shawaya Shack — Slow heat. Deep flavor.",
      },
      {
        name: "description",
        content:
          "Shawaya Shack serves fire-grilled shawaya with traditional masala, generous portions, rolls, and burgers.",
      },
      { property: "og:title", content: "Shawaya Shack" },
      {
        property: "og:description",
        content: "Traditional masala, slow fire, and generous plates made to share.",
      },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#1a0f0a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => (
    <main className="not-found">
      <p>That page is not on the menu.</p>
      <a href="/">Return to Shawaya Shack</a>
    </main>
  ),
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
