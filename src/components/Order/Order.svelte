<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';
	import Arrow from './Arrow.svelte';
	import ThirdCard from './ThirdCard.svelte';
	import ClickBtn from './ClickBtn.svelte';
	import SecondCard from './SecondCard.svelte';

	let isTextInView: boolean;
	let currentNumber: number = 2;
	let timer: NodeJS.Timeout;

	function changeNumber() {
		if (currentNumber == 2) {
			currentNumber = 3;
		} else {
			currentNumber = 2;
		}
	}

	$: if (isTextInView) {
		if (timer) clearInterval(timer);

		timer = setInterval(() => {
			currentNumber = 3;
		}, 3000);
	} else {
		currentNumber = 2;
		clearInterval(timer);
	}

	function onClickNumberBtn(number: number) {
		currentNumber = number;
		clearInterval(timer);
		timer = setInterval(() => {
			changeNumber();
		}, 3000);
	}
</script>

<div class="relative box-border h-[120vh] w-screen bg-light p-4 duration-300 dark:bg-dark md:p-10">
	<main
		class="relative flex h-full w-full flex-col justify-center gap-0 md:gap-10"
		use:inview={{ unobserveOnEnter: false, threshold: 0.2 }}
		on:inview_change={({ detail }) => {
			const { inView } = detail;
			isTextInView = inView;
		}}
	>
		<!-- TEXT SECTION -->
		{#if isTextInView}
			<div
				class="mx-auto flex h-[300px] w-full flex-col items-center justify-center gap-4 font-Pretendard_Light text-2xl duration-[1.5s] md:gap-8 md:text-[3rem]"
				in:fade={{ duration: 1000 }}
				out:fade={{ duration: 500 }}
			>
				<div>
					<span class="text-font-lightDeepGreen dark:text-white">Revitalize Your </span>
					<span class="text-font-lightHighlightGreen1 dark:text-font-darkHighLightGreen1">
						PFP
					</span>
					<span class="text-font-lightDeepGreen dark:text-white">into </span>
					<span class="text-font-lightHighlightGreen1 dark:text-font-darkHighLightGreen1"
						>Clone</span
					>
				</div>
				<div
					class="flex flex-col gap-0 text-center text-[0.8rem] text-font-lightShallowGreen dark:text-font-darkBase md:gap-3 md:text-[1.5rem]"
				>
					<span class="flex h-5 items-center justify-center"
						>Your PFP is no longer just a collectible</span
					>
					<span class="flex h-5 items-center justify-center"
						>it’s uniquely crafted personas with their own</span
					>
					<span class="flex h-5 items-center justify-center"
						>identity powered by &nbsp;<strong
							class="text-font-lightShallowGreen dark:text-font-darkHighLightGreen2"
							>Alterim.AI</strong
						></span
					>
				</div>
			</div>
			<!-- SOUL CARD SECTION -->
			<div
				class="relative mx-auto flex h-full w-full flex-col items-center justify-start gap-12 duration-[1s] 3xl:w-[1200px]"
				in:fade={{ duration: 500, delay: 300 }}
				out:fade={{ duration: 500 }}
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
				<div class="mt-[-24px] flex h-full w-full justify-center">
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
		{/if}
	</main>
</div>
