<script lang="ts">
	import Arrow from './Arrow.svelte';
	import { inview } from 'svelte-inview';
	import ThirdCard from './ThirdCard.svelte';
	import ClickBtn from './ClickBtn.svelte';
	import SecondCard from './SecondCard.svelte';
	import { fade } from 'svelte/transition';

	let isTextInView: boolean;
	let isCardInView: boolean;
	let currentNumber: number = 2;

	function changeNumber() {
		if (currentNumber == 2) {
			currentNumber = 3;
		} else {
			currentNumber = 2;
		}
	}

	let timer = setInterval(() => {
		changeNumber();
	}, 15000);

	function onClickNumberBtn(number: number) {
		currentNumber = number;
		clearInterval(timer);
		timer = setInterval(() => {
			changeNumber();
		}, 15000);
	}
</script>

<div class="relative w-full h-[100vh] p-10 box-border">
	<main
		class="relative w-full h-full flex flex-col justify-center gap-10"
		use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
		on:inview_change={({ detail }) => {
			const { inView } = detail;
			isTextInView = inView;
		}}
	>
		<!-- TEXT SECTION -->
		<div
			class="w-[800px] h-[300px] font-Pretendard_Regular text-[3rem] mx-auto flex flex-col items-center justify-center gap-2 duration-[1.5s]
      {isTextInView ? 'opacity-100' : 'opacity-0'}"
		>
			<div>
				<span class="text-white">Revitalize Your </span>
				<span class="text-font-highlight"> PFP </span>
				<span class="text-white">into </span>
				<span class="text-font-highlight">Clone</span>
			</div>
			<div class="font-Pretendard_Light text-[1.5rem] text-center">
				<span>Your PFP is no longer just a collectible; it’s uniquely crafted personas </span><br />
				<span>with their own identity powered by </span>
				<span class="text-font-subHighlight">Alterim.ai</span>
			</div>
		</div>

		<!-- SOUL CARD SECTION -->
		<div
			class="relative flex flex-col gap-12 justify-start w-[1000px] h-full 3xl:w-[1200px] items-center mx-auto duration-[1s]
      {isCardInView ? 'opacity-100' : 'opacity-0'}"
			use:inview={{ unobserveOnEnter: false, rootMargin: '-45%' }}
			on:inview_change={({ detail }) => {
				const { inView } = detail;
				isCardInView = inView;
			}}
		>
			<div class="flex w-full justify-center items-center gap-5">
				<ClickBtn number={1} text="Select Your NFT" onClick={() => {}} />
				<Arrow />
				<ClickBtn
					number={2}
					text="Generating AI Soul"
					isSelect={currentNumber == 2}
					onClick={() => onClickNumberBtn(2)}
				/>
				<Arrow />
				<ClickBtn
					number={3}
					text="Meet Clone"
					isSelect={currentNumber == 3}
					onClick={() => onClickNumberBtn(3)}
				/>
			</div>
			<div class="w-full h-full flex justify-center">
				{#if currentNumber === 2}
					<!-- content here -->
					<div in:fade={{ duration: 300 }} out:fade={{ duration: 0 }}>
						<SecondCard />
					</div>
				{:else if currentNumber === 3}
					<div in:fade={{ duration: 300 }} out:fade={{ duration: 0 }}>
						<ThirdCard />
					</div>
				{/if}
			</div>
		</div>
	</main>
</div>
