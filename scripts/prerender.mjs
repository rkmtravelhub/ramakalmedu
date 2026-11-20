// Injects the server-rendered pages into the built HTML files after `vite build`.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { pages } = await import(pathToFileURL(join(root, ".ssr/entry-server.js")).href);
const marker = '<div id="root"></div>';
for (const [file, render] of Object.entries(pages)) {
  const htmlPath = join(root, "dist", file);
  const html = readFileSync(htmlPath, "utf8");
  if (!html.includes(marker)) throw new Error(`root marker not found in dist/${file}`);
  writeFileSync(htmlPath, html.replace(marker, `<div id="root">${render()}</div>`));
  console.log(`prerendered dist/${file}`);
}
rmSync(join(root, ".ssr"), { recursive: true, force: true });
