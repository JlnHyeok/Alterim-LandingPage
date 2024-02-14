<script lang="ts">
	import Intro from './../components/Intro/Intro.svelte';
	import Test from '$components/Test.svelte';
	import Header from '$components/Header/Header.svelte';
	import Welcome from '$components/Welcome/Welcome.svelte';
	import Order from '$components/Order/Order.svelte';
	import Starting from '$components/Starting/Starting.svelte';
	import Chat from '$components/Chat/Chat.svelte';
	import Meet from '$components/Meet/Meet.svelte';
	import Comming from '$components/Comming/Comming.svelte';
	import Learn from '$components/Learn/Learn.svelte';
	import RoadMap from '$components/RoadMap/RoadMap.svelte';
	import Footer from '$components/Footer/Footer.svelte';
</script>

<div class="z-[1] text-white relative">
	<Header />
	<div class="pt-16">
		<Intro />
		<Welcome />
		<Order />
		<Starting />
		<Chat />
		<Meet />
		<Comming />
		<Learn />
		<RoadMap />
		<Footer />
	</div>
</div>
