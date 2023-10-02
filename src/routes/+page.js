// here what we wanna do is load all profiles of sellers!

import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';

export async function load({ fetch }) {
    const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/allSellers');

    const res = await resp.json();
    if (resp.status == 200) {
        // doing the additional get request to get distinct languages
        const resp2 = await fetch(PUBLIC_BACKEND_BASE_URL + '/distinct-languages');
        const res2 = await resp2.json();
        // end here

        return {
            sellers: res.allSellers,
            languages: res2.allDistinctLanguages
        };
    } else {
        return {
            sellers: []
        };
    }
}

// THINGS TO NOTE
// do alerts and spinners
// DO ERROR HANDLING
﻿