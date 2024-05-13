<script lang="ts">
	export let isInView: boolean;
	export let talkingChatPropsArray: ITalkingChatProps[];

	import TalkingChat from '$components/Common/ChatCard/TalkingChat.svelte';
	import { flip } from 'svelte/animate';
	import type { ITalkingChatProps } from './constants';
	import { darkMode } from '$lib/store';
</script>

<!-- CHAT BOX SECTION -->
<div
	class="{$darkMode
		? 'chatbox_background_dark_mode'
		: 'chatbox_background_light_mode'} relative mx-auto flex h-[450px] w-[90%] flex-col justify-start rounded-xl sm:w-[450px] xl:h-[600px] xl:w-[450px]"
>
	<!-- NAME SECTION -->
	<div class="overflow-hidden rounded-t-xl border-b-[1px] border-gray">
		<div
			class="flex h-14 items-center justify-center
			{$darkMode ? 'name_background_dark_mode' : 'name_background_light_mode'} "
		>
			<span class="font-Pretendard_Regular text-font-lightShallowGreen dark:text-font-darkBase">
				James
			</span>
			<span class="inline font-Pretendard_Light text-[#6E7984] xl:hidden">
				@Bitcoin Cats #9260</span
			>
		</div>
	</div>

	<!-- CHATTING SECTION -->
	<div class="flex h-full flex-col justify-end overflow-hidden p-3">
		<div class={isInView ? 'talking_y_animation' : 'translate-y-[100%]'}>
			{#each talkingChatPropsArray as { sender, message, time, uid } (uid)}
				<div animate:flip>
					<TalkingChat {sender} {message} {time} />
				</div>
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
		background: rgba(31, 31, 31, 0.6);
		backdrop-filter: blur(17px);
		box-shadow: 0px 4px 40px 0px rgba(174, 246, 203, 0.2);
	}
	.chatbox_background_light_mode {
		backdrop-filter: blur(17px);
		background: rgba(255, 255, 255, 0.949);
		box-shadow: 0px 4px 40px 0px rgba(174, 246, 203, 0.2);
	}

	@keyframes translate-talking-y {
		0% {
			transform: translateY(700px);
		}
		15% {
			transform: translateY(520px);
		}
		30% {
			transform: translateY(440px);
		}
		45% {
			transform: translateY(360px);
		}
		60% {
			transform: translateY(260px);
		}
		75% {
			transform: translateY(190px);
		}
		90% {
			transform: translateY(90px);
		}
		100% {
			transform: translateY(10px);
		}
	}

	.talking_y_animation {
		animation: translate-talking-y 5s forwards;
	}
</style>
