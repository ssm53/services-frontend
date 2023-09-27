<script>
import { goto } from '$app/navigation';


function goToSeller(){
  goto ("/seller")
}
</script>

<main>
      <button on:click={goToSeller}
      class = "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
      >Go to Seller
</button>
   <div>this is the main page for seller and users</div> 
  </main>

  <style>

   </style>