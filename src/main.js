import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import { routes } from './router/routes'

/** Custom filters */
import './filters/dateFormat'

/** Plugins */
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title(to)
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
