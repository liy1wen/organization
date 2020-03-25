import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { 
            path: '/index',
            name: 'index',
            component: () => import ('@/pages/index.vue'),
            children:[
                {
                    path: '/home',
                    name: 'home',
                    component: () => import ('@/pages/home.vue')
                },
                {
                    path: '/addAccount',
                    name: 'addAccount',
                    component: () => import ('@/pages/addAccount.vue')
                },
                {
                    path: '/accountList',
                    name: 'accountList',
                    component: () => import ('@/pages/accountList.vue')
                },
                {
                    path: '/editAccount',
                    name: 'editAccount',
                    component: () => import ('@/pages/editAccount.vue')
                },
                {
                    path: '/deleteAccount',
                    name: 'deleteAccount',
                    component: () => import ('@/pages/deleteAccount.vue')
                }
            ]
        },
        {
            path: '/',
            name: 'login',
            component: () => import ('@/pages/login') 
        },
        {
            path: '/fail',
            name: 'fail',
            component: () => import ('@/pages/fail.vue')
        },
    ]
})
router.beforeEach((to,from,next) => {
    if(to.path !== '/'){
        const token = window.localStorage.getItem('token');
        if(!token){
            next('/')
        }else{
            next()
        }
    }else{
        next()
    }
})

export default router
