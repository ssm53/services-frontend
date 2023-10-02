import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import getSellerId from '../../../utils/auth';
import { redirect } from '@sveltejs/kit';
import { getSellerTokenFromLocalStorage } from '../../../utils/auth';

let sellerId;
// let images = [];

export async function load({ fetch }) {
    sellerId = getSellerId();

    const resp = await fetch(PUBLIC_BACKEND_BASE_URL + `/my-jobs/${sellerId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: getSellerTokenFromLocalStorage()
        }
    });

    const res = await resp.json();

    // added this for redirect
    if (res.sellerId != sellerId) {
        // console.log('not working aiyo');
        // console.log(res);
        throw redirect(307, "/");
    }

    if (resp.status === 200) {
        return {
            jobs: [res.myJobs]
        };
    } else {
        return {
            jobs: []
        };
    }
}
﻿