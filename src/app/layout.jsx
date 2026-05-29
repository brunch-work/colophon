import "@/styles/global.css";

import { Analytics } from "@vercel/analytics/next";

// ─── Site-wide metadata constants ───────────────────────────────────────────
// Fill these in per project. They feed the `metadata` export below, which Next
// uses to generate <title>, <meta>, Open Graph, and Twitter tags.

const APP_NAME = ""; // Application/brand name, e.g. "Studio Brunch"
const APP_DEFAULT_TITLE = ""; // Title shown when a page sets none
const APP_TITLE_TEMPLATE = "%s"; // Per-page title pattern, e.g. "%s | Studio Brunch"
const APP_DESCRIPTION = ""; // Default meta description (~150–160 chars)

// Absolute base URL — required for resolving relative OG/Twitter image paths.
// Swap the production URL for the live domain.
const APP_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://example.com";

// Default social-share image. Use an absolute path under /public, e.g.
// "/images/og.png" (recommended 1200×630). Leave empty to omit.
const APP_OG_IMAGE = "";

export const metadata = {
  metadataBase: new URL(APP_BASE_URL),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  // Search keywords — optional, low SEO weight. e.g. ["design", "studio"]
  keywords: [],
  // Content authors. e.g. [{ name: "Jane Doe", url: "https://jane.example" }]
  authors: [],
  creator: "", // Individual/agency that created the site
  publisher: "", // Entity that publishes it (often same as creator)
  // Tells crawlers how to index. Flip to false to hide the site.
  robots: {
    index: true,
    follow: true,
  },
  // Favicon / app icons. Next also auto-detects icon.png & apple-icon.png in
  // /app, so you can usually leave this commented out.
  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-icon.png",
  // },
  // Path to a PWA web app manifest, if you ship one.
  // manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  // Canonical URL & language alternates for SEO.
  alternates: {
    canonical: "/",
    // languages: { "en-US": "/en", "fr-CA": "/fr" },
  },
  // Open Graph — controls link previews on most platforms.
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: APP_BASE_URL,
    images: APP_OG_IMAGE
      ? [{ url: APP_OG_IMAGE, width: 1200, height: 630, alt: APP_DEFAULT_TITLE }]
      : [],
    locale: "en_US",
  },
  // Twitter/X card metadata.
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: APP_OG_IMAGE ? [APP_OG_IMAGE] : [],
    // creator: "@handle",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
