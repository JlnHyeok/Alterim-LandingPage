<script lang="ts">
	import Background from '$components/Common/Background/Background.svelte';
	import BackgroundIntro from '$components/Common/Background/BackgroundIntro.svelte';
	import '../global.css';
</script>

<svelte:head>
	<title>Alterim Ai</title>
	<meta property="og:image" content="/og-image.png" />
	<meta property="og:image:width" content="369" />
	<meta property="og:image:height" content="75" />
	<meta property="twitter:image" content="/og-image.png" />
	<meta
		property="og:description"
		content="Alterim Ai is a company that provides AI solutions for businesses."
	/>
</svelte:head>

<div class="relative box-border w-screen">
	<Background />
	<BackgroundIntro />
	<slot />
</div>
