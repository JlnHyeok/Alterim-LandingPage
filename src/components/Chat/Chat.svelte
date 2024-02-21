<script lang="ts">
	import SnsIcon from '$components/Common/SnsIcon.svelte';
	import {
		ChatClick,
		FriendNormal,
		InvestmentNormal,
		ProfileWhiteCat,
		SettingNormal,
		SocialNormal
	} from '$lib/assets/images';
	import { inview } from 'svelte-inview';
	import TalkingChat from './../Common/ChatCard/TalkingChat.svelte';

	interface ISnsIconProps {
		icon: 'telegram' | 'discord' | 'twitter';
		link: string;
	}

	const iconArray: ISnsIconProps[] = [
		{ icon: 'telegram', link: 'https://t.me/pretendard' },
		{ icon: 'discord', link: 'https://discord.gg/pretendard' },
		{ icon: 'twitter', link: 'https://twitter.com/Alterim_ai' }
	];

	// Generate Info Card Array
	const infoCardArr = [
		{
			title: 'Chat',
			icon: ChatClick,
			isClick: true
		},
		{
			title: 'Social',
			icon: SocialNormal,
			isClick: false
		},
		{
			title: 'Investment',
			icon: InvestmentNormal,
			isClick: false
		},
		{
			title: 'Add friends',
			icon: FriendNormal,
			isClick: false
		},
		{
			title: 'Settings',
			icon: SettingNormal,
			isClick: false
		}
	];

	$: isInView = false;
</script>

<div
	class="flex h-screen w-full flex-col items-center justify-center gap-14 xl:flex-row"
	use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
	on:inview_change={({ detail }) => {
		const { inView } = detail;
		isInView = inView;
	}}
>
	<!-- LEFT SECTION -->
	<div class="flex flex-col items-center gap-8 text-center xl:text-left">
		<div class="font-Pretendard_Regular text-lg xl:text-4xl">
			<h1>Your One-of-a-Kind</h1>
			<h1>Interactive Digital Companion</h1>
		</div>
		<div class="w-full font-Pretendard_Light text-sm text-[#d3d3d3] xl:text-xl">
			<p>Talk to your Clone through DM.</p>
			<p>Experience beyond passive AI.</p>
		</div>
	</div>

	<!-- RIGHT SECTION -->
	<div class="flex flex-col gap-3 xl:flex-row">
		<!-- PROFILE SECTION -->
		<div
			class="relative hidden w-[240px] items-center justify-between overflow-hidden rounded-lg xl:flex xl:flex-col"
		>
			<!-- PROFILE IMAGE SECTION -->
			<div class="relative h-[210px] w-[210px]">
				<div class="h static h-[210px] w-[210px] shrink-0">
					<div
						class="h absolute left-0 top-0 h-[210px] w-[210px] rounded-md"
						style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%,rgba(255, 255, 255, 0.00) 100%); border-image: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%,rgba(255, 255, 255, 0.00) 100%); border-image-slice: 1; box-shadow: 0px 4px 20px 0px rgba(174, 246, 203, 0.30); "
					></div>
					<img
						class="absolute left-[calc(50%-90px)] top-4 h-[180px] w-[180px] rounded-md"
						style="object-fit: cover; "
						src={ProfileWhiteCat}
						alt="ProfileCat"
					/>
				</div>
			</div>

			<!-- INFO CARD SECTION -->
			<div class="profile_info_background h-[100px] w-[90%] rounded-md pl-2">
				<div class="flex h-[60px] flex-col items-start justify-center gap-1">
					<span class="font-Pretendard_Regular">James</span>
					<span class="font-Pretendard_Light text-xs text-[#6E7984]">@Bitcoin Frog #9260</span>
				</div>
				<div
					class="flex h-[40px] items-center justify-start border-t-[1px] border-white border-opacity-30 font-Pretendard_Light text-xs"
				>
					<span class="text-[#909090]"
						><strong class="text-[#E7C351]">🏆 Gold</strong> • 123,100 points
					</span>
				</div>
			</div>

			<!-- MENU SECTION -->
			<div class="h-[180px] w-[90%] rounded-md">
				<ul class="font-Pretendard_Light text-sm">
					{#each infoCardArr as { title, icon, isClick } (title)}
						<li
							class="flex h-9 items-center gap-3 pl-3
              {isClick ? 'border-l-[0.5px] border-[#85FFE1] text-[#82FFE1]' : 'text-[#9AA9AF]'}"
						>
							<div class="items center flex justify-center">
								<img src={icon} alt={title} class="h-4 w-4 object-cover" />
							</div>
							<span> {title} </span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- INVITE CARD SECTION -->
			<div class="invite_background flex h-[50px] w-[90%] rounded-md px-3">
				<div class="flex w-[75%] flex-col justify-center gap-1 text-[0.6rem]">
					<span class="font-Pretendard_Regular text-[#F8FFF6]">Invite Friends and Get Points🚀</span
					>
					<a href="https://bitly.com/" class="font-Pretendard_Light text-[#AEF6CB]"
						>https://bitly.is/3zICBLr
					</a>
				</div>
				<div class="flex w-[25%] items-center justify-center">
					<button
						class="rounded-lg border border-solid border-white border-opacity-50 px-2 py-[6px] font-Pretendard_Light text-xs"
					>
						Copy
					</button>
				</div>
			</div>

			<!-- SNS SECTION -->
			<div class="flex h-[20px] w-[90%] justify-center gap-4 rounded-md">
				{#each iconArray as { icon, link } (icon + 'chat')}
					<!-- content here -->
					<SnsIcon {icon} {link} size="sm" color="#687684" />
				{/each}
			</div>
		</div>

		<!-- CHAT BOX SECTION -->
		<div
			class="chatbox_background relative mx-auto flex h-[450px] w-[90%] flex-col justify-start rounded-xl xl:h-[600px] xl:w-[450px]"
		>
			<!-- NAME SECTION -->
			<div class="overflow-hidden rounded-t-xl">
				<div class="name_background flex h-14 items-center justify-center">
					<span class="font-Pretendard_Regular"> James </span>
					<span class="inline font-Pretendard_Light text-[#6E7984] xl:hidden">
						@Bitcoin Cats #9260</span
					>
				</div>
			</div>

			<!-- CHATTING SECTION -->
			<div class="flex h-full flex-col justify-end overflow-hidden p-3">
				<div class={isInView ? 'talking_y_animation' : ''}>
					<TalkingChat
						sender="me"
						message="Hey James, what's the latest in the crypto world today?"
					/>
					<TalkingChat
						sender="you"
						message="HEY! Just spotted a HOT new token, $AIT!
          Ready to BLAST OFF! You in?"
					/>
					<TalkingChat sender="me" message="Sounds interesting. Tell me more about $AIT" />
					<TalkingChat
						sender="you"
						message="It's the talk of the town! $AIT is all about revolutionizing digital interactions with AI.
          Gonna be HUGE!"
					/>
					<TalkingChat sender="me" message="Alright, let's invest. How much are we thinking?" />
					<TalkingChat
						sender="you"
						message="Go BIG or go home! 🚀 Time to ride the $AIM wave! But let's play it SMART."
					/>
					<TalkingChat sender="me" message="Keep it balanced. Don't want to overextend." />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.name_background {
		background: linear-gradient(91deg, #131c1a 10.8%, rgba(19, 28, 26, 0) 94.74%);
	}
	.chatbox_background {
		background: rgba(31, 31, 31, 0.6);
		backdrop-filter: blur(17px);
		box-shadow: 0px 4px 40px 0px rgba(174, 246, 203, 0.2);
	}
	.profile_info_background {
		background: linear-gradient(267deg, rgba(31, 31, 31, 0.09) 1.43%, #14231f 100.8%);
	}
	.invite_background {
		background: rgba(255, 255, 255, 0.1);
	}

	/* generate 8 steps animation transform Y */
	@keyframes translate-talking-y {
		0% {
			transform: translateY(700px);
		}
		15% {
			transform: translateY(600px);
		}
		30% {
			transform: translateY(480px);
		}
		45% {
			transform: translateY(400px);
		}
		60% {
			transform: translateY(290px);
		}
		75% {
			transform: translateY(210px);
		}
		90% {
			transform: translateY(100px);
		}
		100% {
			transform: translateY(10px);
		}
	}

	.talking_y_animation {
		animation: translate-talking-y 10s forwards;
	}
</style>
