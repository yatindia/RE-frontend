<script>
    // import {fade} from "svelte/transition"
    import tt from "@tomtom-international/web-sdk-maps";
    import '@tomtom-international/web-sdk-maps/dist/maps.css'
    import { onMount } from "svelte";
    import Select from 'svelte-select';

    const tt_api = "9Ui8i6g81l18C2lAZqhVIbe6GDjtGTxg"



    let mapElement;
    let map
        onMount(() => {
          let Ll = { lat: 52.377956, lng: 4.897070 }
          map = tt.map({
            key: tt_api,
            container: mapElement,
            
            center: Ll,
            zoom: 10
          });


    let companyAssets = [
                    { lat: 52.373627, lng: 4.902642 },
                    { lat: 52.3659, lng: 4.927198 },
                    { lat: 52.347878, lng: 4.893488 },
                    { lat: 52.349447, lng: 4.858433 }];
                companyAssets.forEach(function (child) {
                    new tt.Marker().setLngLat(child).addTo(map);
                });     
        });
    
    
</script>

<div class='containe my-2'>
  <input type="text" class="px-4 mx-2 p-2" placeholder="Search...">

  <select class="custom-select p-2 mx-1">
    <option selected>Lease</option>
    <option value="1">Buy</option>
    <option value="2">Lease</option>
    <option value="3">Rent</option>
  </select>
  <select class="custom-select p-2 mx-1">
    <option selected>Property type</option>
    <option value="1">Office</option>
    <option value="2">Industry</option>
    <option value="3">Retail</option>
  </select>
  <select class="custom-select p-2 mx-1">
    <option selected>Property size</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
<!-- class="my-5" -->
<main>
    <div class="containerr">
      <!--Grid row-->
      <div class="row">
        <div class="col-md-7 mb-4 bg-light map position-sticky" bind:this={mapElement}>
          <div class="text">Google Ad</div>

       
      </div>
        <!--Grid column-->
        <div class="col-md-5 mb-4">
          <!--Section: Content-->
          <section class="prop-box">
   
            {#each Array(100) as i }

            <!-- Post -->
           <a href="/view/property/askjhdakljdsafs56654dfs" style="all:unset">
            <div class="row property">
              <div class="col-md-5 image-box" >
                <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                    <!-- <img src="/img/imagesr2.jpeg" class="img-fluid"/> -->

                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                  </a>
                </div>
              </div>

              <div class="col-md-7">
                <h5> 220-260 S Main St</h5>
                <small>location</small>
                <div class='prop-details'>
                  <p>Built year</p>
                  <p>Size of property</p>
                  <p>Price</p>
                </div>


              </div>
            </div>
           </a>
            {/each}

 

          </section>
          <!--Section: Content-->
        </div>
       

        
        
        
      </div>
     

      <!-- Pagination -->
      <!-- <nav class="my-4" aria-label="...">
        <ul class="pagination pagination-circle justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav> -->
    </div>
  </main>



<style lang="scss">
  .containerr {
    .map {
      border: #C1202C solid 2px;
      // height: 65vh;
      // position: sticky;
      // top: 0vh;
    }
    .prop-box {
      height: 65vh;
      overflow-y: scroll;
      
      .image-box {
        background: url(/img/imagesr2.jpeg) no-repeat;
        background-position: center;
        background-size: cover;
      }
      .prop-details {
        margin-top:6px
      } p{
        margin: 0;
        padding:0;
      }
    }
  }
  .property {
        background-color:aliceblue;
        padding:6px;
        margin: 0 6px;
        border: 3px transparent solid;
        transition: all 0.2s;
      }
  .property:hover {
          border: 3px solid rgb(226, 41, 41);
          border-radius: 8px;
        }






    </style>

