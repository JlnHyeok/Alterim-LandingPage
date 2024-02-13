<script lang="ts">
	import AvatarCard from './Common/AvatarCard/AvatarCard.svelte';
	import TalkingChat from './Common/ChatCard/TalkingChat.svelte';

	import { Avatar } from '$lib/assets/images/index';
</script>

<div class="z-[2] relative">
	<!-- <div class="font-['Pretendard'] text-font-highlight/75">Meet Your Other Self in the Web3</div>

	<div class="mt-3 h-20">
		<TalkingChat message="Good Morinig Guyszzaasaasaㄴqsasq sq  s q s!" />
	</div> -->
	<div class="relative w-full h-[600px] m-auto z-10 mt-[300px]">
		<AvatarCard path={Avatar[0]} index={0} position="left-[-3%]" zIndex="z-[10]" timing="-3s" />
		<AvatarCard path={Avatar[1]} index={1} position="left-[4%]" zIndex="z-[9]" timing="-4s" />
		<AvatarCard path={Avatar[2]} index={2} position="left-[11%]" zIndex="z-[8]" timing="-5s" />
		<AvatarCard path={Avatar[3]} index={3} position="left-[16%]" zIndex="z-[7]" timing="-2s" />
		<AvatarCard path={Avatar[4]} index={4} position="left-[23%]" zIndex="z-[6]" timing="-1.2s" />
		<AvatarCard path={Avatar[5]} index={5} position="left-[31%]" zIndex="z-[5]" timing="-0.1s" />
		<AvatarCard
			path={Avatar[6]}
			index={6}
			position="left-[39%]"
			zIndex="z-[4]"
			timing="-3.4s"
			isRerverse={true}
		/>
		<AvatarCard path={Avatar[7]} index={7} position="left-[46%]" zIndex="z-[3]" timing="-4.3s" />
		<AvatarCard path={Avatar[8]} index={8} position="left-[53%]" zIndex="z-[4]" timing="-2.3s" />
		<AvatarCard
			path={Avatar[9]}
			index={9}
			position="left-[59%]"
			zIndex="z-[5]"
			timing="-1.3s"
			isRerverse={true}
		/>
		<AvatarCard path={Avatar[10]} index={10} position="left-[65%]" zIndex="z-[6]" timing="-4s" />
		<AvatarCard path={Avatar[11]} index={11} position="left-[71%]" zIndex="z-[7]" timing="-6s" />
		<AvatarCard
			path={Avatar[12]}
			index={12}
			position="left-[79%]"
			zIndex="z-[8]"
			timing="-1s"
			isRerverse={true}
		/>
		<AvatarCard
			path={Avatar[13]}
			index={13}
			position="left-[86%]"
			zIndex="z-[9]"
			timing="-5s"
			isRerverse={true}
		/>
		<AvatarCard
			path={Avatar[14]}
			index={14}
			position="left-[92%]"
			zIndex="z-[10]"
			timing="-4s"
			isRerverse={true}
		/>
		<!-- Generate til index 15 one by one -->
	</div>
</div>
