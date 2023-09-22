<script>
    import { page } from "$app/stores";
const navs = [
    {
        title:"Home",
        href:"/",
    },
    {
    title:"Log In",
    href:"/login",
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
</script>
<nav>
    <div class="container">
    <h1>Name of the webpage</h1>
    <ul>
        {#each navs as {title, href,}}
        <li>
            <a {href} class:active = {routeId === href} {title}>{title}</a>
        </li>
        {/each}
    </ul>
</div>
</nav>


<style>
    nav {
        background-color: rgb(47, 1, 119);
        color : white;
    }
    .container{
        display: flex;
        align-items: center;
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