## Hsin Mu Shen Website

An expressive, image‑first personal website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.  
It brings together photography, sketching, web development work, and travel video edits in one calm, minimal layout.

### Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Customize content

- **Global intro & hero:** `src/data/site.ts` → `siteConfig`
- **About copy & portrait:** `aboutStory` in `src/data/site.ts` and `public/about/`
- **Web development (GIF carousel):** `webProjects` in `src/data/site.ts` and `public/website/`
- **Sketching masonry:** `sketchingItems` in `src/data/site.ts` and `public/sketches/`
- **Photography gallery:** `photographyItems` in `src/data/site.ts` and `public/photography/`
- **Travel video:** `TravelSection` uses a single MP4 at `public/travel/sri_lanka.mp4`
- **Navigation & social links:** `navigationItems`, `socialLinks` in `src/data/site.ts`

You can adjust colors, shadows, and motion in `tailwind.config.ts`.

### Where to put media

All media lives in the `public/` folder and is referenced from the site root:

| Folder              | Used for              | Example path in code                      |
|---------------------|-----------------------|-------------------------------------------|
| `public/about/`     | About portrait        | `"/about/about-2.jpeg"`                   |
| `public/website/`   | Web project previews  | `"/website/01.gif"`                       |
| `public/sketches/`  | Sketch images         | `"/sketches/hvar-island.jpg"`             |
| `public/photography/` | Photography images  | `"/photography/photography-01.jpeg"`      |
| `public/travel/`    | Travel video          | `"/travel/sri_lanka.mp4"`                 |

Use **JPG** or **PNG** for photos/sketches. The site uses Next.js `<Image>` for still images and a native `<video>` element for the travel edit.

### Compress images for faster loading

To shrink JPG/PNG file size before deployment:

1. Install dependencies (includes `sharp`):

   ```bash
   npm install
   ```

2. Add your JPG/PNG files under `public/` (or subfolders like `public/photography/`, `public/sketches/`).

3. Run the compressor (overwrites files with compressed versions):

   ```bash
   npm run compress-images
   ```

This compresses all JPG and PNG files in `public/` in place (JPEG quality ~82, optimized PNG). SVG and GIF files are left unchanged.
