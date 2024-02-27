<script lang="ts">
	import Background from '$components/Common/Background/Background.svelte';
	import BackgroundIntro from '$components/Common/Background/BackgroundIntro.svelte';
	import '../global.css';
</script>

<svelte:head>
	<title>Alterim Ai</title>
	<meta property="og:image" content="/og-thumbnail.png" />
</svelte:head>

<div class="relative box-border w-screen">
	<Background />
	<BackgroundIntro />
	<slot />
</div>
