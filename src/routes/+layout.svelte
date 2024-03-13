<script lang="ts">
	import Background from '$components/Common/Background/Background.svelte';
	import BackgroundIntro from '$components/Common/Background/BackgroundIntro.svelte';
	import '../global.css';
</script>

<svelte:head>
	<title>Alterim Ai</title>
	<meta property="og:image" content="/og-image.png" />
	<meta property="twitter:image" content="/og-image.png" />
	<meta property="og:description" content="Alterim Ai Demo Page" />
	<meta name="theme-color" content="black" />
</svelte:head>

<div class="relative box-border w-screen bg-black">
	<Background />
	<BackgroundIntro />
	<slot />
</div>
