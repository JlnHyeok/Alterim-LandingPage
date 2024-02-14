<script lang="ts">
	import CommingCard from './CommingCard.svelte';
	import { Comming1, Comming2, Comming3, Comming4 } from '$lib/assets/images';
	import { flip } from 'svelte/animate';

	let imageArr = [Comming1, Comming2, Comming3, Comming4];
	const shuffle = () => {
		imageArr = imageArr.sort(() => 0.5 - Math.random());
	};

	setInterval(shuffle, 1500);
</script>

<div class="w-full h-screen flex justify-center items-center">
	<div class="flex flex-row gap-[90px] items-center justify-start relative">
		<div
			class="flex flex-row gap-8 items-start justify-start flex-wrap shrink-0 w-[434px] relative"
		>
			{#each imageArr as src, idx (src)}
				<!-- content here -->
				<div animate:flip={{ duration: 1000 }}>
					<CommingCard {src} {idx} />
				</div>
			{/each}
		</div>
		<div class="flex flex-col gap-[72px] items-start justify-start shrink-0 relative">
			<div class="flex flex-col gap-[46px] items-start justify-start shrink-0 w-[400px] relative">
				<div
					class="text-[#f5f5f5] text-left font-Pretendard_Regular text-[32px] leading-[120%] font-medium relative flex items-center justify-start"
				>
					I am here,<br />waiting for you!
				</div>
				<div
					class="text-[#f5f5f5] text-left font-Pretendard_Light text-base leading-[140%] font-light relative self-stretch flex items-center justify-start"
				>
					A limited series of 10,000, it evolves into a one-of-a-kind Digital Clone, each with its
					own distinctive persona. AI Soul is your ticket to exclusive community perks from early
					access to new features and community-only events.<br /><br />Inscribed as an Ordinal on
					the Bitcoin blockchain, these NFTs offer a rare, unchanging digital identity in the BRC-20
					ecosystem. Your AI Soul eagerly awaits to start its journey with you.
				</div>
			</div>
			<div
				class="bg-[#ffffff] rounded-[40px] py-2 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[200px] relative overflow-hidden"
				style="box-shadow: 0px 9px 34px 0px rgba(212, 212, 212, 0.50); "
			>
				<div
					class="text-[#020202] pointer-events-none text-center font-Pretendard_Regular text-lg font-normal relative"
				>
					Coming Soon
				</div>
			</div>
		</div>
	</div>
</div>
