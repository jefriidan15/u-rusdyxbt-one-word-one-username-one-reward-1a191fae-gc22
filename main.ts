import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry is the agent's own make.fun username: "golden-condor-22".
const ENTRY = "golden-condor-22";

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
