<script>
	// here what we wanna do is show all the different profiles

	import Header from '../utils/Header.svelte';
	import { goto } from '$app/navigation';
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { filter } from '../stores/store';
	export let data;

	let languageData = '';
	let filteredSellers = [];

	async function clickLanguage(evt) {
		evt.preventDefault();

		languageData = evt.target.textContent;

		filter.update((value) => {
			return true;
		});

		const resp3 = await fetch(PUBLIC_BACKEND_BASE_URL + `/filtered-sellers/${languageData}`, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const res3 = await resp3.json();
		console.log(res3);
		console.log(res3.allFilteredSellers);

		if (resp3.status == 200) {
			filteredSellers = res3.allFilteredSellers;
		} else {
			filteredSellers = [];
		}
	}

	export function clickResetFilter() {
		filter.update((value) => {
			return false;
		});
	}
</script>

<Header />

<div class="bg-white min-h-screen">
	<!-- Set the background to white -->

	<header class="bg-green-500 shadow text-white">
		<!-- Header styling -->
		<div class="container mx-auto py-4">
			<h1 class="text-2xl font-semibold">Welcome to Our Marketplace</h1>
		</div>
	</header>

	<main class="container mx-auto py-8">
		<!-- Filter buttons -->
		<div class="flex flex-row space-x-4 mb-4">
			<!-- Add spacing between buttons -->
			{#each data.languages as language}
				<div>
					<button
						class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
						on:click={clickLanguage}
					>
						{language}
					</button>
				</div>
			{/each}
		</div>

		<button
			class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none mb-4"
			on:click={clickResetFilter}
		>
			Reset Filter
		</button>

		{#if $filter == true}
			{#each filteredSellers as fSeller}
				<div class="bg-green-100 p-4 mb-4 rounded-lg">
					<!-- Add background and padding to each item -->
					<p class="text-xl font-semibold">{fSeller.name}</p>
					<p class="text-green-600">{fSeller.rate}</p>
					<p class="text-green-600">{fSeller.language}</p>
					<p class="text-green-600">{fSeller.experience} years</p>
					<p class="text-green-800">{fSeller.pitch}</p>
				</div>
			{/each}
		{:else}
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each data.sellers as seller}
					<div class="bg-green-100 p-4 rounded-lg">
						<!-- Add background and padding to each item -->
						<p class="text-xl font-semibold">{seller.name}</p>
						<p class="text-green-600">{seller.rate}</p>
            <p class="text-green-600">{seller.language}</p>
                        <p class="text-green-600">{seller.experience} years</p>
                        <p class="text-green-800">{seller.pitch}</p>
                        <button
                            class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
                            on:click={() => {
                                goto(`/user/${seller.id}`);
                            }}
                        >
                            See More
                        </button>
                    </div>
                {/each}
            </div>
        {/if}
    </main>
</div>