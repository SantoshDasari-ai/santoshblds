import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Add visualizer when in analyze mode
    mode === "analyze" &&
      visualizer({
        filename: "./stats.html",
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  ],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          // Keep framer-motion as a single chunk but optimize it
          animations: ["framer-motion"],
          ui: ["lucide-react"],
        },
        format: "es",
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
    sourcemap: false,
    assetsInlineLimit: 4096, // inline files < 4kb
    modulePreload: {
      polyfill: false,
    },
    target: "es2015",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        // Additional optimizations for smaller bundles
        pure_funcs: [
          "console.log",
          "console.info",
          "console.debug",
          "console.warn",
        ],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    // Increase chunk size warning limit since we're optimizing
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
    include: ["framer-motion > tslib"],
  },
  server: {
    port: 5175,
    headers: {
      "Cache-Control": "public, max-age=31536000",
    },
    historyApiFallback: true,
  },
  preview: {
    port: 5175,
    historyApiFallback: true,
  },
}));
