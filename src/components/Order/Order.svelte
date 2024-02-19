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

<div class="relative box-border w-screen p-10 md:h-[100vh]">
	<main
		class="relative flex h-full w-full flex-col justify-center gap-10"
		use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
		on:inview_change={({ detail }) => {
			const { inView } = detail;
			isTextInView = inView;
		}}
	>
		<!-- TEXT SECTION -->
		<div
			class="mx-auto flex h-[300px] w-full flex-col items-center justify-center gap-2 font-Pretendard_Regular text-[3rem] duration-[1.5s]
      {isTextInView ? 'opacity-100' : 'opacity-0'}"
		>
			<div>
				<span class="text-white">Revitalize Your </span>
				<span class="text-font-highlight"> PFP </span>
				<span class="text-white">into </span>
				<span class="text-font-highlight">Clone</span>
			</div>
			<div class="text-center font-Pretendard_Light text-[1.5rem]">
				<span>Your PFP is no longer just a collectible; it’s uniquely crafted personas </span><br />
				<span>with their own identity powered by </span>
				<span class="text-font-subHighlight">Alterim.ai</span>
			</div>
		</div>

		<!-- SOUL CARD SECTION -->
		<div
			class="relative mx-auto flex h-full w-full flex-col items-center justify-start gap-12 duration-[1s] 3xl:w-[1200px]
      {isCardInView ? 'opacity-100' : 'opacity-0'}"
			use:inview={{ unobserveOnEnter: false, rootMargin: '-45%' }}
			on:inview_change={({ detail }) => {
				const { inView } = detail;
				isCardInView = inView;
			}}
		>
			<div class="flex w-full items-center justify-center gap-5">
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
			<div class="flex h-full w-full justify-center">
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
