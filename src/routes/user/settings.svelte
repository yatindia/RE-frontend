<script>
    import {onMount} from "svelte"
    import Sidebar from "../../components/sidebar/sidebar.svelte";
    import Tabbar from "../../components/tabbar/tabbar.svelte";
    import {API} from "../../config"

    let body = 0;
    let token;
    let data = {}

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
            }
        })



    })




    
</script>
<svelte:window on:resize={()=>console.log(body)} bind:innerWidth={body} />
<div class="main-container">

    <div class="main-bar">
        <section class="signup">

            <form on:submit|preventDefault={()=>{}} >
        
                <div class="cover">
                    <h1 class="text-center">Settings</h1>
                    <br>
            
              
            
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input bind:value={data.email} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
            
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
            
                    
             
                    <button type="submit" class="btn btn-danger w-100 mt-2">Login</button>
            
           
            
                </div>
        
                
            </form>
        
        </section>
        
    </div>
   
</div>


<style>
    .main-container {
        display: grid;
        grid-template-columns: 5vw 94vw;
    }
    .sidebar {
        width: 100%;
    }
    .main-bar {
        min-height: 80vh;
        padding: 5vh;
    }

    .signup {

        display: flex;
        justify-content: center;

    }


    form {
        width: 95%;
        max-width: 800px;
        border: 1px solid red;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.173);
    }
</style>
