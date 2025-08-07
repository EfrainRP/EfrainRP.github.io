import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import packageJSON from './package.json'

export default defineConfig({
  base: `/${packageJSON.name}/`,
  plugins: [
    react(),
    tailwindcss(),
  ],
})
