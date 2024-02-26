<script lang="ts">
	export let message: string;
	export let sender: 'me' | 'you';
	export let time: undefined | string;
</script>

<div
	class="mt-4 flex w-full flex-col font-Pretendard_Light
	{sender == 'me' ? 'items-end' : 'items-start'}"
>
	<div
		class="flex w-fit min-w-0 max-w-[96%] shrink-0 flex-row items-end justify-start gap-2.5 break-all rounded-[40px] px-[0.85rem] py-[0.75rem] text-xs text-white
		{sender == 'me' ? 'me_background' : 'you_background'}"
		style="box-shadow: 0px 3.09px 12.36px 0px rgba(0, 0, 0, 0.08); "
	>
		<span class="w-full">{message}</span>
	</div>
	{#if time}
		<span class="w-fit px-4 py-1 text-[0.65rem] text-[#d2d2d2]">{time}</span>
	{/if}
</div>

<style>
	.me_background {
		background-color: rgba(248, 255, 246, 0.1);
	}
	.you_background {
		background-color: rgba(19, 135, 129, 0.18);
	}
</style>
