import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  dts: true,
  sourcemap: true,
  format: ['esm', 'cjs'],
  minify: !options.watch,
  clean: true,
}))
