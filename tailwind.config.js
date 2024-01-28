/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		screens: {
			sm: '576px', // Mobile
			md: '768px', // Tablet
			lg: '1024px', // Laptop
			xl: '1280px' // Desktop
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				chaos: {
					primary: '#141414',
					'primary-content': '#fff',
					secondary: '#171717',
					accent: '#453F9A',
					neutral: '#9C9C9C',
					'base-100': '#000',
					'base-content': '#fff'
				}
			}
		]
	}
};
