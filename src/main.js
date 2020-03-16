// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import vueResource from 'vue-resource'
import MyPlugin from "@/MyPlugin";
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

// 使用钩子函数对路由进行权限跳转   总共有7个beforeResolve beforeEach afterEach 全局钩子有3个 组件内部3个
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | HappyMmail后端管理系统` 
  const role = localStorage.getItem('admin');
  // 当我们没有登录状态信息，我们给他转到login
  if (!role && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) { //保留 如果有权限页面 超级管理员 一般管理员 一般用户 客户
    // 判断权限
    role==='admin'?next():next('/403')
  } else {
    // 副文本编辑器 IE10才能用  简单判断IE10及一下浏览器不能进入副文本编辑器 这个组件不兼容
    if (navigator.userAgent.indexOf('MISE') >-1 && to.path==='/edit') {
      alert('副文本编辑器组件不兼容IE10及以下浏览器')
    } else {
      next();
    }
  }
})

Vue.use(MyPlugin)
Vue.use(ElementUI)
Vue.use(vueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
