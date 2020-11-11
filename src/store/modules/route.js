import user from '@/api/user.js'
import { defaultRouter, asyncRouter } from '@/router/index'

/*
 * role 用户角色
 * router 路由项
 * 路由meta里面的角色能匹配到用户的角色，表示用户可以访问该路由
 */
function hasPermission(role, router) {
    if (router.meta && router.meta.role) {
        return router.mera.role.includes(role)
    }
}
const state = {
    allRouters: defaultRouter, //所有路由
    addRouters: [] // 根据角色动态生成的路由
}
const getters = {
    allRouters: (state) => state.allRouters,
    addRouters: (state) => state.addRouters,
}
const mutations = {
    SET_ROUTER(state, val) {
        state.addRouters = val;
        state.allRouters = defaultRouter.contact(val)
    }
}
const actions = {
    createRouter({ commit }, data) { //data为用户角色
        return new Promise((resolve, reject) => {
            let role = data;
            let addRouters = [];
            // 如果用户为管理员，不需要去匹配动态路由 
            if (role == 'admin') {
                addRouters = asyncRouter;
            } else { //普通用户，则需要根据用户角色和路由meta里面的role去匹配。这里只涉及到了二级路由的情况，如果系统有三级及多级路由，需要使用递归去判别
                addRouters = addRouters.filter(item => {
                    if (hasPermission(role, item)) {
                        if (item.children && item.children.length > 0) {
                            item.children = item.children.filter(child_item => hasPermission(role, child_item))
                            return item
                        }
                        return item;
                    }
                })
            }
            // 更新路由
            commit('SET_ROUTER', addRouters);
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};