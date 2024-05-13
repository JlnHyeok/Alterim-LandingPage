// WalletStore.js
import { writable } from 'svelte/store';

// Function to check if localStorage is available
function isLocalStorageAvailable() {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
}

// Load the wallet address from localStorage if it exists, otherwise default to an empty string
const initialWalletAddress = isLocalStorageAvailable() ? localStorage.getItem('walletAddress') || '' : '';
const initialConnectedChain = isLocalStorageAvailable() ? localStorage.getItem('connectedChain') || '' : '';

// Create a writable store to hold the wallet address
export const walletAddress = writable(initialWalletAddress);
export const connectedChain = writable(initialConnectedChain);

// Subscribe to changes in the walletAddress store and save the updated value to localStorage (if available)
if (isLocalStorageAvailable()) {
    walletAddress.subscribe(value => {
        localStorage.setItem('walletAddress', value);
    });

    connectedChain.subscribe(value => {
        localStorage.setItem('connectedChain', value);
    });
}
