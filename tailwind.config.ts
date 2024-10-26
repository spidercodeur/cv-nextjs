import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			grayscale: {
				50: "50%",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: "#5f1a99",
				secondary: "#2c2c2c",
				dark_primary: "#ffe4c4",
			},
		},
	},
	plugins: [],
};
export default config;
