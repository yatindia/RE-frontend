<script>
    import {fade} from "svelte/transition"
</script>

<div class="ex-wrap">
    <div class="wrapper">
        <div class="search">
          <input type="text" placeholder="Search...">
          <div class="autocomp-box">
    
          </div>
          <div class="icon">
            <ion-icon size="large" name="search-sharp"></ion-icon>
          </div>
        </div>
      </div>
</div>

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
    </div>


<style lang="scss">

.dp-list {
    list-style: none;
    padding: 0;

    li {
        background-color: #C1202C;
        padding: 10px;
        margin-bottom: 10px;
        a {
            text-decoration: none;
            color: #fff;
            font-weight: bold;
        }
    }
}


.search-result-categories>li>a {
    color: #b6b6b6;
    font-weight: 400
}

.search-result-categories>li>a:hover {
    background-color: #ddd;
    color: #555
}

.search-result-categories>li>a>.glyphicon {
    margin-right: 5px
}

.search-result-categories>li>a>.badge {
    float: right
}

.search-results-count {
    margin-top: 10px
}

.search-result-item {
    padding: 20px;
    background-color: #fff;
    border-radius: 4px
}

.search-result-item:after,
.search-result-item:before {
    content: " ";
    display: table
}

.search-result-item:after {
    clear: both
}

.search-result-item .image-link {
    display: block;
    overflow: hidden;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px
}

@media (min-width:768px) {
    .search-result-item .image-link {
        display: inline-block;
        margin: -20px 0 -20px -20px;
        float: left;
        width: 200px
    }
}

@media (max-width:767px) {
    .search-result-item .image-link {
        max-height: 200px
    }
}

.search-result-item .image {
    max-width: 100%
}

.search-result-item .info {
    margin-top: 2px;
    font-size: 12px;
    color: #999
}

.search-result-item .description {
    font-size: 13px
}

.search-result-item+.search-result-item {
    margin-top: 20px
}

@media (min-width:768px) {
    .search-result-item-body {
        margin-left: 200px
    }
}

.search-result-item-heading {
    font-weight: 400
}

.search-result-item-heading>a {
    color: #555
}

@media (min-width:768px) {
    .search-result-item-heading {
        margin: 0
    }
}



.ex-wrap {
    background-color: #C1202C;
    padding: 30px 0;
    margin-bottom: 30px;
}

.wrapper {
  max-width: 600px;
  margin: 0 auto;
}
.wrapper .search {
  background: #fff;
  width: 100%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);
}
.search input {
  height: 55px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 18px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}
.search.active input {
  border-radius: 5px 5px 0 0;
}
.search .autocomp-box {
  padding: 0;
  opacity: 0;
  pointer-events: none;
  max-height: 280px;
  overflow-y: auto;
}
.search.active .autocomp-box {
  padding: 10px 8px;
  opacity: 1;
  pointer-events: auto;
}
.autocomp-box li {
  list-style: none;
  padding: 8px 12px;
  display: none;
  width: 100%;
  cursor: default;
  border-radius: 3px;
}
.search.active .autocomp-box li {
  display: block;
}
.autocomp-box li:hover {
  background: #efefef;
}
.search .icon {
  position: absolute;
  right: 0px;
  top: 0px;
  height: 55px;
  width: 55px;
  text-align: center;
  line-height: 70px;
  font-size: 20px;
  color: #3a0ca3;
  cursor: pointer;
}




    </style>