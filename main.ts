// One-Line Laugh-Off — make.fun entry
// Writes one single funny line to /output/entry.txt.
// The gate requires 1-200 UTF-8 characters, not only whitespace.
// The judge compares entries pairwise: the line must be funny on a cold
// read, with a sudden twist, economical words, and a fresh idea.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised line: "paid ... in LinkedIn endorsements" makes the payment
// itself the joke, and "this year" implies it used to be cash — shorter,
// tighter, and the twist lands without being explained.
const ENTRY = "The tooth fairy paid my daughter in LinkedIn endorsements this year.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
