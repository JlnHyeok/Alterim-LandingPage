<!-- ChainSelector.svelte -->
<script>
import {
    fly
} from 'svelte/transition';
import { connectedChain } from './WalletStore.js'; 

let isOpen = false;

const chains = ["Ethereum", "Bitcoin", "Merlin"]
function toggleDropdown() {
    isOpen = !isOpen;
}

function selectChain(chain) {
    connectedChain.set(chain);
    toggleDropdown();
}
</script>

<div class="relative">
    <button class="connect-button" on:click={toggleDropdown}>
        {$connectedChain}
        <svg class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 10.333L12 14.333L8 10.333" stroke="#181E29" stroke-width="1.5" stroke-linecap="square"/>
        </svg>
    </button>
    {#if isOpen}
    <div class="chain-dropdown-container">
    <div class="chain-dropdown" transition:fly="{{ y: 10, duration: 200 }}">
        {#each chains as chain}
            <div class="chain-item" on:click={() => selectChain(chain)} >
                {chain}
                <!-- {#if chain.disabled}
                    <span class="disabled-chain-text">(coming soon)</span>
                {/if} -->
            </div>
        {/each}
        <div class="disabled-chain-item" >
            Solana
                <span class="disabled-chain-text">(coming soon)</span>
        </div>
    </div>
</div>
{/if}
</div>

<style>
.connect-button {
    margin-left: -15px;
    width: 150px;
    border: 1px solid #004A50;
    background-color: #D1E1D7;
    border-radius: 999px;
    color: #004A50;
    padding: 10px 20px;
    transition: background-color 0.3s, color 0.3s;
    display: flex;
    align-items: center; /* Align icon vertically */
    justify-content: space-between; /* Put space between text and icon */
}

.chain-dropdown-container {
        position: absolute;
        top: calc(100% + 5px); /* Adjust the space between button and dropdown */
        left: 50%;
        transform: translateX(-50%);
        z-index: 10; /* Ensure dropdown is above other content */
    }


.chain-dropdown {
    min-width: 200px;
    border: 1px solid #004A50;
    background-color: #C4D6CB;
    border-radius: 20px;
    color: #004A50;
    padding: 10px 15px;
    margin-top: 15px;
    transition: background-color 0.3s, color 0.3s;
}

.chain-item {
    background-color: #C4D6CB;
    border-radius: 20px;
    color: #004A50;
    padding: 10px 15px;
}

.disabled-chain-item {
    background-color: #C4D6CB;
    border-radius: 20px;
    color: #8BA59E;
    padding: 10px 15px;
}

.chain-item:hover {
    border: 1px solid #004A50;
    background-color: #D1E1D7;
    border-radius: 20px;
    color: #004A50;
    padding: 10px 15px;
}

.disabled-chain-text {
    color: #8BA59E;
    font-size: 12px;
}


</style>
