<script>
import {protectedRoute} from "../../components/functions"
import {onMount} from "svelte"
import UserHero from "../../util/Hero/UserHero.svelte"
import {API} from "../../config"

onMount(()=>protectedRoute())


    let token;
    let data = {}
    let properties=[]

    onMount(async ()=>{

        token = JSON.parse(localStorage.getItem("login"))

        await fetch(`${API}/user`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `<Bearer> ${token}`
            }
        })
        .then(res => res.json())
        .then((res)=>{
            if (res.status) {
                data = res.data
                console.log(data);
            }
        })



        await fetch(`${API}/property/singleuserproperty/${data._id}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `<Bearer> ${token}`
            }
            
        
        })
        .then(res => res.json())
        .then((res)=>{
            console.log(res);

            if (res.status) {
                properties = res.data
                console.log(properties);
            }
        })


})



    
</script>


<div>

<UserHero />

{#if typeof properties !='undefined' && properties.data}
<p>Data</p>
{:else}
<div class="empty">
    <img src="/img/empty.gif" alt="">
    <a href="/user/post" class="btn btn-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
        </svg> 
      Add Properties
    </a>
</div>
    
{/if}
   
</div>


<style>
   .empty{
       min-height: 40vh;
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
   }
  
</style>
