<script>
    import HeaderSeller from '../utils/HeaderSeller.svelte';
    import { goto } from '$app/navigation';


    function clickMyDetails(){
    goto ("/seller/my-details")
    };
    
    function clickMyJobs(){
    goto ("/seller/my-jobs")
    };


    
    </script>
    
    <main>
        <HeaderSeller />
    
        <div class ="hero">
          <h2> X Hack </h2>
              <p>
                  A platform which bring you the best coding teacher
              </p>
      </div>
        <p>This is the seller home page</p>
        <button on:click={clickMyDetails}>My Details</button>
        <button on:click={clickMyJobs}>My Job</button>
      </main>
    
      <style>
  
.hero {
    padding: 10px 0;
    background-color : rgb(141, 233, 141)
    
}
h2 {
    font-size: 24px;
    color: rgb(2, 2, 2);
    margin-top:0;
    padding:10px 0; 
}
p{
    margin-top: 5%;
    border: 2px solid powderblue;
    color: rgb(2, 2, 2)
}


       </style>