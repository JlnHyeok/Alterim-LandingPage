import { defaultWagmiConfig } from '@web3modal/wagmi'
import { createWeb3Modal, useWeb3Modal, 
} from '@web3modal/wagmi/react';
import {
	getAccount,
	getChainId,
	reconnect,
	watchAccount,
	watchChainId,
} from '@wagmi/core'

import { readable, writable } from 'svelte/store'
import {
	mainnet,
	goerli,
	bsc,
	bscTestnet
} from 'viem/chains'

export const projectId = import.meta.env.VITE_PROJECT_ID

const metadata = {
	name: 'Web3Modal',
	description: 'Web3Modal Example',
	url: 'https://web3modal.com',
	icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

export const chains = [
	mainnet,
	goerli,
	bsc,
	bscTestnet
] as const

export const wagmiConfig = defaultWagmiConfig({
	chains,
	projectId,
	metadata,
	enableCoinbase: false,
	enableInjected: false,
})

reconnect(wagmiConfig)

createWeb3Modal({
	wagmiConfig,
	projectId,
	themeMode: 'dark',
	featuredWalletIds: [],
	enableAnalytics: true,
})

export  const { open } = useWeb3Modal();


export const chainId = readable(getChainId(wagmiConfig), (set) =>
	watchChainId(wagmiConfig, { onChange: set }),
)
export const account = readable(getAccount(wagmiConfig), (set) =>
	watchAccount(wagmiConfig, { onChange: set }),
)
export const provider = readable<unknown | undefined>(
	undefined,
	(set) =>
		watchAccount(wagmiConfig, {
			onChange: async (account) => {
				if (!account.connector) return set(undefined)
				set(await account.connector?.getProvider())
			},
		}),
)

export const customWallet = writable({
	id: undefined,
	name: undefined,
	homepage: undefined,
	image_url: undefined,
	mobile_link: undefined,
	desktop_link: undefined,
	webapp_link: undefined,
	app_store: undefined,
	play_store: undefined
})

export const supported_chains = writable<string[]>([])