<template>
    <section>
        <input
            placeholder="输入id"
            style="padding: 12px; font-size: 40px"
            v-model="id"
            @input="handleChange"
        />
    </section>
</template>

<script>
export default {
    name: 'Query',
    data() {
        return {
            id: '',
        }
    },
    computed: {},
    methods: {
        handleChange() {
            //向父组件发送数据
            this.$emit('on-change', this.id)
        },
    },
    created() {},
}
</script>

<style lang="less" scoped></style>
