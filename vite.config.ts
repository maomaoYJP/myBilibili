import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const autoImport = AutoImport({
  imports: ["vue"],
  dts: "src/plugins/auto-imports.d.ts",
});

const components = Components({
  dts: "src/plugins/components.d.ts",
  resolvers: [ElementPlusResolver()],
});

export default defineConfig({
  plugins: [vue(), autoImport, components],
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
