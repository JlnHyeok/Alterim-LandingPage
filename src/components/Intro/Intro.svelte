<script lang="ts">
	import { Logo, ScrollDown } from '$lib/assets/images';
	import AvatarList from './AvatarList.svelte';
</script>

<div class="relative w-full text-white">
	<!-- TITLE SECTION -->
	<div class="w-full h-[450px] flex flex-col items-center relative">
		<!-- LOGO -->
		<div class="w-16 h-20 mt-[160px]">
			<img src={Logo} alt="logo" class="object-cover" />
		</div>

		<!-- MAIN TEXT -->
		<div class="font-Pretendard_Regular font-normal text-white text-[48px]">
			<h1>Meet Your Other Self in the Web3</h1>
		</div>

		<!-- SUB TEXT -->
		<div class="font-Pretendard_Light text-[24px] text-[#ffffffbf]">
			<p>Where Your Digital Clone Comes to Life powered by AI</p>
		</div>

		<div class="absolute flex flex-col items-center h-14 -bottom-24 z-20">
			<span
				class="font-Pretendard_ExtraLight [text-shadow:0px_0px_10px_#ffffff80] text-[#ffffffbf] text-[1rem]"
				>scroll down</span
			>
			<div class="relative mt-4">
				<img src={ScrollDown} alt="scroll-down" />
			</div>
		</div>
	</div>

	<!-- AVATAR SECTION -->
	<div class="w-full relative text-center">
		<AvatarList />
	</div>
</div>
