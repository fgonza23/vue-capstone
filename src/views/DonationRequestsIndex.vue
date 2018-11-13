<template>
  
  <!--   <router-link tag= "button" id= "button" to=/donatation_requests/:id>
      <div class="row mt-5 pt-5">
        
          <div v-for="donation_request in donation_requests" class="col-lg-4 bg-gray-dark-3 border-md-0 border-bottom border-right border-gray-2" data-mh="mh-col-services">
              <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
                  <i class="icon-Chess text-base-color title-extra-large"></i>
                  <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">{{ donation_request.user }}</span>
                  <span class="text-white">{{ donation_request.date }}</span>
                  <span class="bg-base-color ml-lg-0 mt-3 mx-auto sep-line-thick"></span>
                  <p class="m-0 mt-3 text-gray text-medium">{{ donation_request.meal }}</p>

              </div>
   
          </div>

      </div> 
       </router-link> -->

     <section id="services" class="bg-gray-dark-2">
        <div class="container">
          <button class="btn btn-primary" @click="submit()">
          </button>

          
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h3 class="font-alt font-w-600 letter-spacing-2 title-extra-large text-uppercase text-black">Requests</h3>
                    <span class="bg-base-color mt-4 mx-auto sep-line-medium-thick-long"></span>
                </div>
                <!-- //.col-lg-8 -->
            </div>
            <!-- //.row -->
<!-- 
            <div class="divider divider-center divider-solid-dbl brd-primary w50 mx-auto my-5">
    <i class="fa fa-user divider-icon bg-primary text-white"></i>
  </div> -->
          
            <div class="row mt-5 pt-5">
                <button @click="deleteRequest(donation_request)" v-for="donation_request in donation_requests" class="col-lg-4 bg-gray-dark-3 border-md-0 border-bottom border-right border-gray-2" data-mh="mh-col-services">
                    <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
                        <i class="fa fa-user divider-icon bg-primary text-white"></i>
                        <!-- <button type="button" class="float-right btn btn-danger" data-toggle="modal" data-target="#exampleModal" v-on:click="setCurrentRecipe(recipe)">
                                Details
                              </button> -->
                        <span class="card d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-black"  style="width: 18rem;">{{ donation_request.user }}</span>
                        <span class="text-black">Date: {{ donation_request.date }}</span>
                        <span class="bg-base-color ml-lg-0 mt-3 mx-auto sep-line-thick"></span>
                        <p class="m-0 mt-3 text-black text-medium">{{ donation_request.meal }}</p>
                    </div>
                    <!-- //.px-lg-3 -->
                  </button>
                <!-- //.col-lg-4 -->
            </div>
            <!-- //.row -->
            <<!-- div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ currentdonation_request.user }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <ul>
                          <li v-for="date in currentDonationRequest.formatted.date">{{ date }}</li>
                        </ul>
                        <ol>
                          <li v-for="meal in currentDonationRequest.formatted.meal">{{ meal }}</li>
                        </ol>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div> -->
        </div>
                
        
      <!-- <div v-for= "donation_request in donation_requests">
        <h2>{{ donation_request }}</h2> -->
     <!--  <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
          <i class="icon-Chess text-base-color title-extra-large"></i>
          <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">{{ donation_requests }}</span>
      </div> -->
 
    </section>
  </div>


</template>

<style>
</style>

<script>

  var axios = require('axios');

export default {
  data: function() {
    return {
      donation_requests: []

    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/donation_requests")
    .then(response => {
      this.donation_requests = response.data
    });
  },
  methods: {
    submit: function() {
      axios
      .get("http://localhost:3000/api/open_box");
    }
  },
  computed: {}
};
</script>