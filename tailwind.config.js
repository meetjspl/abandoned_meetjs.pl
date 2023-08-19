/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				blue: "#23a1aa",
				purple: "#210f31",
				green: "#BCD35D",
			},
			fontFamily: {
				sans: ["'Montserrat'", "sans-serif"],
			},
			fontSize: {
				sm: ["12px", "19px"],
				base: ["16px", "26px"],
				lg: ["20px", "32px"],
				xl: ["24px", "38px"],
				"2xl": ["32px", "51px"],
				"3xl": ["40px", "64px"],
				"4xl": ["48px", "77px"],
			},
			backgroundImage: {
				conference: "url('/conference.jpg')",
			},
		},
	},
};
