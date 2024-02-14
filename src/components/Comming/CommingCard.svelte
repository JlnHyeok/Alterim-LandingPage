<script lang="ts">
	export let src: string;
	export let idx: number;
</script>

<div class="rounded-[20px] shrink-0 w-[200px] h-[232px] relative overflow-hidden">
	<div class="absolute" style="inset: 0; ">
		<div class="w-[200px] h-[200px] static">
			<div
				class="bg-[#c4dacc] border-solid border-[#97bab0] border w-[200px] h-[200px] absolute left-0 top-0"
			></div>
			<img
				draggable="false"
				class=" w-[200px] h-[200px] absolute left-0 top-0"
				style="object-fit: cover; "
				{src}
				alt={'comming' + idx}
			/>
		</div>
		<div class="w-[200px] h-8 static">
			<div
				class="bg-[#c4dacc] border-solid border-[#97bab0] border w-[200px] h-8 absolute left-0 top-[200px]"
			></div>
			<svg
				class="w-0 h-1.5 absolute left-[100px] top-[200px] overflow-visible"
				style=""
				width="2"
				height="6"
				viewBox="0 0 2 6"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M1 0V6" stroke="#97BAB0" />
			</svg>
			<svg
				class="w-0 h-1.5 absolute left-[100px] top-[226px] overflow-visible"
				style=""
				width="2"
				height="6"
				viewBox="0 0 2 6"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M1 0V6" stroke="#97BAB0" />
			</svg>
			<div class="bg-[#97bab0] rounded-[50%] w-2 h-2 absolute left-3.5 top-[212px]"></div>
			<svg
				class="w-0 h-[18px] absolute left-[35.71px] top-[207px] overflow-visible"
				style=""
				width="2"
				height="18"
				viewBox="0 0 2 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0.714844 0V18" stroke="#97BAB0" />
			</svg>
			<div class="w-2 h-2.5 static">
				<div class="bg-[#97bab0] w-[3px] h-2.5 absolute left-44 top-[211px]"></div>
				<div class="bg-[#97bab0] w-[3px] h-2.5 absolute left-[181px] top-[211px]"></div>
			</div>
			<svg
				class="w-0 h-[18px] absolute left-[161.9px] top-[225px] overflow-visible"
				style="transform: translate(-0.5px, -18px); "
				width="2"
				height="18"
				viewBox="0 0 2 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0.90625 18L0.906252 3.8743e-07" stroke="#97BAB0" />
			</svg>
			<svg
				class="w-[14.29px] h-2 absolute left-[92.86px] top-[212px] overflow-visible"
				style=""
				width="16"
				height="8"
				viewBox="0 0 16 8"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0.855469 0H6.80785" stroke="#97BAB0" />
				<path d="M0.855469 4H6.80785" stroke="#97BAB0" />
				<path d="M0.855469 8H6.80785" stroke="#97BAB0" />
				<path d="M9.1875 0H15.1399" stroke="#97BAB0" />
				<path d="M9.1875 4H15.1399" stroke="#97BAB0" />
				<path d="M9.1875 8H15.1399" stroke="#97BAB0" />
			</svg>
		</div>
	</div>
</div>
