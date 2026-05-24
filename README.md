# Md Enaitul Hoque — Portfolio (React + Tailwind + Framer Motion)

A modern, professional portfolio website built with React, Tailwind CSS, and Framer Motion.

---

## 🚀 Tech Stack

- **React 18** — UI library
- **Tailwind CSS v3** — Utility-first styling
- **Framer Motion** — Smooth animations
- **React Icons** — Icon library
- **Vite** — Fast build tool

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── images/           ← ⭐ PLACE ALL YOUR IMAGES HERE
│       ├── hero-bg.jpg        ← Your uploaded header background photo
│       ├── user.jpg           ← Your profile photo
│       ├── amazon.webp        ← Project screenshots
│       ├── BrandAssets_Logos_02-NSymbol.jpg
│       ├── simonsays.jpg
│       ├── mehfil.jpg
│       └── my-cv.pdf          ← Your CV
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SectionHeading.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## ⭐ Image Setup (IMPORTANT)

Place these files inside the `public/images/` folder:

| File | Description |
|------|-------------|
| `hero-bg.jpg` | The WhatsApp header background image you uploaded |
| `user.jpg` | Your profile photo |
| `amazon.webp` | Amazon clone screenshot |
| `BrandAssets_Logos_02-NSymbol.jpg` | Netflix project image |
| `simonsays.jpg` | Simon Says game screenshot |
| `mehfil.jpg` | Mehfil-e-Dard screenshot |
| `my-cv.pdf` | Your downloadable CV |

> **Tip:** Rename `WhatsApp_Image_2026-04-05_at_21_05_03.jpeg` to `hero-bg.jpg` and place it in `public/images/`.

---

## 🛠️ Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Add your images
Copy all your images to `public/images/` as listed above.

### 3. Start dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 4. Build for production
```bash
npm run build
```

### 5. Deploy
Upload the `dist/` folder to **Vercel**, **Netlify**, or any static hosting.

For Vercel (recommended):
```bash
npm install -g vercel
vercel
```

---

## ✨ Features

- 🎨 **Modern dark design** with gold accent color (#FFCC00)
- 📱 **Fully responsive** — mobile-first approach
- 🎬 **Framer Motion animations** — scroll reveals, hover effects, page load
- ⚡ **Fast** — Vite-powered with optimized builds
- 🧩 **Reusable components** — clean, scalable structure
- 📬 **Working contact form** — connected to Google Sheets
- 🖋 **Custom fonts** — Syne (display) + DM Sans (body) + JetBrains Mono

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Gold | `#FFCC00` |
| Background | `#080808` |
| Card | `#161616` |
| Display Font | Syne |
| Body Font | DM Sans |
| Mono Font | JetBrains Mono |
