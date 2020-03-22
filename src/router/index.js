import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Login/Login'
import Home from '@/pages/home/Home'
import Commodity from '@/pages/home/Commodity/Commodity.vue'
import DetailView from "@/pages/home/DetailView/DetailView.vue";
import Management from "@/pages/home/management/Management.vue";
import Addthegoods from '@/pages/home/Addthegoods/Addthegoods.vue';
import Look from '@/pages/home/look/look.vue';
import Echarts from '@/pages/home/echarts/echarts.vue'
import Mapjs from '@/pages/home/Mapjs/mapjs.vue'
import Order from '@/pages/home/order/order.vue'
import Category from '@/pages/home/category/category.vue'
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
        },
        {
          path: '/echarts',
          name: 'Echarts',
          component: Echarts,
          meta: {
            title: '系统首页/统计图'
          }
        },
        {
          path: '/mapjs',
          name: 'Mapjs',
          component: Mapjs,
          meta: {
            title: '系统首页/百度地图'
          }
        },
        {
          path: '/order',
          name: 'Order',
          component: Order,
          meta: {
            title: '系统首页/订单管理'
          }
        },
        {
          path: '/category',
          name: 'Category',
          component: Category,
          meta: {
            title: '系统首页/品类管理'
          }
        }
      ],
      redirect: '/commodity'
    },
  ]
})
