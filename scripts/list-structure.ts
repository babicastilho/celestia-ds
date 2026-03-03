// scripts/list-structure.ts
import { readdirSync, statSync, writeFileSync } from "fs";
import { join, relative } from "path";

const IGNORE = new Set([
  "node_modules", ".git", ".changeset",
  "dist", ".astro", "coverage", ".turbo",
  "storybook-static", "debug-storybook.log"
]);

function walk(dir: string, depth = 0): string {
  const entries = readdirSync(dir).filter(e => !IGNORE.has(e));
  return entries.map(entry => {
    const fullPath = join(dir, entry);
    const isDir = statSync(fullPath).isDirectory();
    const indent = "  ".repeat(depth);
    const prefix = isDir ? "📁" : "📄";
    const line = `${indent}${prefix} ${entry}`;
    if (isDir) return `${line}\n${walk(fullPath, depth + 1)}`;
    return line;
  }).join("\n");
}

const root = process.cwd();
const output = `# Estrutura do Celestia\n\n\`\`\`\n${walk(root)}\n\`\`\`\n`;

writeFileSync("STRUCTURE.md", output);
console.log("✅ STRUCTURE.md gerado com sucesso");
