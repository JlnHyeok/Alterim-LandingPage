<script lang="ts">
	import Title from '$components/Common/Title.svelte';
	import Typewritter from 'svelte-typewriter';
</script>

<div
	class="scale-animation fixed z-30 flex h-screen w-screen items-center justify-center gap-3 bg-black font-Pretendard_Light text-[3rem] text-font-dark"
>
	<div class="move-right absolute z-10 h-10 w-48 bg-black"></div>
	<Title textColor="white" size="scale-[1.5]" />
	<!-- <svg
		class="fade-in opacity-0 duration-200 w-[60px] h-[60px] scale-90 relative overflow-visible flex justify-center items-center"
		width="40"
		height="40"
		viewBox="0 0 20 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M20.9587 0.601562H2.61984L0 24.6234H23.5785L20.9587 0.601562ZM13.5584 10.6768L11.7894 5.8063L10.0204 10.6768L5.23983 12.479L10.0204 14.2813L11.7894 19.1518L13.5584 14.2813L18.339 12.479L13.5584 10.6768Z"
			fill="#ffffff"
		/>
	</svg>
	<Typewritter cursor={true} delay={450} interval={80} keepCursorOnFinish={true}>
		<h1>Alterim</h1>
	</Typewritter> -->
</div>

<style>
	* {
		--cursor-color: #ffffff;
		--cursor-width: 2px;
	}

	@keyframes scale-animation {
		0% {
			opacity: 1;
		}

		100% {
			/* transform: scale(0); */
			z-index: 0;
			opacity: 0;
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

	@keyframes move-right {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(12rem);
		}
	}

	.scale-animation {
		animation: scale-animation 0.8s 2.5s ease-in-out forwards;
	}
	.fade-in {
		animation: fade-in 0.4s 0.3s linear forwards;
	}
	.move-right {
		animation: move-right 1s 0.4s linear forwards;
	}
</style>
