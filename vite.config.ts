import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  resolve: {
    alias:{
      Component:path.resolve(__dirname,'./src/component')
    }
  },
  plugins: [react(),tsconfigPaths()],
})
