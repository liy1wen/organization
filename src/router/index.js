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
            component: () =>
                import ('@/pages/index/index.vue'),
            children: [{
                    path: '/home',
                    name: 'home',
                    component: () =>
                        import ('@/pages/home/home.vue')
                },
                {
                    path: '/organization',
                    name: 'organization',
                    component: () =>
                        import ('@/pages/organization/organization.vue')
                }, {
                    path: '/user',
                    name: 'user',
                    component: () =>
                        import ('@/pages/user/user.vue')
                }, {
                    path: '/course',
                    name: 'course',
                    component: () =>
                        import ('@/pages/course/course.vue')
                }, {
                    path: '/review',
                    name: 'review',
                    component: () =>
                        import ('@/pages/review/review.vue')
                }
            ]
        },
        {
            path: '/',
            name: 'index',
            component: () =>
                import ('@/pages/index/index.vue')
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