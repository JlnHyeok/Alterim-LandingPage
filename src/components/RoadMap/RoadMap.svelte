<script lang="ts">
	import { fade } from 'svelte/transition';
	import RoadMapBtn from './RoadMapBtn.svelte';

	const roadMapTexts = [
		{
			text: '2024 Q1',
			contents: ['$AIM token Launchpad', 'Genesis NFT Sale: AI Soul', 'Launching MVP product(Chat)']
		},
		{
			text: '2024 Q2',
			contents: [
				'Release Social Realm',
				'Community Beta Testing (CBT)',
				'Integration with ETH Network'
			]
		},
		{
			text: '2024 Q3',
			contents: ['Add Stake and Earn', 'Launch official product', 'Launching Alter-Trading feature']
		},
		{
			text: '2024 Q4',
			contents: ['Launch Community Agora DevelopmentEnhancement', 'of AI-based Algorithms']
		},
		{
			text: '2025 Q1',
			contents: ['Token Marketplace', 'Supporting Multi-Chain', 'Launching Squad Feature']
		}
	];

	const isHoverArr = [true, false, false, false, false];
	let infoIndex = 0;
	function handleHover(idx: number) {
		isHoverArr.forEach((_, i) => {
			isHoverArr[i] = i === idx;
			infoIndex = idx;
		});
	}
</script>

<div class="flex h-[100vh] w-full items-center justify-center md:h-[80vh]">
	<div class="inline-flex flex-col items-start justify-start gap-[72px]">
		<div
			class="w-full text-center font-Pretendard_Regular text-[3rem] font-normal text-neutral-100"
		>
			<span> Roadmap </span>
		</div>
		<div class="flex flex-col items-center justify-start gap-12">
			<!-- BUTTON SECTION -->
			<div
				class="z-20 inline-flex w-[90%] flex-wrap items-start justify-center gap-5 md:w-[924px] md:justify-between md:gap-10"
			>
				{#each roadMapTexts as { text }, idx (text)}
					<button on:mouseenter={() => handleHover(idx)}>
						<RoadMapBtn {idx} {text} isHover={isHoverArr[idx]} />
					</button>
				{/each}
			</div>

			<!-- INFO SECTION -->
			<div
				class="mt-10 w-[85%] border-b-[1px] border-t-[1px] border-emerald-50 border-opacity-25 py-8 md:h-[180px] md:w-full"
			>
				<div class="flex h-full items-center justify-start gap-4 self-stretch md:gap-12">
					<div
						class="h-20 w-32 flex-shrink-0 text-center font-Pretendard_Regular text-2xl text-emerald-200"
					>
						{roadMapTexts[infoIndex].text}
					</div>
					<ul class="h-30 text-left font-Pretendard_Light font-normal text-white">
						{#each roadMapTexts[infoIndex].contents as content (content)}
							<li class="flex w-full justify-start" in:fade out:fade={{ duration: 0 }}>
								{content}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	li::before {
		position: relative;
		right: 10px;
		width: 2.25ch;
		box-sizing: border-box;
		padding-inline-end: 0.75ch;
		content: '•';
	}
</style>
