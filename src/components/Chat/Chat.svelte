<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import {
		infoCardArr,
		titleArray,
		lgSubTitleArray,
		smSubTitleArray,
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
	import { browser } from '$app/environment';

	let currentNumber = 0;
	let scrollY: number;
	let screenWidth: number;
	let screenHeight: number;
	let startEnterY: number;
	let subTitleArray: string[][];
	let screenSize: 'sm' | 'xl' = 'xl';

	$: isInView = false;
	$: isInViewArr = [false, false, false];
	$: {
		if (screenWidth >= 1280) {
			if (scrollY > startEnterY && scrollY < startEnterY + screenHeight) {
				onClickButton(0);
			} else if (
				scrollY >= startEnterY + screenHeight &&
				scrollY < startEnterY + screenHeight * 2
			) {
				onClickButton(1);
			} else if (
				scrollY >= startEnterY + screenHeight * 2 &&
				scrollY < startEnterY + screenHeight * 3
			) {
				onClickButton(2);
			}
		}
	}

	$: {
		if (browser) {
			if (screenWidth < 1280) {
				subTitleArray = smSubTitleArray;
				screenSize = 'sm';
			} else {
				subTitleArray = lgSubTitleArray;
				screenSize = 'xl';
			}
		}
	}
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

<svelte:window bind:scrollY bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<div
	class="h-[300vh] w-full items-center justify-center xl:h-[400vh]"
	use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isInView = inView;
		startEnterY = scrollY;
	}}
>
	{#if isInView}
		<!-- XL SIZE -->
		<div class="relative hidden h-full w-full items-start justify-center xl:flex">
			<div
				class="sticky top-[20%] flex items-center justify-center gap-10"
				in:fade={{ duration: 500 }}
				out:fade={{ duration: 500 }}
			>
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
						<SocialBox {isInView} avatarInfoArray={socialAvatarInfoArray} {screenSize} />
					{:else}
						<InvestBox {isInView} {investChatPropsArray} {screenSize} />
					{/if}
				</div>
			</div>
		</div>

		<!-- SMALL SIZE -->
		<div class="flex h-full flex-col justify-evenly xl:hidden">
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

					<div class="relative flex w-full flex-col gap-3 sm:w-[600px]">
						{#if idx == 0}
							<!-- CHAT BOX SECTION -->
							<ChatBox isInView={isInViewArr[idx]} {talkingChatPropsArray} />
						{:else if idx == 1}
							<SocialBox
								screenSize="sm"
								isInView={isInViewArr[idx]}
								avatarInfoArray={socialAvatarInfoArray}
							/>
						{:else}
							<InvestBox screenSize="sm" isInView={isInViewArr[idx]} {investChatPropsArray} />
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
