import { exec } from "child_process";
import fs from "fs";
import path from "path";

// Function to clean the dist directory with retry logic
function cleanDist() {
  console.log("Cleaning dist directory...");

  // Try to remove the entire dist directory
  try {
    if (fs.existsSync("dist")) {
      console.log("Removing dist directory...");
      fs.rmSync("dist", { recursive: true, force: true });
    }
  } catch (err) {
    console.warn(
      `Warning: Could not fully remove dist directory: ${err.message}`
    );
    // Continue anyway, the build might still succeed
  }
}

// Function to run the build command
function runBuild() {
  console.log("Building project...");
  const buildProcess = exec("npm run build");

  buildProcess.stdout.on("data", (data) => {
    console.log(data);
  });

  buildProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  return new Promise((resolve, reject) => {
    buildProcess.on("close", (code) => {
      if (code === 0) {
        console.log("Build completed successfully");
        resolve();
      } else {
        console.error(`Build failed with code ${code}`);
        reject(new Error(`Build failed with code ${code}`));
      }
    });
  });
}

// Main function that orchestrates the build process
async function buildWithRetry(maxRetries = 3) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      // Clean dist first
      cleanDist();

      // Run the build
      await runBuild();

      // If we get here, build was successful
      console.log("Build successful!");
      return;
    } catch (error) {
      retries++;
      console.error(`Build attempt ${retries} failed: ${error.message}`);

      if (retries < maxRetries) {
        console.log(`Retrying in 2 seconds... (${retries}/${maxRetries})`);
        // Wait for 2 seconds before retrying
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } else {
        console.error("Maximum retries reached. Build failed.");
        process.exit(1);
      }
    }
  }
}

// Run the build process
buildWithRetry().catch((err) => {
  console.error("Build script failed:", err);
  process.exit(1);
});
