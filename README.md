# 🚀 CosmoX — Deep Space Exploration Platform

A premium, cinematic space-exploration landing page and mission dashboard built with **React**, **Vite**, **React Three Fiber**, and **Framer Motion**. Designed to feel like the intersection of NASA, SpaceX, Tesla, and Apple — built for a Full Stack Web Development Internship submission.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-3D-000000?logo=three.js&logoColor=white)
![License](https://img.shields.io/badge/license-Educational-blue)

![CosmoX Banner](https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop)

### 🔗 [**Live Demo — cosmo-x-5ha1.vercel.app**](https://cosmo-x-5ha1.vercel.app/)

### 🎥 Video Walkthrough — *[https://github.com/Muhammad-Adeel11/CosmoX/blob/main/CosmoX%20Video%20Walkthrough.mp4]*

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Video Walkthrough](#-video-walkthrough)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Folder Structure](#-folder-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the Project](#️-running-the-project)
- [Build for Production](#-build-for-production)
- [Environment & Configuration](#-environment--configuration)
- [Sections Included](#-sections-included)
- [Design System](#-design-system)
- [Performance Notes](#-performance-notes)
- [Accessibility](#-accessibility)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Roadmap / Future Improvements](#-roadmap--future-improvements)
- [Video Walkthrough Script](#-video-walkthrough-script)
- [License](#-license)

---

## 🌌 Overview

**CosmoX** is a fully responsive, animated, component-driven landing page simulating a real-world space exploration company's mission dashboard. It combines:

- An interactive **3D solar system experience** (rotating Earth, procedurally built astronaut, animated starfield) powered by **React Three Fiber**
- A **complete custom design system** built entirely with CSS Modules — no UI frameworks
- Scroll-driven **micro-interactions and animations** via Framer Motion
- **16 fully built sections**, from a cinematic hero to a validated contact form
- A clean, scalable, production-style **component architecture**

This project was built to demonstrate production-level frontend engineering and UI/UX design skills for a Full Stack Web Development Internship.

---

## 🔗 Live Demo

The project is deployed and live on Vercel:

**[https://cosmo-x-5ha1.vercel.app/](https://cosmo-x-5ha1.vercel.app/)**

Open it on desktop first to see the full 3D hero experience, then resize the browser (or open on mobile) to see the responsive breakpoints in action.

---

## 🎥 Video Walkthrough

A short walkthrough demonstrating the site's design, animations, and responsive behavior across desktop, tablet, and mobile:

**[▶️ Watch the video — link to be added]**

*(This section will be updated with the final video link before submission. See the [demo script](#-video-walkthrough-script) at the bottom of this README for what the video covers.)*

---

## ✨ Features

- 🌍 Interactive 3D Earth with real-time rotation, cloud layer, and atmosphere glow (React Three Fiber + Drei)
- 👨‍🚀 Procedurally built floating astronaut (no external 3D model dependency — built from primitive geometries)
- ✨ Animated starfield background across hero and footer
- 📊 Animated statistic counters (countries, astronauts, satellites, missions)
- 🪐 Mouse-tracked 3D tilt effect on the Planet Gallery
- 🛰️ Zig-zag animated Mission Timeline (Launch → Orbit → Moon Base → Mars → Deep Space)
- 🧑‍🚀 Astronaut Team cards with floating animation and social links
- 💬 Testimonials carousel with directional slide transitions
- ❓ Accordion-style FAQ with smooth expand/collapse
- 📬 Fully validated Contact form (client-side validation, inline errors, success feedback)
- 🖱️ Buttery smooth scrolling via Lenis
- 🎬 Animated loading screen with progress bar
- ⬆️ Scroll-to-top button with fade/scale transition
- 📱 Fully responsive — mobile-first, tested across breakpoints (mobile, tablet, laptop, desktop)
- ♿ Accessible — semantic HTML, keyboard navigation, visible focus states, proper alt text, ARIA labels
- 🎨 Custom design system — consistent spacing scale, typography scale, and color tokens throughout

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | CSS Modules (no Tailwind / Bootstrap / MUI / Styled Components) |
| Animation | Framer Motion |
| 3D Graphics | React Three Fiber, Three.js, Drei |
| Smooth Scroll | Lenis |
| Icons | React Icons |
| Language | JavaScript (no TypeScript) |
| Package Manager | npm |

---

## 📁 Folder Structure

```
cosmox/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Images, models, icons (local assets)
│   ├── components/
│   │   ├── common/           # Reusable UI atoms
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── SectionHeading/
│   │   │   ├── GlowText/
│   │   │   └── Loader/
│   │   ├── Layout/            # Structural chrome (Navbar, Footer, ScrollToTop)
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   └── ScrollToTop/
│   │   └── three/               # Isolated Three.js / R3F scenes
│   │       ├── Earth/
│   │       ├── Astronaut/
│   │       └── StarField/
│   ├── sections/               # One folder per landing page section
│   │   ├── Hero/
│   │   ├── TrustedPartners/
│   │   ├── MissionStats/
│   │   ├── WhyChooseUs/
│   │   ├── FeaturedMissions/
│   │   ├── MissionTimeline/
│   │   ├── PlanetGallery/
│   │   ├── AstronautTeam/
│   │   ├── SpaceTechnology/
│   │   ├── Testimonials/
│   │   ├── FAQ/
│   │   └── Contact/
│   ├── hooks/                  # Custom reusable logic
│   │   ├── useLenis.js
│   │   ├── useCountUp.js
│   │   ├── useTilt.js
│   │   └── useMediaQuery.js
│   ├── context/
│   │   └── LoadingContext.jsx  # Global loading-screen state
│   ├── constants/               # Static data, separated from UI
│   │   ├── navLinks.js
│   │   ├── heroStats.js
│   │   ├── partners.js
│   │   ├── missionStats.js
│   │   ├── features.js
│   │   ├── missions.js
│   │   ├── timeline.js
│   │   ├── planets.js
│   │   ├── team.js
│   │   ├── technology.js
│   │   ├── testimonials.js
│   │   └── faqs.js
│   ├── styles/                  # Design tokens + global styles
│   │   ├── variables.css
│   │   ├── reset.css
│   │   └── global.css
│   ├── utils/
│   │   └── animationVariants.js # Shared Framer Motion variants
│   ├── App.jsx
│   ├── App.module.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

**Why this structure:**

| Folder | Purpose |
|---|---|
| `components/common` | Small, generic UI atoms reused across many sections |
| `components/Layout` | Structural chrome that wraps every page |
| `components/three` | Isolated 3D scenes, kept separate from regular UI components |
| `sections/` | One self-contained folder per landing-page section (`.jsx` + `.module.css`) |
| `hooks/` | Custom logic (smooth scroll, count-up, tilt, responsive breakpoints) |
| `context/` | Global state shared across components (loading state) |
| `constants/` | Static content separated from UI — update content without touching JSX |
| `styles/` | Design tokens (CSS variables), reset, and base styles |
| `utils/` | Pure helper functions (shared animation variants) |

---

## ✅ Prerequisites

Before installing, make sure you have:

- **Node.js** v18 or higher ([download here](https://nodejs.org/))
- **npm** v9 or higher (comes bundled with Node.js)

Check your versions:
```bash
node -v
npm -v
```

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/cosmox.git

# Move into the project folder
cd cosmox

# Install all dependencies
npm install
```

**Core dependencies installed:**
```bash
npm install framer-motion @react-three/fiber @react-three/drei three react-icons @studio-freight/lenis
```

| Package | Purpose |
|---|---|
| `framer-motion` | Scroll-triggered reveals, hover/lift interactions, page transitions |
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | Helper components for R3F (Stars, Float, useTexture, etc.) |
| `three` | Core 3D engine |
| `react-icons` | Icon library used throughout the UI |
| `@studio-freight/lenis` | Smooth scrolling engine |

---

## ▶️ Running the Project

Start the local development server:

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

The app supports hot module reloading — changes to any file will reflect instantly without a full page refresh.

---

## 🏗️ Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The production-ready files will be output to the `/dist` folder.

---

## ⚙️ Environment & Configuration

This project does **not** require any environment variables or API keys — all data is stored locally in `src/constants/`. To customize content:

- Edit mission data → `src/constants/missions.js`
- Edit team members → `src/constants/team.js`
- Edit navigation links → `src/constants/navLinks.js`
- Edit design tokens (colors, spacing, fonts) → `src/styles/variables.css`

---

## 🧩 Sections Included

1. Navigation (responsive navbar with mobile menu)
2. Hero (3D Earth + astronaut + animated headline + stats)
3. Trusted Partners (infinite marquee)
4. Mission Statistics (animated counters)
5. Why Choose Us (6-feature grid)
6. Featured Missions (6 premium cards with status badges)
7. Mission Timeline (zig-zag animated roadmap)
8. Planet Gallery (3D tilt cards)
9. Astronaut Team (floating glassmorphic cards)
10. Space Technology (alternating image/text rows)
11. Testimonials (animated carousel)
12. FAQ (accordion)
13. Contact (validated form)
14. Footer (newsletter + social links)
15. Scroll To Top button
16. Loading Screen (animated progress bar)

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#050816` |
| Secondary Background | `#0B1023` |
| Electric Blue | `#3B82F6` |
| Purple | `#8B5CF6` |
| Cyan | `#22D3EE` |
| White | `#F8FAFC` |
| Font (Primary) | Sora |
| Font (Mono) | Space Mono |
| Border Radius Scale | 8px / 16px / 24px / full |
| Spacing Scale | 8px base (0.5rem → 9rem) |

Design principles used throughout: glassmorphism, soft glow shadows, gradient accents, large confident typography, and consistent 8px-based spacing.

---

## ⚡ Performance Notes

- All 3D texture-loaded meshes are wrapped in `Suspense` boundaries to prevent render blocking
- Starfield particle count is capped at 4,000 for smooth frame rates
- The astronaut model is built from procedural geometry (spheres/capsules) rather than an imported GLTF file — significantly lighter than a rigged 3D model
- Images use `loading="lazy"` where appropriate
- Consider using the `useMediaQuery` hook to conditionally reduce 3D complexity on mobile devices for an extra performance pass

---

## ♿ Accessibility

- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<footer>`, etc.)
- Full keyboard navigation support
- Visible focus states (`:focus-visible`) on all interactive elements
- `aria-label`, `aria-expanded`, and `aria-invalid` attributes used where relevant
- Sufficient color contrast against the dark background
- Descriptive `alt` text on all images

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Build settings for any static host:**
- Build command: `npm run build`
- Publish directory: `dist`

---

## 🐛 Troubleshooting

| Issue | Fix |
|---|---|
| Blank white page, no console errors | Check browser DevTools console (F12) for a runtime error — usually a missing export or broken import |
| `Failed to resolve import` | Confirm the file exists at the exact path/casing used in the import statement |
| `capsuleGeometry` errors | Update Three.js: `npm install three@latest @react-three/fiber@latest @react-three/drei@latest` |
| Broken images | Unsplash URLs may occasionally rate-limit — swap in your own image URLs in `src/constants/` |
| Folder casing issues (Windows) | Windows is case-insensitive, but deployment hosts (Linux) are not — keep folder names and import paths consistently cased |

---

## 🔭 Roadmap / Future Improvements

- Replace procedural astronaut with a full rigged GLTF model
- Add a real backend for the contact form and newsletter signup
- Add dark/light theme toggle
- Add real-time mission tracking data via a live API
- Add page transition animations between routes (if expanded into a multi-page app)

---

## 🎬 Video Walkthrough Script

Reference script used for the [video walkthrough](#-video-walkthrough) linked above — a 2-minute demonstration of the site's design and responsive behavior.

**[0:00–0:15] — Intro**
"Hi, I'm [your name], and this is CosmoX — a space exploration landing page I built for my Full Stack Internship using React, Vite, Three.js, and Framer Motion. Let me walk you through the design and show how it responds across devices."

**[0:15–0:35] — Desktop Hero**
"Here's the hero section on desktop — you can see the animated 3D Earth built with React Three Fiber, rotating in real time alongside a procedurally modeled astronaut. The headline animates in on load, and scrolling reveals the animated statistics below."

**[0:35–0:55] — Scroll Through Sections**
"As I scroll, notice the smooth-scroll behavior powered by Lenis, plus scroll-triggered animations on every section — mission cards fade and lift in, the planet gallery responds to mouse movement with a 3D tilt effect, and the timeline animates left-to-right on desktop."

**[0:55–1:15] — Resize to Tablet**
"Now let's resize down to tablet width. Notice the grid layouts adapt — the four-column stats become two columns, mission cards restack, and navigation remains fully usable."

**[1:15–1:40] — Resize to Mobile**
"On mobile, the navbar collapses into a hamburger menu, the timeline switches from a zig-zag layout to a single vertical line, and all touch targets remain accessible. The 3D scene stays performant thanks to a capped particle count and lightweight procedural geometry instead of a heavy imported model."

**[1:40–1:55] — Contact Form**
"Finally, here's the contact form with live validation — submitting an empty field shows inline error messages, and a valid submission shows a success confirmation."

**[1:55–2:00] — Close**
"That's CosmoX — a fully responsive, animated, production-structured React project, live at cosmo-x-5ha1.vercel.app. Thanks for watching!"

---

## 📄 License

This project was built for educational purposes as part of a Full Stack Web Development Internship.

---

Built with ❤️ and a lot of ☕ by **[Your Name]**
