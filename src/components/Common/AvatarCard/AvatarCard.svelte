<script lang="ts">
	export let path: string;
	export let index: number;
	export let position: string = '';
	export let zIndex: string = '';
	export let timing: string = '0s';
</script>

<div
	class="w-[200px] h-[200px] absolute bottom-2 avatar-jump {position} {zIndex} "
	style={`--delay-sec:${timing};`}
>
	<img src={path} draggable="false" alt="image{index}" class="object-cover scale-125" />
</div>

<style>
	/* use variables */
	:root {
		--delay-sec: -2s;
	}
	@keyframes jump {
		0% {
			transform: translateY(0px);
		}
		4% {
			transform: translateY(-4px);
		}
		7% {
			transform: translateY(0px);
		}
		10% {
			transform: translateY(-5px);
		}
		14% {
			transform: translateY(0px);
		}
		17% {
			transform: translateY(-3px);
		}
		20% {
			transform: translateY(0px);
		}
		23% {
			transform: translateY(-4px);
		}
		27% {
			transform: translateY(0px);
		}
		30% {
			transform: translateY(-8px);
		}
		33% {
			transform: translateY(0px);
		}
		37% {
			transform: translateY(-6px);
		}
		40% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-2px);
		}
		60% {
			transform: translateY(0px);
		}
		64% {
			transform: translateY(-10px);
		}
		68% {
			transform: translateY(0px);
		}
		70% {
			transform: translateY(-150px);
		}
		74% {
			transform: translateY(0px);
		}
		77% {
			transform: translateY(-15px);
		}
		80% {
			transform: translateY(0px);
		}
		90% {
			transform: translateY(-5px);
		}
		100% {
			transform: translateY(0px);
		}
	}

	.avatar-jump {
		animation: jump 8s var(--delay-sec) infinite;
	}
</style>
