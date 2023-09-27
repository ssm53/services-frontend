<script>
    import { goto } from '$app/navigation';
    import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
    import getSellerId from '../../../utils/auth.js';
    import HeaderSeller from '../../../utils/HeaderSeller.svelte';

    // import { delImageSuc, delImageFail } from '../../utils/alert.js';
    // import Spinner from '../../spinner/spinner.svelte';
    // import { loading } from '../../stores/store.js';
    export let data;
    import { getSellerTokenFromLocalStorage } from '../../../utils/auth.js'; // added for auth

    let sellerID = getSellerId();

    export function clickEditDetails() {
        goto("/seller/edit-details");
    }
</script>

<HeaderSeller />

<button
    class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
    on:click={clickEditDetails}>Edit Details</button
>

<div class="bg-white min-h-screen">
    <header class="bg-gray-100 shadow">
        <div class="container mx-auto py-4">
            <h1 class="text-2xl font-semibold text-gray-900">My Details</h1>
        </div>
    </header>

    <main class="container mx-auto py-8">
        <!-- <Spinner /> -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each data.details as detail}
                <div class="bg-green-50 p-4 rounded-md shadow-md">
                    <p class="text-green-600 font-semibold">{detail.name}</p>
                    <p class="text-gray-700">{detail.email}</p>
                    <p class="text-green-600">${detail.rate} per hour</p>
                    <p class="text-gray-700">{detail.language}</p>
                    <p class="text-green-600">{detail.experience} years</p>
                    <p class="text-gray-700">{detail.pitch}</p>
                </div>
            {/each}
        </div>
    </main>
</div>
﻿