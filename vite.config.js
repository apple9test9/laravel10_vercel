import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    base: '/', // または 'https://your-domain.com/' デプロイ先のURL
    plugins: [
        laravel({
            input: [
                'resources/sass/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
