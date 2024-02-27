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
	let scrollY: number;
	let screenWidth: number;
	let screenHeight: number;
	let startEnterY: number;

	$: isInView = false;
	$: isInViewArr = [false, false, false];
	$: {
		if (screenWidth >= 1280) {
			console.log(screenHeight, startEnterY);
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
	class="w-full items-center justify-center xl:h-[400vh]"
	use:inview={{ unobserveOnEnter: false, threshold: 0.2 }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isInView = inView;
		startEnterY = scrollY;
	}}
>
	{#if isInView}
		<!-- XL SIZE -->
		<div class="relative hidden h-screen w-full items-center justify-center xl:flex">
			<div
				class=" fixed top-[50%] flex translate-y-[-50%] items-center justify-center gap-10"
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
						<SocialBox {isInView} avatarInfoArray={socialAvatarInfoArray} />
					{:else}
						<InvestBox {isInView} {investChatPropsArray} />
					{/if}
				</div>
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
