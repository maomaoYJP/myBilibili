import { fileURLToPath, URL } from "node:url";
import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import mockServer from "vite-plugin-mock-server";

const autoImport = AutoImport({
  imports: ["vue"],
  dts: "src/plugins/auto-imports.d.ts",
});

const components = Components({
  resolvers: [ElementPlusResolver()],
  dts: "src/plugins/components.d.ts",
});

const mockServerPlugin = mockServer({
  urlPrefixes: ["/api/"],
  mockRootDir: "./mock",
  mockTsSuffix: ".ts",
  noHandlerResponse404: true,
});

export default defineConfig({
  base: "./",
  plugins: [vue(), autoImport, components, mockServerPlugin],
  envDir: path.resolve(__dirname, "./env"),
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
