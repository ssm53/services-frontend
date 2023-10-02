<script>
import { goto } from '$app/navigation';


function goToSeller(){
  goto ("/seller")
}

function goToUser(){
  goto ("/user/[slug]")
}
</script>

<main>
  <div class ="bg-green-400">
    <h2 class= "italic text-5xl bg-green-400 mx-auto my-auto flex justify-center"> X Hack </h2>
        <p class="  flex items-center justify-center">
            A platform which bring you the best coding teacher
        </p>
</div>
      <button on:click={goToSeller}
      class = "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
      >Go to Seller
</button>
<button on:click={goToUser}
class = "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
>Go to User
</button>

   <div>this is the main page for seller and users</div> 
  </main>

  <style>

   </style>