<script lang="ts">
	export let infoCardArr: {
		title: string;
		icon: { normal: string; clicked: string };
		isClick: boolean;
	}[];
	export let snsIconArray: { icon: 'telegram' | 'discord' | 'twitter'; link: string }[];
	export let onClickMenu: (index: number) => void;

	import SnsIcon from '$components/Common/SnsIcon.svelte';
	import { ProfilePenguin, ProfileWhiteCat } from '$lib/assets/images';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
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
				src={ProfilePenguin}
				alt="ProfilePenguin"
			/>
		</div>
	</div>

	<!-- INFO CARD SECTION -->
	<div class="profile_info_background h-[100px] w-[90%] rounded-md pl-2">
		<div class="flex h-[60px] flex-col items-start justify-center gap-1">
			<span class="font-Pretendard_Regular">James</span>
			<span class="font-Pretendard_Light text-xs text-[#6E7984]">@Pudgy Penguin #9260</span>
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
			{#each infoCardArr as { title, icon, isClick }, index (title)}
				<li
					on:click={() => onClickMenu(index)}
					class="flex h-9 cursor-pointer items-center gap-3 pl-3
        	{isClick ? 'border-l-[0.5px] border-[#85FFE1] text-[#82FFE1]' : 'text-[#9AA9AF]'}"
				>
					<div class="items center flex justify-center">
						<img
							src={isClick ? icon.clicked : icon.normal}
							alt={title}
							class="h-4 w-4 object-cover"
						/>
					</div>
					<span> {title} </span>
				</li>
			{/each}
		</ul>
	</div>

	<!-- INVITE CARD SECTION -->
	<div class="invite_background flex h-[50px] w-[90%] rounded-md px-3">
		<div class="flex w-[75%] flex-col justify-center gap-1 text-[0.6rem]">
			<span class="font-Pretendard_Regular text-[#F8FFF6]">Invite Friends and Get Points🚀</span>
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
		{#each snsIconArray as { icon, link } (icon + 'chat')}
			<!-- content here -->
			<SnsIcon {icon} {link} size="sm" color="#687684" />
		{/each}
	</div>
</div>

<style>
	.profile_info_background {
		background: linear-gradient(267deg, rgba(31, 31, 31, 0.09) 1.43%, #14231f 100.8%);
	}
	.invite_background {
		background: rgba(255, 255, 255, 0.1);
	}
</style>
