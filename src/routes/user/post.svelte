<script>
  import { API } from "../../config";
  import { protectedRoute } from "../../components/functions";

  import { onMount } from "svelte";
  onMount(() => protectedRoute());

  

  let token;
  let data = {};
  let propertydetails = {
    propertyBuyingOption: "",
    tittle: "",
    description: "",
    location: "",
    address: "",
    user_id: ""
  };

  onMount(async () => {
    token = JSON.parse(localStorage.getItem("login"));

    await fetch(`${API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `<Bearer> ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          data = res.data;
          propertydetails.user_id = data._id;
          console.log(data);
        }
      });

    // firstname = ((data.name).split(" "))[0]
    // lastname = ((data.name).split(" "))[1]
    //singleuserproperty/user/:

    
  });

  const sendData = async () => {
    await fetch(`${API}/property/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(propertydetails),
     
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.status) {
          propertiess = res.data;
          console.log(res.data);
        }
      });
  }

  const handler = (e) => {
    // console.log(e.target);
    // let name = e.target;
    let value = e.target.value;
    propertydetails = {
      ...propertydetails,
      [e.target.name]: value,
    };
    console.log(propertydetails);
  };
</script>

<div>
  <div class="containerr">
    <h2>Add new Property</h2>

    <div class="formbox">
      <form on:submit|preventDefault = {sendData}>
        <!-- 2 column grid layout with text inputs for the first and last names -->
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <label class="form-label" for="form6Example1">You want to?</label>

              <!-- <input type="text" id="form6Example1" class="form-control" /> -->
              <select
                class="form-select"
                on:change={handler}
                name="propertyBuyingOption"
              >
                <option>Sell</option>
                <option>Lease</option>
                <option>Rent</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <label class="form-label" for="form6Example2">Location</label>

              <input
                type="text"
                id="form6Example2"
                class="form-control"
                on:change={handler}
                name="location"
              />
            </div>
          </div>
        </div>

        <!-- Text input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="form6Example3">Property Tittle</label>

          <input
            type="text"
            id="form6Example3"
            class="form-control"
            on:change={handler}
            name="tittle"
          />
        </div>

        <!-- Text input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="form6Example4">Address</label>

          <input
            type="text"
            id="form6Example4"
            class="form-control"
            on:change={handler}
            name="address"
          />
        </div>

     
        <div class="form-outline mb-4">
          <label class="form-label" for="form6Example7"
            >Property discription</label
          >

          <textarea
            class="form-control"
            id="form6Example7"
            rows="4"
            on:change={handler}
            name="description"
          />
        </div>

    
        <button type="submit" class="btn btn-danger btn-block mb-4 w-100"
          >Submit</button
        >
      </form>
    </div>
  </div>
</div>



<style lang="scss">
  .containerr {
    width: 67%;
    margin: 3% auto;
    background-color: aliceblue;
    // height: 400px;
    padding: 32px 0;
    // display: flex;
    // justify-content: space-around;
    border-radius: 12px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;


    h2 {
      text-align: center;
      margin-bottom: 32px;
    }

    .formbox {
      width: 75%;
      margin: auto;
    }
  }
</style>
