import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const [src, outDir, splitY] = process.argv.slice(2);
if (!src || !outDir) {
  console.error("Usage: node scripts/split-image.mjs <src> <outDir> [splitY]");
  process.exit(1);
}

await fs.mkdir(outDir, { recursive: true });

const base = sharp(src);
const meta = await base.metadata();
const width = meta.width;
const height = meta.height;
if (!width || !height) throw new Error("Cannot read image metadata");

const y = splitY ? Number(splitY) : Math.floor(height / 2);

const topH = Math.max(1, Math.min(y, height));
const botH = Math.max(1, height - topH);

await sharp(src)
  .extract({ left: 0, top: 0, width, height: topH })
  .toFile(path.join(outDir, "top.png"));
await sharp(src)
  .extract({ left: 0, top: topH, width, height: botH })
  .toFile(path.join(outDir, "bottom.png"));

console.log(JSON.stringify({ src, width, height, splitY: topH, outDir }, null, 2));
