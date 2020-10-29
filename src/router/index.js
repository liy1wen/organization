import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    getLocalStorage
} from '@/utils/auth'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [{
            path: '/index',
            name: 'index',
            component: () => import('@/pages/index/index.vue'),
            children: [{
                    path: '/home',
                    name: 'home',
                    component: () => import('@/pages/home/home.vue')
                },
                {
                    path: '/userList',
                    name: 'userList',
                    component: () => import('@/pages/userList/userList.vue')
                },
            ]
        },
        {
            path: '/',
            name: 'login',
            component: () => import('@/pages/login/login.vue')
        },
        {
            path: '/login',
            redirect: '/'
        },
    ]
})
router.beforeEach((to, from, next) => {
    if (to.path !== '/') {
        const token = getLocalStorage('token');
        if (!token) {
            next('/')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router