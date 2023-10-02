<script>
  import HeaderSeller from '../../utils/HeaderSeller.svelte';
    import { goto } from '$app/navigation';


    function clickMyDetails(){
    goto ("/seller/login/edit-details")
    };
    
    function clickMyJobs(){
    goto ("/seller/my-jobs")
    };


    
    </script>
    
    <main>
         
    <HeaderSeller/>
        <div class ="bg-green-400">
          <h2 class= "italic text-5xl bg-green-400 mx-auto my-auto flex justify-center"> X Hack </h2>
              <p class="  flex items-center justify-center">
                  A platform which bring you the best coding teacher
              </p>
      </div>
        <p class= "flex items-center justify-center mt-5 font-size">Welcome to the seller home page</p>
        <button class= "flex items-center justify-center" on:click={clickMyDetails}>My Details</button>
        <button class="flex items-center justify-center" on:click={clickMyJobs}>My Job</button>
      </main>
    
      <style>
  






       </style>