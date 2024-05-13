<script lang="ts">
	import '../../utils/web3modal'
	import {
		BackArrow,
} from '$lib/assets/images';
</script>

<div class="fixed z-[100] flex h-20 w-screen items-center justify-between bg-black bg-opacity-100 px-4 md:px-8">
	<div>
		<a href="/">
			<img src="{BackArrow}" alt="Back arrow icon" class="icon" style="width: 28px; height: 28px;" />
		</a>
		
	</div>
	<div class="flex items-center justify-end">
		<div>
			<w3m-button />
		</div>
	</div>
</div>
