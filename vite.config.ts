import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, './packages/index.ts'),
            //fileName: (format) => `vue3-typed-js.${format}.ts`,
            name: 'Vue3TypedJs',
            formats: ['es', 'umd'],
            fileName: 'vue3-typed-js',
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
