<script lang="ts">
	import { CommingBottom } from '$lib/assets/images';

	export let src: string;
	export let idx: number;
</script>

<div
	class="relative h-[42vw] w-[38vw] shrink-0 overflow-hidden rounded-[20px] border-0 md:h-[232px] md:w-[200px]"
>
	<div class="v-[38vw] h-[38vw] bg-[#c4dacc] md:h-[200px] md:w-[200px]">
		<img
			draggable="false"
			class="relative left-0 top-0 h-full w-full"
			style="object-fit: cover; "
			{src}
			alt={'comming' + idx}
		/>
	</div>
	<div class="relative h-[4vw] w-full">
		<img src={CommingBottom} alt="bottom" class="h-full w-full object-cover" />
	</div>
</div>
