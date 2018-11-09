import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';

import DonationRequestsIndex from './views/DonationRequestsIndex.vue';
import DonationRequestsShow from './views/DonationRequestsShow.vue';


import Choice from './views/Choice.vue';

import Request from './views/Request';

import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";







Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/request',
      name: 'request',
      component: Request
    },

    {
      path: '/choice',
      name: 'choice',
      component: Choice
    },


    {
      path: '/donation_requests',
      name: 'donationRequests',
      component: DonationRequestsIndex
    },

    {
      path: '/donation_requests/:id',
      name: 'donationrequestShow',
      component: DonationRequestsShow

    },
    { 
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: './views/About.vue'
    // },
    { 
      path: "/signup",
      name: "signup",
      component: Signup
    },
    { 
      path: "/login", 
      name: "login", 
      component: Login 
    },
    { 
      path: "/logout", 
      name: "logout", 
      component: Logout 
    }


  ]
})
