<script lang="ts">
	import Title from '$components/Common/Title.svelte';
</script>

<div
	class="fixed z-[100] flex h-20 w-screen items-center justify-between bg-black bg-opacity-100 px-2 md:px-5"
>
	<div>
		<Title iconColor="white" textColor="white" />
	</div>
	<!-- For more features use the AutoHTML plugin window in figma ... -->
	<a
		href="https://alterim-ai.gitbook.io/welcometoalterim/"
		target="_blank"
		class="relative flex w-[100px] flex-row items-center justify-center gap-2.5 overflow-hidden rounded-[40px] bg-[#ffffff] py-2 md:w-[200px]"
		style="box-shadow: 0px 9px 34px 0px rgba(212, 212, 212, 0.50); "
	>
		<div
			class="relative flex items-center justify-center gap-2 text-center font-Pretendard_Regular text-sm font-normal text-[#020202] md:text-lg"
		>
			<span>Document</span>
			<svg
				class="relative hidden h-[9.6px] w-[9.59px] shrink-0 overflow-visible md:block"
				style=""
				width="10"
				height="10"
				viewBox="0 0 10 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8.40703 2.57519L1.19453 9.8002L0.207031 8.80019L7.41953 1.57519H1.84453L1.85703 0.200195H9.79453V8.1377H8.39453L8.40703 2.57519Z"
					fill="#020202"
				/>
			</svg>
		</div>
	</a>
</div>
