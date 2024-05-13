<script lang="ts">
	import InvestChat from '$components/Common/ChatCard/InvestChat.svelte';
	import { darkMode } from '$lib/store';
	import type { ComponentType, SvelteComponent } from 'svelte';

	export let screenSize: 'sm' | 'xl' = 'xl';
	export let isInView: boolean;
	export let investChatPropsArray: {
		sender: 'me' | 'you';
		message: string;
		time?: string | undefined;
		component?: ComponentType<SvelteComponent> | undefined;
	}[];

	let animationClass = '';

	if (screenSize === 'xl') {
		animationClass = 'xl_talking_y_animation';
	} else {
		animationClass = 'sm_talking_y_animation';
	}
</script>

<!-- CHAT BOX SECTION -->
<div
	class="{$darkMode
		? 'chatbox_background_dark_mode'
		: 'chatbox_background_light_mode'} relative mx-auto flex h-[450px] w-[90%] flex-col justify-start rounded-xl xl:h-[600px] xl:w-[450px]"
>
	<!-- NAME SECTION -->
	<div class="overflow-hidden rounded-t-xl">
		<div
			class="{$darkMode
				? 'name_background_dark_mode'
				: 'name_background_light_mode'} flex h-14 items-center justify-center"
		>
			<span class="font-Pretendard_Regular text-[#0F0E12] dark:text-white"> James </span>
			<span class="inline font-Pretendard_Light text-[#0F0E12] dark:text-[#6E7984] xl:hidden">
				@Bitcoin Cats #9260</span
			>
		</div>
	</div>

	<!-- CHATTING SECTION -->
	<div class="flex h-full flex-col justify-end overflow-hidden p-3">
		<div
			class="blur_background absolute right-[50%] top-[30%] h-[380px] w-[380px] translate-x-[50%] rounded-full"
		></div>
		<div id="invest-chat" class={isInView ? animationClass : 'translate-y-[100%]'}>
			{#each investChatPropsArray as { sender, message, time, component }}
				<InvestChat {sender} {message} {time} {component} />
			{/each}
		</div>
	</div>
</div>

<style>
	.name_background_dark_mode {
		background: linear-gradient(91deg, #131c1a 10.8%, rgba(19, 28, 26, 0) 94.74%);
	}
	.name_background_light_mode {
		background: white;
	}
	.chatbox_background_dark_mode {
		background: rgba(9, 8, 8, 0.949);
		box-shadow: 0px 4px 40px 0px rgba(174, 246, 203, 0.1);
		backdrop-filter: blur(17px);
	}
	.chatbox_background_light_mode {
		backdrop-filter: blur(17px);
		background: rgba(255, 255, 255, 0.949);
	}

	@keyframes xl-translate-talking-y {
		0% {
			transform: translateY(700px);
		}
		15% {
			transform: translateY(610px);
		}
		30% {
			transform: translateY(510px);
		}
		45% {
			transform: translateY(450px);
		}
		60% {
			transform: translateY(385px);
		}
		75% {
			transform: translateY(180px);
		}
		90% {
			transform: translateY(110px);
		}
		100% {
			transform: translateY(10px);
		}
	}

	@keyframes sm-translate-talking-y {
		0% {
			transform: translateY(800px);
		}
		15% {
			transform: translateY(630px);
		}
		30% {
			transform: translateY(530px);
		}
		45% {
			transform: translateY(480px);
		}
		60% {
			transform: translateY(400px);
		}
		75% {
			transform: translateY(180px);
		}
		90% {
			transform: translateY(110px);
		}
		100% {
			transform: translateY(10px);
		}
	}

	.xl_talking_y_animation {
		animation: xl-translate-talking-y 5s forwards;
	}

	.sm_talking_y_animation {
		animation: sm-translate-talking-y 5s forwards;
	}

	.blur_background {
		background: radial-gradient(
			50% 50% at 50% 50%,
			rgba(0, 191, 145, 0.4) 0%,
			rgba(0, 191, 145, 0) 100%
		);
		filter: blur(150px);
	}
</style>
