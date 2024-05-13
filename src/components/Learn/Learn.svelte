<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { Learn } from '$lib/assets/images';

	let isInView: boolean = false;
</script>

<div
	class="flex h-screen w-full items-center justify-center bg-light duration-300 dark:bg-dark"
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
							class="text-font-lightShallowGreen dark:text-font-darkBase"
							in:fade={{ duration: 500, delay: 0 }}
							out:fade={{ duration: 500, delay: 0 }}
							>Introducing
						</span>
						<span
							class="text-font-lightHighlightGreen2 dark:text-font-darkHighLightGreen1"
							in:fade={{ duration: 500, delay: 200 }}
							out:fade={{ duration: 500, delay: 0 }}>$ATRM</span
						>
					</span>
				</div>

				<!-- DESCRIPTION SECTION -->
				<div
					class="relative flex items-center justify-start self-stretch text-center font-['Pretendard-Light',_sans-serif] text-base font-light leading-[140%] text-font-lightDeepGreen dark:text-[#d3d3d3] md:text-left"
					in:fade={{ duration: 500, delay: 400 }}
					out:fade={{ duration: 500, delay: 0 }}
				>
					Each clone invests based on its distinct persona.<br />From cautious savers to bold
					traders,<br />watch your Clone apply its unique character to.
				</div>

				<!-- BUTTON SECTION -->
				<div
					class="relative flex w-[200px] shrink-0 flex-row items-center justify-center gap-2.5 overflow-hidden rounded-[40px] bg-font-lightDeepGreen py-2 dark:bg-white"
					style="box-shadow: 0px 9px 34px 0px rgba(212, 212, 212, 0.50); "
					in:fade={{ duration: 500, delay: 600 }}
					out:fade={{ duration: 500, delay: 0 }}
				>
					<a
						href="https://alterim-ai.gitbook.io/welcometoalterim/usdaim/usdaim"
						target="_blank"
						class="relative text-center font-Pretendard_Regular text-lg font-normal text-light dark:text-[#020202]"
					>
						Learn More
					</a>
				</div>
			</div>

			<!-- IMAGE SECTION -->
			<div
				class="h-[350px] w-[350px] shrink-0"
				in:fade={{ duration: 500, delay: 0 }}
				out:fade={{ duration: 500, delay: 0 }}
			>
				<img src={Learn} alt="Learn" class="w-full object-cover" />
			</div>
		</div>
	{/if}
</div>
