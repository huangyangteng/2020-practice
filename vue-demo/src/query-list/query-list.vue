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
    computed: {},
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
        async getVideo(e) {
            let formdata = new FormData()
            formdata.append('file', e.target.files[0])
            formdata.append('type', 'curve')
            formdata.append(
                'info',
                JSON.stringify([
                    { from: 0, to: 7, speed: 8 },
                    { from: 7, to: 10, speed: 0.5 },
                ])
            )
            const res = await axios.request({
                url: 'http://10.4.6.144:12302/material/speedVideo',
                method: 'POST',
                data: formdata,
                responseType: 'blob',
            })
            this.src = URL.createObjectURL(res.data)
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
