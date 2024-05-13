import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export let darkMode: Writable<boolean> = writable(false);
export let isFirstLoad: Writable<boolean> = writable(true);

// Theme Initialization
if (browser) {
	// check local storage for dark mode preference
	if (!localStorage.getItem('darkMode')) {
		// if no local storage, set dark mode
		darkMode.set(true);
		localStorage.setItem('darkMode', 'true');
		document.documentElement.classList.add('dark');
	}

	// set dark mode if local storage is true
	if (localStorage.getItem('darkMode') === 'true') {
		darkMode.set(true);
		document.documentElement.classList.add('dark');
	}

	// set light mode if local storage is false
	if (localStorage.getItem('darkMode') === 'false') {
		darkMode.set(false);
		document.documentElement.classList.remove('dark');
	}
}
