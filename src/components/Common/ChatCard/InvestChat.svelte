<script lang="ts">
	import { darkMode } from '$lib/store';
	import type { ComponentType, SvelteComponent } from 'svelte';

	export let message: string;
	export let sender: 'me' | 'you';
	export let time: undefined | string;
	export let component: undefined | ComponentType<SvelteComponent>;
</script>

<div
	class="mt-2 flex w-full flex-col font-Pretendard_ExtraLight
	{sender == 'me' ? 'items-end' : 'items-start'}"
>
	{#if component}
		<svelte:component this={component} />
	{:else}
		<div
			class="flex w-fit min-w-0 max-w-[96%] shrink-0 flex-row items-end justify-start gap-2.5 break-all rounded-[40px] px-[1.1rem] py-[0.75rem] text-sm text-[#0F0E12] dark:text-[#f8fff6d8]
       {sender == 'me'
				? $darkMode
					? 'me_background_dark_mode'
					: 'me_background_light_mode'
				: $darkMode
					? 'you_background_dark_mode'
					: 'you_background_light_mode'}"
		>
			<span class="w-full">{message}</span>
		</div>
	{/if}
	{#if time}
		<span class="w-fit px-4 py-1 text-[0.65rem] text-[#6E6E6E] dark:text-[#d2d2d2]">{time}</span>
	{/if}
</div>

<style>
	.me_background_dark_mode {
		background: rgba(134, 138, 133, 0.1);
		box-shadow: 0px 3.089px 12.356px 0px rgba(0, 0, 0, 0.149);
	}
	.me_background_light_mode {
		background: rgba(248, 255, 246, 0.1);
		box-shadow: 0px 3.089px 12.356px 0px rgba(0, 0, 0, 0.08);
	}
	.you_background_dark_mode {
		border: 0.5px solid rgba(208, 255, 227, 0.12);
		background: linear-gradient(
			180deg,
			rgba(31.28, 93.49, 89.76, 0.02) 0%,
			rgba(31.28, 93.49, 89.76, 0.02) 0%,
			rgba(251.73, 251.73, 251.73, 0.05) 100%
		);
	}

	.you_background_light_mode {
		border: 0.5px solid rgba(208, 255, 227, 0);
		box-shadow: 0px 3.089px 12.356px 0px rgba(0, 0, 0, 0.08);
		background: linear-gradient(
			92deg,
			rgba(31, 93, 90, 0.04) 4.91%,
			rgba(31, 93, 90, 0.04) 4.91%,
			rgba(252, 252, 252, 0.04) 61.03%
		);
	}
</style>
