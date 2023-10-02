<script>
    import { page } from '$app/stores';
    import { sellerLoggedIn } from '../stores/store.js';
    import { goto } from '$app/navigation';
    import { sellerLogOut} from './auth.js';

    let logIO;

    sellerLoggedIn.subscribe((value)=>{
        logIO =value;

    });
    async function clickLoggedIn() {
    goto('/seller/login')
  };

  function sellerSignup(){
    goto('/seller/sign-up')
  };

  function sellerHome(){
    goto('/seller')
  };
  

</script>
<nav class="bg-blue-700">
    <div class="flex justify-between items-center w-[92%]  mx-auto">
    <h1 class="px-100 italic font-black font-2xl ">X Hack</h1>
    <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
        <button class= "bg-[#a6c1ee] text-black px-5 py-2  rounded-full hover:bg-[#87acec] " on:click={sellerHome}>Home</button>
        
        {#if logIO === true}
      <div class = "self-auto">  <button on:click={sellerLogOut}>Log out</button> </div>
        {:else}
        <button class="bg-[#a6c1ee] text-black px-5 py-2  rounded-full" on:click={clickLoggedIn}>Log in</button>
        <button class="bg-[#a6c1ee] text-black px-5 py-2  rounded-full hover:bg-[#87acec] " on:click = {sellerSignup}>Sign Up</button>
        {/if}
      </ul>
</div>
</nav>

<style>


  </style>