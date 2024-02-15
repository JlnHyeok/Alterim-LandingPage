<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade, scale } from 'svelte/transition';

	let isTextInView: boolean;
	let isBtnInView: boolean;
</script>

<div
	class="w-full h-screen flex flex-col justify-center items-center gap-10"
	use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isTextInView = inView;
	}}
>
	<div class="text-center">
		<h1
			class="font-Pretendard_Regular text-[3rem] text-font-dark duration-500 opacity-0
      {isTextInView ? 'scale-100 opacity-100' : 'scale-[2]'}"
		>
			Join Alterim World with
		</h1>
		<h1
			class="font-Pretendard_Regular text-[3rem] text-font-dark duration-500 opacity-0
      {isTextInView ? 'scale-100 opacity-100' : 'scale-[2]'}"
		>
			your NFT
		</h1>
	</div>
	{#if isTextInView}
		<!-- content here -->
		<div
			class="bg-[#ffffff] rounded-[40px] py-2 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[200px] relative overflow-hidden duration-500"
			style="box-shadow: 0px 9px 34px 0px rgba(212, 212, 212, 0.50); "
			in:scale={{ duration: 400, delay: 700, start: 1.5, opacity: 0 }}
		>
			<a
				href="https://alterim-ai.gitbook.io/welcometoalterim/usdaim/usdaim"
				target="_blank"
				class="text-[#020202] text-center font-Pretendard_Regular text-lg relative"
			>
				Comming Soon
			</a>
		</div>
	{/if}
</div>
