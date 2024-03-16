<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { CardIn, CardWrap } from '$lib/assets/images';
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
	let cardInElement: HTMLElement;
	let inTimer: number;
	let outTimer: number;
	$: if (isInView && browser) {
		if (inTimer) clearTimeout(inTimer);
		inTimer = setTimeout(() => {
			cardInElement = document?.getElementById('card-in-text')!;
			if (cardInElement) {
				cardInElement.textContent = 'Clone';
				cardInElement.classList.remove('fade-out');
				cardInElement.setAttribute('opacity', '1');
			}
		}, 2500);
	}

	$: if (cardInElement && !isInView) {
		if (outTimer) clearTimeout(outTimer);
		setTimeout(() => {
			cardInElement.innerText = 'AI Soul';
		}, 800);
	}
</script>

<div
	id="welcome"
	class="relative mt-24 h-[150vh] w-full p-10 duration-300 md:mt-0
	{!isInView && 'z-0 opacity-0'}"
	use:inview={{ unobserveOnEnter: false, threshold: 0.5 }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isInView = inView;
	}}
>
	{#if isInView}
		<main class="z-0 flex h-full w-full flex-col justify-start gap-4 pt-10">
			<!-- TEXT SECTION -->
			<div
				class="sticky left-0 top-[35%] mx-auto flex h-[130px] w-full flex-col justify-center gap-0 text-center font-Pretendard_ExtraLight text-xl duration-[0.6s] md:top-[30%] md:h-[300px] md:gap-10 md:text-[3rem]"
				in:scale={{ duration: 500, start: 0, opacity: 0 }}
				out:fade={{ duration: 500 }}
			>
				<span class="text-white"
					>Welcome to <strong class="text-font-highlight">Alterim</strong> , where your</span
				>
				<span class=""> PFP now has a story, </span>
				<span>a personality, and a life of its own </span>
			</div>

			<div
				class="sticky left-0 top-[55%] mx-auto flex h-14 w-[300px] items-center justify-center md:top-[60%] md:h-20 3xl:w-[450px]"
				in:fade={{ duration: 500, delay: 500 }}
				out:fade={{ duration: 500 }}
			>
				<div
					class="card-wrap-animation absolute left-[0px] flex h-14 w-14 flex-col gap-10 text-center duration-300 md:h-14 md:w-14"
				>
					<span class="fade-out font-Pretendard_ExtraLight text-xs">PFP</span>
					<img src={CardWrap} alt="card-wrap" class="w-full object-cover" />
				</div>
				<div
					id="card-in"
					class="card-in-animation absolute right-[0px] flex h-14 w-14 flex-col gap-10 text-center duration-300 md:h-14 md:w-14"
				>
					<span
						id="card-in-text"
						class="fade-out w-full text-center font-Pretendard_ExtraLight text-xs duration-1000"
						>AI Soul</span
					>
					<img src={CardIn} alt="card-in" class="mx-auto mt-2 h-10 w-10 object-cover" />
				</div>
			</div>
		</main>
	{/if}
</div>

<style>
	@keyframes card-wrap-animation {
		0% {
			left: 0px;
			opacity: 1;
		}

		100% {
			opacity: 1;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	@keyframes card-in-animation {
		0% {
			right: 0px;
			opacity: 1;
		}

		100% {
			opacity: 1;
			right: 50%;
			transform: translateX(50%);
		}
	}
	@keyframes disappear-wrap {
		0% {
			opacity: 1;
			left: 50%;
			transform: translateX(-50%);
		}
		100% {
			opacity: 0;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	@keyframes disappear-in {
		0% {
			opacity: 1;
			right: 50%;
			transform: translateX(50%);
		}
		100% {
			opacity: 0;
			right: 50%;
			transform: translateX(50%);
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes fade-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.card-wrap-animation {
		animation: card-wrap-animation 1s 1.2s ease-in-out forwards;
	}
	.card-in-animation {
		animation: card-in-animation 1s 1.2s ease-in-out forwards;
	}
	.disappear-wrap {
		animation: disappear-wrap 0.6s ease-in-out forwards;
	}
	.disappear-in {
		animation: disappear-in 0.6s ease-in-out forwards;
	}
	.fade-in {
		animation: fade-in 1s 1s ease-in-out forwards;
	}
	.fade-out {
		animation: fade-out 1s 1.4s ease-in-out forwards;
	}
</style>
