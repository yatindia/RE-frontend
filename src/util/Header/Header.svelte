
<script>
    import {logout} from "../functions/functions"
  export let login
</script>

<nav class="navbar">
    <div class="navbar-leftSide">
        <ul class="navbar-menuItmes">
            <a href="/" class="navbar-menuItem"><li>
                <img class="logo" src="/img/logo.png" alt="">
            </li></a>
            <a href="/" class="navbar-menuItem text-bold"><li>HOME</li></a>
            <a href="/about" class="navbar-menuItem text-bold"><li>ABOUT</li></a>
        </ul>
    </div>

    <div class="navbar-rightSide" id="navbar-rightSide">
      {#if login === null}
        <ul class="navbar-menuItmes">
            <a href="/auth/login" class="navbar-menuItem text-bold"><li>LOGIN</li></a>
            <span class="text-white">/</span>
            <a href="/auth/signup" class="navbar-menuItem text-bold"><li>SIGNUP</li></a>
        </ul>
      {:else}
        <ul class="navbar-menuItmes">
            <a href="/user/account" class="navbar-menuItem text-bold">
                <li>
                    <i class="fa-solid fa-user"></i> &nbsp;
                    ACCOUNT &nbsp; &nbsp;
                </li>
            </a>
            <a on:click={()=> logout()} href="/" class="navbar-menuItem text-bold">
                <li>
                    <i class="fa-solid fa-right-from-bracket"></i> &nbsp;
                    LOGOUT &nbsp; &nbsp;
                </li>
            </a>
        </ul>   
      {/if}
    </div>

</nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/">Action</a>
            <a class="dropdown-item" href="/">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
 

    </div>
  </nav>

<style>



    .navbar {

        width: 100%;
        height: 10vh;
        background-color: #c1202c;
        /* box-shadow: 0px 0 10px rgba(70, 21, 21, 0.274); */
    }

    .logo {
        height: 5vh;
        margin: 2vh;
    }

    a {
        text-decoration: none !important;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul a li {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        padding: 0 10px 0 10px;
    }



</style>