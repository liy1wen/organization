import user from '@/api/user.js'
const state = {
    token: '',
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
    login(context, requestData) {
        return new Promise((resolve, reject) => {
            user.login(requestData).then(response => {
                // console.log(commit, '===');
                context.commit('SET_EMAIL', requestData.email)
                context.commit('SET_TOKEN', response.data.token)
                window.localStorage.setItem('token', response.data.token)
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