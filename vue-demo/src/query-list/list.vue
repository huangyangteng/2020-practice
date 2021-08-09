<template>
    <section>
        <section v-if="list.length == 0">暂无数据</section>
        <div style="margin-top: 10px" v-for="item in list" :key="item.name">
            ID：{{ item.id }} 姓名：{{ item.name }} 年龄：{{ item.age }}
        </div>
    </section>
</template>

<script>
export default {
    name: 'List',
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {}
    },
    computed: {
        noData() {
            return this.list.length == 0
        },
    },
    methods: {},
    created() {},
}
</script>

<style lang="less" scoped></style>
