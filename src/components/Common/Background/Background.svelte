<script lang="ts">
	import Star from './Star.svelte';
	import Cloud from './Cloud.svelte';

	const EachStarInfos = [
		// make 10 Position
		{ position: 'top-[300px] left-[100px] md:block hidden', timing: 0 },
		{ position: 'top-[380px] left-[600px] ', timing: 1000 },
		{ position: 'top-[500px] left-[300px] ', timing: 2000 },
		{ position: 'top-[700px] left-[500px]', timing: 3000 },
		{ position: 'top-[650px] left-[780px]', timing: 2500 },
		{ position: 'top-[300px] right-[300px]', timing: 0 },
		{ position: 'top-[380px] right-[500px]', timing: 500 },
		{ position: 'top-[500px] right-[100px] md:block hidden', timing: 2500 },
		{ position: 'top-[600px] right-[700px]', timing: 2000 },
		{ position: 'top-[650px] right-[380px] ', timing: 3000 }
	];
</script>

<div class="fixed z-0 h-screen w-screen bg-black">
	<!-- CLOUD SECTION -->
	<!-- TOP RIGHT -->
	<Cloud position="top-[200px] right-[600px]" />
	<!-- TOP LEFR -->
	<Cloud position="top-[225px] left-[-40px]" />
	<!-- BOTTOM RIGHT -->
	<Cloud position="top-[400px] right-[-10px] md:block hidden" />
	<!-- BOTTOM LEFT -->
	<Cloud position="top-[555px] left-[300px]" />

	<!-- STAR SECTION -->
	{#each Array(10) as _, index}
		<!-- content here -->
		<Star infos={EachStarInfos[index]} {index} />
	{/each}
</div>
