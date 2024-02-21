<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { Learn } from '$lib/assets/images';

	let isInView: boolean = false;
</script>

<div
	class="flex h-screen w-full items-center justify-center"
	use:inview={{ unobserveOnEnter: false, rootMargin: '-40%' }}
	on:inview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			class="relative flex flex-col-reverse items-center justify-start md:flex-row md:gap-[91px]"
		>
			<div
				class="relative flex shrink-0 flex-col items-center justify-start gap-[35px] md:items-start"
			>
				<!-- TITLE SECTION -->
				<div
					class="relative flex items-center justify-center text-center font-Pretendard_Regular text-[32px] font-normal leading-[120%]"
				>
					<span>
						<span
							class=""
							in:fade={{ duration: 1000, delay: 0 }}
							out:fade={{ duration: 1000, delay: 0 }}
							>Introducing
						</span>
						<span
							class="text-font-highlight"
							in:fade={{ duration: 1000, delay: 300 }}
							out:fade={{ duration: 1000, delay: 0 }}>$AIM</span
						>
					</span>
				</div>

				<!-- DESCRIPTION SECTION -->
				<div
					class="relative flex items-center justify-start self-stretch text-left font-['Pretendard-Light',_sans-serif] text-base font-light leading-[140%] text-[#d3d3d3]"
					in:fade={{ duration: 1000, delay: 700 }}
					out:fade={{ duration: 1000, delay: 0 }}
				>
					Each clone invests based on its distinct persona.<br />From cautious savers to bold
					traders,<br />watch your Clone apply its unique character to.
				</div>

				<!-- BUTTON SECTION -->
				<div
					class="relative flex w-[200px] shrink-0 flex-row items-center justify-center gap-2.5 overflow-hidden rounded-[40px] bg-[#ffffff] py-2"
					style="box-shadow: 0px 9px 34px 0px rgba(212, 212, 212, 0.50); "
					in:fade={{ duration: 1000, delay: 1000 }}
					out:fade={{ duration: 1000, delay: 0 }}
				>
					<a
						href="https://alterim-ai.gitbook.io/welcometoalterim/usdaim/usdaim"
						target="_blank"
						class="relative text-center font-Pretendard_Regular text-lg font-normal text-[#020202]"
					>
						Learn More
					</a>
				</div>
			</div>

			<!-- IMAGE SECTION -->
			<div
				class="h-[350px] w-[350px] shrink-0"
				in:fade={{ duration: 1000, delay: 0 }}
				out:fade={{ duration: 1000, delay: 0 }}
			>
				<img src={Learn} alt="Learn" class="w-full object-cover" />
			</div>
		</div>
	{/if}
</div>
