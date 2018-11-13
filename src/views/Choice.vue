<template>
  <div class="choice">
    <div class="container">
      <div>
        <div class="row">
          <div class="col-md-4">
            <router-link tag= "button" id="button" to="/donation_requests">
              <button class="btn btn-primary">Donate</button>
            </router-link>
          </div>
        </div>
      </div>
      <div>
        <div class="row">
          <div class="col-md-4">
            <router-link tag= "button" id="button" to="/request">
              <button class="btn btn-primary"> Request</button>
            </router-link>
           <!-- <a class="btn btn-primary" href="#" role="button">Request</a> -->
        </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
  import axios from "axios";

export default {
  data: function() {
    return {

    };
  },
  created: function() {},
  methods: {
  //   axios
  //   .(response => {
  //     this.$router.push("/donation_requests");
  //   })
  //   .catch(error => {
  //     this.errors = error.response.data.errors;
  //   })
  //   }
  },
  computed: {}
};
</script>