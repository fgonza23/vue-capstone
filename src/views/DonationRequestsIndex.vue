<template>
  <div class="donation-requests-index">
      <div class="row mt-5 pt-5">
          <div v-for="donation_request in donation_requests" class="col-lg-4 bg-gray-dark-3 border-md-0 border-bottom border-right border-gray-2" data-mh="mh-col-services">
              <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
                  <i class="icon-Chess text-base-color title-extra-large"></i>
                  <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">{{ donation_request.user }}</span>
                  <span class="text-white">{{ donation_request.date }}</span>
                  <span class="bg-base-color ml-lg-0 mt-3 mx-auto sep-line-thick"></span>
                  <p class="m-0 mt-3 text-gray text-medium">{{ donation_request.meal }}</p>
              </div>
              <!-- //.px-lg-3 -->
          </div>
          <!-- //.col-lg-4 -->
      </div> 
                <!-- //.row -->
        
      <!-- <div v-for= "donation_request in donation_requests">
        <h2>{{ donation_request }}</h2> -->
     <!--  <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
          <i class="icon-Chess text-base-color title-extra-large"></i>
          <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">{{ donation_requests }}</span>
      </div> -->
 
    </div>
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
  methods: {},
  computed: {}
};
</script>