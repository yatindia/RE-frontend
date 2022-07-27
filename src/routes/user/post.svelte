<script>
  import { API } from "../../config";
  import { protectedRoute } from "../../components/functions";

  import { onMount } from "svelte";
  onMount(() => protectedRoute());

  import mapboxgl from "mapbox-gl";
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0aHlhZGV2IiwiYSI6ImNsM3R5bGh1cjBlZ2wzaXBjazI2ZTBnMm8ifQ.GLQgbjT3w49JfCTJ_iEsQA'


    let mapElement;
    let map
        onMount(() => {
     
              const map = new mapboxgl.Map({
                container: "map",
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [16.37, 48.2],
                zoom: 12,
              });
            

              map.addControl(
                  new mapboxgl.GeolocateControl({
                  positionOptions: {
                  enableHighAccuracy: true
                  },

                  trackUserLocation: true,

                  showUserHeading: true,
                  trackUserLocation: true
                  })
        );
    
      });
    

  let property = {
  property: {
    photos: ["photos"],
    type: "",
    space_use: "",
    for: "",
    address_1: "",
    address_2: "",
    country: "",
    state: "",
    city: "",
    zip_code: "",
    year_built: "",
    renovated: false,
    building_size: "",
    lot_size: "",
    construction_type: "",
    electricity: "",
    zoning: "",
    highlights: [],
    featured: false,
    importance: "",
    gps: {
      lat: "",
      lng: ""
    },
    floors: [
      {
        floor_number: "",
        floor_size: "",
        term: "",
        rate: "",
        space_use: "",
        condition: "",
        amenities: [],
        period_of_tenure: "",
        avaliable: true
      }
    ]
  }
}



</script>

<div>
  <h1 class="text-center mt-5">Add Property</h1>
  <form>

    <div class="container">
      <div class="row">
        <div class="col">
          <label for="#">Property Type</label>
          <select class="form-control">
            <option value="building">Building</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div class="col">
          <label for="#">Property Use Type</label>
          <select class="form-control">
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
          <select class="form-control">
            <option value="sale"> Sale </option>
            <option value="rent"> Rent </option>
            <option value="lease"> Lease </option>
          </select>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <label for="#">Address 1</label>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="Default input">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label for="#">Address 2</label>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="Default input">
          </div>
        </div>
      </div>
    </div>


    <div class="container">
      <div class="row">

        <div class="col-6 col-sm-6 col-lg-6 col-xl-3">
          <label for="#">Country</label>
          <select class="form-control">
            <option value="building">Building</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div class="col-6 col-sm-6 col-lg-6 col-xl-3">
          <label for="#">State</label>
          <select class="form-control">
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
            <input class="form-control" type="text" placeholder="Default input">
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
            <input class="form-control" type="text" placeholder="Default input">
          </div>
        </div>

        <div class="col-6 col-sm-6 col-lg-6 col-xl-6">
          <label for="#">Year Build</label>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="Default input">
          </div>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-6 col-sm-6 col-lg-6 col-xl-6">
          <label for="#">Is Renovated?</label>
          <select class="form-control">
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
  
        </div>

        <div class="col-6 col-sm-6 col-lg-6 col-xl-6">
          <label for="#">Year Renovated</label>
          <div class="form-group">
            <input class="form-control" type="text" placeholder="Default input">
          </div>
        </div>

      </div>
    </div>


    <div class="container">
      <div class="row">

        <div class="col-6 col-sm-6 col-lg-6 col-xl-6">
          <label for="#">Building Size (SF)</label>
          <input class="form-control" type="text" placeholder="Default input">
        </div>

        <div class="col-6 col-sm-6 col-lg-6 col-xl-6">
          <label for="#">Lot Size (SF)</label>
          <input class="form-control" type="text" placeholder="Default input">
        </div>

      </div>
    </div>


    <div class="container">
      <div class="row">

        <div class="col-6 col-sm-6 col-lg-6 col-xl-3">
          <label for="#">Construction Type</label>
          <select class="form-control">
            <option value="metal">Metal</option>
            <option value="wood">Wood</option>
            <option value="concrete">Concrete</option>
          </select>
        </div>

        <div class="col-6 col-sm-6 col-lg-6 col-xl-3">
          <label for="#">Sewer</label>
          <select class="form-control">
            <option value="city">City</option>
            <option value="self">Self</option>
          </select>
        </div>

        <div class="col-12 col-xl-6">
          <label for="#">Electricity</label>
          <select class="form-control">
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
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>

    <div class="container">

     <div class="row">
       <div class="col-8">
        <input class="form-control" type="text" placeholder="Default input">
       </div>
      
      <button type="submit" class="col-4 btn btn-primary">Add highlights</button>
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
</style>
