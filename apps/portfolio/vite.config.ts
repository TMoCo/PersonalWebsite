import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { federation } from '@module-federation/vite'
import { dependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  base: './',
  publicDir: '../public',
  build: {
    target: 'chrome89',
    outDir: '../dist'
  },
  test: {
    root: '.',
    include: ['test/**/*.test.ts'],
    outputFile: 'test/test-results.json'
  },
  plugins: [
    { enforce: 'post', ...mdx({ remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'meta' }]] }) },
    react(),
    federation({
      filename: 'index.js',
      name: 'remote',
      exposes: {
        './app': './src/App.tsx'
      },
      remotes: {},
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true
        },
        'react-dom': {
          requiredVersion: dependencies['react-dom'],
          singleton: true
        }
      }
    })
  ]
})
