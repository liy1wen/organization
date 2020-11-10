import router from './index'
import store from '../store/index'
import { getLocalStorage } from '@/utils/auth.js'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    if (getLocalStorage('token')) {
        if (to.path === '/login') {

        }
    } else {

    }
})