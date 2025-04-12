import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/views/Products.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/products', component: Products },
    { path: '*', component: { template: '<div>404 - Página não encontrada</div>' } }
  ]
})
