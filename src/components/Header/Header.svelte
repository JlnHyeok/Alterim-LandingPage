<script lang="ts">
	import Title from './Title.svelte';
</script>

<div class="h-20 w-full z-20 fixed bg-opacity-0 flex justify-between items-center px-5">
	<div>
		<Title />
	</div>
	<!-- For more features use the AutoHTML plugin window in figma ... -->
	<a
		href="https://alterim-ai.gitbook.io/welcometoalterim/"
		target="_blank"
		class="bg-[#ffffff] rounded-[40px] py-2 flex flex-row gap-2.5 items-center justify-center w-[200px] relative overflow-hidden"
		style="box-shadow: 0px 9px 34px 0px rgba(212, 212, 212, 0.50); "
	>
		<div
			class="text-[#020202] text-center font-Pretendard_Regular text-lg font-normal relative flex items-center justify-center gap-2"
		>
			<span>Document</span>
			<svg
				class="shrink-0 w-[9.59px] h-[9.6px] relative overflow-visible"
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
