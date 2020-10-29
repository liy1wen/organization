import user from '@/api/user.js'
import { setLocalStorage, getLocalStorage } from '@/utils/auth'
const state = {
    token: getLocalStorage('token'),
    email: ''
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
    login({ commit }, requestData) {
        return new Promise((resolve, reject) => {
            user.login(requestData).then(response => {
                // console.log(response, '===');
                commit('SET_EMAIL', requestData.email)
                commit('SET_TOKEN', response.data.token)
                setLocalStorage('token', response.data.token)
                resolve(response)
            }).catch(err => reject(err))
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