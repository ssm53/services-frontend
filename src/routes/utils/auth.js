import { sellerLoggedIn } from '../stores/store.js';

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