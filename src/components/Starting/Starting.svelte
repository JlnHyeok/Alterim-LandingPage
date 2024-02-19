<script lang="ts">
	import { StartingImg } from '$lib/assets/images';
</script>

<div
	class="relative flex h-[60vh] flex-col-reverse items-center justify-center gap-10 md:flex-row md:gap-[98px]"
>
	<div class="relative flex shrink-0 flex-col items-center justify-start gap-12">
		<div
			class="relative flex w-full items-center justify-center self-stretch text-left font-['Pretendard-Medium',_sans-serif] text-[32px] font-medium leading-[120%] md:text-right"
		>
			<div class="w-full">
				<span class="relative w-full">Starting from</span><br />
				<span class="relative w-full text-font-highlight">BRC-20</span>
				<span class="relative w-full"> to multichain </span>
			</div>
		</div>
		<div
			class="relative flex w-[85vw] items-center justify-end text-left font-Pretendard_Light font-light leading-[160%] text-[#ffffff] md:w-[420px] md:text-right"
		>
			Embracing Interoperability with Alterim AI. While leveraging the excitement of the Bitcoin
			ecosystem and its BRC-20 advantage, we go beyond. Alterim supports a wide array of chains,
			enabling various wallet integrations. This approach ensures that any PFP holder can access and
			utilize our platform, irrespective of their blockchain preference.
		</div>
	</div>
	<img
		class="relative h-[85%] max-h-[374px] w-[85%] max-w-[374px] shrink-0 rounded-[20px]"
		style="object-fit: cover; "
		src={StartingImg}
		alt="StartingImg"
	/>
</div>
