<script lang="ts">
	import { darkMode } from '$lib/store';
	import { RoadMapDefault, RoadMapDefaultLight, RoadMapHover } from '$lib/assets/images';

	export let idx: number;
	export let text: string;
	export let isHover: boolean;

	$: src = isHover ? RoadMapHover : $darkMode ? RoadMapDefault : RoadMapDefaultLight;
</script>

<div
	class="h-30 flex flex-col justify-center gap-3 text-center font-Pretendard_Regular text-base leading-snug tracking-tight text-font-lightDeepGreen dark:font-Pretendard_Light dark:text-[#D2D2D2] md:h-40"
>
	<button class="h-[90px] w-[90px] md:h-[120px] md:w-[120px]">
		<img class="object-cover" {src} alt={'RoadMapImg' + idx} />
	</button>
	<span> {text} </span>
</div>
