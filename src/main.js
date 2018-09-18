import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import { routes } from './router/routes'
import store from './store'
import Meta from 'vue-meta'

/** Custom filters */
import './filters/dateFormat'

/** Plugins */
Vue.use(VueRouter)
Vue.use(Meta)

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
