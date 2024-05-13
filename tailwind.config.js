/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
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
				light: '#f5f5f5',
				lightNumberHighlight: '#aef6cb',
				dark: 'black',
				darkNumberHighlight: '#c4dacc',
				gray: '#ddd',
				lightGray: '#2220341a',
				font: {
					lightBase: 'black',
					lightDeepGreen: '#004a50',
					lightShallowGreen: '#367378',
					lightSocialChatGreen: '#03494f',
					lightHighlightGreen1: '#00a57d',
					lightHighlightGreen2: '#3da0a0',
					darkBase: '#f5f5f5',
					darkHighLightGreen1: '#AEF6CB',
					sub: '#F2F2F2',
					darkHighLightGreen2: '#C4DACC'
				}
			}
		}
	},
	plugins: []
};
