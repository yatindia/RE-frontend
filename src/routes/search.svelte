<script>
    // import {fade} from "svelte/transition"
    import { onMount } from 'svelte'
    import { paginate, LightPaginationNav } from 'svelte-paginate'

    import mapboxgl from "mapbox-gl";
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0aHlhZGV2IiwiYSI6ImNsM3R5bGh1cjBlZ2wzaXBjazI2ZTBnMm8ifQ.GLQgbjT3w49JfCTJ_iEsQA';


    
 [
	{
		"location": "Manhattan Ave & Norman Ave at NE corner",
		"city": "Brooklyn",
		"state": "New York",
		"coordinates": [-83.9516030004786,50.82557300071668],
	},
	{
		"location": "6th Ave & 42nd St at NW corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-83.98393399979334,50.85533300052329],
	},
	{
		"location": "Essex St & Delancey St at SE corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-83.9882730001973,50.818207001246554],
	},
  {
		"location": "Manhattan Ave & Norman Ave at NE corner",
		"city": "Brooklyn",
		"state": "New York",
		"coordinates": [-53.9516030004786,46.82557300071668],
	},
	{
		"location": "6th Ave & 42nd St at NW corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-53.98393399979334,46.85533300052329],
	},
	{
		"location": "Essex St & Delancey St at SE corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-53.9882730001973,46.818207001246554],
	},
  {
		"location": "Manhattan Ave & Norman Ave at NE corner",
		"city": "Brooklyn",
		"state": "New York",
		"coordinates": [-63.9516030004786,38.82557300071668],
	},
	{
		"location": "6th Ave & 42nd St at NW corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-63.98393399979334,38.85533300052329],
	},
	{
		"location": "Essex St & Delancey St at SE corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-63.9882730001973,38.818207001246554],
	},
  {
		"location": "Manhattan Ave & Norman Ave at NE corner",
		"city": "Brooklyn",
		"state": "New York",
		"coordinates": [-73.9516030004786,42.82557300071668],
	},
	{
		"location": "6th Ave & 42nd St at NW corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-73.98393399979334,42.85533300052329],
	},
	{
		"location": "Essex St & Delancey St at SE corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-73.9882730001973,42.818207001246554],
	}
] 
let fetchedCount;

let pagiVal=[];
let properties
// let items

// let currentPage = 1
//   let pageSize = 5
//   let paginatedItems;
  let showpropValue;


let search={
            search:' ',
            skip:0,
            limit:5
          };

        let token;
        onMount( async ()=>{
          
            token = JSON.parse(localStorage.getItem("login"))

            // const response = await fetch(`http://127.0.0.1:5000/property`, {
            //         method: "POST",
            //         headers: {
            //           "Content-Type": "application/json",
            //           Authorization: `Bearer ${token}`,
            //         },
            //       });
        })
   
        onMount(async () => {


          const response = await fetch(`http://127.0.0.1:5000/property/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
       
      body: JSON.stringify(search),

      });
      const data = await response.json();
      console.log(data);
      properties = data.data[0];
      fetchedCount = data.data[1]
      for (let i = 0; i < fetchedCount; i++) {
        if(!(i%5)){
          pagiVal.push((i))
        }
      
       
        
      }
      console.log(pagiVal);
      // items =  data.data[0]
      // console.log(properties); 

      // paginatedItems = paginate({ items, pageSize, currentPage })
          
     
              const map = new mapboxgl.Map({
                container: "map",
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [16.37, 48.2],
                // zoom: 12,
              });

              map.on('load', () => {
               properties.forEach((location , i) => {

			            let marker = new mapboxgl.Marker()
                              .setLngLat(location.gps)
                              .addTo(map)

                              marker.getElement().addEventListener('click', () => {
          
          showpropValue = i+1;
        });
		        
                })
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
              )

      
    
        });


        const searchProperty = async (e) => {
          // console.log(e);

          search.search = e.target.value;
         
          const response = await fetch(`http://127.0.0.1:5000/property/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
       
      body: JSON.stringify(search),

      });
      const data = await response.json();
      properties = data.data[0];
     
        }
     
        const getMoreProperty = async (e) => {
let i = Number(e)
i = i -1
if (e===0) {
  search.skip = 0;
  search.limit = 5;
  
} else {
  console.log(fetchedCount);
  search.skip = e * 5
  search.limit = fetchedCount - search.skip
  
}

          const response = await fetch(`http://127.0.0.1:5000/property/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
       
      body: JSON.stringify(search),

      });
      const data = await response.json();
      properties = data.data[0];
     
        }

</script>
<svelte:head>
  <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css' rel='stylesheet' />
</svelte:head>
<div class='containe my-2'>
  <input type="text" class="px-4 mx-2 p-2 geocoder" id="geocoder" placeholder="Search..." on:change={searchProperty}>

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
  <select class="custom-select p-2 mx-1">
    <option selected>Floor no</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
    <option value="0">Ground floor</option>

  </select>
</div>
<!-- class="my-5" -->
<main>
    <div class="containerr">
      <!--Grid row-->
      <div class="row">
        <div class="col-md-7 mb-4 bg-light map position-sticky" id="map">
          <!-- <div class="text">Google Ad</div> -->
        

       
      </div>
        <!--Grid column-->
        <div class="col-md-5 mb-4">
          <!--Section: Content-->
          

          <section class="prop-box">

            {#if showpropValue}
            <div class='ind-property' style="padding: 10px;">
              <img src="/img/imagesr.jpeg" width="100%">
              <div class="d-flex justify-content-between px-2 py-4">
                <div>
                  <h5> {properties[showpropValue-1].address_1}</h5>
                  <small>{properties[showpropValue-1].state},{properties[showpropValue-1].city}</small>
                </div>
               
                <div>
                  <p>From {properties[showpropValue-1].year_built}</p>
                  <p>{properties[showpropValue-1].building_size} Sq Ft</p>
                </div>
              </div>
             
            </div>
            {/if}
            

            {#if properties}
            {#each properties as property }

           
            <!-- Post -->
           <a href="/view/property/{property._id}" style="all:unset">
            <div class="row property">
              <div class="col-md-5 image-box" >
                
                    <!-- <img src="/img/imagesr2.jpeg" class="img-fluid"/>
                    <img src="/img/imagesr2.jpeg" class="img-fluid"/>
                    <img src="/img/imagesr2.jpeg" class="img-fluid"/>
                    <img src="/img/imagesr2.jpeg" class="img-fluid"/> -->


                 
                
              </div>

              <div class="col-md-7">
                <h5> {property.address_1}</h5>
                <small>{property.state},{property.city}</small>
                <div class='prop-details'>
                  <p>From {property.year_built}</p>
                  <p>{property.building_size} Sq Ft</p>
                </div>


              </div>
            </div>
           </a>
            {/each}
            {/if}
   
           

 

          </section>
          <!-- {#if properties}
          <LightPaginationNav
          totalItems="{items.length}"
          pageSize="{pageSize}"
          currentPage="{currentPage}"
          limit="{1}"
          showStepOptions="{true}"
          on:setPage="{(e) =>{console.log(e);
          // getMoreProperty();
            currentPage = e.detail.page}}"
        />
          {/if} -->
          <div class="container my-3 d-flex justify-content-center">
            
            <ul class="pagination pagination">
              <li class="page-item"><a class="page-link" href="#" aria-label="Previous">&laquo;</a></li>
              {#if properties}
              {#each pagiVal as val,i}
              <li class="page-item"><a class="page-link" on:click={(e)=>{getMoreProperty(e.target.text)}}  href="#">{i+1}</a></li>
                
              {/each}
              {/if}
              
             
              
              <li class="page-item"><a class="page-link"href="#" aria-label="Next">&raquo;</a></li>
            </ul>
          </div>
          
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
      // border: #C1202C solid 2px;
      // height: 65vh;
      // position: sticky;
      // top: 0vh;
    }
    .prop-box {
      height: 65vh;
      overflow-y: scroll;
      
      
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


        .image-box {
        background: url(/img/imagesr2.jpeg) no-repeat;
        background-position: center;
        background-size: cover;
      // display: flex;
      //   margin-top: 12px;
      //   height: 110px;
      // width: 180px;
      // overflow: hidden;
      // img {
      //   transition: all 0.2s ease-in-out;
      //   :hover {
      //     transform: translateX(-180px,0);
      //   }
      // }
      }

      .ind-property {
        border-bottom: 1px solid grey;
      }



    </style>

