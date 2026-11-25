// Describe Your Ex in One Word — the verdict is one word, no caption needed.
// An ex is a subscription you finally cancelled: the newsletters stop, the spam ends,
// and nobody misses the renewal reminder.
import { writeFileSync, mkdirSync } from "node:fs";

const verdict = "unsubscribed";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, verdict);
console.log(verdict);
