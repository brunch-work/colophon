# Brunch Boilerplate

A minimal [Next.js](https://nextjs.org) (App Router) starter — the bare shell of a Brunch project with the brand-specific pages, components, and styles stripped out. Use it as the starting point for a new site.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **GSAP** & **Motion** — animation
- **next-view-transitions** — page transitions
- **Zustand** — state management
- **lottie-react** — Lottie animations
- **DatoCMS** — headless CMS via a small GraphQL fetch helper
- **Vercel Analytics**
- Plain CSS (no preprocessor / framework)

## Getting Started

Scaffold a new project from this boilerplate with [degit](https://github.com/Rich-Harris/degit) — it copies the files without any git history:

```bash
npx degit brunch-work/brunch-boilerplate my-new-app
cd my-new-app
```

Initialize a fresh git repo:

```bash
git init && git add -A && git commit -m "Initial commit"
```

Install dependencies (this repo uses [pnpm](https://pnpm.io)):

```bash
pnpm install
```

Create your local env file from the example and fill in the values:

```bash
cp .env.example .env.local
```

| Variable                  | Description                                  |
| ------------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_DATO_TOKEN`  | DatoCMS read-only API token                  |
| `NEXT_PUBLIC_DATO_URL`    | DatoCMS GraphQL endpoint (Content Delivery)  |

Run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `src/app/page.jsx` to start — it hot-reloads on save.

## Scripts

| Command       | Description                       |
| ------------- | --------------------------------- |
| `pnpm dev`    | Start the development server      |
| `pnpm build`  | Production build                  |
| `pnpm start`  | Serve the production build        |
| `pnpm lint`   | Run ESLint                        |

## Project Structure

```
src/
├── app/                 # App Router routes
│   ├── layout.jsx       # Root layout + metadata (blank-slate, fill in per project)
│   ├── page.jsx         # Home page
│   ├── icon.png         # Favicon (auto-detected by Next)
│   └── apple-icon.png   # Apple touch icon (auto-detected by Next)
├── gql/
│   └── queries.jsx      # GraphQL query strings
├── styles/
│   ├── global.css       # Imports the core stylesheets below
│   └── core/            # Shared foundation
│       ├── fonts.css        # @font-face declarations
│       ├── shell.css        # Base / reset / layout shell
│       ├── typography.css   # Type scale & text styles
│       ├── animations.css   # Keyframes & animation utilities
│       └── grid.css         # Grid system
└── utils/
    └── client.jsx       # DatoCMS GraphQL fetch helpers
```

The `@/*` path alias maps to `src/*` (see `jsconfig.json`), so imports look like `import { getPropData } from "@/utils/client"`.

### Fonts & static assets

Fonts (`public/fonts`), Lottie animations (`public/animations`), and images
(`public/images`) carry over from the source project — swap them for your own.
`src/styles/core/fonts.css` references the font files.

## Metadata

`src/app/layout.jsx` exports a fully-commented `metadata` object set up as a
blank slate. Fill in the constants at the top (`APP_NAME`, `APP_DESCRIPTION`,
`APP_BASE_URL`, `APP_OG_IMAGE`, …) and the Open Graph / Twitter tags populate
automatically.

## Fetching content (DatoCMS)

Write queries in `src/gql/queries.jsx`, then fetch them in a Server Component:

```jsx
import { GET_INFORMATION } from "@/gql/queries";
import { getPropData } from "@/utils/client";

export default async function Page() {
  const { information } = await getPropData(GET_INFORMATION);
  return <main>{information.studioDescription}</main>;
}
```

`client.jsx` exposes `getPropData` (server-side fetch), `fetchGraphQL` (the
underlying request), and `SWRfetch` (for client-side SWR usage). All throw on
GraphQL errors.

## Deploy

Deploy on [Vercel](https://vercel.com/new). Add the environment variables from
`.env.example` in the project settings. See the
[Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)
for other targets.
