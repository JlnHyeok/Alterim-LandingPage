<script lang="ts">
	import { CardIn, CardWrap } from '$lib/assets/images';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
</script>

<div id="welcome" class="relative h-[100vh] w-full p-10">
	<main class="relative flex h-full w-full flex-col justify-center gap-4">
		<!-- TEXT SECTION -->
		<div
			class="mx-auto flex h-[130px] w-full flex-col justify-center text-center font-Pretendard_ExtraLight text-xl duration-[1.2s] md:h-[300px] md:text-[3rem]
			{isInView ? 'opacity-1 scale-100' : 'scale-0 opacity-0'}"
			use:inview={{ unobserveOnEnter: false, rootMargin: '-30%' }}
			on:inview_change={({ detail }) => {
				const { inView } = detail;
				isInView = inView;
			}}
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
				class="absolute left-[0px] h-14 w-14 opacity-0 duration-300 md:h-20 md:w-20
				{isInView ? `card-wrap-animation` : 'disappear-wrap'}"
			>
				<img src={CardWrap} alt="card-wrap" class="w-full object-cover" />
			</div>
			<div
				id="card-in"
				class="absolute right-[0px] h-10 w-10 opacity-0 duration-300 md:h-14 md:w-14
				{isInView ? `card-in-animation` : 'disappear-in'}"
			>
				<img src={CardIn} alt="card-in" class="h-full w-full object-cover" />
			</div>
		</div>
	</main>
</div>

<style>
	/* Generate translate X absolute Animation */
	@keyframes card-wrap-animation {
		0% {
			left: 0px;
			opacity: 0;
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
			opacity: 0;
		}
		60% {
			filter: brightness(1);
		}
		100% {
			opacity: 1;
			right: 50%;
			transform: translateX(50%);
			filter: brightness(0);
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
			filter: brightness(0);
		}
		100% {
			opacity: 0;
			right: 50%;
			transform: translateX(50%);
			filter: brightness(0);
		}
	}

	.card-wrap-animation {
		animation: card-wrap-animation 1s 0.4s ease-in-out forwards;
	}
	.card-in-animation {
		animation: card-in-animation 1s 0.4s ease-in-out forwards;
	}
	.disappear-wrap {
		animation: disappear-wrap 0.6s ease-in-out forwards;
	}
	.disappear-in {
		animation: disappear-in 0.6s ease-in-out forwards;
	}
</style>
