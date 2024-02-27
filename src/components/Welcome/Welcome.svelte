<script lang="ts">
	import { browser } from '$app/environment';
	import { CardIn, CardWrap } from '$lib/assets/images';
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
	let cardInElement: HTMLElement;

	$: if (isInView && browser) {
		cardInElement = document.getElementById('card-in-text')!;

		setTimeout(() => {
			cardInElement.innerText = 'Clone';
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
	class="relative h-[100vh] w-full overflow-hidden p-10 duration-300
	{!isInView && 'z-0 opacity-0'}"
	use:inview={{ unobserveOnEnter: false, threshold: 0.6 }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isInView = inView;
	}}
>
	<main class="fixed left-0 top-0 flex h-full w-full flex-col justify-center gap-4">
		<!-- TEXT SECTION -->
		<div
			class="mx-auto flex h-[130px] w-full flex-col justify-center text-center font-Pretendard_ExtraLight text-xl duration-[0.6s] md:h-[300px] md:text-[3rem]
			{isInView ? 'opacity-1 scale-100' : 'opacity-0'}"
		>
			<span class="text-white"
				>Welcome to <strong class="text-font-highlight">Alterim</strong> , where your</span
			> <br class="hidden md:inline" />
			<span class=""> PFP now has a story, </span><br class="hidden md:inline" />
			<span>a personality, and a life of its own </span>
		</div>

		<!-- SOUL CARD SECTION -->
		<div
			class="relative mx-auto flex h-14 w-[300px] items-center justify-center md:h-20 3xl:w-[450px]"
		>
			<div
				class="absolute left-[0px] flex h-14 w-14 flex-col gap-4 text-center opacity-0 duration-300 md:h-14 md:w-14
				{isInView ? `serial-wrap-animation` : 'disappear-wrap hidden'}"
			>
				<span
					class="font-Pretendard_ExtraLight text-xs
				{isInView ? 'fade-out' : 'opacity-0'}">PFP</span
				>
				<img src={CardWrap} alt="card-wrap" class="w-full object-cover" />
			</div>
			<div
				id="card-in"
				class="absolute right-[0px] flex h-14 w-14 flex-col gap-4 text-center opacity-0 duration-300 md:h-14 md:w-14
				{isInView ? `serial-in-animation` : 'disappear-in hidden'}"
			>
				<span
					id="card-in-text"
					class="w-full text-center font-Pretendard_ExtraLight text-xs duration-1000
				{isInView ? 'fade-out' : 'opacity-0'}">Ai Soul</span
				>
				<img src={CardIn} alt="card-in" class="mx-auto mt-2 h-10 w-10 object-cover" />
			</div>
		</div>
	</main>
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
		animation: card-wrap-animation 1.5s 1.2s ease-in-out forwards;
	}
	.card-in-animation {
		animation: card-in-animation 1.5s 1.2s ease-in-out forwards;
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
	.serial-wrap-animation {
		animation-name: fade-in, card-wrap-animation;
		animation-delay: 0.6s, 1.7s;
		animation-duration: 1s, 1.2s;
		animation-fill-mode: forwards, forwards;
	}
	.serial-in-animation {
		animation-name: fade-in, card-in-animation;
		animation-delay: 0.6s, 1.7s;
		animation-duration: 1s, 1.2s;
		animation-fill-mode: forwards, forwards;
	}
</style>
