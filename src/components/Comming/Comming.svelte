<script lang="ts">
	import { inview } from 'svelte-inview';
	import CommingCard from './CommingCard.svelte';
	import { Comming1, Comming2, Comming3, Comming4 } from '$lib/assets/images';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	let isSmallSizeTitleView: boolean = false;
	let isAvatarInView: boolean = false;

	let imageArr = [Comming1, Comming2, Comming3, Comming4];
	const shuffle = () => {
		imageArr = imageArr.sort(() => 0.5 - Math.random());
	};

	setInterval(shuffle, 1500);
</script>

<div
	class="relative flex h-[120vh] w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-[90px]"
	use:inview={{ unobserveOnEnter: false, rootMargin: '-10%' }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isSmallSizeTitleView = inView;
	}}
>
	<!-- SMALL SIZE TITLE SECTION -->
	{#if isSmallSizeTitleView}
		<div
			class="relative items-center justify-start text-center font-Pretendard_Regular text-[32px] font-medium leading-[120%] text-[#f5f5f5] md:hidden md:text-left"
			in:fade={{ duration: 1000, delay: 0 }}
			out:fade={{ duration: 1000, delay: 0 }}
		>
			I am here,<br />waiting for you!
		</div>

		<!-- CARDS SECTION -->
		<div
			class=" relative flex w-[85vw] shrink-0 flex-row flex-wrap items-center justify-center gap-6 md:w-[35vw] md:min-w-[440px] md:max-w-[400px] md:gap-8"
			in:fade={{ duration: 1000, delay: 1000 }}
			out:fade={{ duration: 1000, delay: 0 }}
		>
			{#each imageArr as src, idx (src)}
				<div animate:flip={{ duration: 1000 }}>
					<CommingCard {src} {idx} />
				</div>
			{/each}
		</div>
		<div class="relative flex shrink-0 flex-col items-start justify-start gap-[72px]">
			<div class="relative flex w-[400px] shrink-0 flex-col items-start justify-start gap-[46px]">
				<!-- MIDEUM SIZE TITLE SECTION -->
				<div
					class="relative hidden items-center justify-start text-left font-Pretendard_Regular text-[32px] font-medium leading-[120%] text-[#f5f5f5] md:flex"
					in:fade={{ duration: 1000, delay: 0 }}
					out:fade={{ duration: 1000, delay: 0 }}
				>
					I am here,<br />waiting for you!
				</div>
				<!-- DESCRIPTION SECTION -->
				<p
					class="relative mx-auto flex w-[80%] items-center justify-start self-stretch text-left font-Pretendard_Light text-base font-light leading-[140%] text-[#f5f5f5] md:mx-0 md:w-full"
					in:fade={{ duration: 1000, delay: 1000 }}
					out:fade={{ duration: 1000, delay: 0 }}
				>
					A limited series of 10,000, it evolves into a one-of-a-kind Digital Clone, each with its
					own distinctive persona. AI Soul is your ticket to exclusive community perks from early
					access to new features and community-only events.<br /><br />Inscribed as an Ordinal on
					the Bitcoin blockchain, these NFTs offer a rare, unchanging digital identity in the BRC-20
					ecosystem. Your AI Soul eagerly awaits to start its journey with you.
				</p>
			</div>
			<div
				class="relative mx-auto flex w-[200px] shrink-0 flex-row items-center justify-center overflow-hidden rounded-[40px] bg-[#ffffff] py-2 md:mx-0"
				style="box-shadow: 0px 9px 34px 0px rgba(212, 212, 212, 0.50); "
				in:fade={{ duration: 1000, delay: 2000 }}
				out:fade={{ duration: 1000, delay: 0 }}
			>
				<div
					class="pointer-events-none relative text-center font-Pretendard_Regular text-lg font-normal text-[#020202]"
				>
					Coming Soon
				</div>
			</div>
		</div>
	{/if}
</div>
