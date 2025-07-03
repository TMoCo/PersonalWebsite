import fs from 'node:fs'
import pkg from './package.json' assert { type: 'json' }
import mdx from '@mdx-js/rollup'

const postsDir = 'src/posts'
const input = fs.readdirSync(postsDir).map(post => `${postsDir}/${post}`)

export default {
  input,
  jsx: 'react-jsx',
  external: Object.keys(pkg.peerDependencies),
  output: {
    dir: 'dist'
  },
  plugins: [mdx()]
}
