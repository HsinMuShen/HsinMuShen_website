#!/usr/bin/env node
/**
 * Compress JPG and PNG images in public/ for faster loading.
 * Run: npm run compress-images
 * Overwrites JPG/PNG in public/ with compressed versions (quality 82 for JPEG, 80% for PNG).
 */

import { readdir, rename, unlink } from "fs/promises";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, "..", "public");
const JPEG_QUALITY = 82;
const PNG_QUALITY = 80;

async function getImagePaths(dir, base = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      paths.push(...(await getImagePaths(full, rel)));
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") paths.push({ full, rel, ext });
    }
  }
  return paths;
}

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.error("Run: npm install --save-dev sharp");
    process.exit(1);
  }

  const images = await getImagePaths(PUBLIC_DIR);
  if (images.length === 0) {
    console.log("No JPG or PNG files found in public/. Add images there, then run this script.");
    return;
  }

  for (const { full, rel, ext } of images) {
    const tempPath = full + ".compress-tmp";
    try {
      const buf = await sharp(full);
      const isJpeg = ext === ".jpg" || ext === ".jpeg";
      const out = isJpeg
        ? buf.jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        : buf.png({ quality: PNG_QUALITY, compressionLevel: 9 });
      await out.toFile(tempPath);
      await rename(tempPath, full);
      console.log("Compressed:", rel);
    } catch (err) {
      try {
        await unlink(tempPath);
      } catch {
        /* ignore */
      }
      console.error("Error compressing", rel, err.message);
    }
  }
  console.log("Done.");
}

main();
