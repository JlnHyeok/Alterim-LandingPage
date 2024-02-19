<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div
	class="relative flex h-[50vh] w-[82vw] flex-row items-center justify-center gap-[49px] rounded-[20px] border border-white border-opacity-30 bg-black p-10 md:h-[65vh] md:w-[60vw]"
	style="background: linear-gradient(180deg, rgba(200, 207, 214, 0.11) 0%,rgba(200, 207, 214, 0.00) 100%); backdrop-filter:blur(32px);"
>
	<div class="relative flex shrink-0 flex-col items-center justify-start gap-[49px]">
		<div
			class="relative flex items-center justify-center text-center font-Pretendard_Light text-base font-normal leading-[120%] text-[#ffffff]"
		>
			Crafting Soul for your pfp<br />with Alterim AI...
		</div>
		<div class="relative flex shrink-0 flex-row items-start justify-center">
			<svg
				class="relative flex h-[auto] shrink-0 flex-col items-center justify-start overflow-visible"
				style=""
				width="195"
				height="195"
				viewBox="0 0 195 195"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M22.0556 0.5H172.944L194.5 194.5H0.5L22.0556 0.5Z"
					fill="url(#paint0_linear_80_7106)"
				/>
				<g filter="url(#filter0_dii_80_7106)">
					<!-- STAR SECTION -->
					<path
						in:fade={{ duration: 600, delay: 450 }}
						d="M98 34.5L108.804 63.6964L138 74.5L108.804 85.3036L98 114.5L87.1964 85.3036L58 74.5L87.1964 63.6964L98 34.5Z"
						fill="url(#paint1_linear_80_7106)"
						class="move-up-down fadeInLater"
					/>
					<path
						in:fade={{ duration: 600, delay: 450 }}
						d="M98 37.3815L107.866 64.0434L108.025 64.4746L108.457 64.6342L135.118 74.5L108.457 84.3658L108.025 84.5254L107.866 84.9566L98 111.618L88.1342 84.9566L87.9746 84.5254L87.5434 84.3658L60.8815 74.5L87.5434 64.6342L87.9746 64.4746L88.1342 64.0434L98 37.3815Z"
						stroke="url(#paint2_linear_80_7106)"
						stroke-width="2"
						class="move-up-down fadeInLater"
					/>
				</g>
				<defs>
					<filter
						id="filter0_dii_80_7106"
						x="34"
						y="14.5"
						width="128"
						height="128"
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
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="12" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0.822844 0 0 0 0 0.85309 0 0 0 0 1 0 0 0 0.3 0"
						/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_80_7106" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_80_7106"
							result="shape"
						/>
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
						<feBlend mode="normal" in2="shape" result="effect2_innerShadow_80_7106" />
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
							in2="effect2_innerShadow_80_7106"
							result="effect3_innerShadow_80_7106"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_80_7106"
						x1="97.5"
						y1="0.5"
						x2="97.5"
						y2="194.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#020202" stop-opacity="0" />
						<stop offset="1" stop-color="#2C3E3C" stop-opacity="0.5" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_80_7106"
						x1="98"
						y1="34.5"
						x2="98"
						y2="114.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#D3F9FF" />
						<stop offset="1" stop-color="#96CDFF" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_80_7106"
						x1="98"
						y1="34.5"
						x2="98"
						y2="114.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#ECFFED" />
						<stop offset="1" stop-color="#ECF6FF" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	</div>
</div>

<style>
	/* Generate Up and Down Move Animation */
	@keyframes moveUpDown {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.move-up-down {
		animation: moveUpDown 1.2s infinite;
	}
</style>
