<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte';

	export let message: string;
	export let sender: 'me' | 'you';
	export let time: undefined | string;
	export let component: undefined | ComponentType<SvelteComponent>;
</script>

<div
	class="mt-2 flex w-full flex-col font-Pretendard_Light
	{sender == 'me' ? 'items-end' : 'items-start'}"
>
	{#if component}
		<svelte:component this={component} />
	{:else}
		<div
			class="flex w-fit min-w-0 max-w-[96%] shrink-0 flex-row items-end justify-start gap-2.5 break-all rounded-[40px] px-[0.85rem] py-[0.75rem] text-sm text-white
       {sender == 'me' ? 'me_background' : 'you_background'}"
			style="box-shadow: 0px 3.09px 12.36px 0px rgba(0, 0, 0, 0.08); "
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
		background: rgba(248, 255, 246, 0.1);
		box-shadow: 0px 3.089px 12.356px 0px rgba(0, 0, 0, 0.08);
	}
	.you_background {
		background: linear-gradient(
			92deg,
			rgba(31, 93, 90, 0.04) 4.91%,
			rgba(31, 93, 90, 0.04) 4.91%,
			rgba(252, 252, 252, 0.04) 61.03%
		);
	}
</style>
