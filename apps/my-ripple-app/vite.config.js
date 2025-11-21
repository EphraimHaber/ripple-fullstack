import { defineConfig, loadEnv } from 'vite';
import { ripple } from '@ripple-ts/vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [ripple(), tailwindcss()],
		base: env.VITE_BASE_PATH || '/',
		build: {
			target: 'esnext',
		},
		server: {
			proxy: {
				'/api': {
					target: 'http://localhost:3001',
					changeOrigin: true,
				},
			},
		},
	};
});
