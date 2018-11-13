<template>
  <div class="donation-requests-show">
   <div class="container">
    <h1>{{ donation_request.date }}</h1>
    <head>{{ donation_request.meal }}</head>
    <div v-for ="donation_request in donation_requests">
    </div>
   </div>
  </div>
</template>

<style>
</style>

<script>

  var axios = require('axios')

export default {
  data: function() {
    return {
     donation_request: {
      formated: {
        date: [],
        meal: [],
        family_size: []      
      }
     }
    };
  },
  created: function() {
    axios
    .get("/api/donation_requests/" + this.$route.params.id)
    .then(response => {
      this.donation_request = response.data;

    });
  },
  methods: {},
  computed: {}
};
</script>