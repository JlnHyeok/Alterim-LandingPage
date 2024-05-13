<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { StartingImg } from '$lib/assets/images';

	let isInView: boolean = false;
</script>

<div
	class="relative flex h-[120vh] flex-col-reverse items-center justify-center gap-10 bg-light duration-300 dark:bg-dark md:flex-row md:gap-[98px]"
	use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isInView = inView;
	}}
>
	{#if isInView}
		<div class="relative flex shrink-0 flex-col items-center justify-start gap-12 text-white">
			<div
				class="relative flex w-full items-center justify-center self-stretch text-left font-['Pretendard-Medium',_sans-serif] text-[32px] font-medium leading-[120%] md:text-right"
				in:fade={{ duration: 1000, delay: 0 }}
				out:fade={{ duration: 1000, delay: 0 }}
			>
				<div class="w-full text-font-lightShallowGreen dark:text-font-darkBase">
					<span class="relative w-full">Starting from</span><br />
					<span
						class="relative w-full text-font-lightHighlightGreen1 dark:text-font-darkHighLightGreen1"
						>BRC-20</span
					>
					<span class="relative w-full"> to multichain </span>
				</div>
			</div>
			<div
				class="relative flex w-[85vw] items-center justify-end text-left font-Pretendard_Light text-base font-light leading-[160%] text-font-lightShallowGreen dark:text-font-darkBase md:w-[480px] md:text-right md:text-lg"
				in:fade={{ duration: 1000, delay: 700 }}
				out:fade={{ duration: 1000, delay: 0 }}
			>
				Embracing Interoperability with Alterim AI. While leveraging the excitement of the Bitcoin
				ecosystem and its BRC-20 advantage, we go beyond. Alterim supports a wide array of chains,
				enabling various wallet integrations. This approach ensures that any PFP holder can access
				and utilize our platform, irrespective of their blockchain preference.
			</div>
		</div>
		<!-- content here -->
		<img
			in:fade={{ duration: 1000, delay: 0 }}
			out:fade={{ duration: 1000, delay: 0 }}
			class="relative h-[85%] max-h-[374px] w-[85%] max-w-[374px] shrink-0 rounded-[20px]"
			style="object-fit: cover; "
			src={StartingImg}
			alt="StartingImg"
		/>
	{/if}
</div>
