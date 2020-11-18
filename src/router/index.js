import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/pages/layout/index'

Vue.use(VueRouter)
const defaultRouter = new VueRouter({
    mode: 'hash',
    routes: [{
            path: '/login',
            name: 'login',
            meta: {
                name: "登录"
            },
            component: () =>
                import ('@/pages/login/index.vue')
        },
        {
            path: '/home',
            name: 'home',
            redirect: "index",
            component: layout,
            meta: {
                name: "首页"
            },
            children: [{
                path: '/index',
                name: 'index',
                component: () =>
                    import ('@/pages/home/index.vue')
            }]
        },
        {
            path: '/organization',
            name: 'organization',
            component: layout,
            meta: {
                name: "机构管理"
            },
            children: [{
                path: '/organizationIndex',
                name: 'organizationIndex',
                component: () =>
                    import ('@/pages/organization/index.vue')
            }]
        },
        {
            path: '/course',
            name: 'course',
            component: layout,
            meta: {
                name: "课程管理"
            },
            children: [{
                path: '/courseIndex',
                name: 'courseIndex',
                component: () =>
                    import ('@/pages/course/index.vue')
            }]
        },
        {
            path: '/review',
            name: 'review',
            component: layout,
            meta: {
                name: "评论管理"
            },
            children: [{
                path: '/reviewIndex',
                name: 'reviewIndex',
                component: () =>
                    import ('@/pages/review/index.vue')
            }]
        },
        {
            path: '/404',
            name: '404',
            component: layout,
            meta: {
                name: "404"
            },
            children: [{
                path: '/404page',
                name: '404page',
                component: () =>
                    import ('@/pages/404.vue')
            }]
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: "*",
            redirect: "/404page"
        }
    ]
})

export default defaultRouter

export const asyncRouter = [{
    path: '/user',
    name: 'user',
    component: layout,
    meta: {
        name: "用户管理",
        role: ['admin']
    },
    children: [{
        path: '/userIndex',
        name: 'userIndex',
        meta: {
            role: ['admin']
        },
        component: () =>
            import ('@/pages/user/index.vue')
    }]
}, ]