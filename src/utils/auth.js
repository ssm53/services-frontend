import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
// store added for log in
import { userLoggedIn } from '../stores/store';
import { sellerLoggedIn } from '../stores/store.js';


// export function getTokenFromLocalStorage() {
//   const auth = localStorage.getItem("auth")
//   if (auth) {
//     return JSON.parse(auth)["token"]
//   }
//   return null
// }

// export async function isLoggedIn() {
//   if (!getTokenFromLocalStorage()) {
//     return false
//   }

//   try {
//     const resp = await fetch(
//       PUBLIC_BACKEND_BASE_URL + '/api/collections/users/auth-refresh',
//       {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': getTokenFromLocalStorage()
//         },
//       }
//     );

//     const res = await resp.json()
//     if (resp.status == 200) {

//       localStorage.setItem("auth", JSON.stringify({
//         "token": res.token,
//         "sellerId": res.record.id
//       }));

//       return true
//     }

//     return false
//   } catch {
//     return false
//   }
// }
// checks if username and password matches api database then log in user
export async function authenticateSeller(email, password) {
  const resp = await fetch(
    PUBLIC_BACKEND_BASE_URL + '/auth-seller',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }
  );

  const res = await resp.json();

  if (resp.status == 200) {
    localStorage.setItem("auth", JSON.stringify({
      sellerToken: res.sellerAccessToken,
      sellerId: res.sellerId
    }));

sellerLoggedIn.set(true)

    return {
      success: true,
      res: res
    }
  }

  return {
    success: false,
    res: res
  }
}

export async function authenticateUser(email, password) {
  const resp = await fetch(
    PUBLIC_BACKEND_BASE_URL + '/auth-user',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }
  );

  const res = await resp.json();

  if (resp.status == 200) {
    localStorage.setItem("auth", JSON.stringify({
      userToken: res.userAccessToken,
      userId: res.userId
    }));

userLoggedIn.set(true)

    return {
      success: true,
      res: res
    }
  }

  return {
    success: false,
    res: res
  }
}
const sellerEmptyAuth = {
    sellerToken: '',
    seller: ''
};
// pleaase note that we need to set three things to our local strage... at the moment, it is two
export function sellerLogOut() {
    localStorage.setItem('auth', JSON.stringify(sellerEmptyAuth));
    sellerLoggedIn.update((value) => {
        return false;
    });
    goto('/');

    return true;
}

export default function getSellerId() {
  const auth = localStorage.getItem('auth');
  if (auth) {
      return JSON.parse(auth)['seller'];
  }
  return null;
}
