# Multimedia University of Kenya — Website Prototype

A modern website prototype for Multimedia University of Kenya (MMU), built to explore a cleaner information architecture, responsive interface, and reusable component system for a potential university website modernization project.

## Stack

* **SvelteKit**
* **TypeScript**
* **Tailwind CSS**
* **shadcn-svelte**
* **Lucide**
* **IBM Plex Sans**

## Features

* Responsive university website layout
* Reusable shared components
* Programme, news, and event listings
* Dynamic detail pages using route parameters
* Breadcrumb navigation
* Search interface
* Responsive navigation with mobile sheet
* Admissions and university information sections
* Data-driven content architecture

## Project Structure

```text
src/
├── lib/
│   ├── components/
│   │   ├── shared/
│   │   └── ui/
│   ├── data/
│   └── types/
│
└── routes/
    ├── academics/
    ├── admissions/
    ├── campus-life/
    ├── contact/
    ├── events/
    ├── news/
    ├── research/
    ├── university/
    └── ...
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content

The current implementation contains prototype content for demonstrating the site's structure and user experience. Content, contact information, statistics, programme information, and other institutional details should be verified against official MMU sources before production use.

## Status

**Prototype / Concept**

This project is intended to demonstrate a possible direction for a modern MMU web experience, including its information architecture, visual system, reusable components, and content-driven page structure.
