import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['**/*.stories.tsx', '**/*.style.ts', '**/*.type.ts']
    },
    include: ['src/**/*.test.{ts,tsx}'],
    server: {
      deps: {
        inline: ['lucide-react']
      }
    }
  }
});
