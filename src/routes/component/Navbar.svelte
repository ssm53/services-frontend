<script>
    import { page } from '$app/stores';
    

    let isOpen = false;
    let items = ["Seller Log In", " Users Log In"];

    let isLoggedIn = false; 
    const navs = [
    {
        title:"Home",
        href:"/",
    },
    {
        title: "Log In",
        href : "/login",
    },
    {
    title:"Sign Up",
    href:"/signup",
    },
    {
    title:"Contact",
    href:"/contact",
    },
];
    $: routeId = $page.route.id

    export function updateNavs() {
    navs[1].title = isLoggedIn ? "Log out" : "Log In";
    navs[1].href = isLoggedIn ? "/login" : "/";
  }
    const handleLogin = () => {
    isLoggedIn = true;
    updateNavs();
  };

  const handleLogout = () => {
    isLoggedIn = false;
    updateNavs();
  };

</script>
<nav>
    <div class="container">
    <h1>X Hack</h1>
    <ul>
        {#each navs as {title, href,}}
        <li>
            <a {href} class:active = {routeId === href} {title} on:click={() => title === 'Log In' ? handleLogin() : handleLogout()}>
                {title}
            </a>
        </li>
        {/each}
    </ul>
</div>
</nav>

<div class="relative">
	<button
	  class="px-6 py-2 mt-4 text-white bg-blue-500 rounded"
	  on:click={() => (isOpen = !isOpen)}
	>
	  Log in
	</button>
  
	{#if isOpen}
	  <div
		class="absolute left-0 w-48 py-2 mt-2 mr-10 bg-white rounded-lg shadow-xl"
	  >
		{#each items as item (item)}
		  <a
			href="#"
			class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
		  >
			{item}
		  </a>
		{/each}
	  </div>
	{/if}
  </div>


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
    }

  </style>