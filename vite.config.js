import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './build'
  },
  base: '/vm-dev/',
  server: {
    port: 4200,
    open: true,
    cors: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.js',
    css: true,
  },
  plugins: [react(), 
    
    svgr({
      svgrOptions:{

      }
          
      
    }),
  
  ],

  
});
