import { resolve } from "node:path"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

export default defineConfig(async () => {
  const { default: tsconfigPaths } = await import("vite-tsconfig-paths")

  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    plugins: [react(), tsconfigPaths({ root: __dirname })],
    test: {
      environment: "happy-dom",
      setupFiles: ["./config/test/happydom.ts", "./config/test/testing-library.ts", "./config/tests/specs/setupTests.ts"],
      include: [
        "src/**/*.test.{ts,tsx}",
        "config/tests/specs/**/*.test.{ts,tsx}",
        "config/build/postcss/**/*.test.{js,mjs,ts}",
      ],
    },
  }
})
