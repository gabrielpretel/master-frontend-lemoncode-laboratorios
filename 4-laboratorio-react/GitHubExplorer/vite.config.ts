import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import legacy from "@vitejs/plugin-legacy";
import { fileURLToPath } from "node:url";
import path from "path";

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/common/styles/mixins.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    hmr: false,
  },
  build: {
    sourcemap: "inline",
  },
});
