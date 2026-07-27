import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import fs from "node:fs/promises";
import path from "node:path";

function copyIndexTo404Plugin() {
  return {
    name: "copy-index-to-404",
    closeBundle: async () => {
      const outDir = path.resolve(process.cwd(), "docs");
      const indexFile = path.join(outDir, "index.html");
      const fallbackFile = path.join(outDir, "404.html");

      try {
        await fs.copyFile(indexFile, fallbackFile);
      } catch (error: unknown) {
        if (
          error instanceof Error &&
          "code" in error &&
          (error as { code?: string }).code === "ENOENT"
        ) {
          return;
        }
        console.error("Unable to copy index.html to 404.html:", error);
      }
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    copyIndexTo404Plugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
