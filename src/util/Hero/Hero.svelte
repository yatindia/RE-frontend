
<script>
    import SearchBox from "../SearchBox/SearchBox.svelte"
    import HeroHeader from "../Header/HeroHeader.svelte"

    // export let login
</script>

<section class="hero">

    <!-- <HeroHeader {login}/> -->
 

        <div class="left">

            <h1>Lullamcorper eget lobortis scelerisque</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eum odit, porro beatae dolorem praesentium quae numquam fugiat fuga illum earum quidem obcaecati..

            </p>

            <SearchBox/>

        </div>

        <div class="right">



            <img width="100%" src="/img/heroBuilding.png" alt="">

        </div>
  
</section>


<style lang="scss">

    .hero {
       
        display: grid;
        justify-content: center;
        width: 60%;
        margin: auto;
        grid-template-columns: 1fr 1fr;

    }



    .hero > .left {
        padding-top: 5vh;
    }

    .hero > .right {
        background-color: #c1202c;
       
    }
    .hero > .right >img {
        width: 80%;
        display: block;
        margin: auto;
    }

  
    




</style>