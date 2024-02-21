<script lang="ts">
	import AvatarCard from '$components/Common/AvatarCard/AvatarCard.svelte';
	import { Avatar } from '$lib/assets/images';
	import { fade, fly } from 'svelte/transition';
	export let isInView: boolean;
	export let isFirstTime: boolean;

	$: delay = isFirstTime ? 2500 : 0;
</script>

<div class="relative z-10 m-auto h-[400px] w-full overflow-hidden">
	<div class="hidden md:block">
		{#if isInView}
			<!-- content here -->
			<!-- LEFT SECTION -->
			<div
				class="absolute h-full w-full"
				in:fly={{ x: -200, y: 300, duration: 3000, delay: delay }}
				out:fade={{ duration: 1000 }}
			>
				<AvatarCard path={Avatar[0]} index={0} position="left-[-3%]" zIndex="z-[10]" timing="-3s" />
				<AvatarCard path={Avatar[1]} index={1} position="left-[4%]" zIndex="z-[9]" timing="-4s" />
				<AvatarCard path={Avatar[2]} index={2} position="left-[11%]" zIndex="z-[8]" timing="-5s" />
				<AvatarCard path={Avatar[3]} index={3} position="left-[17%]" zIndex="z-[7]" timing="-2s" />
				<AvatarCard
					path={Avatar[4]}
					index={4}
					position="left-[23%]"
					zIndex="z-[6]"
					timing="-1.2s"
				/>
				<AvatarCard
					path={Avatar[5]}
					index={5}
					position="left-[30%]"
					zIndex="z-[5]"
					timing="-0.1s"
				/>
				<AvatarCard
					path={Avatar[6]}
					index={6}
					position="left-[38%]"
					zIndex="z-[4]"
					timing="-3.4s"
					isRerverse={true}
				/>
			</div>
			<!-- CENTER SECTION -->
			<div in:fade={{ duration: 2200, delay: delay }} out:fade={{ duration: 1000 }}>
				<AvatarCard
					path={Avatar[7]}
					index={7}
					position="left-[44%]"
					zIndex="z-[3]"
					timing="-4.3s"
				/>
			</div>

			<!-- RIGHT SECTION -->
			<div
				class="absolute h-full w-full"
				in:fly={{ x: 200, y: 300, duration: 3000, delay: delay }}
				out:fade={{ duration: 1000 }}
			>
				<AvatarCard
					path={Avatar[8]}
					index={8}
					position="left-[51%]"
					zIndex="z-[4]"
					timing="-2.3s"
				/>
				<AvatarCard
					path={Avatar[9]}
					index={9}
					position="left-[57%]"
					zIndex="z-[5]"
					timing="-1.3s"
					isRerverse={true}
				/>
				<AvatarCard
					path={Avatar[10]}
					index={10}
					position="left-[63%]"
					zIndex="z-[6]"
					timing="-4s"
				/>
				<AvatarCard
					path={Avatar[11]}
					index={11}
					position="left-[69%]"
					zIndex="z-[7]"
					timing="-6s"
				/>
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
	<div class="relative mx-auto flex h-full w-[90%] min-w-[300px] flex-col justify-end md:hidden">
		<!-- UPPER SECTION -->
		<div class="relative z-10 h-1/3 w-full">
			<AvatarCard path={Avatar[0]} index={0} position="left-[-5%]" zIndex="z-[10]" timing="-3s" />
			<AvatarCard path={Avatar[1]} index={1} position="left-[15%]" zIndex="z-[9]" timing="-4s" />
			<AvatarCard path={Avatar[2]} index={2} position="left-[36%]" zIndex="z-[8]" timing="-5s" />
			<AvatarCard
				path={Avatar[4]}
				index={4}
				position="left-[58%]"
				zIndex="z-[9]"
				timing="-1.2s"
				isRerverse={true}
			/>
			<AvatarCard path={Avatar[6]} index={6} position="left-[75%]" zIndex="z-[10]" timing="-3.4s" />
		</div>
		<!-- LOWER SECTION -->
		<div class="relative z-20 -mt-10 h-1/3 w-full">
			<AvatarCard
				path={Avatar[11]}
				index={11}
				position="left-[-7%]"
				zIndex="z-[10]"
				timing="-6s"
				isRerverse={true}
			/>
			<AvatarCard path={Avatar[12]} index={12} position="left-[10%]" zIndex="z-[9]" timing="-1s" />
			<AvatarCard path={Avatar[7]} index={7} position="left-[34%]" zIndex="z-[8]" timing="-4.3s" />
			<AvatarCard
				path={Avatar[13]}
				index={13}
				position="left-[57%]"
				zIndex="z-[9]"
				timing="-5s"
				isRerverse={true}
			/>
			<AvatarCard
				path={Avatar[14]}
				index={14}
				position="left-[75%]"
				zIndex="z-[10]"
				timing="-4s"
				isRerverse={true}
			/>
		</div>
	</div>
</div>
