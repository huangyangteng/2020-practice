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
            @mousedown="onMouseDown"
        ></canvas>
        <img
            @load="imgOnLoad"
            id="img"
            v-show="false"
            src="./images/2.jpeg"
            alt=""
            srcset=""
        />
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
import { DragImg } from './drag/DragImg'
export default {
    name: 'animate-image',
    data() {
        return {
            /** @type {HTMLCanvasElement} */
            canvas: null,
            /** @type {CanvasRenderingContext2D} */
            ctx: null,
            W: 0,
            H: 0,
            list: [
                {
                    id: 0,
                    x: 100,
                    y: 100,
                    w: 200,
                    h: 200,
                    rotate: 0,
                    selected: true,
                },
            ],
            element: null,
        }
    },
    methods: {
        imgOnLoad() {
            console.log('img on load')
            let info = this.list[0]
            info.dom = document.getElementById('img')
            let img = new DragImg(info)
            this.element = img
        },
        initCanvas() {
            this.canvas = document.getElementById('canvas')
            this.ctx = this.canvas.getContext('2d')
            this.W = this.canvas.width
            this.H = this.canvas.height
        },
        clear() {
            this.ctx.clearRect(0, 0, this.W, this.H)
        },
        draw() {
            this.clear()
            this.element.paint(this.ctx)
            requestAnimationFrame(this.draw)
        },
        run() {
            requestAnimationFrame(this.draw)
        },

        onMouseDown(e) {
            const startX = e.clientX
            const startY = e.clientY
            const { x, y } = this.element
            let { left, top } = this.canvas.getBoundingClientRect()
            let result = this.element.isInWhere(
                e.clientX - left,
                e.clientY - top
            )
            console.log('onMouseDown -> result', result)
            if (!result) return

            const move = (moveE) => {
                const curX = moveE.clientX
                const curY = moveE.clientY
                const disX = curX - startX
                const disY = curY - startY
                if (result == 'move') {
                    this.element.x = x + disX
                    this.element.y = y + disY
                    console.log(`x:${this.element.x} y:${this.element.y}`)
                }
            }
            const up = () => {
                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', up)
            }
            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', up)
        },
    },
    async mounted() {
        this.initCanvas()
    },
}
</script>

<style lang="less" scoped>
.canvas-content {
    background: #ccc;
    margin-top: 20px;
}
</style>
