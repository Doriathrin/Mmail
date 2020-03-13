import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Login/Login'
import Home from '@/pages/home/Home'
import Commodity from '@/pages/home/Commodity/Commodity.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{title:'登录系统'}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/commodity',
          name: 'Commodity',
          component: Commodity
        }
      ]
    },
  ]
})
