<template>
    <section>
        {{ value }}
        <child @on-change="(msg) => (value = 'value:' + msg)"></child>
    </section>
</template>

<script>
import child from './child'
export default {
    components: {
        child,
    },
    name: 'parent',
    data() {
        return {
            value: '',
        }
    },
    computed: {},
    methods: {
        onChange(msg) {
            console.log(msg)
        },
    },
    created() {},
}
</script>

<style lang="less" scoped></style>
