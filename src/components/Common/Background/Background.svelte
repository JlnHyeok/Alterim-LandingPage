<script lang="ts">
	import Star from './Star.svelte';
	import Cloud from './Cloud.svelte';

	const EachStarInfos = [
		// make 10 Position
		{ position: 'z-10 top-[300px] left-[100px] md:block hidden', timing: 0 },
		{ position: 'z-10 top-[380px] left-[600px] ', timing: 1000 },
		{ position: 'z-10 top-[500px] left-[300px] ', timing: 2000 },
		{ position: 'z-10 top-[700px] left-[500px]', timing: 3000 },
		{ position: 'z-10 top-[650px] left-[780px]', timing: 2500 },
		{ position: 'z-10 top-[300px] right-[300px]', timing: 0 },
		{ position: 'z-10 top-[380px] right-[500px]', timing: 500 },
		{ position: 'z-10 top-[500px] right-[100px] md:block hidden', timing: 2500 },
		{ position: 'z-10 top-[600px] right-[700px]', timing: 2000 },
		{ position: 'z-10 top-[650px] right-[380px] ', timing: 3000 }
	];

	let scrollY = 0;
	let height = 0;
	let isEnd = false;
	$: {
		if (scrollY > height * 11.7) isEnd = true;
		else isEnd = false;
	}
</script>

<svelte:window bind:scrollY bind:innerHeight={height} />
<div class="fixed z-10 h-screen w-screen bg-black">
	<!-- CLOUD SECTION -->
	<!-- TOP RIGHT -->
	<Cloud position="z-10 top-[200px] right-[600px]" />
	<!-- TOP LEFR -->
	<Cloud position="z-10 top-[225px] left-[-40px]" />
	<!-- BOTTOM RIGHT -->
	<Cloud position="z-10 top-[400px] right-[-10px] md:block hidden" />
	<!-- BOTTOM LEFT -->
	<Cloud position="z-10 top-[555px] left-[300px]" />

	<!-- STAR SECTION -->
	{#each Array(10) as _, index}
		<Star infos={EachStarInfos[index]} {index} />
	{/each}
</div>
