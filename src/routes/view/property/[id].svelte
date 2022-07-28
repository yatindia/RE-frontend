<script context="module">
    export function load({
        params
    }) {

        return {
            props: {
                id: params.id
            }
        }
    }
</script>

<script>
    export let id
    import { onMount } from 'svelte'

    console.log(id);
    let property;

    onMount(async ()=>{

       let token = window.localStorage.getItem("login");
token = JSON.parse(token)

        const response = await fetch(`http://127.0.0.1:5000/property/post/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }

      });
      const data = await response.json();
     property = data.data
      console.log(property);
    })
</script>
<div>
    {#if property}
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100"
                    src="https://blog.wattsense.com/content/images/2020/04/proptechs-smart-buildings.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100"
                    src="https://media.architecturaldigest.com/photos/56b524de4ac3d842677b9ac0/master/w_2323,h_1548,c_limit/home-office-01.jpg"
                    alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Mayor2jf.JPG/1200px-Mayor2jf.JPG"
                    alt="Third slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>













    
    
    
    <div class="accordion" id="accordionExample">
        {#each property.floors as floor}
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Floor #{floor.floor_number} | {floor.floor_size} SQFT | 2 ROOMs
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
    
                    <table class="table">
                        <thead>
                            <tr>
    
                                <th scope="col">SPACE</th>
                                <th scope="col">SIZE</th>
                                <th scope="col">TERM</th>
                                <th scope="col">RATE</th>
                                <th scope="col">SPACE USE</th>
                                <th scope="col">CONDITION</th>
                                <th scope="col">AVAILABLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{floor.floor_number}st Floor</td>
                                <td>{floor.floor_size} SF</td>
                                <td>{floor.term}</td>
                                <td>{floor.space_use}</td>
                                <td>Office</td>
                                <td>{floor.condition}</td>
                                <td>{floor.available}</td>
    
                            </tr>
                        </tbody>
                    </table>
    
                    <p>240,000 SF Contiguous Block Available. Perfectly Suited to Multi-Floor Tenants. Direct Elevator
                        Access to Hospitality-Focused Building Amenity Featuring Sweeping Outdoor Terrace.</p>
    
                </div>
            </div>
        </div>
        {/each}
       
        <!-- <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Floor #2 | 19,871 SQFT | 2 ROOMs
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
    
                    <table class="table">
                        <thead>
                            <tr>
    
                                <th scope="col">SPACE</th>
                                <th scope="col">SIZE</th>
                                <th scope="col">TERM</th>
                                <th scope="col">RATE</th>
                                <th scope="col">SPACE USE</th>
                                <th scope="col">CONDITION</th>
                                <th scope="col">AVAILABLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2nd Floor</td>
                                <td>19,871 SF</td>
                                <td>Negotiable</td>
                                <td>Upon Request</td>
                                <td>Office</td>
                                <td>-</td>
                                <td>Now</td>
    
                            </tr>
                        </tbody>
                    </table>
    
                    <p>240,000 SF Contiguous Block Available. Perfectly Suited to Multi-Floor Tenants. Direct Elevator
                        Access to Hospitality-Focused Building Amenity Featuring Sweeping Outdoor Terrace.</p>
    
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Floor #3 | 19,871 SQFT | 3 ROOMs
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
    
                    <table class="table">
                        <thead>
                            <tr>
    
                                <th scope="col">SPACE</th>
                                <th scope="col">SIZE</th>
                                <th scope="col">TERM</th>
                                <th scope="col">RATE</th>
                                <th scope="col">SPACE USE</th>
                                <th scope="col">CONDITION</th>
                                <th scope="col">AVAILABLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3rd Floor</td>
                                <td>19,871 SF</td>
                                <td>Negotiable</td>
                                <td>Upon Request</td>
                                <td>Office</td>
                                <td>-</td>
                                <td>Now</td>
    
                            </tr>
                        </tbody>
                    </table>
    
                    <p>240,000 SF Contiguous Block Available. Perfectly Suited to Multi-Floor Tenants. Direct Elevator
                        Access to Hospitality-Focused Building Amenity Featuring Sweeping Outdoor Terrace.</p>
    
                </div>
            </div>
        </div> -->
    </div>

















    
    
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div id="property-single-carousel"
                    class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                    <div class="swiper-wrapper" id="swiper-wrapper-5d310ffbbeac5b1015" aria-live="off"
                        style="transform: translate3d(-1712px, 0px, 0px); transition-duration: 0ms;">
                        <div class="carousel-item-b swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                            data-swiper-slide-index="1" style="width: 856px;" role="group" aria-label="2 / 2"> <img
                                src="assets/img/slide-2.jpg" alt=""></div>
                        <div class="carousel-item-b swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                            data-swiper-slide-index="0" style="width: 856px;" role="group" aria-label="1 / 2"> <img
                                src="assets/img/slide-1.jpg" alt=""></div>
                        <div class="carousel-item-b swiper-slide swiper-slide-active" data-swiper-slide-index="1"
                            style="width: 856px;" role="group" aria-label="2 / 2"> <img src="assets/img/slide-2.jpg" alt="">
                        </div>
                        <div class="carousel-item-b swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                            data-swiper-slide-index="0" role="group" aria-label="1 / 2" style="width: 856px;"> <img
                                src="assets/img/slide-1.jpg" alt=""></div>
                    </div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
                <div
                    class="property-single-carousel-pagination carousel-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                    <span class="swiper-pagination-bullet" tabindex="0" role="button"
                        aria-label="Go to slide 1"></span><span
                        class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button"
                        aria-label="Go to slide 2" aria-current="true"></span></div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="row justify-content-between">
                    <div class="col-md-5 col-lg-4">
                        <div class="property-price d-flex justify-content-left foo">
                            <div class="card-header-c d-flex">
                                <div class="card-box-ico"> <span class="bi bi-cash">$</span></div>
                                <div class="card-title-c align-self-center">
                                    <h5 class="title-c">15000</h5>
                                </div>
                            </div>
                        </div>
                        <div class="property-summary">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="title-box-d section-t4">
                                        <h3 class="title-d">Quick Summary</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="summary-list">
                                <ul class="list">
                                    <li class="d-flex justify-content-between"> <strong>Property ID:</strong>
                                        <span>1134</span></li>
                                    <li class="d-flex justify-content-between"> <strong>Location:</strong> <span>{property.city}, {property.zip_code}</span></li>
                                    <li class="d-flex justify-content-between"> <strong>Property Type:</strong>
                                        <span>{property.type}</span></li>
                                    <li class="d-flex justify-content-between"> <strong>Status:</strong> <span>{property.for}</span>
                                    </li>
                                    <li class="d-flex justify-content-between"> <strong>Area:</strong> <span>{property.building_size}
                                            <!-- <sup>2</sup>  -->
                                        </span></li>
    
    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-7 section-md-t3">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="title-box-d">
                                    <h3 class="title-d">Property Description</h3>
                                </div>
                            </div>
                        </div>
                        <div class="property-description">
                            <p class="description color-text-a"> Vestibulum ante ipsum primis in faucibus orci luctus et
                                ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                                sit amet ligula. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui
                                posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar quam id dui
                                posuere blandit.</p>
                            <p class="description color-text-a no-margin"> Curabitur arcu erat, accumsan id imperdiet et,
                                porttitor at sem. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut
                                lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.</p>
                        </div>
                   
                    </div>
    
                    <div class="row section-t3">
                        <div class="col-sm-12">
                            <div class="title-box-d">
                                <h3 class="title-d">Amenities</h3>
                            </div>
                        </div>
                    </div>
                    <div class="amenities-list color-text-a">
                        <ul class="list-a no-margin">
                            {#each property.highlights as ph}
                            <li>{ph}</li>
                                
                            {/each}
                            <!-- <li>Balcony</li>
                            <li>Outdoor Kitchen</li>
                            <li>Cable Tv</li>
                            <li>Deck</li>
                            <li>Tennis Courts</li>
                            <li>Internet</li>
                            <li>Parking</li>
                            <li>Sun Room</li>
                            <li>Concrete Flooring</li> -->
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-10 offset-md-1">
                <ul class="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation"> <a class="m-1 mt-5 btn btn-danger active" id="pills-video-tab"
                            data-bs-toggle="pill" href="#pills-video" role="tab" aria-controls="pills-video"
                            aria-selected="true">Video</a></li>
                    <li class="nav-item" role="presentation"> <a class="m-1 mt-5 btn btn-danger" id="pills-plans-tab" data-bs-toggle="pill"
                            href="#pills-plans" role="tab" aria-controls="pills-plans" aria-selected="false"
                            tabindex="-1">Floor Plans</a></li>
                    <li class="nav-item" role="presentation"> <a class="m-1 mt-5 btn btn-danger" id="pills-map-tab" data-bs-toggle="pill"
                            href="#pills-map" role="tab" aria-controls="pills-map" aria-selected="false"
                            tabindex="-1">Ubication</a></li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-video" role="tabpanel"
                        aria-labelledby="pills-video-tab"> <iframe width="560" height="315" src="https://www.youtube.com/embed/wwYbWu_va5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div class="tab-pane fade" id="pills-plans" role="tabpanel" aria-labelledby="pills-plans-tab"> <img
                            src="https://bootstrapmade.com/demo/templates/EstateAgency/assets/img/plan2.jpg" alt="" class="img-fluid"></div>
                    <div class="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab"> <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
                            width="100%" height="460" frameborder="0"
                            style="border: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;"
                            allowfullscreen="" data-darkreader-inline-border-top="" data-darkreader-inline-border-right=""
                            data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""></iframe></div>
                </div>
            </div>
    
    
    
            <div class="col-md-12 mt-5 mb-5" >
                <div class="row section-t3">
                    <div class="col-sm-12">
                        <div class="title-box-d">
                            <h3 class="title-d">Contact Property Owner/Agent</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                 
                    <div class="col-md-6 col-lg-6">
                        <div class="property-agent">
                            <h4 class="title-agent">Anabella Geller</h4>
                            <p class="color-text-a"> Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id
                                enim.</p>
                            <ul class="list-unstyled">
                                <li class="d-flex justify-content-between"> <strong>Phone:</strong> <span
                                        class="color-text-a">(222) 4568932</span></li>
                                <li class="d-flex justify-content-between"> <strong>Mobile:</strong> <span
                                        class="color-text-a">777 287 378 737</span></li>
                                <li class="d-flex justify-content-between"> <strong>Email:</strong> <span
                                        class="color-text-a">annabella@example.com</span></li>
                                <li class="d-flex justify-content-between"> <strong>Skype:</strong> <span
                                        class="color-text-a">Annabela.ge</span></li>
                            </ul>
                            <div class="socials-a">
                                <ul class="list-inline">
                                    <li class="list-inline-item"> <a href="#"> <i class="bi bi-facebook"
                                                aria-hidden="true"></i> </a></li>
                                    <li class="list-inline-item"> <a href="#"> <i class="bi bi-twitter"
                                                aria-hidden="true"></i> </a></li>
                                    <li class="list-inline-item"> <a href="#"> <i class="bi bi-instagram"
                                                aria-hidden="true"></i> </a></li>
                                    <li class="list-inline-item"> <a href="#"> <i class="bi bi-linkedin"
                                                aria-hidden="true"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="property-contact">
                            <form class="form-a">
                                <div class="row">
                                    <div class="col-md-12 mb-1">
                                        <div class="form-group"> <input type="text"
                                                class="form-control form-control-lg form-control-a" id="inputName"
                                                placeholder="Name *" required=""></div>
                                    </div>
                                    <div class="col-md-12 mb-1">
                                        <div class="form-group"> <input type="email"
                                                class="form-control form-control-lg form-control-a" id="inputEmail1"
                                                placeholder="Email *" required=""></div>
                                    </div>
                                    <div class="col-md-12 mb-1">
                                        <div class="form-group"><textarea id="textMessage" class="form-control"
                                                placeholder="Comment *" name="message" cols="45" rows="8"
                                                required=""></textarea></div>
                                    </div>
                                    <div class="col-md-12 mt-3"> <button type="submit" class="btn btn-a">Send
                                            Message</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/if}
</div>




<style lang="scss">




    .carousel {
        width: 70%;
        height: 50vh;
        overflow: hidden;
        margin: auto
    }

    .accordion {
        width: 70%;
        margin: 25px auto 0 auto;
    }

    .amenities-list {
        
        ul {
            display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }

    .title-d , strong {
        color: red;
    }


    .accordion-button:not(.collapsed) {
        color: red;
    background-color: #ffe7e7;
    }
</style>