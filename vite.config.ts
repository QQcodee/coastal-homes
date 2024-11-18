import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    // Turn off TypeScript type checking during build (Optional)
    // You can also customize the behavior here
    logOverride: {
      typescript: "silent",
    },
  },
});
