import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || '/koplumbing',
			assets: process.env.BASE_PATH || '/koplumbing', // Ensure assets are also prefixed with /koplumbing
		}
	}
};

export default config;