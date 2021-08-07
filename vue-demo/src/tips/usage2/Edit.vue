<template>
    <section></section>
</template>

<script>
import { generate, material, resource } from './controller/index'
console.log('generate, material, resource', generate, material, resource)
export default {
    name: 'Edit',
    mixins: [generate, material, resource],
    data() {
        return {}
    },
    computed: {},
    methods: {},
    created() {
        this.mixLoadResource()
    },
}
</script>

<style lang="less" scoped></style>
