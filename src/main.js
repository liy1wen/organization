import Vue from 'vue'
import App from './App.vue'

import store from './store/index' //引入vuex
import router from './router/index' //引入路由

import '@/assets/font/iconfont.css' //引入图标

import api from './api/index' //引入api接口

// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德的key
    key: '5a2a20f1069e081d6b79afc9c855d8ae',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
});

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