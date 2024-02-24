<script lang="ts">
	import { fade } from 'svelte/transition';

	export let titleArray: string[];
	export let subTitleArray: string[];
	export let isInView: boolean;
</script>

<div class="flex flex-col items-center gap-6 text-center xl:text-left">
	{#if isInView}
		<div
			class="font-Pretendard_Regular text-lg xl:text-4xl"
			in:fade={{ duration: 1000, delay: 0 }}
			out:fade={{ duration: 1000, delay: 0 }}
		>
			{#each titleArray as title}
				<h1>{title}</h1>
			{/each}
		</div>
		<div
			class="h- w-full font-Pretendard_Light text-sm text-[#d3d3d3] xl:text-xl"
			in:fade={{ duration: 1000, delay: 500 }}
			out:fade={{ duration: 1000, delay: 500 }}
		>
			{#each subTitleArray as subTitle}
				<h1>{subTitle}</h1>
			{/each}
		</div>
	{/if}
</div>
