import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    test: {
      // inspectBrk: true,
      // fileParallelism: false,
      browser: {
        provider: 'playwright',
        enabled: true,
        // headless: true,
        instances: [{ browser: 'chromium' }]
      },
    },
  })