import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()], define: {
        'global': {},
    },
    server: {
    // Remove the problematic option
    },
    resolve: {
        alias: {
            '/@': '/src'
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                }
            }
        }
    }
});
