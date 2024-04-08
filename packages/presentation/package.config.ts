import baseConfig from '@repo/package.config'
import { defineConfig } from '@sanity/pkg-utils'

export default defineConfig({
  ...baseConfig,
  external: ['@sanity/ui', 'react', 'react-dom', 'sanity', 'styled-components'],
})
