import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

const autoImport = AutoImport({
  imports: ["vue"],
  dts: "src/plugins/auto-imports.d.ts",
});

export default defineConfig({
  plugins: [vue(), autoImport],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/base.scss" as *;`,
      },
    },
  },
});
