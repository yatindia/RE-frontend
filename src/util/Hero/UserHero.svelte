<script>
    import {onMount} from "svelte"
    import Property from "../Data/Property";
    import {API, Client} from "../../config"
    import { Qr } from '@sveltevk/qr';
    import { Email, HackerNews, Reddit, LinkedIn, Pinterest, Telegram, Tumblr, Vk, WhatsApp, Xing, Facebook, Twitter, Line } from 'svelte-share-buttons-component';

	

    export let _id = false
    let user = {}
    let qrcode;
    $: url = `${Client}/view/${user._id}`;
	$: title = `Hi, I'am ${user.name? user.name: "Commercial Listing Pro User"}`;
	$: desc = 'User Commercial Listing Pro is not only a listing website for properties but also a new hub for Real Estate Developers and Realtors';
    
    onMount(async ()=>{
        let login = JSON.parse(localStorage.getItem("login"))

        if (_id) {

            await fetch(`http://127.0.0.1:5000/user/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${login}`
            },
            body: JSON.stringify({_id})
            })
            .then(res => res.json())
            .then(res => {

                if (res.status) {
                    user = res.data
                    
                    }
            })
            
        }else {
            

            await fetch(`http://127.0.0.1:5000/user/`, {
            method: "POST",
            headers: {Authorization: `Bearer ${login}`}
            })
            .then(res => res.json())
            .then(res => {

                if (res.status) {
                    user = res.data
                    
                    }
            })
        }
            

            

           
            	






})    
</script>

<div class="hero">
    <div class="container mt-5`">
        <div class="row">
          <div class="col-sm qr">

            <h3 class="title-d">Share Your Listings</h3>
            {#if user != {}}
            <Qr text={`${Client}/view/${user._id}`} 
                qrSize={256} isShowLogo 
                logoData="/img/favicon.png" 
                foregroundColor="#fff"
                isShowBackground={true}
                backgroundColor="#C1202C"
             />
        
            {/if}
            

          </div>

          <div class="col-sm data">

             <h2 class="title-d">Hi, {user.name}</h2>
            <div class="list-group">
                {#if user != {}}
                <li class="d-flex justify-content-between"> 
                    <strong>User ID:</strong>
                    <span>{user._id}</span>
                </li>

                <li class="d-flex justify-content-between"> 
                    <strong>Email:</strong> 
                    <span>{user.email}</span>
                </li>

                <li class="d-flex justify-content-between">
                    <strong>Phone:</strong>
                    <span>{user.phoneNumber}</span>
                </li>
                {/if}
            </div>
            <div class="social-container">
                <Email subject="{title}" body="{desc} {url}" />
                <HackerNews class="share-button" {title} {url} />
                <Reddit class="share-button" {title} {url} />
                <LinkedIn class="share-button" {url} />
                <Pinterest class="share-button" {url} media="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/200px-Svelte_Logo.svg.png" description={title} />
                <Telegram class="share-button" text={title} {url} />
                <Vk class="share-button" {title} {url} />
                <WhatsApp class="share-button" text="{title} {url}" />
                <Xing class="share-button" {title} {url} />
                <Facebook class="share-button" quote="{title}" {url} />
                <Twitter class="share-button" text="{title}" {url} hashtags="github,svelte" via="username" related="other,users" />
                <Line class="share-button" {url} />
            </div>
          </div>

        </div>
      </div>
</div>


<style lang="scss">
    .hero {
        min-height: 30vh;
        width: 100%;
        padding: 5vh 0;
        background-color: rgb(255, 235, 235);
        border-radius: 0 0 30px  30px;

        strong {
           color: red;
        }
        .social-container{

            margin-top: 20px;

          
        }

        .container {
            max-width:50%;
            margin: auto;
        }

        .qr {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .btn {
                margin-top: 10px;
            }
        }
        .data {

        }
    }
</style>