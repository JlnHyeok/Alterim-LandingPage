<script lang="ts">
	import { RoadMapDefault, RoadMapHover } from '$lib/assets/images';

	export let idx: number;
	export let text: string;
	export let isHover: boolean;

	$: src = isHover ? RoadMapHover : RoadMapDefault;
</script>

<div
	class="text-center h-40 flex flex-col justify-center gap-3 text-[#D2D2D2] text-base font-semibold font-Pretendard_Light leading-snug tracking-tight"
>
	<button class="w-[120px] h-[120px]">
		<img class="object-cover" {src} alt={'RoadMapImg' + idx} />
	</button>
	<span> {text} </span>
</div>
