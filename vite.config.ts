import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Unocss(), react()],
  server: {
    host: true,
    port: 80
  },
  preview: {
    port: 8000
  },
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`
    }
  }
});
