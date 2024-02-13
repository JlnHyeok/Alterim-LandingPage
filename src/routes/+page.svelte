<script lang="ts">
	import Intro from './../components/Intro/Intro.svelte';
	import Test from '$components/Test.svelte';
	import Header from '$components/Header/Header.svelte';
	import Order from '$components/Order/Order.svelte';
</script>

<div class="z-[1] text-white relative">
	<Header />
	<div class="pt-16">
		<Intro />
		<Order />
	</div>
</div>
