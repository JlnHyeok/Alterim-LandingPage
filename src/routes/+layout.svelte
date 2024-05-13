<script lang="ts">
	import Background from '$components/Common/Background/Background.svelte';
	import BackgroundIntro from '$components/Common/Background/BackgroundIntro.svelte';
	import { onMount } from 'svelte';
	import '../global.css';
	import { darkMode } from '$lib/store';
	onMount(() => {
		// document.documentElement.classList.add('dark');
		// $darkMode = true
	});
</script>

<svelte:head>
	<title>Alterim AI</title>
	<meta property="og:image" content="/og-image.png" />
	<meta property="twitter:image" content="/og-image.png" />
	<meta property="og:description" content="Alterim Ai Demo Page" />
	<meta name="theme-color" content="black" />
</svelte:head>

<div class="relative box-border w-screen bg-light pb-5 dark:bg-dark">
	<BackgroundIntro />
	<slot />
</div>
