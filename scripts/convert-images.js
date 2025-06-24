import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define source and output directories
const sourceDir = path.join(__dirname, "..", "assets-source");
const outputDir = path.join(__dirname, "..", "public", "assets");

// Extensions to convert
const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"];

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Function to optimize a single image
async function processImage(filePath, relativePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const baseName = path.basename(filePath, ext);

    // Construct the output directory path within public/assets
    const outputSubDir = path.dirname(path.join(outputDir, relativePath));
    const optimizedDir = path.join(outputSubDir, "optimized");

    // Ensure optimized directory exists
    ensureDirectoryExists(optimizedDir);

    // Define paths for different formats
    const webpPath = path.join(optimizedDir, `${baseName}.webp`);
    const avifPath = path.join(optimizedDir, `${baseName}.avif`);
    const originalOptimizedPath = path.join(optimizedDir, `${baseName}${ext}`);

    // Skip if all optimized versions already exist
    if (
      fs.existsSync(webpPath) &&
      fs.existsSync(avifPath) &&
      fs.existsSync(originalOptimizedPath)
    ) {
      console.log(
        `Optimized versions for ${filePath} already exist, skipping...`
      );
      return;
    }

    // Process the image with Sharp
    console.log(`Processing: ${filePath}`);

    let sharpInstance = sharp(filePath);

    // Get metadata
    const metadata = await sharpInstance.metadata();

    // Resize large images to max dimensions while maintaining aspect ratio
    if (metadata.width > 2000 || metadata.height > 2000) {
      sharpInstance = sharpInstance.resize({
        width: 2000,
        height: 2000,
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    // Define quality based on image size
    const getQuality = (width) => {
      if (width > 1500) return 75;
      if (width > 1000) return 80;
      return 85;
    };

    const quality = getQuality(metadata.width || 0);

    // Create WebP version (always)
    if (!fs.existsSync(webpPath)) {
      await sharpInstance.clone().webp({ quality, effort: 6 }).toFile(webpPath);
      console.log(`Created WebP: ${webpPath}`);
    }

    // Create AVIF version (for better compression but slower encoding)
    if (!fs.existsSync(avifPath)) {
      try {
        await sharpInstance
          .clone()
          .avif({ quality, effort: 7 })
          .toFile(avifPath);
        console.log(`Created AVIF: ${avifPath}`);
      } catch (err) {
        console.warn(
          `Warning: AVIF encoding failed for ${filePath}. This format may not be supported.`
        );
      }
    }

    // Create optimized version of original format
    if (!fs.existsSync(originalOptimizedPath)) {
      try {
        const cloned = sharpInstance.clone();

        switch (ext) {
          case ".jpg":
          case ".jpeg":
            await cloned
              .jpeg({ quality, progressive: true, mozjpeg: true })
              .toFile(originalOptimizedPath);
            break;
          case ".png":
            await cloned
              .png({
                quality,
                progressive: true,
                compressionLevel: 9,
                palette: true,
              })
              .toFile(originalOptimizedPath);
            break;
          case ".webp":
            await cloned
              .webp({ quality, effort: 6 })
              .toFile(originalOptimizedPath);
            break;
          case ".avif":
            await cloned
              .avif({ quality, effort: 7 })
              .toFile(originalOptimizedPath);
            break;
          case ".gif":
            // GIFs need special handling
            await cloned
              .gif({ reoptimise: true })
              .toFile(originalOptimizedPath);
            break;
          default:
            // For unsupported formats, just copy the file
            fs.copyFileSync(filePath, originalOptimizedPath);
        }

        console.log(
          `Created optimized ${ext
            .substring(1)
            .toUpperCase()}: ${originalOptimizedPath}`
        );
      } catch (err) {
        console.error(
          `Error creating optimized original for ${filePath}:`,
          err
        );
        // Fallback to simple copy if optimization fails
        fs.copyFileSync(filePath, originalOptimizedPath);
        console.log(`Fallback: Copied original to ${originalOptimizedPath}`);
      }
    }

    // Generate responsive image sizes for large images
    if (
      (metadata.width > 800 || metadata.height > 800) &&
      (ext === ".jpg" || ext === ".jpeg" || ext === ".png")
    ) {
      const sizes = [320, 640, 960, 1280, 1920].filter(
        (size) => size < metadata.width
      );

      for (const size of sizes) {
        const resizedPath = path.join(
          optimizedDir,
          `${baseName}-${size}${ext}`
        );
        const resizedWebpPath = path.join(
          optimizedDir,
          `${baseName}-${size}.webp`
        );

        if (!fs.existsSync(resizedPath) || !fs.existsSync(resizedWebpPath)) {
          try {
            const resized = sharp(filePath).resize({
              width: size,
              height: size,
              fit: "inside",
              withoutEnlargement: true,
            });

            // Original format
            await resized.clone().toFile(resizedPath);

            // WebP
            await resized.clone().webp({ quality }).toFile(resizedWebpPath);

            console.log(`Created responsive images at ${size}px width`);
          } catch (err) {
            console.error(`Error creating responsive image at ${size}px:`, err);
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Process all images in a directory recursively
async function processDirectory(directory, baseDir = directory) {
  try {
    if (!fs.existsSync(directory)) {
      console.log(`Directory doesn't exist: ${directory}`);
      return;
    }

    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      // Get the path relative to the base source directory
      const relativePath = path.relative(baseDir, filePath);

      if (stat.isDirectory()) {
        // Skip the optimized directory to prevent processing already optimized images
        if (path.basename(filePath) === "optimized") {
          continue;
        }
        // Recursively process subdirectories
        await processDirectory(filePath, baseDir);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          await processImage(filePath, relativePath);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// Main function
async function main() {
  console.log("Starting enhanced image optimization...");
  console.log(`Source directory: ${sourceDir}`);
  console.log(`Output directory: ${outputDir}`);

  // Process the source directory
  await processDirectory(sourceDir);

  console.log("\nImage optimization complete.");
}

main().catch((err) => {
  console.error("Error in main process:", err);
});
