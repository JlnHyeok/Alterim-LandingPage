<script lang="ts">
	import SocialChat from '$components/Common/ChatCard/SocialChat.svelte';
	import type { IAvatarInfo } from '$components/Common/ChatCard/type';

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
	class="chatbox_background relative mx-auto flex h-[450px] w-[90%] flex-col justify-start overflow-hidden rounded-xl xl:h-[600px] xl:w-[450px]"
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
		animation: xl-translate-social-y 8s forwards;
	}

	.sm_social_y_animation {
		animation: sm-translate-social-y 8s forwards;
	}
</style>
