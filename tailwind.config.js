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
			screens: {
				'3xl': '1920px',
				'4xl': '2200px'
			},
			fontFamily: {
				Pretendard_ExtraLight: ['Pretendard-ExtraLight'],
				Pretendard_Light: ['Pretendard-Light'],
				Pretendard_Regular: ['Pretendard-Regular']
			},
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
