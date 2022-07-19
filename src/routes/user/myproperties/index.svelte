<script>
      import {API} from "../../../config"
    import {protectedRoute} from "../../../components/functions"
    
    import {onMount} from "svelte"
    onMount(()=>protectedRoute())

    let token;
    let data = {}
    let properties;

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
        console.log(res.data);
    }
})


})
console.log(properties);
</script>

<div>
    <div class="containerr">
        
          <div class="property">
             <img src="/img/city.png" width="200px" height="180px" alt="">
             <div class="prop-details">
                <h3>Tittle</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi alias facnatus non fugiat.</h5>
                <h5>buying option <small>location </small> </h5>
                <div class="btnbox">
                    <button class="btn btn-dark w-70 mt-2 update">Update</button>
                    <button class="btn btn-danger w-70 mt-2 delete">Delete</button>
                </div>
             </div>
          </div>
    </div>
</div>

<style lang="scss">
    .containerr {
    width: 67%;
    margin: 3% auto;
    background-color: rgb(176, 253, 233);
    height: 400px;
    padding: 32px 0;
    display: flex;
    justify-content: space-around;
    border-radius: 12px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .property {
        border: 1px solid rgb(190, 186, 186);
        border-radius: 8px;
        width: 90%;
        height: auto;
        margin: 0 auto;
        display: flex;
        height: 220px;
        padding: 16px;
        .prop-details {
            margin-left: 16px;
        }
        .btnbox {
            display: flex;
            .update {
                margin-right: 20px;
            }
        }
    }
    }
</style>