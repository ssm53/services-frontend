<script>
  import Navbar from '../component/Navbar.svelte';
  import { goto } from '$app/navigation';
	let isLoggedIn = false;
  
	const handleLogin = () => {
	  isLoggedIn = true;
	  goto ('/users/seller')
	};
  
	const handleLogout = () => {
	  isLoggedIn = false;
    goto ('/')

	};
  </script>
  
  <main>
    <Navbar/>
	{#if isLoggedIn}
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