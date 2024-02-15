<script lang="ts">
	import AvatarCard from '$components/Common/AvatarCard/AvatarCard.svelte';
	import { Avatar } from '$lib/assets/images';
	import { slide, fade, fly, scale } from 'svelte/transition';
	export let isInView: boolean;
</script>

<div class="relative w-full h-[400px] m-auto z-10 overflow-hidden">
	<!-- LEFT SECTION -->
	{#if isInView}
		<!-- content here -->
		<div
			class="h-full w-full absolute"
			in:fly={{ x: -200, y: 300, duration: 3000 }}
			out:fade={{ duration: 1000 }}
		>
			<AvatarCard path={Avatar[0]} index={0} position="left-[-3%]" zIndex="z-[10]" timing="-3s" />
			<AvatarCard path={Avatar[1]} index={1} position="left-[4%]" zIndex="z-[9]" timing="-4s" />
			<AvatarCard path={Avatar[2]} index={2} position="left-[11%]" zIndex="z-[8]" timing="-5s" />
			<AvatarCard path={Avatar[3]} index={3} position="left-[17%]" zIndex="z-[7]" timing="-2s" />
			<AvatarCard path={Avatar[4]} index={4} position="left-[23%]" zIndex="z-[6]" timing="-1.2s" />
			<AvatarCard path={Avatar[5]} index={5} position="left-[30%]" zIndex="z-[5]" timing="-0.1s" />
			<AvatarCard
				path={Avatar[6]}
				index={6}
				position="left-[38%]"
				zIndex="z-[4]"
				timing="-3.4s"
				isRerverse={true}
			/>
		</div>
	{/if}
	<!-- CENTER SECTION -->
	{#if isInView}
		<div in:fade={{ duration: 2000 }} out:fade={{ duration: 1000 }}>
			<AvatarCard path={Avatar[7]} index={7} position="left-[44%]" zIndex="z-[3]" timing="-4.3s" />
		</div>
	{/if}

	<!-- RIGHT SECTION -->
	{#if isInView}
		<!-- content here -->
		<div
			class="w-full h-full absolute"
			in:fly={{ x: 200, y: 300, duration: 3000 }}
			out:fade={{ duration: 1000 }}
		>
			<AvatarCard path={Avatar[8]} index={8} position="left-[51%]" zIndex="z-[4]" timing="-2.3s" />
			<AvatarCard
				path={Avatar[9]}
				index={9}
				position="left-[57%]"
				zIndex="z-[5]"
				timing="-1.3s"
				isRerverse={true}
			/>
			<AvatarCard path={Avatar[10]} index={10} position="left-[63%]" zIndex="z-[6]" timing="-4s" />
			<AvatarCard path={Avatar[11]} index={11} position="left-[69%]" zIndex="z-[7]" timing="-6s" />
			<AvatarCard
				path={Avatar[12]}
				index={12}
				position="left-[77%]"
				zIndex="z-[8]"
				timing="-1s"
				isRerverse={true}
			/>
			<AvatarCard
				path={Avatar[13]}
				index={13}
				position="left-[84%]"
				zIndex="z-[9]"
				timing="-5s"
				isRerverse={true}
			/>
			<AvatarCard
				path={Avatar[14]}
				index={14}
				position="left-[90%]"
				zIndex="z-[10]"
				timing="-4s"
				isRerverse={true}
			/>
		</div>
	{/if}
</div>
