// This script ensures necessary files are copied to the correct locations for development
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Convert callbacks to promises
const copyFile = fs.promises.copyFile;
const mkdir = fs.promises.mkdir;
const readdir = fs.promises.readdir;
const stat = fs.promises.stat;

// Ensure directory exists
async function ensureDir(dir) {
  try {
    await stat(dir);
  } catch (err) {
    if (err.code === "ENOENT") {
      await mkdir(dir, { recursive: true });
    } else {
      throw err;
    }
  }
}

// Copy file with directory creation
async function copyFileWithDir(src, dest) {
  const destDir = path.dirname(dest);
  await ensureDir(destDir);
  await copyFile(src, dest);
  console.log(`Copied: ${src} -> ${dest}`);
}

// Recursively copy directory
async function copyDir(src, dest) {
  await ensureDir(dest);

  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await copyFileWithDir(srcPath, destPath);
    }
  }
}

async function main() {
  try {
    console.log("Setting up development environment...");

    // Get the project root directory
    const projectRoot = path.resolve(__dirname, "..");

    // Copy public assets to dev server root
    const publicDir = path.join(projectRoot, "public");
    await copyDir(publicDir, projectRoot);

    // Copy other assets as needed
    const assetsDir = path.join(projectRoot, "assets");
    if (fs.existsSync(assetsDir)) {
      await copyDir(assetsDir, path.join(projectRoot, "assets"));
    }

    console.log("Development setup complete!");
  } catch (err) {
    console.error("Error during development setup:", err);
    process.exit(1);
  }
}

main();
