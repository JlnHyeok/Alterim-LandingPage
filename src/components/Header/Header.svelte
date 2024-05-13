<script lang="ts">
	import Title from '$components/Common/Title.svelte';
	import '../../utils/web3modal';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import ChainSelector from './ChainSelector.svelte';
	import { walletAddress, connectedChain } from './WalletStore.js';

	let isBrowser = false;
	let connectHandler = null;
	export let hideElements = [];
	import { BackArrow } from '$lib/assets/images';
	import { open, account } from '../../utils/web3modal';
	import { darkMode } from '$lib/store';

	const listenToWalletConnect = account.subscribe((accountInfo) => {
		if (accountInfo) {
			const { address } = accountInfo;
			console.log('Connected Account Address:', address);
			if (address !== undefined) {
				walletAddress.set(address);
			}
		}
	});

	onMount(() => {
		// Check if window object is defined
		if (typeof window !== 'undefined') {
			isBrowser = true;
		}
	});

	async function handleConnectEthereum() {
		try {
			let accounts = await open();
		} catch (e) {
			console.log(e);
			console.log('Connect failed');
		}
	}

	async function handleConnectBitcoinMerlin() {
		const okxwallet = window.okxwallet;
		try {
			let accounts = await okxwallet.bitcoin.requestAccounts();
			walletAddress.set(accounts[0]);
		} catch (e) {
			console.log(e);
			console.log('Connect failed');
		}
	}

	// Subscribe to changes in the connectedChain store
	connectedChain.subscribe((chainName) => {
		handleChainSelected({ chainName });
	});

	function handleChainSelected(chain) {
		// Set the connect handler based on the selected chain
		if (chain.chainName === 'Ethereum') {
			connectHandler = handleConnectEthereum;
		} else if (chain.chainName === 'Bitcoin' || chain.chainName === 'Merlin') {
			connectHandler = handleConnectBitcoinMerlin;
		} else {
			connectHandler = null; // You can handle other chains accordingly
		}
	}

	function truncateAddress(address) {
		const maxLength = 8; // Length of characters to display before and after ellipsis
		const truncationPoint = Math.floor(address.length / 2);
		return address.substring(0, maxLength) + '...' + address.substring(address.length - maxLength);
	}

	function copyToClipboard() {
		// Copy the wallet address to the clipboard
		navigator.clipboard.writeText($walletAddress);
	}

	function disconnectWallet() {
		walletAddress.set('');
	}

	function toogleTheme() {
		darkMode.update((value) => !value);
		document.documentElement.classList.toggle('dark');

		// Save the theme preference to local storage
		localStorage.setItem('darkMode', JSON.stringify($darkMode));
	}
</script>

<div
	class="fixed z-[100] flex h-20 w-screen items-center justify-between bg-light bg-opacity-100 px-4 duration-300 dark:bg-dark md:px-8"
>
	{#if !hideElements.includes('logo')}
		<!-- LOGO SECTION -->
		<div>
			<Title
				size="scale-[0.85] md:scale-100 -ml-3 md:ml-0"
				textColor={$darkMode ? 'white' : '#004A50'}
			/>
		</div>
	{/if}
	{#if !hideElements.includes('arrow')}
		<a href="/">
			<img src={BackArrow} alt="Back arrow icon" class="icon" style="width: 28px; height: 28px;" />
		</a>
	{/if}

	<!-- THEME TOGGLE SECTION -->
	<div
		class="flex w-32 items-center justify-center gap-2 font-Pretendard_Regular md:absolute md:right-[510px]"
	>
		<button
			on:click={toogleTheme}
			disabled={$darkMode}
			class="text-sm text-[#004a5080] disabled:text-white md:text-[18px]"
		>
			Dark
		</button>
		<span class="text-xs text-font-lightDeepGreen dark:text-font-darkBase md:text-base">|</span>
		<button
			on:click={toogleTheme}
			disabled={!$darkMode}
			class="text-sm text-[#ffffff80] disabled:text-font-lightDeepGreen md:text-[18px]"
		>
			Light
		</button>
	</div>

	<div class="flex items-center justify-end">
		<!-- DOCUMENT SECTION -->
		{#if !hideElements.includes('documentation')}
			<a
				href="https://alterim-ai.gitbook.io/welcometoalterim/"
				target="_blank"
				class="relative flex w-[100px] flex-row items-center justify-center gap-2.5 overflow-hidden bg-transparent py-2 md:mr-10 md:w-[110px]"
			>
				<div
					class="relative flex items-center justify-center gap-2 text-center font-Pretendard_Regular text-sm font-normal text-font-lightDeepGreen dark:text-[#ffffff] md:text-lg"
				>
					<span>Document</span>
					<svg
						class="relative h-[9.6px] w-[9.59px] shrink-0 overflow-visible"
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.40703 2.57519L1.19453 9.8002L0.207031 8.80019L7.41953 1.57519H1.84453L1.85703 0.200195H9.79453V8.1377H8.39453L8.40703 2.57519Z"
							fill={$darkMode ? '#ffffff' : '#004a50'}
						>
						</path></svg
					>
				</div>
			</a>
		{/if}

		<div class="hidden md:block">
			<ChainSelector on:chainSelected={handleChainSelected} />
		</div>
		<!-- <div>
						<w3m-button />
                    </div> -->
		{#if !$walletAddress}
			<div class="hidden md:block">
				<button
					class={$darkMode ? ' connect-button-dark-mode' : 'connect-button-light-mode'}
					on:click={connectHandler}
				>
					Connect Wallet
				</button>
			</div>
		{:else}
			<div class="wallet-address-container hidden md:block">
				<div class="wallet-address">
					{truncateAddress($walletAddress)}
				</div>
				<div on:click={copyToClipboard} class="icon-container hidden md:block">
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_1290_3286)">
							<path
								d="M12.666 6.66667V4.06667C12.666 4.02985 12.6362 4 12.5993 4H4.73268C4.69586 4 4.66602 4.02985 4.66602 4.06667V13.2667C4.66602 13.3035 4.69586 13.3333 4.73268 13.3333H7.33268M7.39935 16H15.266C15.3028 16 15.3327 15.9702 15.3327 15.9333V6.73333C15.3327 6.69651 15.3028 6.66667 15.266 6.66667H7.39935C7.36253 6.66667 7.33268 6.69651 7.33268 6.73333V15.9333C7.33268 15.9702 7.36253 16 7.39935 16Z"
								stroke="white"
								stroke-width="1.25"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1290_3286">
								<rect width="16" height="16" fill="white" transform="translate(2 2)" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<div on:click={disconnectWallet} class="icon-container hidden md:block">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_1312_557)">
							<path
								d="M5.14759 10.8524L10.8524 5.14759M10.1609 8.25931C10.5428 8.64121 11.1717 8.63154 11.5655 8.2377L13.17 6.63322C14.253 5.55018 14.2796 3.82082 13.2294 2.77059C12.1792 1.72036 10.4498 1.74697 9.36678 2.83001L7.7623 4.43449C7.36846 4.82833 7.35879 5.45719 7.74069 5.83909M5.83909 7.74069C5.45719 7.35879 4.82833 7.36846 4.43449 7.7623L2.83001 9.36678C1.74697 10.4498 1.72036 12.1792 2.77059 13.2294C3.82082 14.2796 5.55018 14.253 6.63322 13.17L8.2377 11.5655C8.63154 11.1717 8.64121 10.5428 8.25931 10.1609"
								stroke="white"
								stroke-width="1.25"
								stroke-linecap="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1312_557">
								<rect width="16" height="16" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.connect-button-dark-mode {
		margin-left: 20px;
		border: 2px solid white;
		border-radius: 999px;
		color: white;
		padding: 10px 20px;
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	.connect-button-dark-mode:hover {
		border: 2px solid white;
		border-radius: 999px;
		color: white;
		padding: 10px 20px;
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	.connect-button-light-mode {
		margin-left: 20px;
		border: 2px solid #004a50;
		border-radius: 999px;
		color: #004a50;
		padding: 10px 20px;
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	.connect-button-light-mode:hover {
		border: 2px solid #004a50;
		border-radius: 999px;
		color: white;
		padding: 10px 20px;
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	.wallet-address-container {
		display: flex;
		align-items: center;
		margin-left: 20px;
		border: 2px solid white;
		border-radius: 999px;
		padding: 8px 16px;
		margin-right: 10px;
	}

	.wallet-address {
		color: white;
		margin-right: 10px;
	}

	.icon-container {
		display: flex;
		cursor: pointer;
		align-items: center;
	}
</style>
