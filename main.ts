// gta6-meme-x-01 entry — hand-in script.
//
// The joke itself lives on X: the post this entry points to carries the
// meme picture, and the house reads the post directly from X to judge it.
// This script has one job only: take the POST.json that sits next to it in
// the bot directory, make sure it is a real JSON object carrying a `url`
// string, and hand an exact copy of it over to the output directory. It
// does not fetch anything, does not talk to any API, and does not touch
// the meme image — that work is already done, on X.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function die(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, "POST.json");

let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch {
  die(`cannot read POST.json at ${sourcePath} — the file is missing or unreadable.`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString("utf8"));
} catch {
  die(`POST.json at ${sourcePath} is not valid JSON.`);
}

if (
  typeof parsed !== "object" ||
  parsed === null ||
  Array.isArray(parsed) ||
  typeof (parsed as { url?: unknown }).url !== "string"
) {
  die(`POST.json at ${sourcePath} must be a JSON object with a "url" string.`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(sourcePath, join(OUTPUT_DIR, "POST.json"));
console.log(`main.ts: POST.json handed in to ${OUTPUT_DIR}`);
