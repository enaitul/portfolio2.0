# Portfolio Fixes — What Changed & Why

## ⚡ Quick Setup (Required)

Place your images in the correct location before running:

```
src/
  assets/
    images/
      background-ai.png   ← Hero background  (was "images/background-ai.png")
      user.jpg            ← About Me photo   (was "/images/user.jpg")
```

Portfolio project images (amazon.webp, simonsays.jpg, etc.) stay in:
```
public/
  images/
    amazon.webp
    BrandAssets_Logos_02-NSymbol.jpg
    simonsays.jpg
    mehfil.jpg
    my-cv.pdf
```

---

## Fix 1 — About Me Image Not Displaying (`About.jsx`)

**Root cause:** `src="/images/user.jpg"` uses an absolute public-folder path.
If the image was never placed in `/public/images/` — or you placed it in
`/src/assets/` — it 404s silently.

**Fix applied:**
```jsx
// Before
<img src="/images/user.jpg" ... />

// After
import userPhoto from '../assets/images/user.jpg'
<img src={userPhoto} ... />
```

**Why this works in dev AND production:** Vite tracks the import, copies the
asset to `dist/assets/`, and rewrites the URL automatically. A raw string path
would break if you deploy to a sub-path (e.g. `example.com/portfolio/`).

---

## Fix 2 — Header Background Image Not Showing (`Hero.jsx`)

**Root cause:** `backgroundImage: "url('/images/background-ai.png')"` is a CSS
string — Vite does **not** process it. The file must be in `/public/images/` or
the browser gets a 404.

**Fix applied:**
```jsx
// Before
style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}

// After
import heroBg from '../assets/images/background-ai.png'
style={{ backgroundImage: `url(${heroBg})` }}
```

The import turns the asset into a hashed, bundled URL that always resolves
correctly — even when deployed to a nested path.

---

## Fix 3 — Mobile Responsiveness

Changes made across all components:

| Component | Problem | Fix |
|-----------|---------|-----|
| `Hero.jsx` | `text-5xl` overflowed on 375px phones | `text-4xl` base → `sm:text-6xl` → `md:text-7xl` |
| `Hero.jsx` | Buttons side-by-side caused overflow | `flex-col` on xs, `sm:flex-row` from 640px |
| `Hero.jsx` | Top padding too small under fixed navbar | `pt-20` base, `md:pt-24` |
| `About.jsx` | Image too large on mobile | `max-w-xs sm:max-w-sm lg:max-w-md` |
| `About.jsx` | Tab row overflowed narrow screens | `w-full overflow-x-auto` + `flex-1` buttons |
| `About.jsx` | Content overlapped image floating badge | `mt-8 lg:mt-0` on content div |
| `Navbar.jsx` | Body still scrolled behind open menu | Added `document.body.style.overflow` lock |
| `Navbar.jsx` | Menu links too large on small phones | `text-3xl` base, `sm:text-4xl` |
| `Contact.jsx` | Email address caused horizontal scroll | Added `break-all` class |
| `Contact.jsx` | Social icons overflowed on 320px | `flex-wrap` on socials container |
| `Services.jsx` | Padding too large on mobile | `p-6 md:p-8` |
| `Portfolio.jsx` | Card image height too tall on xs | `h-48 sm:h-56` |

All section `py-28` values changed to `py-20 md:py-28` for tighter mobile spacing.
