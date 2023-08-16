/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue, js, ts, jsx, tsx}"
	],
	theme: {
		extend: {
			colors: {
				"theme-orange": "#f15c1b"
			}
		},
	},
	plugins: [],
};

