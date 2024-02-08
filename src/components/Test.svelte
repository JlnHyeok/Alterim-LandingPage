<script lang="ts">
	import AvatarCard from './Common/AvatarCard/AvatarCard.svelte';
	import TalkingChat from './Common/ChatCard/TalkingChat.svelte';

	import { Avatar } from '$lib/assets/images/avatar/index';
</script>

<div class="z-[2] relative">
	<!-- <div class="font-['Pretendard'] text-font-highlight/75">Meet Your Other Self in the Web3</div>

	<div class="mt-3 h-20">
		<TalkingChat message="Good Morinig Guyszzaasaasaㄴqsasq sq  s q s!" />
	</div> -->
	<div class="relative w-full h-[600px] z-10 mt-[300px] overflow-hidden">
		<AvatarCard path={Avatar[0]} index={0} position="left-[-10px]" zIndex="z-[10]" timing="-3s" />
		<AvatarCard path={Avatar[1]} index={1} position="left-[120px]" zIndex="z-[9]" timing="-4s" />
		<AvatarCard path={Avatar[2]} index={2} position="left-[250px]" zIndex="z-[8]" timing="-5s" />
		<AvatarCard path={Avatar[3]} index={3} position="left-[350px]" zIndex="z-[7]" timing="-2s" />
		<AvatarCard path={Avatar[4]} index={4} position="left-[470px]" zIndex="z-[6]" timing="-1.2s" />
		<AvatarCard path={Avatar[5]} index={5} position="left-[600px]" zIndex="z-[5]" timing="-0.1s" />
		<AvatarCard path={Avatar[6]} index={6} position="left-[740px]" zIndex="z-[4]" timing="-3.4s" />
		<AvatarCard path={Avatar[7]} index={7} position="left-[860px]" zIndex="z-[3]" timing="-4.3s" />
		<AvatarCard path={Avatar[8]} index={8} position="left-[990px]" zIndex="z-[4]" timing="-2.3s" />
		<AvatarCard path={Avatar[9]} index={9} position="left-[1100px]" zIndex="z-[5]" timing="-1.3s" />
		<AvatarCard path={Avatar[10]} index={10} position="left-[1210px]" zIndex="z-[6]" timing="-4s" />
		<AvatarCard path={Avatar[11]} index={11} position="left-[1330px]" zIndex="z-[7]" timing="-6s" />
		<AvatarCard path={Avatar[12]} index={12} position="left-[1460px]" zIndex="z-[8]" timing="-1s" />
		<AvatarCard path={Avatar[13]} index={13} position="left-[1600px]" zIndex="z-[9]" timing="-5s" />
		<AvatarCard
			path={Avatar[14]}
			index={14}
			position="left-[1740px]"
			zIndex="z-[10]"
			timing="-4s"
		/>
		<!-- Generate til index 15 one by one -->
	</div>
</div>
