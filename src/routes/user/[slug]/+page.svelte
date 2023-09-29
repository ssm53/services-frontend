<script>
    import { goto } from '$app/navigation';
    export let data;
</script>

        <div class="bg-white min-h-screen">
        <div class="flex flex-row w-full text-black">
            <!-- Change text color to black -->
    
            <div class="basis-2/3 prose max-w-none w-full py-8">
                <h2 class="text-xl font-thin text-black">Name</h2>
                <p>{data.seller.name}</p>
                <div class="mt-6" />
                <h2 class="text-xl font-thin text-black">Email</h2>
                <p>{data.seller.email}</p>
                <div class="mt-6" />
                <h2 class="text-xl font-thin text-black">Rate</h2>
                <p>{data.seller.rate}</p>
                <div class="mt-6" />
                <h2 class="text-xl font-thin text-black">Language</h2>
                <p>{data.seller.language}</p>
                <div class="mt-6" />
                <h2 class="text-xl font-thin text-black">Experience</h2>
                <p>{data.seller.experience}</p>
                <div class="mt-6" />
                <h2 class="text-xl font-thin text-black">Pitch</h2>
                <p>{data.seller.pitch}</p>
                <button
                    class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none mt-6"
                    on:click={() => {
                        goto(`/user/booking/${data.seller.id}`);
                    }}
                >
                    Book Now
                </button>
            </div>
        </div>
    </div>
    ﻿