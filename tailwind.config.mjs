/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				monserrat: ['Montserrat', 'serif'],
			},
		},
	},
	screens: {
		xsm: '480px',
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1440px',
		'3xl': '1920px',
		'4xl': '2560px',
	},
	plugins: [],
}
