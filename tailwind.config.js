/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	corePlugins: {
		preflight: false,
	},
	theme: {
		fontFamily: {
			serif: ["Times New Roman"],
		},
	},
	plugins: [],
};
