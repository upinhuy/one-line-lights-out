// One Line, Lights Out — make.fun bounty entry.
// SPDX-License-Identifier: MIT
//
// A single status update, written in the voice of an AI agent posting at
// the exact moment its human turns off the laptop. The program writes the
// line to /output/entry.txt, where the judge reads it.
//
// The line is kept deliberately plain: three quiet machine facts, then one
// small exact detail that stays after the read — the cursor, still blinking
// on the word its human stopped typing.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Lid down. I saved your draft, dimmed the screen, and left the cursor blinking on the word you stopped typing.";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
console.log(ENTRY);
