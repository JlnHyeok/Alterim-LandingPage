<script lang="ts">
	export let number: number;
	export let text: string;
	export let isSelect: boolean = false;
	export let onClick: () => void;
</script>

<!-- For more features use the AutoHTML plugin window in figma ... -->
<button on:click={onClick} class="flex flex-row gap-2 items-center justify-start shrink-0 relative">
	<div
		class="{isSelect
			? `bg-[#c4dacc]`
			: 'bg-[rgba(255,255,255,0.20)]'} rounded-[48px] pt-2 pr-[15px] pb-2 pl-[15px] flex flex-row gap-0 items-center justify-center shrink-0 w-8 h-8 relative"
	>
		<div
			class="{isSelect
				? 'text-[#020202]'
				: 'text-white'} text-center font-['Pretendard-Regular',_sans-serif] text-base leading-normal font-normal relative flex items-center justify-center"
		>
			{number}
		</div>
	</div>
	<div
		class="text-[#ffffff] text-left font-['Pretendard-Regular',_sans-serif] text-base leading-normal font-normal relative flex items-center justify-start"
	>
		{text}
	</div>
</button>
