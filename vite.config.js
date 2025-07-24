import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // dev server port
    open: true, // open browser automatically
    strictPort: true, // fail if port is already in use
  },
});
