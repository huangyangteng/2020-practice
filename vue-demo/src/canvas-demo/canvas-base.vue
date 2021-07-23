<template>
    <section>
        {{ pos }}
        <canvas
            @mousemove="onMousemove"
            ref="canvas"
            width="800"
            height="600"
            class="canvas"
        ></canvas>
    </section>
</template>

<script>
export default {
    name: 'canvas-base',
    data() {
        return {
            pos: { x: 0, y: 0 },
        }
    },
    computed: {
        canvas() {
            return this.$refs.canvas
        },
    },
    methods: {
        onMousemove(e) {
            const { left, top } = this.canvas.getBoundingClientRect()
            let { pageX, pageY } = e
            this.pos = {
                x: pageX - left,
                y: pageY - top,
            }
        },
    },
    mounted() {},
}
</script>

<style lang="less" scoped></style>
