import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { getUserId } from '../../../utils/auth';
import { redirect } from '@sveltejs/kit';
import { getUserTokenFromLocalStorage } from '../../../utils/auth';

let userId;
let bookings = [];

export async function load({ fetch }) {
    userId = getUserId();

    const resp = await fetch(PUBLIC_BACKEND_BASE_URL + `/my-bookings/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
           //  Authorization: getUserTokenFromLocalStorage()
        }
    });

    const res = await resp.json();

    // added this for redirect
    if (res.userId != userId) {
        throw redirect(307, `/`);
    }

    if (resp.status === 200) {
        return {
            bookings: res.myBookings
        };
    } else {
        return {
            bookings: []
        };
    }
}