<template>
  <div class="home">
    <h1>FOODDRIVE</h1>

    <dir>
      <div class="info text-center">
                  <div class="icon icon-circle">
                    <i class="icon-pencil"></i>
                  </div>
                  <h5 class="info-title">UI/UX Design</h5>
                  <div class="description">
                    <p class="description"></p>
                  </div>
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
