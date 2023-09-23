<script>
	import { onDestroy } from 'svelte';
	import { Button, Styles } from 'sveltestrap';
	import TopNavBar from './TopNavBar.svelte';
	import { User } from './store.js';
  
	let user;
	const unUser = User.subscribe(v => user = v);
	onDestroy(unUser);
	
	$: isLoggedIn = !!user;
</script>

<Styles />
{#if isLoggedIn}
	<TopNavBar/>
	<p>
		if you click "log out", you should see only "log in" button.
	</p>
	<p>
		To see the bug, navigate to "TopNavBar.svelte" tab and uncomment <br>
		//const unUser = User.subscribe(v => user = v);
	</p>
{:else}
	<Button on:click={() => User.signin()}>log in</Button>
  <p>
		click "login"
	</p>
{/if}
