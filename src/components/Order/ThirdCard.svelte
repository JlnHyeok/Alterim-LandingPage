<script lang="ts">
	import { ProfileCat, ProfilePenguin } from '$lib/assets/images';
	import { fade } from 'svelte/transition';
</script>

<div
	class="relative flex w-[85vw] flex-row items-start justify-center gap-[49px] rounded-[20px] border border-white border-opacity-30 bg-black p-5 md:w-[80vw] md:max-w-[1000px] md:p-10"
	style="background: linear-gradient(180deg, rgba(200, 207, 214, 0.11) 0%,rgba(200, 207, 214, 0.00) 100%); backdrop-filter:blur(32px);"
>
	<!-- LEFT SECTION -->
	<div
		in:fade={{ duration: 500 }}
		class="relative flex w-full shrink-0 flex-col items-start justify-start gap-3 pb-0 md:pt-7 xl:w-1/2 xl:gap-[35px]"
	>
		<!-- NAME SECTION -->
		<div
			class="relative mx-auto flex w-full justify-start gap-4 overflow-hidden text-left font-Pretendard_Regular text-xl font-semibold leading-[136%] text-[#ffffff] md:gap-10 md:text-[32px] xl:mx-0 xl:block"
			style="text-overflow: ellipsis; "
		>
			<!-- SMALL SIZE PROFILE -->
			<div class="block h-20 w-20 overflow-hidden rounded-md xl:hidden">
				<img src={ProfilePenguin} alt="Profile" class="h-20 w-20 object-cover" />
			</div>
			<span class="flex w-40 flex-col justify-center md:block md:w-60 xl:w-full"
				>Bitcoin Penguin #9260</span
			>
		</div>

		<!-- TITLE & DESCRIPTION & TAG SECTION -->
		<div
			class="relative flex w-full shrink-0 flex-col items-start justify-start gap-4 border-b border-t border-none md:pt-10 xl:gap-8 xl:border-solid xl:border-[rgba(217,217,217,0.27)] xl:pb-10"
		>
			<!-- TITLE & DESCRIPTION -->
			<div class="relative flex w-full shrink-0 flex-col items-start justify-start gap-1.5">
				<!-- TITLE SECTION -->
				<h1
					class="relative w-3/4 text-left font-Pretendard_Regular text-base font-bold leading-[166%] text-[#ffffff] md:w-full"
				>
					Anime style PFP collector and meme coin trader
				</h1>
				<!-- DESCRIPTION SECTION -->
				<div
					class="relative w-full text-left font-Pretendard_Light text-sm font-normal leading-[166%] text-[#ffffff] xl:text-base"
					style="opacity: 0.800000011920929; "
				>
					Energetically creative, a bit mischievous, always looking to build or promote the next big
					thing in the virtual world. <br />
					<span class="hidden xl:inline">
						Trend-focused and speculative, always on the lookout for the next big meme coin or NFT
						project to share with his followers
					</span>
				</div>
			</div>

			<!-- TAG SECTION -->
			<div class="relative flex shrink-0 flex-row items-start justify-start gap-3 xl:gap-2.5">
				<div
					class="relative flex shrink-0 flex-row items-start justify-start gap-2.5 rounded-[50px] bg-[rgba(255,255,255,0.10)] pb-2.5 pl-2.5 pr-3.5 pt-2.5"
				>
					<div
						class="relative flex items-center justify-start px-1 text-left font-Pretendard_Regular text-sm font-normal leading-[140%] text-[#ffffff]"
					>
						#playful
					</div>
				</div>
				<div
					class="relative hidden shrink-0 flex-row items-start justify-start gap-2.5 rounded-[50px] bg-[rgba(255,255,255,0.10)] pb-2.5 pl-2.5 pr-3.5 pt-2.5 xl:flex"
				>
					<div
						class="relative items-center justify-start px-1 text-left font-Pretendard_Regular text-sm font-normal leading-[140%] text-[#ffffff]"
					>
						#Meme is my life
					</div>
				</div>
				<div
					class="relative hidden shrink-0 flex-row items-start justify-start gap-2.5 rounded-[50px] bg-[rgba(255,255,255,0.10)] pb-2.5 pl-2.5 pr-3.5 pt-2.5 xl:flex"
				>
					<div
						class="relative flex items-center justify-start px-1 text-left font-Pretendard_Regular text-sm font-normal leading-[140%] text-[#ffffff]"
					>
						#GM
					</div>
				</div>
				<div
					class="relative flex shrink-0 flex-row items-start justify-start gap-2.5 rounded-[50px] bg-[rgba(255,255,255,0.10)] pb-2.5 pl-2.5 pr-3.5 pt-2.5"
				>
					<div
						class="relative flex items-center justify-start px-1 text-left font-Pretendard_Regular text-sm font-normal leading-[140%] text-[#ffffff]"
					>
						#PFP
					</div>
				</div>
			</div>
		</div>

		<!-- SKILLS SECTION -->
		<div
			class="relative flex shrink-0 flex-col items-start justify-start self-stretch border-t-[1px] border-white border-opacity-20 pt-4 text-xs md:text-base xl:flex-row xl:gap-16 xl:border-t-0 xl:pt-0"
		>
			<div class="relative flex shrink-0 items-start justify-center gap-10 xl:flex-col xl:gap-1">
				<div
					class="relative w-24 text-left font-Pretendard_Regular font-normal leading-[159%] text-[#ffffff]"
					style="opacity: 0.5; "
				>
					Trading Style
				</div>
				<div class="relative flex w-[108px] shrink-0 flex-row items-center justify-start gap-2">
					<div
						class="relative text-left font-Pretendard_Regular font-normal leading-[159%] text-[#ffffff]"
					>
						Risk Taker
					</div>
				</div>
			</div>
			<div
				class="relative mt-2 flex flex-1 flex-col items-start justify-start gap-2 xl:mt-0 xl:pl-2 xl:pr-2"
			>
				<div class="relative flex shrink-0 flex-row items-center justify-start gap-10">
					<div
						class="relative w-24 text-left font-Pretendard_Regular font-normal leading-[159%] text-[#ffffff]"
						style="opacity: 0.5; "
					>
						Category
					</div>
					<div
						class="relative text-left font-Pretendard_Regular font-normal leading-[159%] text-[#ffffff]"
					>
						Trendy
					</div>
				</div>
				<div class="relative flex shrink-0 flex-row items-center justify-start gap-10">
					<div
						class="relative w-24 text-left font-Pretendard_Regular font-normal leading-[159%] text-[#ffffff]"
						style="opacity: 0.5; "
					>
						Type
					</div>
					<div
						class="relative text-left font-Pretendard_Regular font-normal leading-[159%] text-[#ffffff]"
					>
						Meme coin lover
					</div>
				</div>
				<div class="relative flex shrink-0 flex-row items-center justify-start gap-10">
					<div
						class="relative w-24 text-left font-Pretendard_Regular font-normal leading-[159%] text-[#ffffff]"
						style="opacity: 0.5; "
					>
						Style
					</div>
					<div
						class="relative text-left font-Pretendard_Regular font-normal leading-[159%] text-[#ffffff]"
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
		class="relative hidden shrink-0 flex-col items-start justify-around self-stretch xl:flex"
	>
		<!-- PROFILE IMAGE SECTION -->
		<div class=" static h-[360px] w-[360px] shrink-0">
			<div
				class=" absolute left-0 top-0 h-[360px] w-[360px] rounded-3xl"
				style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%,rgba(255, 255, 255, 0.00) 100%); border-image: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%,rgba(255, 255, 255, 0.00) 100%); border-image-slice: 1; box-shadow: 0px 4px 20px 0px rgba(174, 246, 203, 0.30); "
			></div>
			<img
				class="absolute left-[calc(50%_-_160px)] top-5 h-64 w-64 rounded-lg xl:h-80 xl:w-80"
				style="object-fit: cover; "
				src={ProfilePenguin}
				alt="ProfilePenguin"
			/>
		</div>

		<!-- START BUTTON SECTION -->
		<div
			class="relative hidden shrink-0 flex-row items-center justify-center gap-3 self-stretch rounded-xl bg-[#131a18] pb-4 pl-10 pr-10 pt-4 md:flex"
		>
			<div
				class="relative text-left font-Pretendard_Regular text-base font-normal leading-normal text-[#ffffff]"
			>
				Start Chat
			</div>
		</div>
	</div>
</div>
