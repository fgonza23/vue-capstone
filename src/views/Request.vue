<template>
    <div class="request">
      <div class="container">
         <div class="section-title text-left title-ex1">
              <h2 class="title-text">Requests</h2>
              <p class="description">Please fill out info</p>
            </div>
        <form v-on:submit.prevent="submit()">
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
          <div>
            <div class="form-check ">
              <input class="radio-custom form-check-input" v-model="meal" name="meal" value="breakfast" type="radio">
              <label for="radio-3" class="radio-custom-label form-check-label">Breakfast</label>
            </div>
            <div class="form-check ">
              <input class="radio-custom form-check-input" v-model="meal" name="meal" value="lunch" type="radio">
              <label for="radio-3" class="radio-custom-label form-check-label">Lunch</label>
            </div>
            <div class="form-check ">
              <input class="radio-custom form-check-input" v-model="meal" name="meal" value="dinner" type="radio" checked>
              <label for="radio-3" class="radio-custom-label form-check-label">Dinner</label>
            </div>
            </div>
          <div>
          <input @click="submit()" type="submit" class="btn btn-primary" value="Submit">
          </div>
        </form>
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
      axios.all
        axios.post("http://localhost:3000/api/donation_requests", params)
        .then(response => {
          axios.get("http://localhost:3000/api/close_box")
          .then(response2 => {
            this.$router.push("/home");
          })
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>