<script lang="ts">
	import Title from '$components/Common/Title.svelte';
	import FooterIcon from './FooterIcon.svelte';

	interface IFooterIconProps {
		icon: Array<'telegram' | 'discord' | 'twitter'>;
		links: Array<string>;
	}

	const iconArray: IFooterIconProps = {
		icon: ['telegram', 'discord', 'twitter'],
		links: [
			'https://t.me/pretendard',
			'https://discord.gg/pretendard',
			'https://twitter.com/Alterim_ai'
		]
	};
</script>

<div
	class="mx-auto flex h-full w-[90%] items-center justify-between rounded-b-none rounded-t-2xl bg-white px-2 py-7 md:mb-2 md:rounded-b-2xl md:px-4 xl:px-8"
>
	<!-- Title -->
	<div>
		<Title iconColor="black" />
	</div>

	<!-- Links -->
	<div class="relative flex shrink-0 flex-row items-start justify-start gap-4 md:gap-8">
		{#each iconArray.icon as icon, idx}
			<FooterIcon {icon} links={iconArray.links[idx]} />
		{/each}
	</div>
</div>
<!-- <div class="absolute bottom-6 left-0 h-10 w-full bg-black md:hidden"></div> -->
