import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        label: '首页',
        hide: true,
        redirect: '/video-timeline',
    },
    {
        path: '/vuex-demo',
        label: 'vuex测试',
        component: () => import('../vuex-demo/vuex-demo.vue'),
    },
    {
        path: '/opacity-video',
        label: 'canvas视频背景',
        component: () => import('../canvas-video/opacity-video.vue'),
    },
    {
        path: '/base',
        component: () => import('../drag-demo/drag-base.vue'),
        label: '拖拽到画布',
    },
    {
        path: '/move',
        component: () => import('../drag-demo/move-base.vue'),
        label: '拖拽移动元素',
    },
    {
        path: '/premise',
        component: () => import('../drag-demo/premise.vue'),
        label: '预制知识',
    },
    {
        path: '/video-timeline',
        component: () => import('../video-edit/video-timeline-demo.vue'),
        label: 'canvas时间刻度',
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
