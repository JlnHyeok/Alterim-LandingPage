/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				...colors,
				font: {
					light: '#f5f5f5',
					dark: '#fff',
					highlight: '#AEF6CB',
					sub: '#F2F2F2',
					subHighlight: '#C4DACC'
				}
			}
		}
	},
	plugins: []
};
