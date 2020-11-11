import user from '@/api/user.js'
import {
    getCookie,
    setCookie,
    removeCookie
} from '@/utils/app'
const state = {
    token: getCookie('token') || '',
    email: getCookie('email') || ''
}
const getters = {
    getToken: () => state.token,
    getEmail: () => state.email
}
const mutations = {
    SET_TOKEN(state, value) {
        state.token = value
    },
    SET_EMAIL(state, value) {
        state.email = value
    }
}
const actions = {
    login({
        commit
    }, requestData) {
        return new Promise((resolve, reject) => {
            user.login(requestData).then(({
                status,
                data,
                config
            }) => {
                // console.log(res, '===');
                if (status == 200) {
                    commit('SET_EMAIL', JSON.parse(config.data).email)
                    commit('SET_TOKEN', data.token)
                    setCookie('token', data.token)
                    setCookie('email', JSON.parse(config.data).email)
                    resolve(data)
                }
            }).catch(err => reject(err))
        })
    },
    loginOut({
        commit
    }) {
        return new Promise((resolve, reject) => {
            commit('SET_EMAIL', '')
            commit('SET_TOKEN', '')
            removeCookie()
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