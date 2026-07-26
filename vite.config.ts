import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to https://kolekaushik.github.io/ (GitHub user page),
// so the site lives at the domain root rather than a repo subpath.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
