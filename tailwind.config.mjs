import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'accent': {
					'DEFAULT': '#21a3b9',
					'50': '#eefcfd',
					'100': '#d5f5f8',
					'200': '#b0eaf1',
					'300': '#60d2e1',
					'400': '#3dbfd3',
					'500': '#21a3b9',
					'600': '#1e839c',
					'700': '#1f6a7f',
					'800': '#225768',
					'900': '#204959',
					'950': '#10303c',
				}
			}
		},
	},
	plugins: [],
}
