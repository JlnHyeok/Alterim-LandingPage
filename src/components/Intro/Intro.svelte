<script lang="ts">
	import { scale } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { Logo, ScrollDown } from '$lib/assets/images';
	import AvatarList from './AvatarList.svelte';

	export let isInView: boolean;
</script>

<div
	class="relative w-full h-screen text-white"
	use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isInView = inView;
	}}
>
	<!-- TITLE SECTION -->
	<div class="w-full h-1/2 flex flex-col items-center relative">
		<!-- LOGO -->
		{#if isInView}
			<div
				class="w-16 h-20 mt-[160px]"
				in:scale={{ duration: 400, delay: 300, start: 1.5, opacity: 0 }}
			>
				<img src={Logo} alt="logo" class="object-cover" />
			</div>
		{/if}

		<!-- MAIN TEXT -->
		{#if isInView}
			<div
				class="font-Pretendard_Regular font-normal text-white text-[48px]"
				in:scale={{ duration: 400, delay: 500, start: 1.5, opacity: 0 }}
			>
				<h1>Meet Your Other Self in the Web3</h1>
			</div>
		{/if}

		<!-- SUB TEXT -->
		{#if isInView}
			<div
				class="font-Pretendard_Light text-[24px] text-[#ffffffbf]"
				in:scale={{ duration: 800, delay: 800, start: 1, opacity: 0 }}
			>
				<p>Where Your Digital Clone Comes to Life powered by AI</p>
			</div>
		{/if}

		<a href="#welcome" class="absolute flex flex-col items-center h-14 -bottom-24 z-20">
			<span
				class="font-Pretendard_ExtraLight [text-shadow:0px_0px_10px_#ffffff80] text-[#ffffffbf] text-[1rem]"
				>scroll down</span
			>
			<div class="relative mt-4">
				<img src={ScrollDown} alt="scroll-down" />
			</div>
		</a>
	</div>

	<!-- AVATAR SECTION -->
	<div class="w-full h-[calc(50%-80px)] relative text-center flex items-end">
		<AvatarList bind:isInView />
	</div>
</div>
