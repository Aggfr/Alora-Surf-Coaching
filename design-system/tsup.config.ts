import { defineConfig } from 'tsup';

/** Builds the public API (index.ts) into build/: one ES module plus type declarations. */
export default defineConfig({
  entry: ['index.ts'],
  outDir: 'build',
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2022',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
});
