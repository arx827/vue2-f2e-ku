import Vue from "vue";
import VueRouter from "vue-router";

import App from "./components/App.vue";
import routes from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import {  } from '@fortawesome/free-brands-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
