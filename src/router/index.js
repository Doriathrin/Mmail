import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Login/Login'
import Home from '@/pages/home/Home'
import Commodity from '@/pages/home/Commodity/Commodity.vue'
import DetailView from "@/pages/home/DetailView/DetailView.vue";
import Management from "@/pages/home/management/Management.vue";
import Addthegoods from '@/pages/home/Addthegoods/Addthegoods.vue';
import Look from '../pages/home/look/look.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
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
        },
        {
          path: '/detailView',
          name: 'DetailView',
          component: DetailView,
          meta: {
            title:'系统首页/主体部分'
          }
        },
        {
          path: '/management',
          name: 'Management',
          component: Management,
          meta: {
            title: '系统首页/商品管理'
          }
        },
        {
          path: '/addthegoods',
          name: 'Addthegoods',
          component: Addthegoods,
          meta: {
            title: '系统首页/添加商品'
          }
        },
        {
          path: '/look',
          name: 'Look',
          component: Look,
          meta: {
            title: '系统首页/查看商品'
          }
        }
      ],
      redirect: '/commodity'
    },
  ]
})
