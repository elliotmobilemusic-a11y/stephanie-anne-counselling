import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works both at a subpath (GitHub Pages
  // project site) and at a domain root (Vercel). The site uses only #
  // anchor links, so there is no client-side router to break.
  base: './',
})
