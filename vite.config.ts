import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/typescript-portfolio3/",
  plugins: [react()],
  optimizeDeps: {
    include: ['@vis.gl/react-google-maps']
  }
})
