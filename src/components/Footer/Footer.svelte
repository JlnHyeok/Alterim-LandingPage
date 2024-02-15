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

<div class="w-full px-6 py-7 h-36">
	<div class="w-full h-full bg-white rounded-2xl flex justify-between items-center xl:px-8">
		<!-- Title -->
		<div>
			<Title iconColor="black" />
		</div>

		<!-- Links -->
		<div class="flex flex-row gap-8 items-start justify-start shrink-0 relative">
			{#each iconArray.icon as icon, idx}
				<FooterIcon {icon} links={iconArray.links[idx]} />
			{/each}
		</div>
	</div>
</div>
