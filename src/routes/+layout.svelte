<script lang="ts">
	import Background from '$components/Common/Background/Background.svelte';
	import BackgroundIntro from '$components/Common/Background/BackgroundIntro.svelte';
	import '../global.css';
</script>

<Background />
<BackgroundIntro />
<div class="w-full relative box-border">
	<slot />
</div>
