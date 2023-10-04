/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Josefin Sans', 'sans-serif'],
			},
			fontSize: {
				'18': '18px',
			  },
			colors: {
				//light mode
				lightGray: '#fafafa',
				veryLightGrayishBlue: '#e4e5f1',
				lightGrayishBlue: '#d2d3db',
				darkGrayishBlue: '#9394a5',
				veryDarkGrayishBlue: '#484b6a',
				//dark mode
				darkBlue: '#161722',
				veryDarkBlue: '#25273c',
				ashBlue: '#777a92',
				darkAshBlue: '#4d5066',
				veryDarkAshBlue: '#393a4c',
			},
		},
	},
	plugins: [],
};
