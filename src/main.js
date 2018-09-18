import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import { routes } from './router/routes'

import './filters/dateFormat'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
