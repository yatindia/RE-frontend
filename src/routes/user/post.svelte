<script>
  import { API } from "../../config";
  import { protectedRoute } from "../../components/functions";
  import Property from "../../util/Data/Property";

  import { onMount } from "svelte";
  onMount(() => protectedRoute());

  import mapboxgl from "mapbox-gl";
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0aHlhZGV2IiwiYSI6ImNsM3R5bGh1cjBlZ2wzaXBjazI2ZTBnMm8ifQ.GLQgbjT3w49JfCTJ_iEsQA'


    let data = Property
    let mapElement;
    let map
    let highlights
    let current_position = [data.gps.lng, data.gps.lat]
        onMount(() => {
     
              const map = new mapboxgl.Map({
                container: "map",
                style: 'mapbox://styles/mapbox/streets-v11',
                center:[-74.5, 40],
                zoom: 5,
              });

     
              map.on("load", () =>{
                let marker = new mapboxgl.Marker({
                    color: "red",
                    draggable: true
                    })
                    .setLngLat(current_position)
                    .addTo(map)
                marker.on("drag", (arg)=>{
                  data.gps.lng = arg.target._lngLat.lng
                  data.gps.lat = arg.target._lngLat.lat
                  console.log([data.gps.lng, data.gps.lat]);
                })
              })
 


    
      });
    
    


</script>

<div>
  <h1 class="text-center mt-5">Add Property</h1>
  <form>

    <div class="container">
      <div class="row">
        <div class="col">
          <label for="#">Property Type</label>
          <select bind:value={data.type} class="form-control">
            <option value="building">Building</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div class="col">
          <label for="#">Property Use Type</label>
          <select bind:value={data.space_use} class="form-control">
            <option value="office"> Office </option>
            <option value="personal"> Personal </option>
            <option value="warehouse"> Warehouse </option>
            <option value="medical"> Medical </option>
            <option value="academic"> Academic </option>
            <option value="others"> Others </option>
          </select>
        </div>
        <div class="form-group col">
          <label for="#">Property Sale Type</label>
          <select bind:value={data.for} class="form-control">
            <option value="sale"> Sale </option>
            <option value="rent"> Rent </option>
            <option value="lease"> Lease </option>
          </select>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <label for="#">Address 1</label>
          <div class="form-group">
            <input bind:value={data.address_1} class="form-control" type="text" placeholder="Default input">
          </div>
        </div>
     
        <div class="col-sm-6">
          <label for="#">Address 2</label>
          <div class="form-group">
            <input bind:value={data.address_2} class="form-control" type="text" placeholder="Default input">
          </div>
        </div>
      </div>
    </div>


    <div class="container">
      <div class="row">

        <div class="col-6 col-sm-6 col-lg-6 col-xl-3">
          <label for="#">Country</label>
          <select bind:value={data.country}  class="form-control">
            <option value="building">Building</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div class="col-6 col-sm-6 col-lg-6 col-xl-3">
          <label for="#">State</label>
          <select bind:value={data.state} class="form-control">
            <option value="office"> Office </option>
            <option value="personal"> Personal </option>
            <option value="warehouse"> Warehouse </option>
            <option value="medical"> Medical </option>
            <option value="academic"> Academic </option>
            <option value="others"> Others </option>
          </select>
        </div>

        <div class="col-6 col-sm-6 col-lg-6 col-xl-3">
          <label for="#">City</label>
          <div class="form-group">
            <input bind:value={data.city} class="form-control" type="text" placeholder="Default input">
          </div>
        </div>

        <div class="col-6 col-sm-6 col-lg-6 col-xl-3">
          <label for="#">Zip Code</label>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="Default input">
          </div>
        </div>

      </div>
    </div>


    <div class="container">
      <div class="row">


        <div class="col-6 col-sm-6 col-lg-6 col-xl-6">
          <label for="#">Zoning</label>
          <div class="form-group">
            <input bind:value={data.zoning} class="form-control" type="text" placeholder="Default input">
          </div>
        </div>

        <div class="col-6 col-sm-6 col-lg-6 col-xl-6">
          <label for="#">Year Build</label>
          <div class="form-group">
            <input bind:value={data.year_built} class="form-control" type="text" placeholder="Default input">
          </div>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-6 col-sm-6 col-lg-6 col-xl-6">
          <label for="#">Is Renovated?</label>
          <select bind:value={data.renovated} class="form-control">
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
  
        </div>

        <div  class="col-6 col-sm-6 col-lg-6 col-xl-6">
          <label for="#">Year Renovated</label>
          <div class="form-group">
            <input disabled={!data.renovated} bind:value={data.renovated_year} class="form-control" type="text" placeholder="Default input">
          </div>
        </div>

      </div>
    </div>


    <div class="container">
      <div class="row">

        <div class="col-6 col-sm-6 col-lg-6 col-xl-6">
          <label for="#">Building Size (SF)</label>
          <input bind:value={data.building_size} class="form-control" type="text" placeholder="Default input">
        </div>

        <div class="col-6 col-sm-6 col-lg-6 col-xl-6">
          <label for="#">Lot Size (SF)</label>
          <input bind:value={data.lot_size} class="form-control" type="text" placeholder="Default input">
        </div>

      </div>
    </div>


    <div class="container">
      <div class="row">

        <div class="col-6 col-sm-6 col-lg-6 col-xl-3">
          <label for="#">Construction Type</label>
          <select bind:value={data.construction_type} class="form-control">
            <option value="metal">Metal</option>
            <option value="wood">Wood</option>
            <option value="concrete">Concrete</option>
          </select>
        </div>

        <div class="col-6 col-sm-6 col-lg-6 col-xl-3">
          <label for="#">Sewer</label>
          <select bind:value={data.sewer} class="form-control">
            <option value="city">City</option>
            <option value="self">Self</option>
          </select>
        </div>

        <div class="col-12 col-xl-6">
          <label for="#">Electricity</label>
          <select bind:value={data.electricity} class="form-control">
            <option value="commercial">Commerical</option>
            <option value="Domestic">Domestic</option>
            <option value="no electricity">No electricity</option>
          </select>
        </div>


      </div>
    </div>

  <div class="container">
    
    <div class="list">
      <h3>Highlights</h3>
      <ul class="list-group">
        {#if data.highlights !=[]}
          {#each data.highlights as highlight, i}
          <li class="list-group-item d-flex justify-content-start">
            <button 
            on:click={()=>{
              (data.highlights).splice(i,1)
              data.highlights=data.highlights
            }}
              type="button" 
              class="btn btn-danger me-2">
              Delete
            </button>
            <p>{highlight}</p> 
          </li>
          {/each}
        {/if}
        

      </ul>
    </div>

    <div class="container">

     <div class="row">
       <div class="col-10">
        <input bind:value={highlights} class="form-control" type="text" placeholder="Default input">
       </div>
      
      <button 
        on:click={()=>{
          data.highlights = [
            ...data.highlights,
            highlights
          ]
          highlights = ""
        }}
        type="button" 
        class="col-2 btn btn-primary">
        Add highlights
      </button>
     </div>

    </div>

  </div>

  <div class="container">
    <div class="col-12" id="map"></div>
  </div>



    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>



<style lang="scss">
  .container{
    margin: 35px auto;
  }

  #map { 
    
        width: 100%;
        height: 50vh; 

        
      }
</style>
