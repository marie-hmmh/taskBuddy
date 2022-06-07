import adapter from '@sveltejs/adapter-auto';
import preprocessor from "svelte-preprocess";
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor(),
	kit: {
		adapter: adapter(),
    vite: {
        resolve: {
            alias: {
                $components: resolve('./src/components'),
                $styles: resolve('./src/styles'),
                $stores: resolve('./src/stores'),
								$images: resolve('./src/images')
            }
        }
    },

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
