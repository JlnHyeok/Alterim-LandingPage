<script lang="ts">
	import { StartingImg } from '$lib/assets/images';
</script>

<div class="w-full h-[80vh] flex justify-center">
	<div class="flex flex-row gap-[98px] items-center justify-start relative">
		<div class="flex flex-col gap-12 items-end justify-start shrink-0 relative">
			<div
				class="text-right font-['Pretendard-Medium',_sans-serif] text-[32px] leading-[120%] font-medium relative self-stretch flex items-center justify-end"
			>
				<div>
					<span class="starting-from-brc-20-to-multichain-span">Starting from</span><br />
					<span class="text-font-highlight">BRC-20</span>
					<span class="starting-from-brc-20-to-multichain-span3"> to multichain </span>
				</div>
			</div>
			<div
				class="text-[#ffffff] text-right font-['Pretendard-Light',_sans-serif] text-base leading-[160%] font-light relative w-[420px] flex items-center justify-end"
			>
				Embracing Interoperability with Alterim AI. While leveraging the excitement of the Bitcoin
				ecosystem and its BRC-20 advantage, we go beyond. Alterim supports a wide array of chains,
				enabling various wallet integrations. This approach ensures that any PFP holder can access
				and utilize our platform, irrespective of their blockchain preference.
			</div>
		</div>
		<img
			class="rounded-[20px] shrink-0 w-[376px] h-[376px] relative"
			style="object-fit: cover; "
			src={StartingImg}
			alt="StartingImg"
		/>
	</div>
</div>
