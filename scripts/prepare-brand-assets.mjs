import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const file = (path) => fileURLToPath(new URL(path, root));

// Preserve the selected source images; trim only the derived web assets.
await sharp(file("public/images/brand/navbar-logo.png"))
  .trim({ threshold: 12 })
  .resize({ width: 1000, withoutEnlargement: true })
  .png()
  .toFile(file("public/images/brand/navbar-logo-web.png"));

const master = await sharp(file("public/images/brand/favicon.png"))
  .trim({ threshold: 12 })
  .png()
  .toBuffer();

const icon = (size) => sharp(master)
  .resize(size, size, { fit: "contain", background: "#163633" })
  .png()
  .toBuffer();

await writeFile(file("app/icon.png"), await icon(192));
await writeFile(file("app/apple-icon.png"), await icon(180));

// ICO supports PNG payloads; include native tab sizes in one container.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(icon));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(image.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(file("app/favicon.ico"), Buffer.concat([directory, ...images]));

console.log("Prepared navbar image, favicon (16/32/48px), 192px icon and 180px Apple icon.");
