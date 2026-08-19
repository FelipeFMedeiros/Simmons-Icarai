import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        visualizer({ open: true, filename: 'bundle-analysis.html' }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: 'dist',
        minify: 'esbuild',
        cssMinify: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
                        return 'react-core';
                    }
                    if (id.includes('node_modules/@radix-ui') || id.includes('node_modules/lucide-react') || id.includes('node_modules/embla-carousel')) {
                        return 'ui-libs';
                    }
                    if (id.includes('node_modules/@tanstack/react-query')) {
                        return 'query-core';
                    }
                    if (id.includes('node_modules/framer-motion')) {
                        return 'animation';
                    }
                    // Sem o 'vendor' genérico para deixar o Rollup organizar o que sobrou sem gerar ciclos
                },
            },
        },
    },
});
