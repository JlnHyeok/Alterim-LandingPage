<script lang="ts">
	export let screenSize: 'sm' | 'xl' = 'xl';
	export let isInView: boolean;
	export let talkingChatPropsArray: ITalkingChatProps[];

	import TalkingChat from '$components/Common/ChatCard/TalkingChat.svelte';
	import { flip } from 'svelte/animate';
	import type { ITalkingChatProps } from './constants';
</script>

<!-- CHAT BOX SECTION -->
<div
	class="chatbox_background relative mx-auto flex h-[450px] w-[90%] flex-col justify-start rounded-xl xl:h-[600px] xl:w-[450px]"
>
	<!-- NAME SECTION -->
	<div class="overflow-hidden rounded-t-xl">
		<div class="name_background flex h-14 items-center justify-center">
			<span class="font-Pretendard_Regular"> James </span>
			<span class="inline font-Pretendard_Light text-[#6E7984] xl:hidden">
				@Bitcoin Cats #9260</span
			>
		</div>
	</div>

	<!-- CHATTING SECTION -->
	<div class="flex h-full flex-col justify-end overflow-hidden p-3">
		<div class={isInView ? 'talking_y_animation' : ''}>
			{#each talkingChatPropsArray as { sender, message, time, uid } (uid)}
				<div animate:flip>
					<TalkingChat {sender} {message} {time} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.name_background {
		background: linear-gradient(91deg, #131c1a 10.8%, rgba(19, 28, 26, 0) 94.74%);
	}
	.chatbox_background {
		background: rgba(31, 31, 31, 0.6);
		backdrop-filter: blur(17px);
		box-shadow: 0px 4px 40px 0px rgba(174, 246, 203, 0.2);
	}

	@keyframes translate-talking-y {
		0% {
			transform: translateY(700px);
		}
		15% {
			transform: translateY(570px);
		}
		30% {
			transform: translateY(470px);
		}
		45% {
			transform: translateY(390px);
		}
		60% {
			transform: translateY(280px);
		}
		75% {
			transform: translateY(200px);
		}
		90% {
			transform: translateY(90px);
		}
		100% {
			transform: translateY(10px);
		}
	}

	.talking_y_animation {
		animation: translate-talking-y 10s forwards;
	}
</style>
