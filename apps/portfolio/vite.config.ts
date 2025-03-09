import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { federation } from '@module-federation/vite'
import { peerDependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  base: './',
  publicDir: '../public',
  server: { port: 5124 },
  build: {
    target: 'chrome89',
    outDir: '../dist',
    rollupOptions: {
      external: [...Object.keys(peerDependencies ?? {})],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
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
          requiredVersion: peerDependencies.react,
          singleton: true
        },
        'react-dom': {
          requiredVersion: peerDependencies['react-dom'],
          singleton: true
        }
      }
    })
  ]
})
