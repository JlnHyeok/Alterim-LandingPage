<script lang="ts">
	import Footer from '$components/Footer/Footer.svelte';
	import { inview } from 'svelte-inview';
	import { fade, fly, scale } from 'svelte/transition';

	let isTextInView: boolean;
	let isBtnInView: boolean;
</script>

<div
	class="flex h-screen w-screen flex-col items-center justify-center gap-10 overflow-hidden md:h-[120vh]"
	use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isTextInView = inView;
	}}
>
	{#if isTextInView}
		<div class="text-center md:flex md:justify-center md:gap-2">
			<h1
				class="font-Pretendard_Regular text-2xl text-font-dark md:text-[3rem]"
				in:scale={{ duration: 500, delay: 100, start: 1.5, opacity: 0 }}
			>
				Join Alterim World
			</h1>
			<br class="hidden md:flex" />
			<h1
				class="font-Pretendard_Regular text-2xl text-font-dark duration-500 md:text-[3rem]"
				in:scale={{ duration: 500, delay: 300, start: 1.5, opacity: 0 }}
			>
				with your NFT
			</h1>
		</div>
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
				Launch Demo
			</a>
		</div>

		<div class="absolute bottom-0 w-full overflow-hidden">
			<div
				class="relative"
				in:fly={{ duration: 500, delay: 100, y: 100, opacity: 0 }}
				out:fly={{ duration: 500, delay: 0, y: 100, opacity: 0 }}
			>
				<Footer />
			</div>
		</div>
	{/if}
</div>
