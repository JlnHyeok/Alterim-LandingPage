<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import {
		infoCardArr,
		titleArray,
		subTitleArray,
		snsIconArray,
		talkingChatPropsArray,
		socialAvatarInfoArray,
		investChatPropsArray
	} from './constants';
	import InvestBox from './InvestBox.svelte';
	import SocialBox from './SocialBox.svelte';
	import ChatBox from './ChatBox.svelte';
	import NavBox from './NavBox.svelte';
	import TitleBox from './TitleBox.svelte';

	let currentNumber = 0;
	$: isInView = false;
	$: isInViewArr = [false, false, false];

	function onClickButton(n: number) {
		if (n >= 3) return;

		currentNumber = n;
		infoCardArr.some((infoCard) => {
			if (infoCard.isClick) {
				infoCard.isClick = false;
				return true;
			}
		});

		infoCardArr[n].isClick = true;
	}
</script>

<div
	use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isInView = inView;
	}}
>
	<!-- XL SIZE -->
	<div class="hidden h-screen w-full items-center justify-center gap-10 xl:flex">
		<!-- LEFT SECTION -->
		<div
			class="flex flex-col items-start gap-4 text-center xl:h-[300px] xl:min-w-[550px] xl:text-left"
		>
			<div class="hidden h-2 w-12 items-center justify-between pl-1 xl:flex">
				<!-- DOT SECTION -->
				{#each Array(3) as _, idx}
					<button
						on:click={() => onClickButton(idx)}
						class="h-[6px] w-[6px] {currentNumber == idx ? 'bg-green-200' : 'bg-green-900'}"
					></button>
				{/each}
			</div>
			<TitleBox
				{isInView}
				titleArray={titleArray[currentNumber]}
				subTitleArray={subTitleArray[currentNumber]}
			/>
		</div>

		<!-- RIGHT SECTION -->
		<div class="relative flex w-full flex-col gap-3 sm:w-[600px] xl:w-[700px] xl:flex-row">
			<NavBox {snsIconArray} {infoCardArr} onClickMenu={onClickButton} />

			{#if currentNumber == 0}
				<!-- CHAT BOX SECTION -->
				<ChatBox {isInView} {talkingChatPropsArray} />
			{:else if currentNumber == 1}
				<SocialBox {isInView} avatarInfoArray={socialAvatarInfoArray} />
			{:else}
				<InvestBox {isInView} {investChatPropsArray} />
			{/if}
		</div>
	</div>

	<!-- SMALL SIZE -->
	<div class="flex flex-col gap-44 xl:hidden">
		{#each Array(3) as _, idx}
			<div
				class="flex flex-col items-center justify-center gap-10"
				use:inview={{ unobserveOnEnter: false, rootMargin: '-30%' }}
				on:inview_change={({ detail }) => {
					const { inView } = detail;
					isInViewArr[idx] = inView;
				}}
			>
				<div class="flex flex-col items-start gap-4 text-center">
					<TitleBox
						isInView={isInViewArr[idx]}
						titleArray={titleArray[idx]}
						subTitleArray={subTitleArray[idx]}
					/>
				</div>

				{#if isInViewArr[idx]}
					<div
						class="relative flex w-full flex-col gap-3 sm:w-[600px]"
						in:fade={{ duration: 1000, delay: 700 }}
						out:fade={{ duration: 1000, delay: 700 }}
					>
						{#if idx == 0}
							<!-- CHAT BOX SECTION -->
							<ChatBox isInView={isInViewArr[idx]} {talkingChatPropsArray} />
						{:else if idx == 1}
							<SocialBox isInView={isInViewArr[idx]} avatarInfoArray={socialAvatarInfoArray} />
						{:else}
							<InvestBox isInView={isInViewArr[idx]} {investChatPropsArray} />
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
