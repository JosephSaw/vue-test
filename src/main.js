import Vue from 'vue'
import Default from './Default.vue'
import App from './App.vue'
import About from "./About.vue"
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

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

const store = new Vuex.Store({
  state: { test: 'hello world' },
  mutations: {},
  actions: {},
  modules: {},
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Default),
}).$mount('#app')
