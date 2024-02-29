<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { CardIn, CardWrap } from '$lib/assets/images';
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
	let cardInElement: HTMLElement;

	$: if (isInView && browser) {
		setTimeout(() => {
			cardInElement = document.getElementById('card-in-text')!;
			cardInElement.textContent = 'Clone';
			cardInElement.classList.remove('fade-out');
			cardInElement.setAttribute('opacity', '1');
		}, 2500);
	}

	$: if (cardInElement && !isInView) {
		setTimeout(() => {
			cardInElement.innerText = 'Ai Soul';
		}, 800);
	}
</script>

<div
	id="welcome"
	class="relative h-[100vh] w-full overflow-hidden p-10"
	use:inview={{ unobserveOnEnter: false, threshold: 0.7 }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isInView = inView;
	}}
>
{#if isInView}
	<main class="fixed left-0 top-0 flex h-full w-full flex-col justify-center gap-4 z-10">
		<!-- TEXT SECTION -->
			<div
				class="mx-auto flex h-[130px] w-full flex-col justify-center text-center font-Pretendard_ExtraLight text-xl duration-[0.6s] md:h-[300px] md:text-[3rem]"
				in:scale={{ duration: 500, start: 0, opacity: 0 }}
				out:fade={{ duration: 300 }}
			>
				<span class="text-white"
					>Welcome to <strong class="text-font-highlight">Alterim</strong> , where your</span
				> <br class="hidden md:inline" />
				<span class=""> PFP now has a story, </span><br class="hidden md:inline" />
				<span>a personality, and a life of its own </span>
			</div>

			<div
				class="relative mx-auto flex h-14 w-[300px] items-center justify-center md:h-20 3xl:w-[450px]"
				in:fade={{ duration: 500, delay: 500 }}
				out:fade={{ duration: 500 }}
			>
				<div
					class="card-wrap-animation absolute left-[0px] flex h-14 w-14 flex-col gap-4 text-center duration-300 md:h-14 md:w-14"
				>
					<span class="fade-out font-Pretendard_ExtraLight text-xs">PFP</span>
					<img src={CardWrap} alt="card-wrap" class="w-full object-cover" />
				</div>
				<div
					id="card-in"
					class="card-in-animation absolute right-[0px] flex h-14 w-14 flex-col gap-4 text-center duration-300 md:h-14 md:w-14"
				>
					<span
						id="card-in-text"
						class="fade-out w-full text-center font-Pretendard_ExtraLight text-xs duration-1000"
						>Ai Soul</span
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
