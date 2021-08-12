<template>
    <section>
        <!-- 查询列表组件  查询框    列表 -->
        <query @on-change="handleChange"></query>
        <list :list="list"></list>
    </section>
</template>

<script>
import query from './query'
import list from './list'
import axios from 'axios'

export default {
    name: 'query-list',
    components: {
        query,
        list,
    },
    data() {
        return {
            list: [],
        }
    },
    methods: {
        async getList(id = -1) {
            const res = await axios.request({
                method: 'get',
                url: 'http://111.229.14.189/gk-api/util/list',
                params: {
                    id: id,
                },
            })
            this.list = res.data
        },
        handleChange(id) {
            this.getList(id)
        },
    },
    created() {
        this.getList()
    },
}
</script>

<style lang="less" scoped></style>
