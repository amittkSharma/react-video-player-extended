import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginUmd } from "@rsbuild/plugin-umd";

export default defineConfig({
  source: {
    entry: { index: "./src/index.tsx" },
  },
  output: {
    distPath: { root: "dist" },
    filename: { js: "index.js" },
    externals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    sourceMap: true,
  },
  plugins: [
    pluginReact(),
    pluginUmd({ name: "react-video-player-extended" }),
  ],
});
