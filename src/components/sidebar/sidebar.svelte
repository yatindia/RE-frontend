<script>
    import {onMount, createEventDispatcher} from "svelte"

    
   
</script>

<!-- <div class="hamburger-menu">
    <ion-icon name="menu-outline" id="hamburger-icon"></ion-icon>
</div> -->
  <div class="sidebar" id="sidebars">
    <!-- <div class="close-icon" id="close" onclick="closeNav() ">
      <ion-icon name="close-outline"></ion-icon>
    </div> -->
  
    <ul class="links">

      <li class="link active">
        <a href="/user/account">
            <i class="fa-solid fa-house"></i> <span>Home</span>
        </a>
      </li>

      <li class="link active">
        <a href="/user/post">
            <i class="fa-solid fa-circle-plus"></i> <span>Post Property</span>
        </a>
      </li>

      <li class="link active">
        <a href="/user/myproperties">
            <i class="fa-solid fa-building"></i> <span>My Properties</span>
        </a>
      </li>

      <li class="link active">
        <a href="/search">
            <i class="fa-solid fa-magnifying-glass"></i> <span>Search</span>
        </a>
      </li>

  
      <li class="link active">
        <a href="/user/settings">
            <i class="fa-solid fa-gears"></i><span>Settings</span>
        </a>
      </li>

  

    </ul>
  </div>

<style lang="scss">

.sidebar{
    background-color: #1F295D;
    min-height: 90vh;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    * {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
        width: 100%;

        li {

            margin: 5vh 0;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
            min-height: 5vw;
            display: flex;
                justify-content: center;
                align-items: center;
            

            a {
                text-decoration: none;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border-radius: 20px 5px 5px 10x;


                i {
                    color: #fff;
                    font-size: 44px;
                    width: 50px
                }

                span {
                    color: #fff;
                    display: none;
                    position: absolute;
                    left: 6vw;
                    background-color: #1F295D;
                    padding: 5px;
                    border-radius: 5px;
                    transition:all ease-in-out 1s;
                }
            }

            &:hover {
                background-color: #fff;
                
                i {
                    color: #1F295D;
                   
                }

                span {
                    color: #fff;
                    display: block;
                    font-size: 30px;
                    padding: 10px;
                }


            }
        }
    }
}

</style>