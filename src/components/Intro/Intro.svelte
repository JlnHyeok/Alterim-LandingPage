<script lang="ts">
	import { darkMode, isFirstLoad } from '$lib/store';
	import { scale } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { Logo, LightLogo, ScrollDown } from '$lib/assets/images';
	import AvatarList from './AvatarList.svelte';
	import Background from '$components/Common/Background/Background.svelte';

	let isInView: boolean;

	setTimeout(() => {
		$isFirstLoad = false;
	}, 5000);

	$: delay = $isFirstLoad ? 2600 : 0;
</script>

<div
	class="relative z-50 h-[calc(100vh-80px)] w-full justify-center bg-light text-white duration-300 dark:bg-dark"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-40%' }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isInView = inView;
	}}
>
	<Background />
	<!-- TITLE SECTION -->
	<div class="relative z-20 flex h-1/2 w-full flex-col items-center">
		<!-- LOGO -->
		{#if isInView}
			<div
				class="mt-20 h-20 w-16 md:mt-[160px]"
				in:scale={{ duration: 400, delay: delay, start: 1.5, opacity: 0 }}
			>
				<img src={$darkMode ? Logo : LightLogo} alt="logo" class="object-cover" />
			</div>
			<!-- MAIN TEXT -->
			<div
				class="w-[80%] text-center font-Pretendard_Regular text-[2rem] font-normal text-font-lightDeepGreen dark:text-white md:text-[48px]"
				in:scale={{ duration: 400, delay: delay + 200, start: 1.5, opacity: 0 }}
			>
				<h1>Meet Your Other Self in the Web3</h1>
			</div>
			<!-- SUB TEXT -->
			<div
				class="mt-6 w-[80%] text-center font-Pretendard_Light text-lg text-font-lightDeepGreen dark:text-[#ffffffbf] md:mt-0 md:text-[24px]"
				in:scale={{ duration: 800, delay: delay + 500, start: 1, opacity: 0 }}
			>
				<p>Where Your Digital Clone Comes to Life powered by AI</p>

				<div class="mb-4 mt-8 flex justify-center" style="position: relative; z-index: 999;">
					<a
						href="/generate-ai"
						class="hover:bg-gray-200 flex flex-row items-center justify-center gap-2.5 rounded-[40px] border-[#ffffff] bg-lightGray px-4 py-3 font-Pretendard_Regular text-sm font-normal text-font-lightDeepGreen transition duration-300 hover:text-black dark:bg-white dark:text-black md:w-[240px] md:text-lg"
					>
						<span>Start Generate AI Soul</span>
					</a>
				</div>
			</div>

			<a
				href="#welcome"
				class=" -bottom-36 z-20 flex h-14 flex-col items-center md:-bottom-24"
				in:scale={{ duration: 800, delay: delay + 800, start: 1, opacity: 0 }}
			>
				<span
					class="relative mt-4 font-Pretendard_ExtraLight text-[1rem] text-font-lightDeepGreen [text-shadow:0px_0px_10px_#ffffff80] dark:text-[#ffffffbf]"
					>scroll down</span
				>
				<div class="relative mt-4">
					<img src={ScrollDown} alt="scroll-down" />
				</div>
			</a>
		{/if}
	</div>

	<!-- AVATAR SECTION -->
	<div class="relative flex h-[calc(50%-80px)] w-full items-end bg-opacity-100 text-center">
		<AvatarList bind:isInView bind:isFirstTime={$isFirstLoad} />
	</div>
</div>
