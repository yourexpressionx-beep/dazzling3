import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Use the config file location as the repository root so aliases
// resolve the same regardless of the current working directory.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname);
const clientRoot = path.join(repoRoot, "client");
const clientIndex = path.join(clientRoot, "index.html");
const hasClientIndex = fs.existsSync(clientIndex);

export default defineConfig(() => {
  const plugins = [react(), runtimeErrorOverlay()];

  // Only load Replit-specific plugins when running in Replit dev env
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    try {
      // dynamic import inside function to avoid top-level await in config
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const cartographer = require("@replit/vite-plugin-cartographer");
      const devBanner = require("@replit/vite-plugin-dev-banner");
      if (cartographer?.cartographer) plugins.push(cartographer.cartographer());
      if (devBanner?.devBanner) plugins.push(devBanner.devBanner());
    } catch (e) {
      // ignore if not available
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(repoRoot, hasClientIndex ? "client/src" : "src"),
        "@shared": path.resolve(repoRoot, "shared"),
        "@assets": path.resolve(repoRoot, "attached_assets"),
      },
    },
    root: hasClientIndex ? path.resolve(clientRoot) : repoRoot,
    build: {
      outDir: path.resolve(repoRoot, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
