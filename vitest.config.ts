import { defineConfig } from "vitest/config"
import Vue from "@vitejs/plugin-vue"

export default defineConfig({
    plugins: [Vue()],
    test: {
      globals: true,
      environment: "jsdom",
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'cobertura'],
      }
    },
    root: ".", //Define the root
})