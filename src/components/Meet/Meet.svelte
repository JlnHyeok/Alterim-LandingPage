<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isTextInView = false;
</script>

<div
	class="flex h-[100vh] w-full items-center justify-center"
	use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isTextInView = inView;
	}}
>
	{#if isTextInView}
		<!-- content here -->
		<div class="relative flex flex-col items-center justify-start gap-[73px]">
			<div class="relative flex shrink-0 flex-col items-center justify-start gap-8">
				<div
					class="relative flex items-center justify-center text-center font-Pretendard_Regular text-[32px] font-medium leading-[120%] text-[#ffffff]"
					in:fade={{ duration: 1000, delay: 0 }}
					out:fade={{ duration: 1000, delay: 0 }}
				>
					Meet your AI Soul
				</div>
				<div
					class="relative flex w-52 items-center justify-center text-center font-Pretendard_ExtraLight text-base font-light leading-[140%] text-white md:w-full"
					in:fade={{ duration: 1000, delay: 300 }}
					out:fade={{ duration: 1000, delay: 0 }}
				>
					at the heart of Alterim&#039;s Genesis NFT Collection.
				</div>
			</div>
			<div
				class="relative h-56 w-[184px] shrink-0 overflow-hidden rounded-[20px] bg-[#ffffff]"
				style="box-shadow: 0px 4px 44px 0px rgba(255, 255, 255, 0.25); "
				in:fade={{ duration: 1000, delay: 700 }}
				out:fade={{ duration: 1000, delay: 700 }}
			>
				<div class="absolute" style="inset: 0; ">
					<div
						class="absolute left-0 top-0 h-[200px] w-[200px]"
						style="background: linear-gradient(to left, #97bab0, #97bab0); object-fit: cover; "
					/>
				</div>
				<div class="absolute" style="inset: 0; ">
					<div
						class="absolute left-0 top-48 h-8 w-[184px] border border-solid border-[#97bab0] bg-[#c4dacc]"
					></div>
					<svg
						class="absolute left-[calc(50%_-_0px)] top-48 h-1.5 w-0 overflow-visible"
						style=""
						width="2"
						height="6"
						viewBox="0 0 2 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1 0V6" stroke="#97BAB0" />
					</svg>
					<svg
						class="absolute left-[calc(50%_-_0px)] top-[218px] h-1.5 w-0 overflow-visible"
						style=""
						width="2"
						height="6"
						viewBox="0 0 2 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1 0V6" stroke="#97BAB0" />
					</svg>
					<div class="absolute left-[13px] top-[204px] h-2 w-2 rounded-[50%] bg-[#97bab0]"></div>
					<svg
						class="absolute left-[35.71px] top-[199px] h-[18px] w-0 overflow-visible"
						style=""
						width="2"
						height="18"
						viewBox="0 0 2 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0.714844 0V18" stroke="#97BAB0" />
					</svg>
					<div class="static h-2.5 w-2">
						<div class="absolute left-[163.1px] top-[203px] h-2.5 w-[3px] bg-[#97bab0]"></div>
						<div class="absolute left-[168.1px] top-[203px] h-2.5 w-[3px] bg-[#97bab0]"></div>
					</div>
					<svg
						class="absolute left-[149px] top-[217px] h-[18px] w-0 overflow-visible"
						style="transform: translate(-0.5px, -18px); "
						width="2"
						height="18"
						viewBox="0 0 2 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1 18L1 3.8743e-07" stroke="#97BAB0" />
					</svg>
					<svg
						class="absolute left-[85px] top-[204px] h-2 w-[14.29px] overflow-visible"
						style=""
						width="15"
						height="8"
						viewBox="0 0 15 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 0H5.95238" stroke="#97BAB0" />
						<path d="M0 4H5.95238" stroke="#97BAB0" />
						<path d="M0 8H5.95238" stroke="#97BAB0" />
						<path d="M8.33203 0H14.2844" stroke="#97BAB0" />
						<path d="M8.33203 4H14.2844" stroke="#97BAB0" />
						<path d="M8.33203 8H14.2844" stroke="#97BAB0" />
					</svg>
				</div>
				<svg
					class="absolute bottom-[37.96%] left-[18.6%] right-[19.02%] top-[21.43%] h-[40.61%] w-[62.38%] overflow-visible"
					style=""
					width="115"
					height="91"
					viewBox="0 0 115 91"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_i_609_5708)">
						<path
							d="M98.4531 0.00585938H94.8144C85.7309 0.00585938 78.3672 7.36954 78.3672 16.4531C78.3672 25.5367 85.7309 32.9004 94.8144 32.9004H98.4531C107.537 32.9004 114.9 25.5367 114.9 16.4531C114.9 7.36954 107.537 0.00585938 98.4531 0.00585938Z"
							fill="#C4DACC"
						/>
						<path
							d="M91.3454 42.1299H36.6133C35.2703 42.1299 34.1818 43.2209 34.1818 44.5671V56.8289C34.1818 58.175 33.0933 59.2661 31.7504 59.2661H2.65411C1.31113 59.2661 0.222656 60.3571 0.222656 61.7032V88.5338C0.222656 89.88 1.31113 90.971 2.65411 90.971H39.0285C40.3715 90.971 41.4599 89.88 41.4599 88.5338V76.4023C41.4599 62.4252 45.4456 45.6092 74.2115 44.6919C75.5761 44.6485 76.7079 45.7558 76.7079 47.1291V88.5338C76.7079 89.88 77.7964 90.971 79.1394 90.971H112.568C113.911 90.971 114.999 89.88 114.999 88.5338V44.5671C114.999 43.2209 113.911 42.1299 112.568 42.1299H91.3454Z"
							fill="#C4DACC"
						/>
					</g>
					<defs>
						<filter
							id="filter0_i_609_5708"
							x="0.222656"
							y="0.00585938"
							width="114.777"
							height="94.9653"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
							<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
							<feBlend mode="normal" in2="shape" result="effect1_innerShadow_609_5708" />
						</filter>
					</defs>
				</svg>
			</div>
		</div>
	{/if}
</div>
