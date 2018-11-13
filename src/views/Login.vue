<template>
  <div class="login">
    <div class="container">
        <div class="section-title text-left title-ex1">
          <h2 class="title-text">Login</h2>
        </div>

        <form  class="register" v-on:submit.prevent="submit()" >
          <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
            <div class="row">
              <div class="form-group col-md-12">
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
              </div>
              <div class="form-group col-md-12">
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword" placeholder="Password">
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
          <!-- <p class="form-footer">Don’t have an Account? Sign up</p> -->

          <!-- icon in the input field -->
          <!-- <div class="form-group col-md-12 input-icon">
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
          </div> -->


     <!--  <form v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/choice");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>