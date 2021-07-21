<template>
    <section>
        {{ testList }}<br />
        <Button @click="add">添加</Button>
        <Button @click="remove">删除</Button>
    </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'vuex-demo',
    data() {
        return {
            status: 'pending',
        }
    },
    computed: {
        ...mapState(['list']),
        testList() {
            console.log('list changed')
            return this.list.map((item) => item.id)
        },
    },
    watch: {
        list(n, o) {
            console.log(n.length, o.length)
        },
    },
    methods: {
        add() {
            this.$store.commit('add')
        },
        remove() {
            this.$store.commit('remove')
        },
    },
    created() {},
}
</script>

<style lang="less" scoped></style>
