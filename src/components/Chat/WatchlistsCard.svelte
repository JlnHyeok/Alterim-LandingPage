<script>
	import { darkMode } from '$lib/store';
</script>

<div
	class="relative flex w-[280px] flex-col items-start justify-end gap-[16px] rounded-[12px] px-[16px] pb-[18px] pt-[16px]
	{$darkMode ? 'bg-[#f8fff61a]' : 'chat_background'} "
>
	<div
		class="relative mt-[-0.50px] w-fit whitespace-nowrap text-right text-[10px] font-extralight leading-[14.1px] tracking-[0.10px] text-[#0F0E12] [font-family:'Pretendard-ExtraLight',Helvetica] dark:text-[#f8fff6]"
	>
		Watchlists
	</div>
	<div class="relative flex w-full flex-[0_0_auto] flex-col items-start justify-end self-stretch">
		<div
			class="relative flex w-full flex-[0_0_auto] items-end justify-between self-stretch border-b-[0.2px] border-[#ffffff80] px-0 py-[10px] [border-bottom-style:solid]"
		>
			<div class="relative inline-flex flex-[0_0_auto] items-end gap-[3px]">
				<div
					class="relative mt-[-1.00px] w-fit whitespace-nowrap text-right text-[12px] font-medium leading-[16.8px] tracking-[0.12px] text-[#0F0E12] [font-family:'Pretendard-Medium',Helvetica] dark:text-[#f8fff6]"
				>
					$CATs
				</div>
			</div>
			<div class="relative inline-flex flex-[0_0_auto] items-center gap-[4px]">
				<div
					class="relative mt-[-1.00px] w-fit whitespace-nowrap text-right text-[10px] font-extralight leading-[14.1px] tracking-[0.10px] text-[#0F0E12] [font-family:'Pretendard-ExtraLight',Helvetica] dark:text-[#f8fff6]"
				>
					$0.000012
				</div>
				<div
					class="relative mt-[-1.00px] w-fit whitespace-nowrap text-right text-[10px] font-normal leading-[14.1px] tracking-[0.10px] text-[#6ce5dc] [font-family:'Pretendard-Regular',Helvetica]"
				>
					+12%
				</div>
			</div>
		</div>
		<div
			class="relative flex w-full flex-[0_0_auto] items-end justify-between self-stretch border-b-[0.2px] border-[#ffffff80] px-0 py-[10px] [border-bottom-style:solid]"
		>
			<div class="relative inline-flex flex-[0_0_auto] items-end gap-[3px]">
				<div
					class="relative mt-[-1.00px] w-fit whitespace-nowrap text-right text-[12px] font-medium leading-[16.8px] tracking-[0.12px] text-[#0F0E12] [font-family:'Pretendard-Medium',Helvetica] dark:text-[#f8fff6]"
				>
					$LION
				</div>
			</div>
			<div class="relative inline-flex flex-[0_0_auto] items-center gap-[4px]">
				<div
					class="relative mt-[-1.00px] w-fit whitespace-nowrap text-right text-[10px] font-extralight leading-[14.1px] tracking-[0.10px] text-[#0F0E12] [font-family:'Pretendard-ExtraLight',Helvetica] dark:text-[#f8fff6]"
				>
					$0.000043
				</div>
				<div
					class="relative mt-[-1.00px] w-fit whitespace-nowrap text-right text-[10px] font-normal leading-[14.1px] tracking-[0.10px] text-[#ff6868] [font-family:'Pretendard-Regular',Helvetica]"
				>
					-64%
				</div>
			</div>
		</div>
		<div
			class="relative flex w-full flex-[0_0_auto] items-end justify-between self-stretch border-b-[0.2px] border-[#ffffff80] px-0 py-[10px] [border-bottom-style:solid]"
		>
			<div class="relative inline-flex flex-[0_0_auto] items-end gap-[3px]">
				<div
					class="relative mt-[-1.00px] w-fit whitespace-nowrap text-right text-[12px] font-medium leading-[16.8px] tracking-[0.12px] text-[#0F0E12] [font-family:'Pretendard-Medium',Helvetica] dark:text-[#f8fff6]"
				>
					$UNICORN
				</div>
			</div>
			<div class="relative inline-flex flex-[0_0_auto] items-center gap-[4px]">
				<div
					class="relative mt-[-1.00px] w-fit whitespace-nowrap text-right text-[10px] font-extralight leading-[14.1px] tracking-[0.10px] text-[#0F0E12] [font-family:'Pretendard-ExtraLight',Helvetica] dark:text-[#f8fff6]"
				>
					$0.068
				</div>
				<div
					class="relative mt-[-1.00px] w-fit whitespace-nowrap text-right text-[10px] font-normal leading-[14.1px] tracking-[0.10px] text-[#ff6868] [font-family:'Pretendard-Regular',Helvetica]"
				>
					-33%
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.chat_background {
		background: rgba(248, 255, 246, 0.1);
		box-shadow: 0px 3.089px 12.356px 0px rgba(0, 0, 0, 0.08);
	}
</style>
