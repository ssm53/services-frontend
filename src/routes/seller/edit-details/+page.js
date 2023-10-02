import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { getSellerId } from '../../../utils/auth.js';
import { redirect}  from '@sveltejs/kit';

const sellerId= getSellerId();

export async function load({ fetch}) {
    // might be with Public_backend_base_url
  const resp = await fetch(PUBLIC_BACKEND_BASE_URL + `/my-details/${sellerId}`);
  
  const res = await resp.json();
}
  if (res.sellerId != sellerId) {
     redirect(307, `/`);
    }

    if (resp.status === 200) {
        return {
            details: [res.myDetails]
        };
    } else {
        return {
            details: []
        };
    }