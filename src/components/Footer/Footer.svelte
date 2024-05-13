<script lang="ts">
	import Title from '$components/Common/Title.svelte';
	import SnsIcon from '../Common/SnsIcon.svelte';
	import { Footer } from '$lib/assets/images';

	interface ISnsIconProps {
		icon: 'telegram' | 'discord' | 'twitter';
		link: string;
	}

	const iconArray: ISnsIconProps[] = [
		{ icon: 'telegram', link: 'https://t.me/pretendard' },
		{ icon: 'discord', link: 'https://discord.gg/pretendard' },
		{ icon: 'twitter', link: 'https://twitter.com/Alterim_ai' }
	];
</script>

<div
	class="mx-auto mt-20 w-[96%] rounded-[20px] bg-[#D1E1D7] px-5 py-5 md:w-[500px] xl:flex xl:h-[600px] xl:w-[97%] xl:scale-[0.95] xl:justify-between 3xl:scale-100"
>
	<!-- Left Section -->
	<div class="h-full overflow-hidden rounded-none xl:rounded-[20px]">
		<img src={Footer} alt="footer-img" class="h-full w-full" />
	</div>

	<!-- Right Section -->
	<div class="aspect-square xl:h-full xl:w-1/2 2xl:w-[55%] 3xl:w-[60%]">
		<!-- Upper Section -->
		<div
			class="flex h-[50%] w-full flex-col justify-start gap-3 pt-16 text-center font-Pretendard_Regular text-3xl text-font-lightDeepGreen xl:h-[70%] xl:pt-14 xl:text-left xl:text-5xl"
		>
			<p>Join Alterim World</p>
			<p>with your NFT</p>
		</div>

		<!-- Below Section -->
		<div class="flex h-[50%] w-full flex-col xl:h-[30%] xl:flex-row">
			<!-- Left Section Links -->
			<div
				class="relative mr-2 flex h-[45%] w-full shrink-0 flex-row items-end justify-center gap-8 xl:h-32 xl:w-40 xl:justify-start"
			>
				{#each iconArray as { icon, link }}
					<SnsIcon {icon} {link} color="#004A50" />
				{/each}
			</div>

			<!-- Right Section -->
			<div
				class="flex w-full items-start justify-center pt-5 xl:h-32 xl:items-end xl:justify-end xl:pb-4 xl:pr-12 xl:pt-0"
			>
				<div
					class="relative flex w-[200px] shrink-0 flex-row items-center justify-center gap-2.5 overflow-hidden rounded-[40px] bg-[#ffffff] py-2 duration-500"
					style="box-shadow: 0px 9px 34px 0px rgba(212, 212, 212, 0.50); "
				>
					<a
						href="https://alterim-ai.gitbook.io/welcometoalterim/usdaim/usdaim"
						target="_blank"
						class="relative text-center font-Pretendard_Regular text-sm text-font-lightDeepGreen dark:text-[#020202] md:text-lg"
					>
						Launch Demo
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- <div
	class="mx-auto mb-2 flex h-14 w-[96%] items-center justify-between overflow-hidden rounded-2xl bg-font-lightShallowGreen px-2 py-7 duration-300 dark:bg-white md:h-20 md:px-4 xl:px-8"
> -->
<!-- Title -->
<!-- <div class="">
		<Title size="scale-[0.8]" textColor={$darkMode ? 'black' : 'white'} />
	</div> -->

<!-- Links -->
<!-- <div class="relative mr-2 flex shrink-0 flex-row items-start justify-start gap-4 md:gap-8">
		{#each iconArray as { icon, link }}
			<SnsIcon {icon} {link} />
		{/each}
	</div>
</div> -->
