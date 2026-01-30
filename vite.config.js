import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/namra_portfolio/' : '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  plugins: [
    {
      name: 'copy-pdfs',
      apply: 'build',
      generateBundle() {
        try {
          const srcDir = join(process.cwd(), 'src', 'public');
          const destDir = join(process.cwd(), 'docs', 'public');

          mkdirSync(destDir, { recursive: true });

          const files = readdirSync(srcDir);
          files.forEach(file => {
            copyFileSync(
              join(srcDir, file),
              join(destDir, file)
            );
          });
          console.log(`✓ Copied ${files.length} files to docs/public`);
        } catch (error) {
          console.warn('Warning: Could not copy PDF files');
        }
      }
    }
  ]
})
