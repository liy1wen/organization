import user from '@/api/user.js'
import {
    setLocalStorage,
    getLocalStorage
} from '@/utils/auth'
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
                    setLocalStorage('token', data.token)
                    resolve(data)
                }
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