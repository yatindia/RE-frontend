<script>
    import Sidebar from "../../components/sidebar/sidebar.svelte";
    import Tabbar from "../../components/tabbar/tabbar.svelte";

    let body = 0;
</script>
<svelte:window on:resize={()=>console.log(body)} bind:innerWidth={body} />


<div>


    <div class="main-bar">




    </div>
   
</div>


<style>

    .main-bar {
        min-height: 80vh;
    }
</style>
