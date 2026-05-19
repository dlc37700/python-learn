import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use '/python-learn/' for GitHub Pages, './' for Vercel/Netlify or local preview.
const base = process.env.GITHUB_PAGES === 'true' ? '/python-learn/' : './'

export default defineConfig({
  plugins: [react()],
  base,
})
