<script lang="ts">
	import Background from '$components/Common/Background/Background.svelte';
	import BackgroundIntro from '$components/Common/Background/BackgroundIntro.svelte';
	import '../global.css';
</script>

<div class="w-screen relative box-border">
	<Background />
	<BackgroundIntro />
	<slot />
</div>
