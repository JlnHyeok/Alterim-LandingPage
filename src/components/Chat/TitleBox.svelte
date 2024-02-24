<script lang="ts">
	export let titleArray: string[];
	export let subTitleArray: string[];
</script>

<div class="flex flex-col items-center gap-6 text-center xl:text-left">
	<div class="font-Pretendard_Regular text-lg xl:text-4xl">
		{#each titleArray as title}
			<h1>{title}</h1>
		{/each}
	</div>
	<div class="h- w-full font-Pretendard_Light text-sm text-[#d3d3d3] xl:text-xl">
		{#each subTitleArray as subTitle}
			<h1>{subTitle}</h1>
		{/each}
	</div>
</div>
