<template>
  <section id="services" class="bg-gray-dark-2">
    <div class="container">
      <div class="count-down">
        <div class="fun-text">
           <span class="counter"></span><span> {{donation_requests.length}}</span>
           <p>Request</p>
        </div>
      </div>
        <div class="section-title text-right title-ex1">
          <h2 class="title-text">Donation Requests</h2>
          <p class="description">Please choose the donation you would like to select</p>
        </div>
          <div class="row mt-5 pt-5">
            <button v-for="donation_request in donation_requests" @click="submit(donation_request)" class= "anim_item animated col-lg-4 bg-gray-dark-3 border-md-0 border-bottom border-right border-gray-2" data-mh="mh-col-services">
              <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
                <i class="fa fa-heart  divider-icon bg-primary text-white"></i>
                  <span class="card d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-black"  style="width: 18rem;">{{ donation_request.user }}</span>
                  <span class="text-black">Date: {{ donation_request.date }}</span>
                  <span class="bg-base-color ml-lg-0 mt-3 mx-auto sep-line-thick"></span>
                    <p class="m-0 mt-3 text-black text-medium">{{ donation_request.meal }}</p>
              </div>
                    <!-- //.px-lg-3 -->
            </button>
                <!-- //.col-lg-4 -->
          </div>
        </div>
    </div>
  </section>
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
    submit: function(inputDonationRequest) {
      axios.delete("http://localhost:3000/api/donation_requests/" + inputDonationRequest.id)
        .then(response => {
          axios.get("http://localhost:3000/api/open_box")
          .then(response2 => {
            axios
            .get("http://localhost:3000/api/donation_requests")
            .then(response3 => {
              this.donation_requests = response3.data
            });
          })
        })
         .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>