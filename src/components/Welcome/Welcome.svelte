<script lang="ts">
	import { CardIn, CardWrap } from '$lib/assets/images';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
</script>

<div id="welcome" class="relative h-[90vh] w-screen p-10">
	<main class="relative mt-20 flex h-full w-full flex-col justify-center gap-4">
		<!-- TEXT SECTION -->
		<div
			class="mx-auto h-[300px] w-full text-center font-Pretendard_Regular text-[3rem] duration-[1.2s]
			{isInView ? 'opacity-1 scale-100' : 'scale-0 opacity-0'}"
			use:inview={{ unobserveOnEnter: false, rootMargin: '-30%' }}
			on:inview_change={({ detail }) => {
				const { inView } = detail;
				isInView = inView;
			}}
		>
			<span class="text-white">Welcome to </span>
			<span class="text-font-highlight">Alterim</span>
			<span class="text-white"> , where your </span> <br />
			<span> PFP now has a story, </span><br />
			<span>a personality, and a life of its own </span>
		</div>

		<!-- SOUL CARD SECTION -->
		<div class="relative mx-auto flex h-20 w-[300px] items-center justify-center 3xl:w-[450px]">
			<div
				class="absolute left-[0px] h-20 w-20 opacity-0 duration-300
				{isInView ? `card-wrap-animation` : 'disappear-wrap'}"
			>
				<img src={CardWrap} alt="card-wrap" class="w-full object-cover" />
			</div>
			<div
				id="card-in"
				class="absolute right-[0px] h-14 w-14 opacity-0 duration-300
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
