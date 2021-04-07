<template>
    <section>
        <h1>vue组件</h1>
        <button @click="handleClick">{{ status }}</button>
    </section>
</template>

<script>
export default {
    name: 'Example',
    props: {
        name: String,
        propA: String
    },
    data() {
        return {
            status: 'pause'
        }
    },
    computed: {},
    methods: {
        handleClick() {
            if (this.status == 'pause') {
                this.status = 'play'
            } else {
                this.status = 'pause'
            }
        }
    },
    created() {},
    mounted() {},
    beforeDestroy() {}
}
</script>

<style lang="less" scoped></style>
