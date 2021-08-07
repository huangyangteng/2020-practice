<template>
    <section @click="$emit('on-change', msg)">{{ msg }}</section>
</template>

<script>
export default {
    name: 'child',
    data() {
        return {
            msg: 'hello',
        }
    },
    computed: {},
    methods: {},
    created() {},
}
</script>

<style lang="less" scoped></style>
