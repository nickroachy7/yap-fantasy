# Yap Fantasy

A React Router project built with Vite and TypeScript.

## Tech Stack

- React 18
- React Router v6
- TypeScript
- Vite

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── pages/          # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── router/         # Router configuration
│   └── index.tsx
├── main.tsx        # App entry point
└── index.css       # Global styles
```

## Routes

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `*` - 404 Not Found
