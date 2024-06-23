import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@web-client/shared": path.resolve(
        __dirname,
        "../../packages/shared/dist"
      ),
    },
  },
});
