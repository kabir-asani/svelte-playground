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
					primary: '#2797FE',
					'primary-content': '#fff',
					secondary: '#A971FF',
					'secondary-content': '#fff',
					accent: '#43B9B9',
					'accent-content': '#fff',
					neutral: '#9C9C9C',
					'base-100': '#02040A',
					'base-200': '#0E1117',
					'base-300': '#161B22',
					'base-content': '#fff'
				}
			}
		]
	}
};
