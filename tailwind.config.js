/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"dark-font": "#5C5155",
				"primary-old": "#EA973B",
				"primary-old-hover": "#DA872B",
				"footer": "#EA973B1A",
			}
		},
	},
	plugins: [],
};
