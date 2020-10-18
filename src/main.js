import Vue from 'vue'
import App from './App.vue'

import store from './store' //引入vuex
import router from './router' //引入路由

import '@/assets/font/iconfont.css' //引入图标
import '@/assets/css/index.scss' //引入全局样式

import api from './api/index' //引入api接口

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')