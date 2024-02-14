<script lang="ts">
	import { ProfileCat } from '$lib/assets/images';
	import { fade } from 'svelte/transition';
</script>

<div
	class="w-[1000px] h-[630px] rounded-[20px] bg-black border border-opacity-30 border-white p-10 flex flex-row gap-[49px] items-start justify-start relative"
	style="background: linear-gradient(180deg, rgba(200, 207, 214, 0.11) 0%,rgba(200, 207, 214, 0.00) 100%); backdrop-filter:blur(32px);"
>
	<div
		in:fade={{ duration: 500 }}
		class="pt-7 pb-7 flex flex-col gap-[35px] items-start justify-start shrink-0 relative"
	>
		<div
			class="text-[#ffffff] text-left font-['Pretendard-SemiBold',_sans-serif] text-[32px] leading-[136%] font-semibold relative w-[473px] overflow-hidden"
			style="text-overflow: ellipsis; "
		>
			Bitcoin Cats #9260
		</div>
		<div
			class="border-solid border-[rgba(217,217,217,0.27)] border-t border-b pt-10 pb-10 flex flex-col gap-8 items-start justify-start shrink-0 relative"
		>
			<div class="flex flex-col gap-3 items-start justify-start shrink-0 relative">
				<div
					class="text-[#ffffff] text-left font-['Pretendard-SemiBold',_sans-serif] text-base leading-[166%] font-semibold relative w-[504px]"
				>
					Anime style PFP collector and meme coin trader
				</div>
				<div
					class="text-[#ffffff] text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[166%] font-normal relative w-[504px]"
					style="opacity: 0.800000011920929; "
				>
					Energetically creative, a bit mischievous, always looking to build or promote the next big
					thing in the virtual world. <br />Trend-focused and speculative, always on the lookout for
					the next big meme coin or NFT project to share with his followers
				</div>
			</div>
			<div class="flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
				<div
					class="bg-[rgba(255,255,255,0.10)] rounded-[50px] pt-2.5 pr-3.5 pb-2.5 pl-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative"
				>
					<div
						class="text-[#ffffff] px-1 text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[140%] font-normal relative flex items-center justify-start"
					>
						#playful
					</div>
				</div>
				<div
					class="bg-[rgba(255,255,255,0.10)] rounded-[50px] pt-2.5 pr-3.5 pb-2.5 pl-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative"
				>
					<div
						class="text-[#ffffff] px-1 text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[140%] font-normal relative flex items-center justify-start"
					>
						#Meme is my life
					</div>
				</div>
				<div
					class="bg-[rgba(255,255,255,0.10)] rounded-[50px] pt-2.5 pr-3.5 pb-2.5 pl-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative"
				>
					<div
						class="text-[#ffffff] px-1 text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[140%] font-normal relative flex items-center justify-start"
					>
						#GM
					</div>
				</div>
				<div
					class="bg-[rgba(255,255,255,0.10)] rounded-[50px] pt-2.5 pr-3.5 pb-2.5 pl-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative"
				>
					<div
						class="text-[#ffffff] px-1 text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[140%] font-normal relative flex items-center justify-start"
					>
						#PFP
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-row gap-16 items-start justify-start self-stretch shrink-0 relative">
			<div class="flex flex-col gap-1 items-start justify-center shrink-0 relative">
				<div
					class="text-[#ffffff] text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[159%] font-normal relative w-24"
					style="opacity: 0.5; "
				>
					Trading Style
				</div>
				<div class="flex flex-row gap-2 items-center justify-start shrink-0 w-[108px] relative">
					<div
						class="text-[#ffffff] text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[159%] font-normal relative"
					>
						Risk Taker
					</div>
				</div>
			</div>
			<div class="pr-2 pl-2 flex flex-col gap-2 items-start justify-start flex-1 relative">
				<div class="flex flex-row gap-10 items-center justify-start shrink-0 relative">
					<div
						class="text-[#ffffff] text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[159%] font-normal relative w-24"
						style="opacity: 0.5; "
					>
						Category
					</div>
					<div
						class="text-[#ffffff] text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[159%] font-normal relative"
					>
						Trendy
					</div>
				</div>
				<div class="flex flex-row gap-10 items-center justify-start shrink-0 relative">
					<div
						class="text-[#ffffff] text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[159%] font-normal relative w-24"
						style="opacity: 0.5; "
					>
						Type
					</div>
					<div
						class="text-[#ffffff] text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[159%] font-normal relative"
					>
						Meme coin lover
					</div>
				</div>
				<div class="flex flex-row gap-10 items-center justify-start shrink-0 relative">
					<div
						class="text-[#ffffff] text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[159%] font-normal relative w-24"
						style="opacity: 0.5; "
					>
						Style
					</div>
					<div
						class="text-[#ffffff] text-left font-['Pretendard-Regular',_sans-serif] text-base leading-[159%] font-normal relative"
					>
						Prefer DEX trading
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		in:fade={{ duration: 500, delay: 350 }}
		class="flex flex-col items-start justify-around self-stretch shrink-0 relative"
	>
		<div class="shrink-0 w-[360px] h-[360px] static">
			<div
				class="rounded-3xl w-[360px] h-[360px] absolute left-0 top-0"
				style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%,rgba(255, 255, 255, 0.00) 100%); border-image: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%,rgba(255, 255, 255, 0.00) 100%); border-image-slice: 1; box-shadow: 0px 4px 20px 0px rgba(174, 246, 203, 0.30); "
			></div>
			<img
				class="w-[318.86px] h-80 absolute left-[calc(50%_-_159px)] top-5"
				style="object-fit: cover; "
				src={ProfileCat}
				alt="ProfileCat"
			/>
		</div>
		<div
			class="bg-[#131a18] rounded-xl pt-4 pr-10 pb-4 pl-10 flex flex-row gap-3 items-center justify-center self-stretch shrink-0 relative"
		>
			<div
				class="text-[#ffffff] text-left font-['Pretendard-Regular',_sans-serif] text-base leading-normal font-normal relative"
			>
				Start Chat
			</div>
		</div>
	</div>
</div>
