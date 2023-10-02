<script>
    import { goto } from '$app/navigation';
    import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
    import getUserId from '../../../utils/auth.js';
    import HeaderSeller from '../../../utils/HeaderSeller.svelte';

    // import { delImageSuc, delImageFail } from '../../utils/alert.js';
    // import Spinner from '../../spinner/spinner.svelte';
    // import { loading } from '../../stores/store.js';
    export let data;
    import { getSellerTokenFromLocalStorage } from '../../../utils/auth.js'; // added for auth

  
</script>

<HeaderSeller />



<div class="bg-white min-h-screen">
    <header class="bg-gray-100 shadow">
        <div class="container mx-auto py-4">
            <h1 class="text-2xl font-semibold text-gray-900">My Jobs</h1>
        </div>
    </header>

    <main class="container mx-auto py-8">
        <!-- <Spinner /> -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each data.jobs as job}
                <div class="bg-green-50 p-4 rounded-md shadow-md">
                    <p class="text-green-600 font-semibold">{job.sellerName}</p>
                    <p class="text-gray-700">{job.sellerEmail}</p>
                    <p class="text-green-600">{job.sellerRate}</p>
                    <p class="text-gray-700">{job.sellerLanguage}</p>
                    <p class="text-green-600">{job.sellerExperience}</p>
                    <p class="text-gray-700">{job.sellerIdBooking}</p>
                    <p class="text-green-600">{job.userIdBooking}</p>
                    <p class="text-gray-700">{job.userName}</p>
                    <p class="text-green-600">{job.userEmail}</p>
                    <p class="text-gray-700">{job.bookingDate}</p>
                    <p class="text-green-600">{job.bookingTime}</p>
                    <p class="text-gray-700">{job.bookingRequest}</p>
                </div>
            {/each}
        </div>
    </main>
</div>
﻿