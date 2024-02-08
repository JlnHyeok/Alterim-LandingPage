<script lang="ts">
	import { onMount } from 'svelte';

	export let infos: { position: string; timing: number };
	export let index: number;

	onMount(() => {
		let star = document.querySelectorAll('#star')[index];
		setTimeout(() => {
			star?.classList.add('blink');
		}, infos.timing);
	});
</script>

<svg
	class="{infos.position} opacity-0 absolute"
	id="star"
	xmlns="http://www.w3.org/2000/svg"
	width="20"
	height="20"
	viewBox="0 0 20 20"
	fill="none"
>
	<g filter="url(#filter0_dii_609_3107)">
		<path
			d="M10 4L11.6205 8.37946L16 10L11.6205 11.6205L10 16L8.37946 11.6205L4 10L8.37946 8.37946L10 4Z"
			fill="url(#paint0_linear_609_3107)"
		/>
		<path
			d="M10 4L11.6205 8.37946L16 10L11.6205 11.6205L10 16L8.37946 11.6205L4 10L8.37946 8.37946L10 4Z"
			fill="url(#paint1_radial_609_3107)"
		/>
		<path
			d="M10 4L11.6205 8.37946L16 10L11.6205 11.6205L10 16L8.37946 11.6205L4 10L8.37946 8.37946L10 4Z"
			fill="#FAFFF9"
		/>
	</g>
	<defs>
		<filter
			id="filter0_dii_609_3107"
			x="0"
			y="-1"
			width="20"
			height="21"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset />
			<feGaussianBlur stdDeviation="2" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix
				type="matrix"
				values="0 0 0 0 0.070829 0 0 0 0 0.160344 0 0 0 0 0.595132 0 0 0 0.3 0"
			/>
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_609_3107" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_609_3107" result="shape" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset />
			<feGaussianBlur stdDeviation="1.5" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
			<feBlend mode="normal" in2="shape" result="effect2_innerShadow_609_3107" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dy="-5" />
			<feGaussianBlur stdDeviation="2.5" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.33 0" />
			<feBlend
				mode="normal"
				in2="effect2_innerShadow_609_3107"
				result="effect3_innerShadow_609_3107"
			/>
		</filter>
		<linearGradient
			id="paint0_linear_609_3107"
			x1="10"
			y1="4"
			x2="10"
			y2="16"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#D3F9FF" />
			<stop offset="1" stop-color="#96A8FF" />
		</linearGradient>
		<radialGradient
			id="paint1_radial_609_3107"
			cx="0"
			cy="0"
			r="1"
			gradientUnits="userSpaceOnUse"
			gradientTransform="translate(1.40385 16.0035) rotate(4.57525) scale(23.1507 23.1578)"
		>
			<stop stop-color="white" />
			<stop offset="0.464944" stop-color="white" stop-opacity="0" />
		</radialGradient>
	</defs>
</svg>

<style>
	@keyframes blink-effect {
		20% {
			opacity: 1;
		}
		80% {
			opacity: 0;
		}
	}

	.blink {
		animation: blink-effect 3s ease-out infinite;

		/*
  animation-name: blink-effect;
  animation-duration: 1s;
  animation-iteration-count:infinite;
  animation-timing-function:step-end;
  */
	}
</style>
