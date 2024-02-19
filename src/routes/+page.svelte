<script lang="ts">
	import Intro from './../components/Intro/Intro.svelte';
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
	import Outro from '$components/Outro/Outro.svelte';
</script>

<div class="z-[1] text-white w-full md:min-w-[768px] relative">
	<Header />
	<div class="pt-16 w-full relative">
		<Intro />
		<Welcome />
		<Order />
		<Starting />
		<Chat />
		<Meet />
		<Comming />
		<Learn />
		<RoadMap />
		<Outro />
		<Footer />
	</div>
</div>
