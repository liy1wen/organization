import router from './index'
import store from '../store/index'
import {
    getCookie,
    setCookie,
    removeCookie
} from '@/utils/app'

const whiteList = ['/index'] //路由白名单，无论是否登录都可以访问

// 全局路由守卫判断
router.beforeEach((to, from, next) => {
    if (getCookie('token')) {
        if (to.path === '/login') { // 登录状态下，访问login页面，清空登录信息，跳到登录页面，重新登录
            commit('SET_EMAIL', '')
            commit('SET_TOKEN', '')
            removeCookie()
            next()
        } else { //
            if (store.getters['role/role'] === '') { // 登录状态下,用户没有角色，需要重新拿到用户角色并生成路由
                store.dispatch('role/getRole').then(res => {

                })
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 没有登录，但是在路由白名单，可以访问
            next()
        } else { // 没有登录同时不再路由白名单，定向到登录页面
            next('/login')
        }
    }
})