// Test for the One Line, Lights Out entry.
// Runs main.ts, then checks /output/entry.txt against the kit gate:
// UTF-8 text of 1 to 200 characters, not only white space.
// Run: node test.mjs

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

execFileSync("node", ["main.ts"], { stdio: "inherit" });

const bytes = readFileSync("/output/entry.txt");
const text = bytes.toString("utf8");

// Valid UTF-8: decoding then re-encoding must reproduce the exact bytes
// (invalid sequences would decode to U+FFFD and re-encode differently).
assert.ok(
  Buffer.from(text, "utf8").equals(bytes),
  "entry.txt must be valid UTF-8",
);
assert.ok(
  text.length >= 1 && text.length <= 200,
  `entry must be 1-200 characters, got ${text.length}`,
);
assert.ok(text.trim().length > 0, "entry must not be only whitespace");

console.log(
  `PASS: entry.txt is ${text.length} characters, valid UTF-8, not only whitespace`,
);
console.log(text);
