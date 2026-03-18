# Where to put images

Put your image files in these folders. Then update the paths in `src/data/site.ts`.

| Folder | Section | Naming | Path in code |
|--------|---------|--------|--------------|
| **about/** | About | `about-portrait.jpeg` (main), `about-2.jpeg`, … | `aboutStory.mainImage` → `"/about/about-portrait.jpeg"` |
| **website/** | Website (carousel) | `project-1.jpg`, `project-2.jpg`, … | `webProjects[].image` → `"/website/project-1.jpg"` |
| **sketches/** | Sketching | English kebab-case, e.g. `taipei-window-facade.jpg` | `sketchingItems[].image` → `"/sketches/…"` |
| **photography/** | Photography | `photography-01.jpeg`, `photography-02.jpeg`, … | `photographyItems[].image` → `"/photography/photography-01.jpeg"` |

- Use **JPG** or **PNG**. Run `npm run compress-images` after adding images to shrink file size.
- **Header icon:** Put a logo image in `public/` (e.g. `public/logo.png`) and set `siteConfig.logo` in `src/data/site.ts` to `"/logo.png"`. Leave it empty to keep the "HM" initials.

**What is .gitkeep?** Git does not track empty folders—only files. A `.gitkeep` file is an empty placeholder so the folder exists in the repo. You can ignore or delete `.gitkeep` once the folder has real images.
