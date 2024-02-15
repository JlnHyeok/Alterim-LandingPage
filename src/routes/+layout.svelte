<script lang="ts">
	import Background from '$components/Common/Background/Background.svelte';
	import '../global.css';
</script>

<Background />
<div class="w-full relative box-border">
	<slot />
</div>
