<script lang="ts">
	import Background from '$components/Common/Background/Background.svelte';
	import '../global.css';
</script>

<Background />
<div class="w-full h-[8000px] relative box-border">
	<slot />
</div>
