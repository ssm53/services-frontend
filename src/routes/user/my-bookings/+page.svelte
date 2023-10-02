<script>
	import { goto } from '$app/navigation';
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	// import { delImageSuc, delImageFail } from '../../utils/alert.js';
	// import Spinner from '../../spinner/spinner.svelte';
	// import { loading } from '../../stores/store.js';
	import { getUserTokenFromLocalStorage } from '../../../utils/auth.js';
	import Header from '../../../utils/Header.svelte';
	export let data;
	// import { getTokenFromLocalStorage } from '../../utils/auth.js'; // added for auth

	// Function to handle image deletion
	async function deleteBooking(bookingId) {
		// // spinner shits
		// loading.update((value) => {
		// 	return true;
		// });
		try {
			const response = await fetch(PUBLIC_BACKEND_BASE_URL + `/deleteBooking/${bookingId}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: getUserTokenFromLocalStorage()
				}
			});

			// const res = await response.json();

			if (response.status === 204) {
				// // spinner shits
				// loading.update((value) => {
				// 	return false;
				// });
				// delImageSuc();
				goto('/');
			} else if (response.status === 404) {
				// // spinner shits
				// loading.update((value) => {
				// 	return false;
				// });
				// delImageFail();
				const errorData = await response.json();
				// Handle the 404 error, which means the image was not found
				console.error('Image not found:', errorData.error);
			} else {
				// // spinner shits
				// loading.update((value) => {
				// 	return false;
				// });
				// delImageFail();
				const errorData = await response.json();
				console.error('Image not found:', errorData.error);
			}
		} catch (error) {
			// // spinner shits
			// loading.update((value) => {
			// 	return false;
			// });
			// delImageFail();
			console.error('Error deleting image:', error);
			// return res.error
		}
	}

	async function checkout(id) {
		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/create-checkout-session', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id })
		});
		const res = await resp.json();
		goto(res);
	}
</script>

<Header />

<div class="bg-white min-h-screen">
    <!-- Changed the background color to white -->
    <header class="bg-gray-100 shadow">
        <div class="container mx-auto py-4">
            <h1 class="text-2xl font-semibold text-gray-900">My Bookings</h1>
        </div>
    </header>

    <main class="container mx-auto py-8">
        <!-- <Spinner /> -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each data.bookings as booking}
                <div class="bg-gray-200 p-4 rounded-lg">
                    <!-- Added a background color and padding to each booking card -->
                    <p>{booking.sellerName}</p>
                    <p>{booking.sellerEmail}</p>
                    <p>{booking.sellerRate}</p>
                    <p>{booking.sellerLanguage}</p>
                    <p>{booking.sellerExperience}</p>
                    <p>{booking.sellerIdBooking}</p>
                    <p>{booking.userIdBooking}</p>
                    <p>{booking.userName}</p>
                    <p>{booking.userEmail}</p>
                    <p>{booking.bookingDate}</p>
                    <p>{booking.bookingTime}</p>
                    <p>{booking.bookingDuration}</p>
                    <p>{booking.bookingPrice}</p>
                    <p>{booking.bookingRequest}</p>
                    <button on:click={deleteBooking(booking.id)} class="text-red-600 hover:underline"
                        >Delete Booking</button
                    >
                    <!-- Added a red color and hover underline effect -->
                    <button
                        type="submit"
                        on:click={checkout(booking.id)}
                        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-2"
                        >Pay now</button
                    >
                    <!-- Applied the same button style as other pages -->
                </div>
            {/each}
        </div>
    </main>
</div>