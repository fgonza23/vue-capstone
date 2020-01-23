<template>
  <div class="choice">
    <div class="container">
      <div class="section-title text-center title-ex1">
          <h2 class="title-text">Please make a choice</h2>
          <p class="description"></p>
      </div>
      <div id="ex-accordion" class="th-accordions" data-children=".item">
        <div class="item">
          <a data-toggle="collapse" class="collapse-bar" data-parent="#ex-accordion" href="#ex-accordion1" aria-expanded="true" aria-controls="ex-accordion1">
            <i class="fa fa-database" aria-hidden="true"></i> Which would you like to do?
          </a>
        </div>
        <div id="ex-accordion1" class="collapse in" role="tabpanel">
            <p class="">
              Would you like to donate or make a Request
            </p>
            <div class="row">
              <div class="col-md-4">
                <div class="info text-center">
                  <router-link to="/donation_requests">
                          <div class="icon icon-circle">
                            <i class="fa fa-star"></i>
                          </div>
                          <h5 class="info-title">Donate</h5>
                          <div class="description">
                            <p class="description"></p>
                          </div>
                  </router-link>
                </div>

                <div class="info text-center">
                  <router-link to="/request">
                          <div class="icon icon-circle">
                            <i class="fa fa-paper-plane"></i>
                          </div>
                          <h5 class="info-title">Request</h5>
                          <div class="description">
                            <p class="description"></p>
                          </div>
                  </router-link>
                </div>
              </div>
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
  methods: {},
  computed: {}
};
</script>
