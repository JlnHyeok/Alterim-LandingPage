<script lang="ts">
	export let src: string;
	export let width: number;
	export let height: number;

	let wrapSize: string = `h-[${height}px] w-[${width}px]`;
	let imgXlSize: string = `xl:h-[${height - 40}px] xl:w-[${width - 40}px]`;
	let imgSize: string = `h-[${height - 64}px] w-[${width - 64}px]`;
	let moveLeft: string = `left-[calc(50% - ${(width - 40) / 2}px)]`;
</script>

<div class="h static shrink-0 {wrapSize}">
	<div
		class="h absolute left-0 top-0 rounded-3xl {wrapSize}"
		style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%,rgba(255, 255, 255, 0.00) 100%); border-image: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%,rgba(255, 255, 255, 0.00) 100%); border-image-slice: 1; box-shadow: 0px 4px 20px 0px rgba(174, 246, 203, 0.30); "
	></div>
	<img
		class="absolute top-5 {imgXlSize} {moveLeft} "
		style="object-fit: cover; "
		{src}
		alt="ProfileCat"
	/>
</div>
