<template>
    <section></section>
</template>

<script>
import store from './store'
export default {
    name: 'vuex-demo',
    store: store,
    data() {
        return {}
    },
    computed: {},
    methods: {},
    created() {
        const userInfo=localStorage.getItem('user')
        if(userInfo){
            // 提交Mutation,更新用户信息
        }
    },
}
</script>

<style lang="less" scoped></style>
