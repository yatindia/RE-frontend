<script>
    import Hero from "../util/Hero/Hero.svelte"


    import {onMount} from "svelte"


    let login;


    onMount(()=>{

        login = JSON.parse(localStorage.getItem("login"))
        
    })



</script>

<Hero {login} />