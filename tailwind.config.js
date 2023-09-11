/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue, js, ts, jsx, tsx}"
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.75rem",
				md: "2.5rem"
			}
		},
		extend: {
			colors: {
				"theme-orange": "#f15c1b"
			}
		},
	},
	plugins: [],
};

