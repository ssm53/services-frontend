<script>
    import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
    import { goto } from '$app/navigation';
    import { authenticateSeller } from "../../../utils/auth.js";
    import HeaderSeller from '../../../utils/HeaderSeller.svelte';
    let formErrors = {};
  
    function postLogin() {
      goto('/');
      logInAlert()
    }
  
    async function login(evt) {
      evt.preventDefault()
  
      const sellerData = {
        email: evt.target['email'].value,
        password: evt.target['password'].value,
      };    
        const res = await authenticateSeller(sellerData.email, sellerData.password);
  
        if (res.success) {
          postLogin();

        } 
}
  </script>
  
  <HeaderSeller />
  <h1 class="text-center text-xl">Login</h1>
  <div class="text-center">
      <a class="link-hover italic text-xs" href="/sellers/new">Yet to have an account? Click here to register instead.</a>
  </div>
  <div class="flex justify-center items-center mt-8">
      <form on:submit={login} class="w-1/3">
          <div class="form-control w-full"> 
              <label class="label" for="email">
                  <span class="label-text">Email</span>
              </label>
              <input type="text" name="email" placeholder="" class="input input-bordered w-full" />
                        </div>
  x
                  <div class="form-control w-full">
              <label class="label" for="password">
                  <span class="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="" class="input input-bordered w-full" required />
              
          </div>
  
          <div class="form-control w-full mt-4">
              <button class="btn btn-md">Login</button>
          </div>
      </form>
  </div>
  
