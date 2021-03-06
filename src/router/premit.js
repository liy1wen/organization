import router from './index'
import store from '../store/index'
import {
    getCookie,
    setCookie,
    removeCookie
} from '@/utils/app'

const whiteList = ['/login', '/404'] //路由白名单，无论是否登录都可以访问

// 全局路由守卫判断
router.beforeEach((to, from, next) => {
    if (getCookie('token')) {
        if (to.path === '/login') { // 登录状态下，访问login页面，清空登录信息，跳到登录页面，重新登录
            store.commit("login/SET_EMAIL", '')
            store.commit("login/SET_TOKEN", '')
            removeCookie()
            next()
        } else { //
            if (store.getters['role/role'] === '') { // 登录状态下,用户没有角色，需要重新拿到用户角色并生成路由
                store.dispatch('role/getRole').then(res => {
                    let role = res;
                    store.commit("role/SET_ROLE", role) //存储角色
                    store.dispatch('permission/createRouter', role).then(() => {
                        let addRouters = store.getters['route/addRouters'];
                        let allRouters = store.getters['route/allRouters'];
                        router.options.routes = allRouters; // 路由更新
                        router.addRoutes(addRouters) // 添加动态路由
                        next({...to, replace: true })
                            // es6扩展运算符，防止内容发生变化的情况
                            // 不被记录历史记录
                    })
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