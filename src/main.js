// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource  from 'vue-resource'
import {mapState}   from 'vuex'

import router from './assets/js/router'
import store        from './assets/js/store'
import * as filters from './assets/js/filters'
import GlobalMethods from './assets/js/globalmethods/GlobalMethods'

import App from './App'

Vue.use(VueResource)
Vue.use(ElementUI)

//全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
//全局方法
Vue.use(GlobalMethods)


// Vue.directive('footer', {
//   bind: function (el, binding, vnode) {
//     console.log(binding.value == "/index")
//     if('/index' == binding.value || '/' == binding.value){
//       el.style.position = "relative";
//       el.style.bottom = "-15px";
//     }else{
//       el.style.position = "fixed";
//       el.style.bottom = "0px";
//     }
//   }
// })
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app')

