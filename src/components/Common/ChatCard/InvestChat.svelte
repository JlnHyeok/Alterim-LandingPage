<script lang="ts">
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
			class="flex w-fit min-w-0 max-w-[96%] shrink-0 flex-row items-end justify-start gap-2.5 break-all rounded-[40px] px-[1.1rem] py-[0.75rem] text-sm text-[#f8fff6d8]
       {sender == 'me' ? 'me_background' : 'you_background'}"
		>
			<span class="w-full">{message}</span>
		</div>
	{/if}
	{#if time}
		<span class="w-fit px-4 py-1 text-[0.65rem] text-[#d2d2d2]">{time}</span>
	{/if}
</div>

<style>
	.me_background {
		background: rgba(134, 138, 133, 0.1);
		box-shadow: 0px 3.089px 12.356px 0px rgba(0, 0, 0, 0.149);
	}
	.you_background {
		border: 0.5px solid rgba(208, 255, 227, 0.12);
		background: linear-gradient(
			180deg,
			rgba(31.28, 93.49, 89.76, 0.02) 0%,
			rgba(31.28, 93.49, 89.76, 0.02) 0%,
			rgba(251.73, 251.73, 251.73, 0.05) 100%
		);
	}
</style>
