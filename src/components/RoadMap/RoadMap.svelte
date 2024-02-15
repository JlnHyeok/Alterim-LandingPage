<script lang="ts">
	import { fade } from 'svelte/transition';
	import RoadMapBtn from './RoadMapBtn.svelte';

	const roadMapTexts = [
		{
			text: 'Q1 2024',
			contents: ['$AIM token Launchpad', 'Genesis NFT Sale: AI Soul', 'Launching MVP product(Chat)']
		},
		{
			text: 'Q2 2024',
			contents: [
				'Release Social Realm',
				'Community Beta Testing (CBT)',
				'Integration with ETH Network'
			]
		},
		{
			text: 'Q3 2024',
			contents: ['Add Stake and Earn', 'Launch official product', 'Launching Alter-Trading feature']
		},
		{
			text: 'Q4 2024',
			contents: ['Launch Community Agora DevelopmentEnhancement', 'of AI-based Algorithms']
		},
		{
			text: 'Q1 2025',
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

<div class="w-full h-[80vh] flex justify-center items-center">
	<div class="w-[924px] h-[428.95px] flex-col justify-start items-start gap-[72px] inline-flex">
		<div
			class="w-full text-center text-neutral-100 text-[3rem] font-normal font-Pretendard_Regular"
		>
			<span> Roadmap </span>
		</div>
		<div class="flex-col justify-start items-center gap-12 flex">
			<div class="w-[924px] justify-between items-start inline-flex">
				{#each roadMapTexts as { text }, idx (text)}
					<button on:mouseenter={() => handleHover(idx)}>
						<RoadMapBtn {idx} {text} isHover={isHoverArr[idx]} />
					</button>
				{/each}
			</div>
			<div
				class="mt-10 border-t-[1px] border-b-[1px] border-opacity-25 border-emerald-50 3xl:w-[900px] h-[180px]"
			>
				<div class="h-full self-stretch justify-start items-center gap-12 flex">
					<div class="text-emerald-200 w-28 h-20 text-center text-2xl font-Pretendard_Regular">
						{roadMapTexts[infoIndex].text}
					</div>
					<ul class="text-white text-base font-normal font-Pretendard_Light h-20">
						{#each roadMapTexts[infoIndex].contents as content (content)}
							<li in:fade out:fade={{ duration: 0 }}>{content}</li>
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
