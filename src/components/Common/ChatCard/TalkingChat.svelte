<script lang="ts">
	import { darkMode } from '$lib/store';

	export let message: string;
	export let sender: 'me' | 'you';
	export let time: undefined | string;
</script>

<div
	class="mt-4 flex w-full flex-col font-Pretendard_Light
	{sender == 'me' ? 'items-end' : 'items-start'}"
>
	<div
		class="flex w-fit min-w-0 max-w-[96%] shrink-0 flex-row items-end justify-start gap-2.5 break-all rounded-[40px] px-[0.85rem] py-[0.75rem] text-xs text-font-lightShallowGreen dark:text-font-darkBase
		{sender == 'me'
			? $darkMode
				? 'me_background_dark_mode'
				: 'me_background_light_mode'
			: $darkMode
				? 'you_background_dark_mode'
				: 'you_background_light_mode'}"
		style="box-shadow: 0px 3.09px 12.36px 0px rgba(0, 0, 0, 0.08); "
	>
		<span class="w-full">{message}</span>
	</div>
	{#if time}
		<span class="w-fit px-4 py-1 text-[0.65rem] text-font-lightShallowGreen dark:text-[#d2d2d2]"
			>{time}</span
		>
	{/if}
</div>

<style>
	.me_background_dark_mode {
		background-color: rgba(248, 255, 246, 0.1);
	}
	.me_background_light_mode {
		background: #f5f5f5;
	}
	.you_background_dark_mode {
		background-color: rgba(19, 135, 129, 0.18);
	}
	.you_background_light_mode {
		border: 0.5px solid rgba(34, 32, 52, 0);
		background: linear-gradient(91deg, #fff -7.88%, rgba(252, 252, 252, 0.22) 100.12%);
	}
</style>
