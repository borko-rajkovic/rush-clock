import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      manifestFilename: "site.webmanifest",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*"],
        runtimeCaching: [
          {
            urlPattern: () => {
              return true;
            },
            handler: "CacheFirst" as const,
            options: {
              cacheableResponse: {
                statuses: [0, 200, 206],
              },
            },
          },
        ],
      },
      manifest: {
        name: "Rush Clock",
        short_name: "Rush Clock",
        description: "Clock that rushes",
        theme_color: "#ffffff",
        // screenshots: [
        //   {
        //     src: "/icons/android-chrome-512x512.png",
        //     sizes: "512x512",
        //     form_factor: "wide",
        //   },
        //   {
        //     src: "/icons/android-chrome-512x512.png",
        //     sizes: "512x512",
        //     form_factor: "narrow",
        //   },
        // ],
        icons: [
          {
            src: "/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
    }),
  ],
});
