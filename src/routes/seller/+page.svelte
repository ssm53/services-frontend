<script>
    import Navbar from './component/Navbar.svelte';
    import Hero from './component/Hero.svelte';


    function clickMyDetails(){
    goto ("/seller/my-details")
    };
    
    function clickMyJobs(){
    goto ("/seller/my-jobs")
    };


    
    </script>
    
    <main>
        <Navbar />
    
        <Hero />
        <button on:click={clickMyDetails}>My Details</button>
        <button on:click={clickMyJobs}>My Job</button>
      </main>
    
      <style>
    
       </style>