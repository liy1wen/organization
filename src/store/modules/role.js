import user from '@/api/user.js'
import {
    getCookie,
    setCookie,
    removeCookie
} from '@/utils/app'

const state = {
    role: ''
}
const getters = {
    role: (state) => state.role
}
const mutations = {
    SET_ROLE(state, val) {
        state.role = val;
    }
}
const actions = {
    getRole({ commit }) {
        return new Promise((resolve, reject) => {
            user.getinfo().then(res => {
                commit.SET_ROLE(res.data.role)
                resolve()
            })
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