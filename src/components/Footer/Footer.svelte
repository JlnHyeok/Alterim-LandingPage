<script lang="ts">
	import Title from '$components/Common/Title.svelte';
	import SnsIcon from '../Common/SnsIcon.svelte';

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
	class="mx-auto flex h-20 w-[96%] items-center justify-between overflow-hidden rounded-b-none rounded-t-2xl bg-white px-2 py-7 duration-300 md:mb-2 md:rounded-b-2xl md:px-4 xl:px-8"
>
	<!-- Title -->
	<div>
		<Title iconColor="black" />
	</div>

	<!-- Links -->
	<div class="relative flex shrink-0 flex-row items-start justify-start gap-4 md:gap-8">
		{#each iconArray as { icon, link }}
			<SnsIcon {icon} {link} />
		{/each}
	</div>
</div>
<!-- <div class="absolute bottom-6 left-0 h-10 w-full bg-black md:hidden"></div> -->
