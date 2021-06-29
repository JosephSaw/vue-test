import Vue from 'vue'
import Default from './Default.vue'
import App from './App.vue'
import About from "./About.vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Market',
    component: App,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Default),
}).$mount('#app')
