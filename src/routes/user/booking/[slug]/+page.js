import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';

export async function load({ fetch, params }) {
    const response = await fetch(PUBLIC_BACKEND_BASE_URL + `/getSeller/${params.slug}`)
    const res = await response.json()
    
    if (response.status == 200) {
      return {
        seller: res.thatSeller
      }
    } else {
      return {
        seller: []
      }
    }
  }