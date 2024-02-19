<script lang="ts">
	export let number: number;
	export let text: string;
	export let isSelect: boolean = false;
	export let onClick: () => void;
</script>

<!-- For more features use the AutoHTML plugin window in figma ... -->
<button on:click={onClick} class="relative flex shrink-0 flex-row items-center justify-start gap-2">
	<div
		class="relative flex h-8 w-8 shrink-0 flex-row items-center justify-center gap-0 rounded-[48px] pb-2 pl-[15px] pr-[15px] pt-2
		{isSelect ? `bg-[#c4dacc]` : 'bg-[rgba(255,255,255,0.20)]'} "
	>
		<div
			class=" relative flex items-center justify-center text-center font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-normal
			 {isSelect ? 'text-[#020202]' : 'text-white'}"
		>
			{number}
		</div>
	</div>
	<div
		class="relative flex items-center justify-start text-left font-['Pretendard-Regular',_sans-serif] text-base font-normal leading-normal text-[#ffffff]
		{isSelect ? 'block' : 'hidden'}"
	>
		{text}
	</div>
</button>
