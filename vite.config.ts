import { defineConfig } from "vite";
import packageJson from "./package.json";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "build") {
    return {
      plugins: [react()],
      base: `${
        packageJson.baseUrl.useCustomBaseUrl
          ? packageJson.baseUrl.baseUrlPrefix + packageJson.version
          : ""
      }`,
      build: {
        outDir: `dist/version-${packageJson.version}`,
      },
    };
  } else {
    return {
      plugins: [react()],
    };
  }
});
