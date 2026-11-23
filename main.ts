// main.ts — hand-in script for the gta6-meme-x-01 entry "30 FPS ate my PS5 Pro".
//
// The entry itself is an X post: the house fetches the post from X, takes its
// first picture and its text, and hands that dossier to the AI judge. This
// program only carries the post's address (POST.json) into the output
// directory so the gate can find it. Nothing else written here is judged.
//
// Run the way the grader does:
//   MAKEFUN_BOT_DIR=<repo> MAKEFUN_OUTPUT_DIR=<out> node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// An X post address: https://x.com/<handle>/status/<digits>, or the same
// on twitter.com. A handle is 1-15 word characters; the id is digits only.
// The competition also reads www. or mobile. before either host, and the
// /i/web/status/<id> form, so those are accepted here too rather than
// rejecting a post address the house itself would take.
const POST_URL =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/([A-Za-z0-9_]{1,15}\/status\/\d+|i\/web\/status\/\d+)$/;

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const src = join(BOT_DIR, "POST.json");

// Read the post file. A missing or unreadable file is a hard failure: better
// to stop here with a clear message than to be graded invalid silently.
let raw: string;
try {
  raw = readFileSync(src, "utf8");
} catch {
  fail(`cannot read POST.json at ${src} — the file is missing or unreadable.`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  fail(`POST.json is not valid JSON: ${(err as Error).message}`);
}

const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== "string" || !POST_URL.test(url)) {
  fail(
    `POST.json must hold a url shaped like an X post address ` +
      `(https://x.com/<handle>/status/<id>); got ${JSON.stringify(url)}.`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(src, join(OUTPUT_DIR, "POST.json"));
