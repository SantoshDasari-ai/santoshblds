import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to process
const directories = [
  path.join(__dirname, "..", "public/assets"),
  path.join(__dirname, "..", "assets"),
];

// Function to process a single GIF
function processGif(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    if (ext !== ".gif") return;

    const baseName = path.basename(filePath, ext);
    const dirName = path.dirname(filePath);
    const mp4Path = path.join(dirName, `${baseName}.mp4`);

    // Skip if MP4 version already exists
    if (fs.existsSync(mp4Path)) {
      console.log(`MP4 already exists for ${filePath}, skipping...`);
      return;
    }

    console.log(`Converting GIF to MP4: ${filePath}`);

    // FFMPEG command to convert GIF to MP4
    // This requires ffmpeg to be installed and available in the PATH
    const command = `ffmpeg -i "${filePath}" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 1M -y "${mp4Path}"`;

    try {
      execSync(command, { stdio: "inherit" });
      console.log(`Created MP4: ${mp4Path}`);
    } catch (error) {
      console.error(`Error executing ffmpeg: ${error.message}`);
      console.log(
        "Note: This script requires ffmpeg to be installed. Please install it and ensure it is in your PATH."
      );
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Process all GIFs in a directory recursively
function processDirectory(directory) {
  try {
    if (!fs.existsSync(directory)) {
      console.log(`Directory doesn't exist: ${directory}`);
      return;
    }

    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // Recursively process subdirectories
        processDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (ext === ".gif") {
          processGif(filePath);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// Main function
function main() {
  console.log("Starting GIF to MP4 conversion...");

  // Process each directory
  for (const dir of directories) {
    console.log(`\nProcessing directory: ${dir}`);
    processDirectory(dir);
  }

  console.log("\nGIF conversion completed!");
  console.log("\nReminder: To use the MP4 versions in your HTML:");
  console.log(`
<video autoplay loop muted playsinline>
  <source src="video.mp4" type="video/mp4">
  <img src="fallback.gif" alt="Animation">
</video>
  `);
}

main();
