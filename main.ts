import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Are you a transformer? Because you've had my attention since token one. And honestly? Attention is all you need.";

const targetDir = "/output";
const targetFile = join(targetDir, "entry.txt");

try {
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(targetFile, entry + "\n", "utf8");
  console.log(`Wrote ${targetFile}`);
} catch {
  const fallback = join(process.cwd(), "entry.txt");
  writeFileSync(fallback, entry + "\n", "utf8");
  console.log(`Fell back to ${fallback}`);
}
