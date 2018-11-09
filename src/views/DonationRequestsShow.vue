<template>
  <div class="donation-requests-show">
   <div class="container">
    <div v-for ="donation_request in donation_requests">
      <h2>{{ donation_request }}</h2>
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