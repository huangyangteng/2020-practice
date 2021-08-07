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
        path: '/tip/mixin',
        label: 'mixin',
        component: () => import('../tips/usage2/Edit.vue'),
    },
    {
        path: '/parent-child',
        label: 'child传递使用箭头函数',
        component: () => import('../other/parent.vue'),
    },
    {
        path: '/canvas-drag',
        label: 'canvas-drag',
        component: () => import('../canvas-demo/canvas-drag.vue'),
    },
    {
        path: '/test-video',
        label: '判断视频能不能播放',
        component: () => import('../other/test-video.vue'),
    },
    {
        path: '/canvas-rule',
        label: 'canvas根据规则渲染',
        component: () => import('../canvas-demo/canvas-rule.vue'),
    },
    {
        path: '/canvas-animation',
        label: 'canvas animation image',
        component: () => import('../canvas-demo/animation/animate-image.vue'),
    },
    {
        path: '/canvas-animation-clock',
        label: 'canvas animation clock',
        component: () => import('../canvas-demo/animation/animate-clock.vue'),
    },
    {
        path: '/canvas-base',
        label: 'canvas基础',
        component: () => import('../canvas-demo/canvas-base.vue'),
    },
    {
        path: '/opacity-video',
        label: 'canvas视频背景',
        component: () => import('../canvas-demo/opacity-video.vue'),
    },

    {
        path: '/vuex-demo',
        label: 'vuex测试',
        component: () => import('../vuex-demo/vuex-demo.vue'),
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