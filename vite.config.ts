import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'


function resolve(dir: string) {
  return path.join(__dirname, "/", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve('src'),
      "@img": resolve('public/img'),
      "@icon": resolve('public/icon'),
      "@components": resolve("src/components"),
      "@pages": resolve("src/pages"),
      "@contents": resolve("src/contents"),
      "@utils": resolve("src/utils"),
    }
  }
})
