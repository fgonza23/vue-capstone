<template>
  <div class="signup">
    <div class="container">
      <div class="section-title text-left title-ex1">
        <h2 class="title-text">Signup</h2>
      </div>

      <form  class="register" v-on:submit.prevent="submit()" >
        <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
          <div class="row">
            <div class="form-group col-md-12">
              <input v-model="name" type="text" class="form-control" placeholder="Name">
            </div>
            <div class="form-group col-md-12">
              <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
            </div>
            <div class="form-group col-md-12">
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword" placeholder="Password">
            </div>
            <div class="form-group col-md-12">
              <input v-model="passwordConfirmation" type="password" class="form-control" id="exampleInputPassword" placeholder="Password confirmation">
            </div>
          </div>
          <button type="submit" class="btn btn-default btn-primary btn-block">Log In</button>
          <div class="row">
            <div class="form-check col-md-6">
              <input id="checkbox-2" class="checkbox-custom form-check-input" name="checkbox-2" type="checkbox">
              <label for="checkbox-2" class="checkbox-custom-label form-check-label ">Remember me</label>
            </div>
            <div class="col-md-3 offset-md-3 text-right">
              <a href="" class="btn-link">Forgot password ?</a>
            </div>
          </div>

           <span class="or text-center">OR</span>
            <button type="submit" class="btn btn-default btn-facebook btn-block">Log in with Facebook</button>
            <button type="submit" class="btn btn-default btn-twitter btn-block">Log in with Twitter</button>
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
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/choice");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>