import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Login/Login'
import Home from '../pages/home/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
