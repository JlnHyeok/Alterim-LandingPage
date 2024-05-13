<script lang="ts">
	import SocialChat from '$components/Common/ChatCard/SocialChat.svelte';
	import type { IAvatarInfo } from '$components/Common/ChatCard/type';
	import { darkMode } from '$lib/store';

	export let screenSize: 'sm' | 'xl' = 'xl';
	export let isInView: boolean;
	export let avatarInfoArray: IAvatarInfo[];

	let animationClass = '';

	if (screenSize === 'xl') {
		animationClass = 'xl_social_y_animation';
	} else {
		animationClass = 'sm_social_y_animation';
	}
</script>

<div
	class="{$darkMode
		? 'chatbox_background_dark_mode'
		: 'chatbox_background_light_mode'} relative mx-auto flex h-[450px] w-[90%] flex-col justify-start overflow-hidden rounded-xl xl:h-[600px] xl:w-[450px]"
>
	<div
		class="relative flex h-full w-full flex-col items-center justify-center gap-4 p-2
		{isInView ? animationClass : 'translate-y-[100%]'}"
	>
		<!-- SOCIAL CHAT BOX -->
		{#each avatarInfoArray as avatarInfo}
			<SocialChat {avatarInfo} />
		{/each}
	</div>
</div>

<style>
	@keyframes xl-translate-social-y {
		0% {
			transform: translateY(620px);
		}
		20% {
			transform: translateY(480px);
		}
		40% {
			transform: translateY(360px);
		}
		60% {
			transform: translateY(230px);
		}
		80% {
			transform: translateY(110px);
		}
		100% {
			transform: translateY(-20px);
		}
	}

	@keyframes sm-translate-social-y {
		0% {
			transform: translateY(620px);
		}
		20% {
			transform: translateY(430px);
		}
		40% {
			transform: translateY(310px);
		}
		60% {
			transform: translateY(150px);
		}
		80% {
			transform: translateY(40px);
		}
		100% {
			transform: translateY(-120px);
		}
	}

	.xl_social_y_animation {
		animation: xl-translate-social-y 4s forwards;
	}

	.sm_social_y_animation {
		animation: sm-translate-social-y 4s forwards;
	}

	.chatbox_background_dark_mode {
		background: rgba(31, 31, 31, 0.6);
		backdrop-filter: blur(17px);
		box-shadow: 0px 4px 40px 0px rgba(174, 246, 203, 0.2);
	}
	.chatbox_background_light_mode {
		backdrop-filter: blur(17px);
		background: rgba(255, 255, 255, 0.949);
		box-shadow: 0px 4px 40px 0px rgba(174, 246, 203, 0.2);
	}
</style>
