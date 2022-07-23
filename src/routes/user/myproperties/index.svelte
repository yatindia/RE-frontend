<script>
      import {API} from "../../../config"
    import {protectedRoute} from "../../../components/functions"
    
    import {onMount} from "svelte"
    onMount(()=>protectedRoute())

    let token;
    let data = {}
    let properties=[]

    onMount(async ()=>{

token = JSON.parse(localStorage.getItem("login"))

await fetch(`${API}/user`, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Authorization": `<Bearer> ${token}`
    }
})
.then(res => res.json())
.then((res)=>{
    if (res.status) {
        data = res.data
        console.log(data);
    }
})

// firstname = ((data.name).split(" "))[0]
// lastname = ((data.name).split(" "))[1]
//singleuserproperty/user/:

await fetch(`${API}/singleuserproperty/user/${data._id}`, {
    method: "GET",
   
})
.then(res => res.json())
.then((res)=>{
    console.log(res);

    if (res.status) {
        properties = res.data
        console.log(properties);
    }
})


})
console.log(properties);
</script>

<div>
    <div class="containerr bg-light">
        <div class="property">
            <img src="/img/indexi.jpeg" class="img-fluid" alt="">
         <div class="prop-details">
            <h3>Tittle</h3>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi alias facnatus non fugiat.</h5>
            <h5>buyingOption <small>location </small> </h5>
            <div class="btnbox">
                <button class="btn btn-info w-70 mt-2 update">Update</button>
                <button class="btn btn-danger w-70 mt-2 delete">Delete</button>
            </div>
         </div>
      </div>
      <div class="property">
        <img src="/img/indexi.jpeg" class="img-fluid" alt="">
        <div class="prop-details">
           <h3>Tittle</h3>
           <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi alias facnatus non fugiat.</h5>
           <h5>buyingOption <small>location </small> </h5>
           <div class="btnbox">
               <button class="btn btn-info w-70 mt-2 update">Update</button>
               <button class="btn btn-danger w-70 mt-2 delete">Delete</button>
           </div>
        </div>
     </div>
     <div class="property">
        <img src="/img/indexi.jpeg" class="img-fluid" alt="">
        <div class="prop-details">
           <h3>Tittle</h3>
           <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi alias facnatus non fugiat.</h5>
           <h5>buyingOption <small>location </small> </h5>
           <div class="btnbox">
               <button class="btn btn-info w-70 mt-2 update">Update</button>
               <button class="btn btn-danger w-70 mt-2 delete">Delete</button>
           </div>
        </div>
     </div>
     <div class="property">
        <img src="/img/indexi.jpeg" class="img-fluid" alt="">
        <div class="prop-details">
           <h3>Tittle</h3>
           <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi alias facnatus non fugiat.</h5>
           <h5>buyingOption <small>location </small> </h5>
           <div class="btnbox">
               <button class="btn btn-info w-70 mt-2 update">Update</button>
               <button class="btn btn-danger w-70 mt-2 delete">Delete</button>
           </div>
        </div>
     </div>
     <div class="property">
         <img src="/img/indexi.jpeg" class="img-fluid" alt="">
         <div class="prop-details">
            <h3>Tittle</h3>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi alias facnatus non fugiat.</h5>
            <h5>buyingOption <small>location </small> </h5>
            <div class="btnbox">
                <button class="btn btn-info w-70 mt-2 update">Update</button>
                <button class="btn btn-danger w-70 mt-2 delete">Delete</button>
            </div>
         </div>
      </div>
       
          
    </div>
</div>

<style lang="scss">
    .containerr {
    width: 80%;
    margin: 3% auto;
    height: 500px;
    padding: 32px 0;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    overflow: scroll;
    border-radius: 12px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    .property {
        background-color: #fff;
        border: 1px solid rgb(190, 186, 186);
        border-radius: 8px;
        width: 90%;
        height: auto;
        display: flex;
        gap: 15px;
        padding: 16px;
        margin: 16px auto;
        
        .btnbox {
            display: flex;
            .update {
                margin-right: 20px;
            }
        }
    }
    }
    @media(max-width:1000px) {
    .containerr {
        width: 98%;
    }
   }
   @media(max-width:826px) {
    .containerr {
        width: 70%;
        .property {
            flex-direction: column;
        }
    }
   }
</style>