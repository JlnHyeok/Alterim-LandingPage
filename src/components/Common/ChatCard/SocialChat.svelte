<script lang="ts">
	import {
		SocialJason,
		Liked,
		Certed,
		Retweet,
		EmptyLiked,
		Sub,
		Share,
		Comment
	} from '$lib/assets/images';
	import type { IAvatarInfo } from './type';

	export let avatarInfo: IAvatarInfo;

	const textAlign: string = 'flex justify-start items-center';
</script>

<div class="talkbox_background relative w-full rounded-2xl">
	<div class="relative flex">
		<!-- LEFT SIDE -->
		<section class="flex h-full w-20 flex-col items-center justify-center">
			<!-- mt 와 Liked 의 h 의 크기 맞춰줄 것. -->
			<figure
				class="h-10 w-10 overflow-hidden rounded-full
			{avatarInfo?.liked ? 'mt-9' : 'mt-4'}
			"
			>
				<img src={avatarInfo?.src} alt="twitter_profile" class="w-full h-full" />
			</figure>
		</section>

		<!-- RIGHT SIDE -->
		<section class="h-full w-full">
			<!-- LIKE SECTION -->
			<div
				class="relative w-full font-Pretendard_ExtraLight text-sm text-[#9AA9AF]
						{avatarInfo?.liked ? 'h-8' : 'h-2'}
			"
			>
				<div
					class="relative h-full w-full pl-2 pt-2
					{avatarInfo?.liked ? 'block' : 'hidden'}	{textAlign}
					"
				>
					<figure class="absolute -left-3 pt-[1px]">
						<img src={Liked} alt="liked" class=" object-cover" />
					</figure>
					<span> {avatarInfo?.liked} </span>
				</div>
			</div>

			<!-- NAME & MENU BTN (''') SECTION -->
			<div
				class="flex h-8 w-full font-Pretendard_ExtraLight text-sm text-[#9AA9AF]
      "
			>
				<div class="h-full w-full {textAlign}">
					<strong class="font-Pretendard_Light text-white"> {avatarInfo.name} </strong>
					<figure class="pl-1 pt-[1px]">
						<img
							src={Certed}
							alt="certed"
							class="{avatarInfo.isChecked ? 'block' : 'hidden'} object-cover"
						/>
					</figure>
					<span>&nbsp; {avatarInfo.tag} • {avatarInfo.time}</span>
				</div>
				<span class=" pr-5">•••</span>
			</div>

			<!-- MESSAGE SECTION -->
			<p
				class="h-fit w-full break-all pr-6 font-Pretendard_ExtraLight text-xs
      {textAlign}
      "
			>
				{avatarInfo.message}
			</p>

			<!-- BOTTOM SECTION -->
			<div class="h-10 w-full">
				<div class="flex h-full w-full font-Pretendard_ExtraLight text-xs">
					<button class="flex h-full w-1/4 items-center">
						<figure class="pr-[5px]">
							<img src={Comment} alt="comment" />
						</figure>
						<span> {avatarInfo.like} </span>
					</button>
					<button class="flex h-full w-1/4 items-center">
						<figure class="pr-[5px]">
							<img src={Retweet} alt="retweet" />
						</figure>
						<span> {avatarInfo.retweet} </span>
					</button>
					<button class="flex h-full w-1/4 items-center">
						<figure class="pr-[5px]">
							<img src={EmptyLiked} alt="empty-like" />
						</figure>
						<span> {avatarInfo.comment} </span>
					</button>
					<div class="flex h-full w-1/4 justify-center gap-4">
						<button><figure><img src={Sub} alt="subscribe" /></figure></button>
						<button><figure><img src={Share} alt="share" /></figure></button>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	.talkbox_background {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(17px);
	}
</style>
