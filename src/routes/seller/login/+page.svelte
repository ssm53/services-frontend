<script>
    import Navbar from '../../utils/HeaderSeller.svelte';
    import { goto } from '$app/navigation';
      let sellerLoggedIn = false;
    
      const handleLogin = () => {
        sellerLoggedIn = true;
        goto ('/seller')
      };
    
      const handleLogout = () => {
        sellerLoggedIn = false;
      goto ('/')
  
      };
    </script>
    
    <main>
    <Navbar/>
      haha
      {#if sellerLoggedIn}
        <p>Welcome! You are logged in.</p>
        <button on:click={handleLogout}>Logout</button>
      {:else}
        <button on:click={handleLogin}>Login</button>
      {/if}
    </main>
    
    <style>
      
      main {
        text-align: center;
      }
    </style>