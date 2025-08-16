# Reiki Website

A modern, responsive website for a Reiki practice, built with Next.js and TypeScript. This project features a clean design, multiple pages, and reusable UI components.

## Features
- Built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- Modular folder structure for scalability
- Reusable UI components in `components/ui/`
- Theming support with light/dark mode
- Responsive design for all devices
- Pages for About, Blog, Contact, Courses, Gallery, Services, and Testimonials

## Project Structure
```
components.json
next.config.mjs
package.json
pnpm-lock.yaml
postcss.config.mjs
tsconfig.json
app/
  globals.css
  layout.tsx
  page.tsx
  about/
    page.tsx
  blog/
    page.tsx
  contact/
    page.tsx
  courses/
    page.tsx
  gallery/
    page.tsx
  services/
    page.tsx
  testimonials/
    page.tsx
components/
  footer.tsx
  navigation.tsx
  theme-provider.tsx
  theme-toggle.tsx
  ui/
    ... (UI components)
hooks/
  use-mobile.ts
  use-toast.ts
lib/
  utils.ts
public/
  placeholder-logo.png
  ... (assets)
styles/
  globals.css
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn)

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd reiki-website
   ```
2. Install dependencies:
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### Running the Development Server
```sh
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization
- Update content in the `app/` pages as needed.
- Add or modify UI components in `components/ui/`.
- Adjust global styles in `styles/globals.css`.

## License
This project is licensed under the MIT License.
