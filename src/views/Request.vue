<template>
    <div class="request">
      <div class="container">
        <form v-on:submit.prevent="submit()">
          <h1>Request</h1>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="form-group">
            <label>Name:</label> 
            <input type="text" class="form-control" v-model="name">
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label>Date:</label>
            <input type="date" class="form-control" v-model="date">
          </div>
          <div class="form-group">
            <label>Family Size</label>
            <input type="input-group-text" class="form-control" v-model="family_size">
          </div>
          <!-- <div class="form-group">
            <label>Meal:</label>
            <input type="integer" class="form-control" v-model="meal">
          </div> -->
          <div v-model="meal">
            <div class="form-check ">
              <input id="radio-3" class="radio-custom form-check-input" name="radio-3" type="radio" checked>
              <label for="radio-3" class="radio-custom-label form-check-label">Breakfast</label>
            </div>
            <div class="form-check ">
              <input id="radio-3" class="radio-custom form-check-input" name="radio-3" type="radio" checked>
              <label for="radio-3" class="radio-custom-label form-check-label">Lunch</label>
            </div>
            <div class="form-check ">
              <input id="radio-3" class="radio-custom form-check-input" name="radio-3" type="radio" checked>
              <label for="radio-3" class="radio-custom-label form-check-label">Dinner</label>
            </div>
            </div>
          <div>
          <input type="submit" class="btn btn-primary" value="Submit">
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      date: "",
      family_size: "",
      meal: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        date: this.date,
        family_size: this.family_size,
        meal: this.meal
      };
      axios
        .post("http://localhost:3000/api/donation_requests", params)
        .then(response => {
          this.$router.push("/donation_requests");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>