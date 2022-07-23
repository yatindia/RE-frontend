<script>
    // import {fade} from "svelte/transition"
    import tt from "@tomtom-international/web-sdk-maps";
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import { onMount } from "svelte";
import Select from 'svelte-select';

    import dotenv from "dotenv";
dotenv.config();
const tt_api = process.env.TOMTOM_API_KEY



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
            <!-- Post -->
            <div class="row property">
              <div class="col-md-5 image-box">
                <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                    <!-- <img src="/img/imagesr2.jpeg" class="img-fluid"/> -->

                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                  </a>
                </div>
              </div>

              <div class="col-md-7 mb-4">
                <h5>

220-260 S Main St</h5>
<small>location</small>
<div class='prop-details'>
  <p>Built year</p>
  <p>Size of property</p>
  <p>Price</p>
</div>
                <!-- <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
                  necessitatibus itaque error alias repellendus nemo.
                </p> -->
                <!-- <div class="d-flex gap-4"><h5>buyingoption</h5>
                <h5>Price</h5></div> -->
                <!-- <div><div class="d-flex align-items-center"><h4>Tittle</h4>,<span><small>location</small></span></div>
                                  <button type="button" class="btn btn-primary btn-info">View property</button>
                </div> -->
                

              </div>
            </div>

            <!-- Post -->
            <div class="row property">
              <div class="col-md-5 image-box">
                <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                    <!-- <img src="/img/imagesr2.jpeg" class="img-fluid"/> -->

                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                  </a>
                </div>
              </div>

              <div class="col-md-7">
                <h5>

220-260 S Main St</h5>
<small>location</small>
<div class='prop-details'>
  <p>Built year</p>
  <p>Size of property</p>
  <p>Price</p>
</div>
                <!-- <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
                  necessitatibus itaque error alias repellendus nemo.
                </p> -->
                <!-- <div class="d-flex gap-4"><h5>buyingoption</h5>
                <h5>Price</h5></div>
                <div><div class="d-flex align-items-center"><h4>Tittle</h4>,<span><small>location</small></span></div>
                                  <button type="button" class="btn btn-primary btn-info">View property</button>
                </div> -->
                

              </div>
            </div>

            <!-- Post -->
            <div class="row property">
              <div class="col-md-5 image-box">
                <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                    <!-- <img src="/img/imagesr2.jpeg" class="img-fluid"/> -->

                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                  </a>
                </div>
              </div>

              <div class="col-md-7 mb-4">
                <h5>

220-260 S Main St</h5><small>location</small>
<div class='prop-details'>
  <p>Built year</p>
  <p>Size of property</p>
  <p>Price</p>
</div>
                <!-- <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
                  necessitatibus itaque error alias repellendus nemo.
                </p> -->
                <!-- <div class="d-flex gap-4"><h5>buyingoption</h5>
                <h5>Price</h5></div>
                <div><div class="d-flex align-items-center"><h4>Tittle</h4>,<span><small>location</small></span></div>
                                  <button type="button" class="btn btn-primary btn-info">View property</button>
                </div> -->
                

              </div>
            </div>

            <!-- Post -->
            <div class="row property">
   <div class="col-md-5 image-box">
                <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                  <!-- <img src="/img/imagesr2.jpeg" class="img-fluid"/> -->
                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                  </a>
                </div>
              </div>

              <div class="col-md-7 mb-4">
               <h5>

220-260 S Main St</h5>
<small>location</small>
<div class='prop-details'>
  <p>Built year</p>
  <p>Size of property</p>
  <p>Price</p>
</div>
                <!-- <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
                  necessitatibus itaque error alias repellendus nemo.
                </p> -->
                <!-- <div class="d-flex gap-4"><h5>buyingoption</h5>
                <h5>Price</h5></div>
                <div><div class="d-flex align-items-center"><h4>Tittle</h4>,<span><small>location</small></span></div>
                                  <button type="button" class="btn btn-primary btn-info">View property</button>
                </div> -->
                

              </div>
            </div>
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
































































<!-- 
<div class="container">
    <div class="row ng-scope">
        <div class="col-md-3 col-md-push-9">
            <h4>Results <span class="fw-semi-bold">Filtering</span></h4>
            <p class="text-muted fs-mini">Listed content is categorized by the following groups:</p>
            <ul transition:fade class="mt dp-list">
                <li transition:fade={{ duration: 100, delay: 50 }}><a href="/">Parking</a>
                </li>
                <li transition:fade|local><a href="/">Near to Amenities</a>
                </li>
                <li transition:fade|local><a href="/">Images</a>
                </li>
                <li transition:fade|local><a href="/">Groups</a>
                </li>
                <li transition:fade|local><a href="/">Globals </a>
                </li>
            </ul>
        </div>
        <div class="col-md-9 col-md-pull-3">
            <p class="search-results-count">About 94 700 000 (0.39 sec.) results</p>
            <section class="search-result-item">
                <a class="image-link" href="/"><img class="image" src="/post/1.jpg">
                </a>
                <div class="search-result-item-body">
                    <div class="row">
                        <div class="col-sm-9">
                            <h4 class="search-result-item-heading"><a href="/">john doe</a></h4>
                            <p class="info">New York, NY 20188</p>
                            <p class="description">Not just usual Metro. But something bigger. Not just usual widgets, but real widgets. Not just yet another admin template, but next generation admin template.</p>
                        </div>
                        <div class="col-sm-3 text-align-center">
                            <p class="value3 mt-sm">$9, 700</p>
                            <p class="fs-mini text-muted">PER WEEK</p><a class="btn btn-primary btn-info btn-sm" href="/">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="search-result-item">
                <a class="image-link" href="/"><img class="image" src="/post/2.jpg">
                </a>
                <div class="search-result-item-body">
                    <div class="row">
                        <div class="col-sm-9">
                            <h4 class="search-result-item-heading"><a href="/">john doe</a> <span class="badge bg-danger fw-normal pull-right">Best Deal!</span></h4>
                            <p class="info">Los Angeles, NY 20188</p>
                            <p class="description">You will never know exactly how something will go until you try it. You can think three hundred times and still have no precise result.</p>
                        </div>
                        <div class="col-sm-3 text-align-center">
                            <p class="value3 mt-sm">$10, 300</p>
                            <p class="fs-mini text-muted">PER WEEK</p><a class="btn btn-primary btn-info btn-sm" href="/">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="search-result-item">
                <a class="image-link" href="/"><img class="image" src="/post/3.jpg">
                </a>
                <div class="search-result-item-body">
                    <div class="row">
                        <div class="col-sm-9">
                            <h4 class="search-result-item-heading"><a href="/">john doe</a></h4>
                            <p class="info">New York, NY 20188</p>
                            <p class="description">The Great Prince of the Grand Duchy of Lithuania he had stopped the invasion to Europe of Timur (Tamerlan) from Asia heading a big Army of Belarusians, Lithuanians.</p>
                        </div>
                        <div class="col-sm-3 text-align-center">
                            <p class="value3 mt-sm">$3, 200</p>
                            <p class="fs-mini text-muted">PER WEEK</p><a class="btn btn-info btn-sm" href="/">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="search-result-item">
                <a class="image-link" href="/"><img class="image" src="/post/4.jpg">
                </a>
                <div class="search-result-item-body">
                    <div class="row">
                        <div class="col-sm-9">
                            <h4 class="search-result-item-heading"><a href="/">john doe</a></h4>
                            <p class="info">Minsk, NY 20188</p>
                            <p class="description">Yes you can! Further more, you should! It let's you create really beautiful images either for elements or for the entire background.</p>
                        </div>
                        <div class="col-sm-3 text-align-center">
                            <p class="value3 mt-sm">$2, 400</p>
                            <p class="fs-mini text-muted">PER MONTH</p><a class="btn btn-info btn-sm" href="/">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-align-center mt-5">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                  </nav>
            </div>
        </div>
    </div>
    </div> -->
