<script>
  import { API } from "../../config";
  import { protectedRoute } from "../../components/functions";
  import Form from "react-bootstrap/Form";

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

        <!-- Email input -->
        <!-- <div class="form-outline mb-4">
              <input type="email" id="form6Example5" class="form-control" />
              <label class="form-label" for="form6Example5">Email</label>
            </div> -->

        <!-- Number input -->
        <!-- <div class="form-outline mb-4">
              <input type="number" id="form6Example6" class="form-control" />
              <label class="form-label" for="form6Example6">Phone</label>
            </div> -->

        <!-- Message input -->
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

        <!-- <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile">
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div> -->


        <!-- <div class="custom-file mb-4">
          <input
            type="file"
            class="custom-file-input"
            id="customInput"
            required
          />
          <label class="custom-file-label" for="customInput"
            >Choose file...</label
          >
        </div> -->



        <!-- Checkbox -->
        <!-- <div class="form-check d-flex justify-content-center mb-4">
              <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
              <label class="form-check-label" for="form6Example8"> Create an account? </label>
            </div> -->

        <!-- Submit button -->
        <button type="submit" class="btn btn-danger btn-block mb-4 w-100"
          >Submit</button
        >
      </form>
    </div>
  </div>
</div>

<!-- <div class="container-fluid px-1 py-5 mx-auto">
  <div class="row d-flex justify-content-center">
      <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
         
          <div class="card p-4">
              <h5 class="text-center mb-4">Powering world-class companies</h5>
              <form class="form-card" onsubmit="event.preventDefault()">
                  <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">First name<span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)"> </div>
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Last name<span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)"> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Business email<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)"> </div>
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Phone number<span class="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Job title<span class="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" onblur="validate(5)"> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                      <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">What would you be using Flinks for?<span class="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"> </div>
                  </div>
                  <div class="row justify-content-end">
                      <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Request a demo</button> </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
</div> -->

<style lang="scss">
  .containerr {
    width: 67%;
    margin: 3% auto;
    background-color: rgb(176, 253, 233);
    // height: 400px;
    padding: 32px 0;
    // display: flex;
    // justify-content: space-around;
    border-radius: 12px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

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
