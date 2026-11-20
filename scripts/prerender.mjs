// Injects the server-rendered page into dist/index.html after `vite build`.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { render } = await import(pathToFileURL(join(root, ".ssr/entry-server.js")).href);
const htmlPath = join(root, "dist/index.html");
const html = readFileSync(htmlPath, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error("root marker not found in dist/index.html");
writeFileSync(htmlPath, html.replace(marker, `<div id="root">${render()}</div>`));
rmSync(join(root, ".ssr"), { recursive: true, force: true });
console.log("prerendered dist/index.html");
