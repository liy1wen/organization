import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        info: JSON.parse(localStorage.getItem('userinfo'))
    },
    mutations: {
        changeInfo(state,info){
            state.info = info
        }
    },
    actions: {
        changeInfo(context,info){
            localStorage.setItem('userinfo',JSON.stringify(info))
            context.commit('changeInfo',info)
        }
    }
})
export default store