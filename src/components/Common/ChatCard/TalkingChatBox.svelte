<script lang="ts">
	export let sender: string = 'you';
</script>

<div
	class="max-w- flex w-fit min-w-0 max-w-[96%] shrink-0 flex-row items-end justify-start gap-2.5 break-all rounded-[40px] px-[0.85rem] py-[0.75rem] text-sm text-[#f8fff6d8]
       {sender == 'me' ? 'me_background' : 'you_background'}"
	style="box-shadow: 0px 3.09px 12.36px 0px rgba(0, 0, 0, 0.08); "
>
	<span class="w-full">
		<strong class="font-Pretendard_Regular text-[#00D7A3]">+102%</strong>😎. Will secure my profit
		atm. You can check my trading history on
		<u class="font-Pretendard_Regular text-[#00D7A3]">investment</u> tab.
	</span>
</div>

<style>
	.you_background {
		border: 0.5px solid rgba(208, 255, 227, 0.12);
		background: linear-gradient(
			180deg,
			rgba(31.28, 93.49, 89.76, 0.02) 0%,
			rgba(31.28, 93.49, 89.76, 0.02) 0%,
			rgba(251.73, 251.73, 251.73, 0.05) 100%
		);
	}
</style>
