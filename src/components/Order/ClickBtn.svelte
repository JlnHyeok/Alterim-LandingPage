<script lang="ts">
	export let number: number;
	export let text: string;
	export let isSelect: boolean = false;
	export let onClick: () => void;
</script>

<!-- For more features use the AutoHTML plugin window in figma ... -->
<button
	on:click={onClick}
	class="relative flex shrink-0 flex-row items-center justify-start gap-2 focus:border-none focus:outline-none"
>
	<div
		class="relative flex h-6 w-6 shrink-0 flex-row items-center justify-center gap-0 rounded-[48px] pb-2 pl-[12px] pr-[12px] pt-2
		{isSelect
			? `dark:bg-darkNumberHighlight bg-lightNumberHighlight`
			: 'bg-white dark:bg-[rgba(255,255,255,0.20)]'} "
	>
		<div
			class=" relative flex items-center justify-center text-center font-Pretendard_Regular text-sm font-normal leading-normal
			 {isSelect
				? 'text-font-lightShallowGreen dark:text-[#020202]'
				: 'text-font-lightShallowGreen dark:text-white'}"
		>
			{number}
		</div>
	</div>
	<div
		class="text-font-lightShallowGreen dark:text-font-darkBase relative flex items-center justify-start text-left font-Pretendard_Regular text-base font-normal leading-normal
		{isSelect ? 'block' : 'hidden'}"
	>
		{text}
	</div>
</button>
