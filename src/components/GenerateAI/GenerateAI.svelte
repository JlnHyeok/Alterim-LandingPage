<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    import Background from '$components/Common/Background/Background.svelte';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { walletAddress, connectedChain } from '../Header/WalletStore'; 

    export const userNFTs = writable(null);
    let selectedNFT = null;
    let generatedPFP = null;

    const dispatch = createEventDispatcher();

    function selectNFT(nft) {
        selectedNFT = nft;
        console.log(nft)
        dispatch('nftSelected', selectedNFT); 
    }

    function assignPFP(pfp) {
        generatedPFP = pfp;
        dispatch('pfpCloneGenerated', generatedPFP);
    }
    
    let showSVG = true;

    // Watch for changes in currentStep
    $: {
        if ($currentStep === 2) {
            // Call AI generation function
            generatePFPClone(selectedNFT);
            setTimeout(() => {
                showSVG = false;
                nextStep()
            }, 3000); // Fade out after 3 seconds
        }
    }

    async function generatePFPClone(nft) {
        try {
            // Make the POST request to fetch clone
            const response = await fetch(`https://alterim.deno.dev/ai/persona`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address: nft.contract.address,
                    tokenId: nft.tokenId,
                    nftMetadata: {
                        name: nft.name,
                        description: nft.description,
                        imageUrl: nft.image.originalUrl,
                        traits: nft.metadata.attributes
                    }
                 })});
                if (response.ok) {
                    const data = await response.json();
                    console.log('PFP clone persona:', data);
                } else {
                    console.error('Failed to generate PFP clone:', response.status);
                }

            
        } catch (error) {
            console.error('Error generating PFP clone:', error);
        }
    }


    const selectedChain = connectedChain;
    const wallet = $walletAddress;

    // Define a function to fetch user's NFTs based on the selected chain
    async function getUserNFTs() {
        try {
            // Get the value of the selected chain
            const chain = $selectedChain;
            const wallet = '0x694ec3F76ABEc648B07f14AeD5B25b49DA7c6472'

            // Define the base URL for Alchemy API
            if (chain === 'Ethereum') {
                // Make the GET request to fetch user's NFTs
                const response = await fetch(`https://eth-sepolia.g.alchemy.com/nft/v3/${import.meta.env.VITE_ALCHEMY_API_KEY}/getNFTsForOwner?owner=${wallet}&withMetadata=true&pageSize=100`);
                if (response.ok) {
                    const data = await response.json();
                    userNFTs.set(data);
                    console.log('User NFTs:', data);
                } else {
                    console.error('Failed to fetch user NFTs:', response.status);
                }
            }
            if (chain === "Bitcoin") {
                const response = await fetch(`https://api-mainnet.magiceden.dev/v2/ord/btc/tokens?showAll=true&ownerAddress=${walletAddress}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log('User NFTs:', data);
                } else {
                    console.error('Failed to fetch user NFTs:', response.status);
                }
            }

            
        } catch (error) {
            console.error('Error fetching user NFTs:', error);
        }
    }

    // Call the function to fetch user's NFTs when the component mounts
    onMount(getUserNFTs);

    // Stepper state
    const currentStep = writable(1);

    // Function to go to the next step
    function nextStep() {
        currentStep.update(n => n + 1);
    }

    // Function to go to the previous step
    function prevStep() {
        currentStep.update(n => n - 1);
    }

    // Variable to control the visibility of the text
    let showText = true;

    // After 4 seconds, hide the text
    setTimeout(() => {
        showText = false;
    }, 4000);
</script>

<Background />

<div class="relative z-50 box-border h-[120vh] w-screen p-4 md:p-10">
    <main style="height:60%" class="relative flex w-full flex-col justify-center gap-0 md:gap-10">
        <!-- TEXT SECTION -->
        <div class="mx-auto flex h-[300px] w-full flex-col items-center justify-center gap-4 " in:fade={{ duration: 3000 }}>
            {#if showText}
                <div out:fade={{ duration: 1000 }} class="font-Pretendard_Light text-2xl duration-[1.5s] md:gap-8 md:text-[3rem]">
                    <span class="text-white">Revitalize Your </span>
                    <span class="text-font-highlight">PFP</span>
                    <span class="text-white"> into </span>
                    <span class="text-font-highlight">Clone</span>
                </div>
            {:else}
                <!-- Stepper Component -->
                <div class="title-box-stepper relative text-center" >
                    <div class="stepper flex justify-center absolute top-[-20px] left-0 right-0">
                        {#each Array.from({ length: 3 }) as _, index}
                            <div class="step flex items-center">
                                <span class={index + 1 === $currentStep ? 'activeStep' : 'step'}>
                                    {index + 1}
                                </span>
                            </div>
                                {#if index === 0}
                                    <span class="step-description">Select Your NFT</span>
                                    <svg class="arrow-icon" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.55417 15.0713L8.625 8.00046L1.55417 0.929622L0.375 2.10796L6.26833 8.00046L0.375 13.893L1.55417 15.0713Z" fill="#687684"/>
                                        </svg>
                                {:else if index === 1}
                                    <span class="step-description">Generating AI Soul</span>
                                    <svg class="arrow-icon" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.55417 15.0713L8.625 8.00046L1.55417 0.929622L0.375 2.10796L6.26833 8.00046L0.375 13.893L1.55417 15.0713Z" fill="#687684"/>
                                        </svg>
                                {:else}
                                    <span class="step-description">Meet Clone</span>
                                {/if}
                           
                        {/each}
                    </div>
                </div>
                <div class="title-box justify-center relative text-center">
                {#if $currentStep === 1}
                
                    <div class="justify-center align-items">
                        <p class="font-Pretendard_Light text-2xl mt-2 md:text-[24px] duration-[1.5s] md:gap-8">Choose your NFT to Revitalize</p>
                        <div class="divider-container">
                            <hr class="divider">
                        </div>
                    </div>
                    {#if $userNFTs !== undefined && $userNFTs !== null && $userNFTs.ownedNfts.length > 0}
                    <div class="grid-container">
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        {#each $userNFTs.ownedNfts as nft, index}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div class="{selectedNFT === nft ? 'nft-item selected' : 'nft-item'}" on:click={() => selectNFT(nft)}>
                                <!-- Render your NFT item here -->
                                <div class="flex flex-col items-center justify-center">
                                    <img src={nft.image.cachedUrl} alt={nft.name} />
                                </div>
                                
                                <p class="nft-item-text">{nft.name}</p>
                            </div>
                        {/each}
                    </div>
                    {/if}
                    {#if $userNFTs !== null && $userNFTs.ownedNfts.length === 0}
                    <div class="grid-container">
                        <p>No NFTs found.</p>
                    </div>
                    {/if}
                    {#if $userNFTs === null}
                    <div class="grid-container">
                        <p>Loading NFTs...</p>
                    </div>
                    {/if}
                {/if}
                {#if $currentStep === 2}
                        <div class="{showSVG ? 'fade-in' : 'fade-out'}">
                        <p class="font-Pretendard pt-20 pl-78 pr-78 text-1xl mt-2 md:text-[24px] duration-[1.5s] md:gap-8">Crafting Soul for your PFP</p>
                        <p class="font-Pretendard pl-78 pr-78 text-1xl mt-2 md:text-[24px] duration-[1.5s] md:gap-8">with Alterim AI...</p>
                        <div class="svg-container animate-bounce pb-30 mt-20">
                        <svg width="195" height="194" viewBox="0 0 195 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.0556 0H172.944L194.5 194H0.5L22.0556 0Z" fill="url(#paint0_linear_1290_7053)"/>
                            <path d="M92.3411 15H87.0078V20.3333H92.3411V15Z" fill="#C4DACC"/>
                            <path d="M97.7044 15H92.3711V20.3333H97.7044V15Z" fill="#C4DACC"/>
                            <path d="M102.99 15H97.6562V20.3333H102.99V15Z" fill="#C4DACC"/>
                            <path d="M108.357 15H103.023V20.3333H108.357V15Z" fill="#C4DACC"/>
                            <path d="M81.7122 20.334H76.3789V25.6673H81.7122V20.334Z" fill="#C4DACC"/>
                            <path d="M87.0208 20.334H81.6875V25.6673H87.0208V20.334Z" fill="#C4DACC"/>
                            <path d="M113.681 20.334H108.348V25.6673H113.681V20.334Z" fill="#C4DACC"/>
                            <path d="M118.99 20.334H113.656V25.6673H118.99V20.334Z" fill="#C4DACC"/>
                            <path d="M71.0247 25.668H65.6914V31.0013H71.0247V25.668Z" fill="#C4DACC"/>
                            <path d="M76.3255 25.668H70.9922V31.0013H76.3255V25.668Z" fill="#C4DACC"/>
                            <path d="M124.372 25.668H119.039V31.0013H124.372V25.668Z" fill="#C4DACC"/>
                            <path d="M129.677 25.668H124.344V31.0013H129.677V25.668Z" fill="#C4DACC"/>
                            <path d="M65.6966 31H60.3633V36.3333H65.6966V31Z" fill="#C4DACC"/>
                            <path d="M135.005 31H129.672V36.3333H135.005V31Z" fill="#C4DACC"/>
                            <path d="M65.6966 36.333H60.3633V41.6663H65.6966V36.333Z" fill="#C4DACC"/>
                            <path d="M135.005 36.333H129.672V41.6663H135.005V36.333Z" fill="#C4DACC"/>
                            <path d="M60.3333 41.667H55V47.0003H60.3333V41.667Z" fill="#C4DACC"/>
                            <path d="M140.368 41.667H135.035V47.0003H140.368V41.667Z" fill="#C4DACC"/>
                            <path d="M60.3333 47H55V52.3333H60.3333V47Z" fill="#C4DACC"/>
                            <path d="M81.7122 47H76.3789V52.3333H81.7122V47Z" fill="#C4DACC"/>
                            <path d="M118.99 47H113.656V52.3333H118.99V47Z" fill="#C4DACC"/>
                            <path d="M140.368 47H135.035V52.3333H140.368V47Z" fill="#C4DACC"/>
                            <path d="M60.3333 52.334H55V57.6673H60.3333V52.334Z" fill="#C4DACC"/>
                            <path d="M81.7122 52.334H76.3789V57.6673H81.7122V52.334Z" fill="#C4DACC"/>
                            <path d="M118.99 52.334H113.656V57.6673H118.99V52.334Z" fill="#C4DACC"/>
                            <path d="M140.368 52.334H135.035V57.6673H140.368V52.334Z" fill="#C4DACC"/>
                            <path d="M60.3333 57.666H55V62.9994H60.3333V57.666Z" fill="#C4DACC"/>
                            <path d="M81.7122 57.666H76.3789V62.9994H81.7122V57.666Z" fill="#C4DACC"/>
                            <path d="M118.99 57.666H113.656V62.9994H118.99V57.666Z" fill="#C4DACC"/>
                            <path d="M140.368 57.666H135.035V62.9994H140.368V57.666Z" fill="#C4DACC"/>
                            <path d="M60.3333 62.999H55V68.3324H60.3333V62.999Z" fill="#C4DACC"/>
                            <path d="M92.3411 62.999H87.0078V68.3324H92.3411V62.999Z" fill="#C4DACC"/>
                            <path d="M108.357 62.999H103.023V68.3324H108.357V62.999Z" fill="#C4DACC"/>
                            <path d="M140.368 62.999H135.035V68.3324H140.368V62.999Z" fill="#C4DACC"/>
                            <path d="M65.6966 68.334H60.3633V73.6673H65.6966V68.334Z" fill="#C4DACC"/>
                            <path d="M97.7044 68.334H92.3711V73.6673H97.7044V68.334Z" fill="#C4DACC"/>
                            <path d="M102.99 68.334H97.6562V73.6673H102.99V68.334Z" fill="#C4DACC"/>
                            <path d="M135.005 68.334H129.672V73.6673H135.005V68.334Z" fill="#C4DACC"/>
                            <path d="M65.6966 73.667H60.3633V79.0003H65.6966V73.667Z" fill="#C4DACC"/>
                            <path d="M135.005 73.667H129.672V79.0003H135.005V73.667Z" fill="#C4DACC"/>
                            <path d="M71.0247 79H65.6914V84.3333H71.0247V79Z" fill="#C4DACC"/>
                            <path d="M76.3255 79H70.9922V84.3333H76.3255V79Z" fill="#C4DACC"/>
                            <path d="M124.372 79H119.039V84.3333H124.372V79Z" fill="#C4DACC"/>
                            <path d="M129.677 79H124.344V84.3333H129.677V79Z" fill="#C4DACC"/>
                            <path d="M81.7122 84.333H76.3789V89.6663H81.7122V84.333Z" fill="#C4DACC"/>
                            <path d="M87.0208 84.333H81.6875V89.6663H87.0208V84.333Z" fill="#C4DACC"/>
                            <path d="M113.681 84.333H108.348V89.6663H113.681V84.333Z" fill="#C4DACC"/>
                            <path d="M118.99 84.333H113.656V89.6663H118.99V84.333Z" fill="#C4DACC"/>
                            <path d="M92.3411 89.667H87.0078V95.0003H92.3411V89.667Z" fill="#C4DACC"/>
                            <path d="M97.7044 89.667H92.3711V95.0003H97.7044V89.667Z" fill="#C4DACC"/>
                            <path d="M102.99 89.667H97.6562V95.0003H102.99V89.667Z" fill="#C4DACC"/>
                            <path d="M108.357 89.667H103.023V95.0003H108.357V89.667Z" fill="#C4DACC"/>
                            <defs>
                            <linearGradient id="paint0_linear_1290_7053" x1="97.5" y1="0" x2="97.5" y2="194" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#020202" stop-opacity="0"/>
                            <stop offset="1" stop-color="#2C3E3C" stop-opacity="0.5"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            </div>
                        </div>
                {/if}
                {#if $currentStep === 3}
                        <button class="share-button" on:click={nextStep}>Share to X (Twitter)</button>
                {/if}
            </div>
            {#if $currentStep === 1}
            <button class="generate-button" on:click={nextStep} disabled={!selectedNFT}>Generate</button>
                {/if}
            {/if}
        </div>
    </main>
</div>

<style>
    .nft-item.selected {
        background-color: #2C3E3C; /* Darker background color when selected */
        border: 2px solid #AEF6CB; /* Green border when selected */
    }

    .nft-item.selected .nft-item-text {
        color: #AEF6CB; /* Green text color when selected */
    }

    .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columns */
    grid-gap: 5px;
    max-height: 420px; /* Maximum height for scroll */
    overflow-y: auto; /* Enable vertical scrolling if content exceeds height */
    margin-left: 20px;
    margin-right: 20px;
    }

    .nft-item {
        cursor: pointer;
        display: flex; /* Use flexbox */
        flex-direction: column; /* Align items vertically */
        max-width: 185px;
        height: 205px;
        background-color: #232324; /* Gray background */
        border-radius: 12px; /* Rounded corners */
        padding: 0px; /* Adjust padding as needed */
        border: 1px linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(161, 161, 161, 0.5));
    }

    .nft-item-text {
    text-align: left !important; /* Left justify text */
    font-size: 14px; /* Font size of 14px */
    color: #9ba79f; /* Gray color */
    margin-left: 22px;
    margin-top: 10px;
    }    

    .nft-item img {
        margin-top: 15px;
        align-items: "center";
        height: auto;
        width: 145px; /* Adjust the image size as needed */
        height: 145px;
        border-radius: 12px;
    }

    .divider-container {
        display: flex;
        justify-content: center;
    }

    .divider {
        width: 95%;
        border: 0.75px solid #464E49; 
        margin-top: 13px; 
        margin-bottom: 20px; 
    }

    .step-description {
        margin-left: 12px;
        margin-right: 5px;
    }

    .activeStep {
        color: #333333;
        background-color: #C4DACC; /* Added background color to active step */
        border-radius: 50%;
    }

    .step {
        background-color: #333333;
        border-radius: 50%;
    }

    .step span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px; /* Increased width for larger circles */
        height: 30px; 
    }

    .generate-button {
        background-image: linear-gradient(to right, #AEF6CB, #E3FFEE);
        color: #020202;
        border: none;
        border-radius: 30px;
        padding: 10px 20px;
        cursor: pointer;
        width: 25%;
        margin-top: 20px;
    }

    .title-box {
        background-image: linear-gradient(to bottom, rgba(200, 207, 214, 0.2), rgba(200, 207, 214, 0.1));
        backdrop-filter: blur(64px);
        border: 1px linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(161, 161, 161, 0.5));
        padding: 10px 10px;
        border-radius: 20px;
        width: 60%;
    }

    .title-box-stepper {
        padding: 10px 10px;
        border-radius: 20px;
        width: 60%;
    }

    .share-button {
        background-color: #004A50;
        color: white;
        border-radius: 30px;
        padding: 10px 20px;
        cursor: pointer;
        width: 25%;
        margin-top: 20px;
    }

    .arrow-icon {
        margin-right: 20px; /* Added spacing between step number and SVG icon */
        margin-left: 20px; /* Added spacing between SVG icon and text label */
    }

    .svg-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px; 
}

    @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }

    .animate-bounce {
        animation: bounce 1s infinite;
    }

    .fade-in {
        opacity: 1;
        transition: opacity 0.5s;
    }

    .fade-out {
        opacity: 0;
        transition: opacity 0.5s;
    }
</style>
