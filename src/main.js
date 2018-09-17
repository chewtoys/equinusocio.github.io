import Vue from "vue";
import VueRouter from "vue-router";
import App from "./components/App.vue";
import { routes } from "./router/routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
