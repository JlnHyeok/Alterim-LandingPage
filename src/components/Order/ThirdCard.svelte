<script lang="ts">
	import { ProfileCat } from '$lib/assets/images';
	import { fade } from 'svelte/transition';
</script>

<div
	class="relative flex h-[50vh] w-[82vw] flex-row items-start justify-center gap-[49px] rounded-[20px] border border-white border-opacity-30 bg-black p-10 md:h-[65vh] md:w-[60vw]"
	style="background: linear-gradient(180deg, rgba(200, 207, 214, 0.11) 0%,rgba(200, 207, 214, 0.00) 100%); backdrop-filter:blur(32px);"
>
	<!-- LEFT SECTION -->
	<div
		in:fade={{ duration: 500 }}
		class="relative flex shrink-0 flex-col items-start justify-start gap-[35px] bg-blue-200 pb-7 pt-7"
	>
		<!-- NAME SECTION -->
		<div
			class="relative w-[80%] overflow-hidden bg-red-200 text-left font-['Pretendard-SemiBold',_sans-serif] text-[32px] font-semibold leading-[136%] text-[#ffffff]"
			style="text-overflow: ellipsis; "
		>
			Bitcoin Cats #9260
		</div>

		<!-- TITLE & DESCRIPTION & TAG SECTION -->
		<div
			class="relative flex shrink-0 flex-col items-start justify-start gap-8 border-b border-t border-solid border-[rgba(217,217,217,0.27)] pb-10 pt-10"
		>
			<div class="relative flex shrink-0 flex-col items-start justify-start gap-3">
				<!-- TITLE SECTION -->
				<div
					class="relative w-[504px] text-left font-['Pretendard-SemiBold',_sans-serif] text-base font-semibold leading-[166%] text-[#ffffff]"
				>
					Anime style PFP collector and meme coin trader
				</div>
				<!-- DESCRIPTION SECTION -->
				<div
					class="relative w-[504px] text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[166%] text-[#ffffff]"
					style="opacity: 0.800000011920929; "
				>
					Energetically creative, a bit mischievous, always looking to build or promote the next big
					thing in the virtual world. <br />Trend-focused and speculative, always on the lookout for
					the next big meme coin or NFT project to share with his followers
				</div>
			</div>

			<!-- TAG SECTION -->
			<div class="relative flex shrink-0 flex-row items-start justify-start gap-2.5">
				<div
					class="relative flex shrink-0 flex-row items-start justify-start gap-2.5 rounded-[50px] bg-[rgba(255,255,255,0.10)] pb-2.5 pl-2.5 pr-3.5 pt-2.5"
				>
					<div
						class="relative flex items-center justify-start px-1 text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[140%] text-[#ffffff]"
					>
						#playful
					</div>
				</div>
				<div
					class="relative flex shrink-0 flex-row items-start justify-start gap-2.5 rounded-[50px] bg-[rgba(255,255,255,0.10)] pb-2.5 pl-2.5 pr-3.5 pt-2.5"
				>
					<div
						class="relative flex items-center justify-start px-1 text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[140%] text-[#ffffff]"
					>
						#Meme is my life
					</div>
				</div>
				<div
					class="relative flex shrink-0 flex-row items-start justify-start gap-2.5 rounded-[50px] bg-[rgba(255,255,255,0.10)] pb-2.5 pl-2.5 pr-3.5 pt-2.5"
				>
					<div
						class="relative flex items-center justify-start px-1 text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[140%] text-[#ffffff]"
					>
						#GM
					</div>
				</div>
				<div
					class="relative flex shrink-0 flex-row items-start justify-start gap-2.5 rounded-[50px] bg-[rgba(255,255,255,0.10)] pb-2.5 pl-2.5 pr-3.5 pt-2.5"
				>
					<div
						class="relative flex items-center justify-start px-1 text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[140%] text-[#ffffff]"
					>
						#PFP
					</div>
				</div>
			</div>
		</div>

		<!-- SKILLS SECTION -->
		<div class="relative flex shrink-0 flex-row items-start justify-start gap-16 self-stretch">
			<div class="relative flex shrink-0 flex-col items-start justify-center gap-1">
				<div
					class="relative w-24 text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[159%] text-[#ffffff]"
					style="opacity: 0.5; "
				>
					Trading Style
				</div>
				<div class="relative flex w-[108px] shrink-0 flex-row items-center justify-start gap-2">
					<div
						class="relative text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[159%] text-[#ffffff]"
					>
						Risk Taker
					</div>
				</div>
			</div>
			<div class="relative flex flex-1 flex-col items-start justify-start gap-2 pl-2 pr-2">
				<div class="relative flex shrink-0 flex-row items-center justify-start gap-10">
					<div
						class="relative w-24 text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[159%] text-[#ffffff]"
						style="opacity: 0.5; "
					>
						Category
					</div>
					<div
						class="relative text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[159%] text-[#ffffff]"
					>
						Trendy
					</div>
				</div>
				<div class="relative flex shrink-0 flex-row items-center justify-start gap-10">
					<div
						class="relative w-24 text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[159%] text-[#ffffff]"
						style="opacity: 0.5; "
					>
						Type
					</div>
					<div
						class="relative text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[159%] text-[#ffffff]"
					>
						Meme coin lover
					</div>
				</div>
				<div class="relative flex shrink-0 flex-row items-center justify-start gap-10">
					<div
						class="relative w-24 text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[159%] text-[#ffffff]"
						style="opacity: 0.5; "
					>
						Style
					</div>
					<div
						class="relative text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-[159%] text-[#ffffff]"
					>
						Prefer DEX trading
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- RIGHT SECTION -->
	<div
		in:fade={{ duration: 500, delay: 350 }}
		class="relative hidden shrink-0 flex-col items-start justify-around self-stretch md:flex"
	>
		<!-- PROFILE IMAGE SECTION -->
		<div class="static h-[360px] w-[360px] shrink-0">
			<div
				class="absolute left-0 top-0 h-[360px] w-[360px] rounded-3xl"
				style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%,rgba(255, 255, 255, 0.00) 100%); border-image: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%,rgba(255, 255, 255, 0.00) 100%); border-image-slice: 1; box-shadow: 0px 4px 20px 0px rgba(174, 246, 203, 0.30); "
			></div>
			<img
				class="absolute left-[calc(50%_-_159px)] top-5 h-80 w-[318.86px]"
				style="object-fit: cover; "
				src={ProfileCat}
				alt="ProfileCat"
			/>
		</div>

		<!-- START BUTTON SECTION -->
		<div
			class="relative hidden shrink-0 flex-row items-center justify-center gap-3 self-stretch rounded-xl bg-[#131a18] pb-4 pl-10 pr-10 pt-4 md:flex"
		>
			<div
				class="relative text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-normal text-[#ffffff]"
			>
				Start Chat
			</div>
		</div>
	</div>
</div>
