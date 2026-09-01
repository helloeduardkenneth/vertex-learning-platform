# vertex-learning-platform

A unified design language and modern learning platform for Vertex, built with Next.js, TypeScript, Tailwind CSS, and custom design tokens.

## Features

- **Vertex Design System**: Complete design language including custom color palettes, typography (`Playfair Display` & `Inter`), spacing scale, radius, shadows, icons, buttons, inputs, tags, status indicators, progress bars, cards, and navigation.
- **Component Library**: Modular, accessible React components in `components/vertex/`.
- **Interactive Showcase**: Live interactive design system preview and playground at the root route `/`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & Vanilla CSS Variables
- **Fonts**: Playfair Display & Inter (Google Fonts via `next/font`)
