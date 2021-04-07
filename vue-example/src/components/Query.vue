<template>
    <section>
        <input @change="onChange" />
    </section>
</template>

<script>
export default {
    name: 'Query',
    data() {
        return {}
    },
    computed: {},
    methods: {
        onChange(e) {
            console.log(e)
            this.$emit('on-change', e.target.value)
        }
    },
    created() {}
}
</script>

<style lang="less" scoped></style>
