import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import login from './modules/login';
import role from './modules/role';

export default new Vuex.Store({
    modules: {
        login,
        role
    }
});