<script>
import { goto } from '$app/navigation';
import{ PUBLIC_BACKEND_BASE_URL } from '$env/static/public'
import { getSellerTokenFromLocalStorage } from '../../../utils/auth.js';
import { getSellerId } from '../../../utils/auth.js';

	//import { delImageSuc, delImageFail } from '../../utils/alert.js';
	//import Spinner from '../../spinner/spinner.svelte';
	//import { loading } from '../../stores/store.js';
import HeaderSeller from '../../../utils/HeaderSeller.svelte';


  export let data;
  let formErrors = {};
  //let clicked = false; later can try it

  export function postUpdateDetails(){
        goto (`/seller/my-details`);
    }

  export async function updateSeller(evt){
      evt.preventDefault();
    //   loading.update((value) => {
	// 	  return true
	// 	 })

       //clicked = true;
       let sellerId = getSellerId();
       //let sellerToken = getSellerTokenFromLocalStorage();

       const updateDetailsData = {
         name:evt.target ['name'].value,
         email: evt.target['email'].value, //maybe don't need email
         rate: parseInt(evt.target['rate'].value),
         language: evt.target['language'].value.toLowerCase(),
         experience: parseInt(evt.target['experience'].value),
         pitch: evt.target['pitch'].value,
       }
  
     console.log(updateDetailsData);
     const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/update-details/${sellerId}', {
       method: 'PATCH',
       mode: 'cors',
       headers: {
         'Content-Type': 'application/json',
         //'Authorization' : sellerToken
       },
       body: JSON.stringify(updateDetailsData)
     });

     if (resp.status === 200) {
			// loading.update((value) => {
			 //	return false;
			 //});
			postUpdateDetails();
			 //console.log('formErrors:', formErrors);
		} else {
			 //loading.update((value) => {
			 //	return false;
			 //});
			const res = await resp.json();
			formErrors = res.data;
			 //showEditAlert();
		}
  }

</script>


<HeaderSeller />

<div class="bg-white min-h-screen">
	<header class="bg-green-500 shadow">
		<div class="container mx-auto py-4">
			<h1 class="text-2xl font-semibold text-white">My Details</h1>
		</div>
	</header>

	<main class="container mx-auto py-8">
		<div class="flex justify-center items-center">
			<form on:submit={updateSeller} class="w-1/2 bg-white shadow-md rounded-lg p-8">
				<div class="mb-6">
					<label for="name" class="block text-gray-700 text-sm font-bold mb-2"> Name </label>
					<input
						type="text"
						name="name"
						placeholder="Enter your name"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						value={data.details[0].name}
					/>
				</div>

				<div class="mb-6">
					<label for="email" class="block text-gray-700 text-sm font-bold mb-2"> Email </label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						value={data.details[0].email}
						required
					/>
				</div>

				<div class="mb-6">
					<label for="rate" class="block text-gray-700 text-sm font-bold mb-2"> Rate </label>
					<input
						type="number"
						name="rate"
						placeholder="Enter your rate"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						value={data.details[0].rate}
						required
					/>
				</div>

				<div class="mb-6">
					<label for="language" class="block text-gray-700 text-sm font-bold mb-2">
						Language
					</label>
					<input
						type="text"
						name="language"
						placeholder="Enter your language"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						value={data.details[0].language}
						required
					/>
				</div>

				<div class="mb-6">
					<label for="experience" class="block text-gray-700 text-sm font-bold mb-2">
						Experience
					</label>
					<input
						type="number"
						name="experience"
						placeholder="Enter your experience"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						value={data.details[0].experience}
						required
					/>
				</div>

				<div class="mb-6">
					<label for="pitch" class="block text-gray-700 text-sm font-bold mb-2"> Pitch </label>
					<input
						type="text"
						name="pitch"
						placeholder="Enter your pitch"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						value={data.details[0].pitch}
						required
					/>
				</div>

				<div class="flex justify-end">
					<button
						class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
						type="submit"
					>
						Update Details
					</button>
				</div>
			</form>
		</div>
	</main>
</div>