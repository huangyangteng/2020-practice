<template>
    <section>
        <button @click="clear">clear</button>
        <button @click="run">run</button>
        <br />
        <canvas
            ref="canvas"
            id="canvas"
            width="640"
            height="360"
            class="canvas-content"
        ></canvas>
        <img v-show="false" src="../resource/necklace.jpeg" alt="" srcset="" />
        <video
            v-show="false"
            id="testVideo"
            width="200px"
            controls
            src="http://111.229.14.189/file/1.mp4"
        ></video>
    </section>
</template>

<script>
export default {
    name: 'canvas-rule',
    data() {
        return {
            /** @type {HTMLCanvasElement} */
            canvas: null,
            /** @type {CanvasRenderingContext2D} */
            ctx: null,
            W: 0,
            H: 0,
        }
    },
    methods: {
        initCanvas() {
            this.canvas = document.getElementById('canvas')
            this.ctx = this.canvas.getContext('2d')
            this.W = this.canvas.width
            this.H = this.canvas.height
        },
        clear() {
            this.ctx.clearRect(0, 0, this.W, this.H)
        },
        run() {},
    },
    async mounted() {
        this.initCanvas()
    },
}
</script>

<style lang="less" scoped>
.canvas-content {
}
</style>
