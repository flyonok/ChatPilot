import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version)
	},
	build: {
		rollupOptions: {
			output: {
				format: 'es'
			}
		}
	},
	server: {
		mimeTypes: {
			'application/javascript': ['js', 'mjs']
		}
	},
});
