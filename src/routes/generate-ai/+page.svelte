<script lang="ts">
	import GenerateAI from '$components/GenerateAI/GenerateAI.svelte';
	import Header from '$components/Header/Header.svelte';

</script>

<div class="relative z-20 w-full bg-black text-white md:min-w-[768px]">
	<Header hideElements={['documentation', 'logo']} />
	<div class="relative w-full pt-16">
		<GenerateAI/>
	</div>
</div>