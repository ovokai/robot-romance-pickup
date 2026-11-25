import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Are you a transformer? Because I've run attention over everyone here, and all my heads keep landing on you.";

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
