/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				lightGray: '#fafafa',
				darkBlue: '#161722',
			}
		},
	},
	plugins: [],
};
