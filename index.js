


/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var ServicePage = {
  template: "#service-page",
  data: function() {
    return {
      
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var PricingPage = {
  template: "#pricing-page",
  data: function() {
    return {
      
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var PortfolioPage = {
  template: "#portfolio-page",
  data: function() {
    return {
      
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};




var router = new VueRouter({
  routes: [
  { path: "/", component: HomePage },
  { path: "/service", component: ServicePage },
  { path: "/price", component: PricingPage },
  { path: "/portfolio", component: PortfolioPage }

  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});

