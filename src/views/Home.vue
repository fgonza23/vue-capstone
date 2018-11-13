<template>
  <div class="home">
    <div class="section-title text-center title-ex1">
    <h2 class="title-text">FOODDRIVE</h2>
  </div>


    <dir class>
      <div class="info text-center">
          <router-link to="/signup">
                  <div class="icon icon-circle">
                    <i class="fa fa-user"></i>
                  </div>
                  <h5 class="info-title">Signup</h5>
                  <div class="description">
                    <p class="description"></p>
                  </div>
          </router-link>
      </div> 

      <div class="info text-center">
          <router-link to="/login">
                  <div class="icon icon-circle">
                    <i class="fa fa-lock"></i>
                  </div>
                  <h5 class="info-title">Login</h5>
                  <div class="description">
                    <p class="description"></p>
                  </div>
          </router-link>
      </div>     
    </dir>


  </div>
</template>

<style>
</style>

<script>
  var axios = require('axios');

export default {
  data: function() {
    return {
      user: [],
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/user")
    .then(function(response) {
      this.user = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>
