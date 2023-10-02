<script>
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
    import { getUserId } from '../../../../utils/auth';
    export let data;

	let errorForm = {};
    const userid = getUserId()

    async function createBooking(evt) {
		evt.preventDefault();

		const BookingData = {
            //sellerdata
			sellerIdBooking: data.seller.id,
            sellerName: data.seller.name,
            sellerEmail: data.seller.email,
            sellerRate: data.seller.rate,
            sellerLanguage: data.seller.language,
            sellerExperience: data.seller.experience,
            //userdata
            userIdBooking: userid,
            userName: evt.target['name'].value, //text
            userEmail: evt.target['email'].value, //email
            //bookingdata
            bookingDate: evt.target['date'].value, //text
            bookingTime: evt.target['time'].value, //text
            bookingDuration: parseInt(evt.target['duration'].value), //number
            bookingPrice: data.seller.rate * evt.target[duration].value,
            bookingRequest: evt.target['request'].value //text
		};

		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/create-bookings/', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(BookingData)
		});

		if (resp.status == 200) {
			goto("/")
		} else {
			const res = await resp.json();
			errorForm = res.error;
			
		}
	}

</script>



<h1 class="text-center text-xl mt-5">Your Booking Details</h1>

<div class="flex justify-center items-center mt-8">
	<form on:submit={createBooking} class="w-2/3 md:w-1/3">
		<div class="form-control  w-full">
			<label class="text-center pb-2 text-lg md:label" for="name">
				<span class="label-text">Name</span>
			</label>
			<input type="text" name="username" placeholder="MPUUPMELE" class="input input-bordered w-full" />
			{#if 'name' in errorForm}
				<label class="text-center pb-2 text-lg md:label" for="name">
					<span class="label-text-alt text-red-500">{errorForm['name']}</span>
				</label>
			{/if}
		</div>

		<div class="form-control w-full">
			<label class="text-center pb-2 text-lg mt-3 md:label" for="email">
				<span class="label-text">Email</span>
			</label>
			<input
				type="email"
				name="email"
				placeholder="messithegoat@example.com"
				class="input input-bordered w-full"
				required
			/>
			{#if 'email' in errorForm}
				<label class="text-center pb-2 text-lg md:label" for="email">
					<span class="label-text-alt text-red-500">{errorForm['email']}</span>
				</label>
			{/if}
		</div>

		<div class="form-control w-full">
			<label class="text-center pb-2 text-lg mt-3 md:label" for="date">
				<span class="label-text">Booking Date</span>
			</label>
			<input
				type="text"
				name="date"
				placeholder=""
				class="input input-bordered w-full"
				required
			/>
			{#if 'date' in errorForm}
				<label class="text-center pb-2 text-lg md:label" for="date">
					<span class="label-text-alt text-red-500">{errorForm['date']}</span>
				</label>
			{/if}
		</div>

		<div class="form-control w-full">
			<label class="text-center pb-2 text-lg mt-3 md:label" for="time">
				<span class="label-text">Booking Time</span>
			</label>
			<input
				type="text"
				name="time"
				placeholder=""
				class="input input-bordered w-full"
				required
			/>
			{#if 'time' in errorForm}
				<label class="text-center pb-2 text-lg md:label" for="time">
					<span class="label-text-alt text-red-500">{errorForm['time']}</span>
				</label>
			{/if}
		</div>

        <div class="form-control w-full">
			<label class="text-center pb-2 text-lg mt-3 md:label" for="duration">
				<span class="label-text">Duration</span>
			</label>
			<input
				type="number"
				name="duration"
				placeholder=""
				class="input input-bordered w-full"
				required
			/>
			{#if 'duration' in errorForm}
				<label class="text-center pb-2 text-lg md:label" for="duration">
					<span class="label-text-alt text-red-500">{errorForm['duration']}</span>
				</label>
			{/if}
		</div>

        <div class="form-control w-full">
			<label class="text-center pb-2 text-lg mt-3 md:label" for="request">
				<span class="label-text">Request</span>
			</label>
			<input
				type="text"
				name="request"
				placeholder=""
				class="input input-bordered w-full"
				required
			/>
			{#if 'request' in errorForm}
				<label class="text-center pb-2 text-lg md:label" for="request">
					<span class="label-text-alt text-red-500">{errorForm['request']}</span>
				</label>
			{/if}
		</div>

		<div class="form-control w-full mt-4 justify-center">
			<button class="btn btn-md">
				Create Booking
			</button>
		</div>
	</form>
</div>