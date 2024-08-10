import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode)
  return {
    root: './src',
    base: './',
    publicDir: '../public',
    build: {
      outDir: '../dist'
    },
    //   rollupOptions: {
    //     external: ['react', 'react-dom'],
    //     output: {
    //       globals: {
    //         react: 'React',
    //         'react-dom': 'ReactDOM'
    //       }
    //     }
    //   }
    // },
    test: {
      root: '.',
      include: ['test/**/*.test.ts'],
      outputFile: 'test/test-results.json'
    },
    plugins: [
      { enforce: 'pre', ...mdx({ remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'meta' }]] }) },
      react()
    ]
  }
})
