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
<nav>
    <div class="container">
    <h1>X Hack</h1>
    
        <button class= "bg-[#a6c1ee] text-white px-5 py-2  rounded-full hover:bg-[#87acec] " on:click={sellerHome}>Home</button>
        
        {#if logIO === true}
      <div class = "self-auto">  <button on:click={sellerLogOut}>Log out</button> </div>
        {:else}
        <button class="bg-[#a6c1ee] text-white px-5 py-2  rounded-full hover:bg-[#87acec] " on:click={clickLoggedIn}>Log in</button>
        <button class="bg-[#a6c1ee] text-white px-5 py-2  rounded-full hover:bg-[#87acec] " on:click = {sellerSignup}>Sign Up</button>
    
{/if}
</div>
</nav>

<style>
    nav {
        background-color: rgb(47, 1, 119);
        color : white;
    }
    .container{
        display: flex;
        align-items: flex;
    }
    ul {
    display:  flex;
    margin: 10px;
    list-style :none;
    margin-left:auto ;
    font-size:1em;
    }   
    li {
        margin-right :0 ;
        font-size : 1.0em;
        font-weight: normal;
    }  
    h1 {
        margin: 10px;
        font-size : 1.0em;
        font-weight: normal;
        margin-left : 150px;
    }
    a{
        text-decoration: none;
        color: #aaa(245, 241, 241);
        margin-left: 50px;
    }
    .active{
        color : white(199, 15, 15);
        margin-left : 10px
    }

  </style>