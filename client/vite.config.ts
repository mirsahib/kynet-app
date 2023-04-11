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
  build:{
    sourcemap:true
  },
  server:{
    host:true,
    port:3001,
    proxy:{
      '/api':{
        target:'https://kynet-server-production.up.railway.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, 'api'),
      },
      '/auth':{
        target:'https://kynet-server-production.up.railway.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, 'auth'),
      }
    }
  },
  
})
