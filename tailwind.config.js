/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: [
		"./index.tsx",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./presentation/**/*.{js,jsx,ts,tsx}",
	],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: "#49129C",
				secondary: { DEFAULT: "#B50086", 100: "#C51297", 200: "#831266" },
				tertiary: "#EF2967",
			},

			fontFamily: {
				"work-black": ["WorkSans-Black"],
				"work-light": ["WorkSans-Light"],
				"work-medium": ["WorkSans-Medium"],
			},
		},
	},
	plugins: [],
};

// @type {import('tailwindcss').Config} */module.exports = {  content: [    "./app/**/*.{js,jsx,ts,tsx}",    "./components/**/*.{js,jsx,ts,tsx}",    "./presentation/**/*.{js,jsx,ts,tsx}",  ],  presets: [require("nativewind/preset")],  theme: {    extend: {      colors: {        primary: '#49129C',        secondary: {          DEFAULT: '#B50086',          100: '#C51297',          200: '#831266',        },        tertiary: '#EF2967',      },      fontFamily: {        'work-black': ['WorkSans-Black', 'sans-serif'],        'work-light': ['WorkSans-Light', 'sans-serif'],        'work-medium': ['WorkSans-Medium', 'sans-serif'],      }    },  },  plugins: [],}
