import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),dts({ rollupTypes: true })],
    build: {
        lib: {
            entry: resolve(__dirname, './packages/index.ts'),
            //fileName: (format) => `vue3-typed-js.${format}.ts`,
            name: 'Vue3TypedJs',
            formats: ['es', 'umd', 'cjs','iife'],
            fileName: 'index',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
})
