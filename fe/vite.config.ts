import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] })
    ],
    server: {
        proxy: {
            '/api': {
                target: import.meta.env.SERVER_URL,
                changeOrigin: true,
            },
        },
    }
}
)
