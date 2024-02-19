<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade, scale } from 'svelte/transition';

	let isTextInView: boolean;
	let isBtnInView: boolean;
</script>

<div
	class="flex h-screen w-screen flex-col items-center justify-center gap-10 overflow-hidden"
	use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isTextInView = inView;
	}}
>
	<div class="text-center">
		<h1
			class="font-Pretendard_Regular text-2xl text-font-dark opacity-0 duration-500 md:text-[3rem]
      {isTextInView ? 'scale-100 opacity-100' : 'scale-[2]'}"
		>
			Join Alterim World with
		</h1>
		<h1
			class="font-Pretendard_Regular text-2xl text-font-dark opacity-0 duration-500 md:text-[3rem]
      {isTextInView ? 'scale-100 opacity-100' : 'scale-[2]'}"
		>
			your NFT
		</h1>
	</div>
	{#if isTextInView}
		<!-- content here -->
		<div
			class="relative flex w-[200px] shrink-0 flex-row items-center justify-center gap-2.5 overflow-hidden rounded-[40px] bg-[#ffffff] py-2 duration-500"
			style="box-shadow: 0px 9px 34px 0px rgba(212, 212, 212, 0.50); "
			in:scale={{ duration: 400, delay: 700, start: 1.5, opacity: 0 }}
		>
			<a
				href="https://alterim-ai.gitbook.io/welcometoalterim/usdaim/usdaim"
				target="_blank"
				class="relative text-center font-Pretendard_Regular text-sm text-[#020202] md:text-lg"
			>
				Comming Soon
			</a>
		</div>
	{/if}
</div>
